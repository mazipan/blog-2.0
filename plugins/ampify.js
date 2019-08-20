const ampScript = `<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>`
const ampBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'

module.exports = (html) => {
  // Add ⚡ to html tag
  html = html.replace(/<html/gi, '<html ⚡')

  // Combine css into single tag
  let styleConcat = ''
  html = html.replace(/<style[^>]*data-vue-ssr[^>]*>(.*?)?<\/style>/gi, (match, sub) => {
    styleConcat += sub
    return ''
  })
  html = html.replace('</head>', `<style amp-custom>${styleConcat}</style></head>`)

  // Remove all !important in CSS
  html = html.replace(/!important/gi, '')

  // Remove preload and prefetch tags
  html = html.replace(/<link[^>]*rel="(?:preload|prefetch)?"[^>]*>/gi, '')

  // Remove amphtml tag
  html = html.replace(/<link[^>]*rel="(?:amphtml)?"[^>]*>/gi, '')

  // Replace img tags with amp-img
  html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
    return `<amp-img ${sub} layout=intrinsic></amp-img>`
  })

  // Remove data attributes from tags
  html = html.replace(/\s*data-(?:[^=>]*="[^"]*"|[^=>\s]*)/gi, '')

  // Remove JS script tags except for ld+json
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
    return (/application\/ld\+json/gi.test(match)) ? match : ''
  })

  // Add AMP script before </head>
  html = html.replace('</head>', ampScript + ampBoilerplate + '</head>')

  // Add AMP analytics
  html = html.replace('</body>',
    `
    <amp-auto-ads type="adsense" data-ad-client="${process.env.ADS_CLIENT}"></amp-auto-ads>
    <amp-analytics type='googleanalytics'>
    <script type='application/json'>
      {
        "vars": {
          "account": "${process.env.GA_KEY}"
        },
        "triggers": {
          "trackPageview": {
            "on": "visible",
            "request": "pageview"
          }
        }
      }
    </script>
  </amp-analytics>
</body>`)

  return html
}
