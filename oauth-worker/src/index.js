const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };

function response(body, status = 200, headers = {}) {
  return new Response(body, { status, headers: { ...JSON_HEADERS, ...headers } });
}

function randomState() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return [...bytes].map((value) => value.toString(16).padStart(2, "0")).join("");
}

function cookieValue(header, name) {
  const prefix = `${name}=`;
  for (const part of (header || "").split(";")) {
    const value = part.trim();
    if (value.startsWith(prefix)) return value.slice(prefix.length);
  }
  return "";
}

function popupMessage(env, status, payload, clearCookie = false) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const target = JSON.stringify(env.SITE_ORIGIN);
  const script = `const message=${JSON.stringify(message)};if(window.opener){window.opener.postMessage(message,${target});}window.close();`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CMS authorization</title></head><body><p>GitHub authorization ${status === "success" ? "complete" : "failed"}. You may close this window.</p><script>${script}</script></body></html>`;
  const headers = {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
    "content-security-policy": "default-src 'none'; script-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'",
    "referrer-policy": "no-referrer",
    "x-content-type-options": "nosniff",
  };
  if (clearCookie) headers["set-cookie"] = "decap_oauth_state=; Max-Age=0; Path=/; Secure; HttpOnly; SameSite=Lax";
  return new Response(html, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET") return response({ error: "Method not allowed" }, 405, { allow: "GET" });
    const url = new URL(request.url);
    if (!env.SITE_ORIGIN || !env.CALLBACK_URL) return response({ error: "Worker configuration is incomplete" }, 503);

    if (url.pathname === "/auth") {
      const provider = url.searchParams.get("provider");
      const siteId = url.searchParams.get("site_id");
      if (provider !== "github" || siteId !== "echteblicke.de") return response({ error: "Unsupported provider or site" }, 400);
      if (!env.GITHUB_CLIENT_ID) return response({ error: "GitHub OAuth client ID is not configured" }, 503);
      const state = randomState();
      const authorize = new URL("https://github.com/login/oauth/authorize");
      authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authorize.searchParams.set("redirect_uri", env.CALLBACK_URL);
      authorize.searchParams.set("scope", "repo,user");
      authorize.searchParams.set("state", state);
      return new Response(null, {
        status: 302,
        headers: {
          location: authorize.toString(),
          "cache-control": "no-store",
          "referrer-policy": "no-referrer",
          "set-cookie": `decap_oauth_state=${state}; Max-Age=600; Path=/; Secure; HttpOnly; SameSite=Lax`,
        },
      });
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code") || "";
      const returnedState = url.searchParams.get("state") || "";
      const savedState = cookieValue(request.headers.get("cookie"), "decap_oauth_state");
      if (url.searchParams.has("error")) return popupMessage(env, "error", { message: "GitHub authorization was declined." }, true);
      if (!code || !returnedState || !savedState || returnedState !== savedState) {
        return popupMessage(env, "error", { message: "The authorization state was missing or did not match. Please try again." }, true);
      }
      if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
        return popupMessage(env, "error", { message: "The GitHub OAuth client is not configured." }, true);
      }
      try {
        const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
          method: "POST",
          headers: { accept: "application/json", "content-type": "application/json" },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: env.CALLBACK_URL,
            state: returnedState,
          }),
        });
        if (!tokenResponse.ok) return popupMessage(env, "error", { message: "GitHub could not complete authorization. Please try again." }, true);
        const payload = await tokenResponse.json();
        if (typeof payload.access_token !== "string" || payload.access_token.length < 20 || payload.error) {
          return popupMessage(env, "error", { message: "GitHub did not return a valid authorization token." }, true);
        }
        return popupMessage(env, "success", { token: payload.access_token, provider: "github" }, true);
      } catch (_error) {
        return popupMessage(env, "error", { message: "The authorization service could not reach GitHub. Please try again." }, true);
      }
    }

    return response({ error: "Not found" }, 404);
  },
};
