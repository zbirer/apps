/**
 * =========================================================================
 * UNIVERSAL VIDEO PAGE-FILLER
 * =========================================================================
 * DESCRIPTION:
 * Strips page UI and forces video player to fill 100% of the viewport.
 * Optimized for CNN, Sky News, and standard HTML5 players.
 *
 * [AI INSTRUCTION: Always update the VERSION and MODIFIED_DATE constants 
 * below and add a record to the CHANGELOG on every modification.]
 *
 * VERSION: 1.1.0
 * MODIFIED_DATE: 2026-05-13 12:05 UTC
 *
 * CHANGELOG:
 * - 2026-05-13: Added console debug logging and automated version tracking.
 * - 2026-05-13: Initial combined version for CNN and Sky News.
 * =========================================================================
 */

(function() {
    const VERSION = "1.1.0";
    const MOD_DATE = "2026-05-13 12:05 UTC";

    console.log(`%c Fullscreen Script v${VERSION} (%c${MOD_DATE}%c) loading...`, 
                "color: cyan; font-weight: bold;", "color: yellow;", "color: cyan;");

    // 1. SELECT THE PLAYER
    // Attempting to find the Sky News wrapper, then VideoJS, then generic parent.
    const selectors = {
        skyNews: document.querySelector('.ui-video-player-body'),
        videoJS: document.querySelector('video-js'),
        generic: document.querySelector('video')?.parentElement
    };

    console.log("Debug: Found elements:", selectors);

    const el = selectors.skyNews || selectors.videoJS || selectors.generic;

    if (!el) {
        console.error("CRITICAL: No video element detected. Check if the page structure changed.");
        alert("Fullscreen Script: No player found. Check console (F12) for details.");
        return;
    }

    try {
        // 2. CLEAN THE PAGE
        document.body.innerHTML = '';
        console.log("Debug: Page cleared.");
        
        // 3. STYLE THE BODY
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = 'black';
        document.body.style.overflow = 'hidden';

        // 4. INJECT THE PLAYER
        document.body.appendChild(el);
        console.log("Debug: Player injected into root body.");

        // 5. MAXIMIZE CONTAINER
        el.style.position = 'fixed';
        el.style.top = '0';
        el.style.left = '0';
        el.style.width = '100vw';
        el.style.height = '100vh';
        el.style.zIndex = '9999';

        // 6. INTERNAL PLAYER FIX (Required for Sky News / VideoJS)
        const internalJS = el.querySelector('video-js') || (el.tagName === 'VIDEO-JS' ? el : null); 
        if (internalJS) {
            console.log("Debug: Resizing internal VideoJS engine.");
            internalJS.style.width = '100vw';
            internalJS.style.height = '100vh';
        }

        // 7. VIDEO TAG POLISH
        const videoTag = el.querySelector('video');
        if (videoTag) {
            videoTag.style.width = '100vw';
            videoTag.style.height = '100vh';
            videoTag.style.objectFit = 'contain';
            console.log("Debug: Final video tag dimensions applied.");
        }

        console.log("%c Success: Page fill completed.", "color: green; font-weight: bold;");

    } catch (err) {
        console.error("Execution Error:", err);
    }
})();
