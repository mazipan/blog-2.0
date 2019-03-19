export function trackLike (self, slug) {
  try {
    if (window.ga) {
      window.ga({
        hitType: 'event',
        eventCategory: 'Like Post',
        eventAction: 'like',
        eventLabel: 'Like',
        eventValue: slug
      })
    }
  } catch (error) {}
}

export function trackShare (self, slug, network) {
  try {
    if (window.ga) {
      window.ga({
        hitType: 'event',
        eventCategory: 'Share Post',
        eventAction: 'share',
        eventLabel: network,
        eventValue: slug
      })
    }
  } catch (error) {}
}

export function trackUniversalShare (self, slug) {
  trackShare(self, slug, 'Universal')
}

export function trackJSPerf () {
  // Feature detects Navigation Timing API support.
  if (window.performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    var timeSincePageLoad = Math.round(performance.now())
    // Sends the timing hit to Google Analytics.
    try {
      if (window.ga) {
        window.ga('send', {
          hitType: 'timing',
          timingCategory: 'JS Dependencies',
          timingVar: 'load',
          timingValue: timeSincePageLoad
        })
      }
    } catch (error) {}
  }
}
