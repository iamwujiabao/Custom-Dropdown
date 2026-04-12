(function () {
  const trigger = document.getElementById('trigger');
  const list = document.getElementById('list');
  const triggerLabel = document.getElementById('triggerLabel');
  const items = document.querySelectorAll('.dd-item');
  let open = false;

  function openDD() {
    open = true;
    trigger.classList.add('open');
    list.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeDD() {
    open = false;
    trigger.classList.remove('open');
    list.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', () => (open ? closeDD() : openDD()));

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open ? closeDD() : openDD();
    }
    if (e.key === 'Escape') closeDD();
  });

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const label = item.querySelector('span:first-child').textContent;
      items.forEach((i) => i.classList.remove('selected'));
      item.classList.add('selected');
      triggerLabel.textContent = label;
      closeDD();
    });
  });

  document.addEventListener('click', (e) => {
    if (open && !document.getElementById('dropdown').contains(e.target)) {
      closeDD();
    }
  });
})();
