(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-label', 'Menü öffnen');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      nav.dataset.open = String(open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  }

  const form = document.querySelector('[data-contact-form]');
  const interest = document.getElementById('interest');
  if (form && interest) {
    const interestGroups = [...form.querySelectorAll('[data-interest-group]')];
    const sourceGroups = [...form.querySelectorAll('[data-source-group]')];
    const syncGroup = (group, visible) => {
      group.hidden = !visible;
      group.querySelectorAll('input, select, textarea').forEach((input) => {
        input.disabled = !visible;
      });
    };
    const updateGroups = () => {
      form.dataset.enhanced = 'true';
      interestGroups.forEach((group) => syncGroup(group, group.dataset.interestGroup === interest.value));
      const sources = new Set([...form.querySelectorAll('input[name="Quelle[]"]:checked')].map((input) => input.value));
      sourceGroups.forEach((group) => syncGroup(group, sources.has(group.dataset.sourceGroup)));
    };
    interest.addEventListener('change', updateGroups);
    form.querySelectorAll('input[name="Quelle[]"]').forEach((input) => input.addEventListener('change', updateGroups));
    updateGroups();

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const feedback = form.querySelector('[data-form-feedback]');
      const submit = form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;
      if (feedback) feedback.textContent = 'Die Nachricht wird gesendet …';
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
          let detail = '';
          try {
            const payload = await response.json();
            detail = (payload.errors || []).map((item) => item.message).join(' ');
          } catch (_) {}
          throw new Error(detail || 'Die Nachricht konnte nicht gesendet werden.');
        }
        form.reset();
        updateGroups();
        if (feedback) feedback.textContent = 'Danke für eure Nachricht. Ich melde mich in der Regel innerhalb von 48 Stunden.';
      } catch (error) {
        if (feedback) feedback.textContent = `${error.message || 'Das Senden hat nicht geklappt.'} Schreibt mir alternativ an kontakt@echteblicke.de.`;
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  }
})();
