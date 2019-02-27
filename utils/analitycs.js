export function trackLike (self, slug) {
  try {
    if (self.$ga) {
      self.$ga.event({
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
    if (self.$ga) {
      self.$ga.event({
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

export function trackJSPerf (self) {
  // Feature detects Navigation Timing API support.
  if (window.performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    var timeSincePageLoad = Math.round(performance.now())
    // Sends the timing hit to Google Analytics.
    try {
      if (self.$ga) {
        self.$ga.time({
          timingCategory: 'JS Dependencies',
          timingVar: 'load',
          timingValue: timeSincePageLoad
        })
      }
    } catch (error) {}
  }
}
