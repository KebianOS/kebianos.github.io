const dropdown = document.querySelector(".nav-dropdown");

if (dropdown) {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");
  let closeTimer;
  let openFrame;
  let pinnedOpen = false;

  function openMenu() {
    window.clearTimeout(closeTimer);
    window.cancelAnimationFrame(openFrame);
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    openFrame = window.requestAnimationFrame(() => {
      menu.classList.add("is-open");
    });
  }

  function closeMenu() {
    window.clearTimeout(closeTimer);
    window.cancelAnimationFrame(openFrame);
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    closeTimer = window.setTimeout(() => {
      if (!menu.classList.contains("is-open")) {
        menu.hidden = true;
      }
    }, 180);
  }

  dropdown.addEventListener("mouseenter", openMenu);
  dropdown.addEventListener("mouseleave", () => {
    if (!pinnedOpen) closeMenu();
  });

  toggle.addEventListener("click", () => {
    pinnedOpen = !pinnedOpen;
    if (pinnedOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) {
      pinnedOpen = false;
      closeMenu();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!dropdown.contains(event.target)) {
      pinnedOpen = false;
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      pinnedOpen = false;
      closeMenu();
      toggle.focus();
    }
  });
}