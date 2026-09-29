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

  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const triggers = [...document.querySelectorAll('[data-lightbox-open]')];
    const image = lightbox.querySelector('[data-lightbox-image]');
    const caption = lightbox.querySelector('[data-lightbox-caption]');
    const counter = lightbox.querySelector('[data-lightbox-count]');
    const closeButton = lightbox.querySelector('[data-lightbox-close]');
    const previousButton = lightbox.querySelector('[data-lightbox-previous]');
    const nextButton = lightbox.querySelector('[data-lightbox-next]');
    let activeIndex = 0;
    let opener = null;

    const showImage = () => {
      const trigger = triggers[activeIndex];
      if (!trigger || !image) return;
      const alt = trigger.dataset.lightboxAlt || trigger.querySelector('img')?.alt || '';
      image.src = trigger.dataset.lightboxSrc || trigger.href;
      image.alt = alt;
      if (caption) caption.textContent = alt;
      if (counter) counter.textContent = `${activeIndex + 1} / ${triggers.length}`;
    };

    const move = (step) => {
      if (triggers.length < 2) return;
      activeIndex = (activeIndex + step + triggers.length) % triggers.length;
      showImage();
    };

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        opener = trigger;
        activeIndex = index;
        showImage();
        lightbox.showModal();
        closeButton?.focus();
      });
    });

    previousButton?.addEventListener('click', () => move(-1));
    nextButton?.addEventListener('click', () => move(1));
    closeButton?.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(1);
      }
    });
    lightbox.addEventListener('close', () => {
      image?.removeAttribute('src');
      if (image) image.alt = '';
      if (caption) caption.textContent = '';
      if (counter) counter.textContent = '';
      if (opener?.isConnected) opener.focus();
    });
  }
})();
