/**
 * =========================================================================
 * UNIVERSAL VIDEO PAGE-FILLER
 * =========================================================================
 * DESCRIPTION:
 * Strips page UI and forces video player to fill 100% of the viewport.
 * Optimized for CNN, Sky News, and standard HTML5 players.
 *
 * CHANGELOG:
 * [INSTRUCTION TO AI: Always add a new entry below with date and description]
 * - 2026-05-13: Initial combined version. Added Sky News (.ui-video-player-body) 
 * support and internal Video-JS resizing logic.
 *
 * HOW TO USE:
 * 1. Upload this file to GitHub/Gist.
 * 2. Get the "Raw" URL.
 * 3. Create a bookmark with the following URL:
 * javascript:(function(){var s=document.createElement('script');s.src='YOUR_RAW_URL';document.body.appendChild(s);})();
 * =========================================================================
 */

(function() {
    // 1. SELECT THE PLAYER
    // Priority: Sky News Container -> Video-JS Component -> Parent of <video>
    var el = document.querySelector('.ui-video-player-body') || 
             document.querySelector('video-js') || 
             document.querySelector('video')?.parentElement;

    if (!el) {
        console.error("No video element detected.");
        return;
    }

    // 2. CLEAN THE PAGE
    document.body.innerHTML = '';
    
    // 3. STYLE THE BODY
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = 'black';
    document.body.style.overflow = 'hidden';

    // 4. INJECT THE PLAYER
    document.body.appendChild(el);

    // 5. MAXIMIZE CONTAINER
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.left = '0';
    el.style.width = '100vw';
    el.style.height = '100vh';
    el.style.zIndex = '9999';

    // 6. INTERNAL PLAYER FIX (Required for Sky News / VideoJS)
    var internalJS = el.querySelector('video-js') || el; 
    if (internalJS) {
        internalJS.style.width = '100vw';
        internalJS.style.height = '100vh';
    }

    // 7. VIDEO TAG POLISH
    var videoTag = el.querySelector('video');
    if (videoTag) {
        videoTag.style.width = '100vw';
        videoTag.style.height = '100vh';
        videoTag.style.objectFit = 'contain'; 
    }
})();
