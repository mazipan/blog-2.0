export function trackEvent ({
  eventCategory = '',
  eventAction = '',
  eventLabel = '',
  eventValue = ''
}) {
  try {
    if (window.ga) {
      window.ga({
        hitType: 'event',
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        eventValue: eventValue
      })
    }
  } catch (error) { }
}

export function trackLike (slug) {
  trackEvent({
    eventCategory: 'Like Post',
    eventAction: 'like',
    eventLabel: 'Like',
    eventValue: slug
  })
}

export function trackShare (slug, network) {
  trackEvent({
    eventCategory: 'Share Post',
    eventAction: 'share',
    eventLabel: network,
    eventValue: slug
  })
}

export function trackUniversalShare (slug) {
  trackShare(slug, 'Universal')
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
    } catch (error) { }
  }
}
