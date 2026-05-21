(() => {
  const block = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  document.addEventListener("contextmenu", block, { capture: true });
  document.addEventListener("dragstart", block, { capture: true });

  document.addEventListener(
    "keydown",
    (event) => {
      const key = String(event.key || "").toLowerCase();
      const saveShortcut = (event.ctrlKey || event.metaKey) && key === "s";
      const devToolsShortcut =
        key === "f12" ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        ((event.ctrlKey || event.metaKey) && key === "u");

      if (saveShortcut || devToolsShortcut) block(event);
    },
    { capture: true }
  );
})();
