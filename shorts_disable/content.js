function removeShorts() {
    const shortsSelectors = [
      "ytd-rich-section-renderer",
      "ytd-reel-shelf-renderer",
      "ytd-reel-item-renderer",
      "#endpoint[title='Shorts']"
    ];
  
    shortsSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }
  
  const observer = new MutationObserver(removeShorts);
  observer.observe(document.body, { childList: true, subtree: true });
  removeShorts();
  