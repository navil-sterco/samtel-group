/** Next.js adapter: execute the supplied scripts in their original dependency order. */
(function () {
  "use strict";
  if (window.__samtelScriptsStarted) return;
  window.__samtelScriptsStarted = true;

  const scripts = [
    "/js/jquery.min.js",
    "/js/bootstrap.bundle.min.js",
    "/js/aos.js",
    "/js/smoothscroll.min.js",
    "/js/gsap.min.js",
    "/js/ScrollTrigger.min.js",
    "/js/ScrollToPlugin.min.js",
    "/js/swiper-bundle.min.js",
    "/js/common.js",
    "/js/home-group.js",
    "/js/inner.js",
  ];
  let pageListeners = [];
  let pageContext;
  const readyCallbacks = [];
  const loadCallbacks = [];
  const documentAdd = document.addEventListener;
  const windowAdd = window.addEventListener;

  // The legacy scripts register DOMContentLoaded after React hydration. Capture
  // only those callbacks, then run them once; do not replay framework events.
  document.addEventListener = function (type, listener, options) {
    if (type === "DOMContentLoaded") {
      readyCallbacks.push(listener);
      return;
    }
    return documentAdd.call(this, type, listener, options);
  };
  window.addEventListener = function (type, listener, options) {
    if (type === "load") {
      loadCallbacks.push(listener);
      return;
    }
    return windowAdd.call(this, type, listener, options);
  };

  function restoreListeners() {
    document.addEventListener = documentAdd;
    window.addEventListener = windowAdd;
  }
  function invoke(listener, target, type) {
    const event = new Event(type);
    if (typeof listener === "function") listener.call(target, event);
    else if (listener && listener.handleEvent) listener.handleEvent(event);
  }
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = function () { reject(new Error("Unable to load " + src)); };
      document.body.appendChild(script);
    });
  }

  (async function () {
    try {
      for (const src of scripts) await loadScript(src);
      restoreListeners();
      window.refreshSamtelPage = function () {
        for (const entry of pageListeners) entry.target.removeEventListener(entry.type, entry.listener, entry.options);
        pageListeners = [];
        if (pageContext) pageContext.revert();
        document.querySelectorAll(".swiper, .swiper-container").forEach(function (element) {
          if (element.swiper) element.swiper.destroy(true, true);
        });
        const addDocumentListener = document.addEventListener;
        const addWindowListener = window.addEventListener;
        function trackedAdd(type, listener, options) {
          pageListeners.push({ target: this, type: type, listener: listener, options: options });
          return (this === document ? addDocumentListener : addWindowListener).call(this, type, listener, options);
        }
        document.addEventListener = trackedAdd;
        window.addEventListener = trackedAdd;
        try {
          pageContext = window.gsap.context(function () {
            for (const listener of readyCallbacks) invoke(listener, document, "DOMContentLoaded");
            for (const listener of loadCallbacks) invoke(listener, window, "load");
          });
        } finally {
          document.addEventListener = addDocumentListener;
          window.addEventListener = addWindowListener;
        }
        if (window.AOS) {
          if (!window.__samtelAosInitialized) {
            window.AOS.init({ duration: 1000, once: true });
            window.__samtelAosInitialized = true;
          } else window.AOS.refreshHard();
        }
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        window.__samtelPath = window.location.pathname;
      };
      window.refreshSamtelPage();
      window.__samtelReady = true;
    } catch (error) {
      restoreListeners();
      console.error("Samtel scripts could not initialize:", error);
    }
  })();
})();
