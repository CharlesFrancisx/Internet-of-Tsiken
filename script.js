(function () {
  "use strict";

  // --- CONFIGURATION ---
  const CONFIG = {
    apkUrl:
      "https://github.com/[YourUsername]/[YourRepo]/releases/download/v1.0.0/internet-of-tsiken-v1.0.0.apk",
    version: "1.0.0",
    fileName: "Internet-Of-Tsiken-v1.0.0.apk",
    analyticsEndpoint: null, // Optional: Replace with your analytics endpoint
  };

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", function () {
    initializeMobileMenu();
    initializeDownloadButtons();
    initializeSmoothScroll();
  });

  /**
   * Sets up the mobile menu toggle functionality.
   */
  function initializeMobileMenu() {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }

  /**
   * Attaches click listeners to all download buttons on the page.
   */
  function initializeDownloadButtons() {
    // The new design might have multiple download buttons.
    // We select them by a shared class or attribute if needed, but for now, let's find all relevant buttons.
    const downloadButtons = document.querySelectorAll(
      "#downloadBtn, #download .btn-accent",
    );

    if (downloadButtons.length === 0) {
      console.warn("No download buttons found on the page.");
      return;
    }

    downloadButtons.forEach((button) => {
      button.addEventListener("click", handleDownloadClick);
    });
  }

  /**
   * Handles the download button click event.
   * @param {Event} event - The click event object.
   */
  function handleDownloadClick(event) {
    event.preventDefault();
    const button = event.currentTarget;

    trackDownloadEvent();
    showDownloadFeedback(button);

    setTimeout(() => {
      initiateDownload();
      resetButton(button); // Reset button after download starts
    }, 1500); // A bit of delay for the animation
  }

  /**
   * Initiates the file download.
   */
  function initiateDownload() {
    const link = document.createElement("a");
    link.href = CONFIG.apkUrl;
    link.setAttribute("download", CONFIG.fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Provides visual feedback on the button that was clicked.
   * @param {HTMLElement} button - The button element that was clicked.
   */
  function showDownloadFeedback(button) {
    button.disabled = true;
    // Store original content if not already stored
    if (!button.dataset.originalContent) {
      button.dataset.originalContent = button.innerHTML;
    }
    button.innerHTML = `
            <span class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Starting...
            </span>`;
  }

  /**
   * Resets the button to its original state.
   * @param {HTMLElement} button - The button element to reset.
   */
  function resetButton(button) {
    if (button.dataset.originalContent) {
      button.innerHTML = button.dataset.originalContent;
    }
    button.disabled = false;
  }

  /**
   * Implements smooth scrolling for anchor links.
   */
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        // Ensure it's a valid ID selector
        if (href.length > 1 && href.startsWith("#")) {
          try {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          } catch (error) {
            // In case of an invalid selector
            console.error("Could not scroll to element:", error);
          }
        }
      });
    });
  }

  /**
   * Tracks the download event for analytics purposes.
   */
  function trackDownloadEvent() {
    const eventData = {
      event: "apk_download",
      version: CONFIG.version,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };

    console.log("Analytics: Download Event Tracked", eventData);

    if (CONFIG.analyticsEndpoint) {
      navigator.sendBeacon(CONFIG.analyticsEndpoint, JSON.stringify(eventData));
    }
  }

  // --- Expose configuration for external modification (optional) ---
  window.IoTAppConfig = {
    setApkUrl: function (url) {
      CONFIG.apkUrl = url;
    },
    setAnalyticsEndpoint: function (endpoint) {
      CONFIG.analyticsEndpoint = endpoint;
    },
  };
})();
