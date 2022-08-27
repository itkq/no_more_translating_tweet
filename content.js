// based on https://github.com/ryanckulp/twitter_ad_blocker/blob/8bea602ada44f4cc42e1ce05f00c0652f47590a3/content.js

function hideTranslateTweet() {
  Array.from(document.querySelectorAll('div[data-testid=tweetText]')).filter((e) => {
    const c = e.parentNode.querySelector('div:nth-child(2)');
    if (c && c.innerText === 'Translate Tweet') {
      c.remove();
    }
  });
}

// hide ads on page load
document.addEventListener('load', () => hideTranslateTweet());

// oftentimes, tweets render after onload. LCP should catch them.
new PerformanceObserver((_) => {
  hideTranslateTweet();
}).observe({type: 'largest-contentful-paint', buffered: true});

// re-check as user scrolls
document.addEventListener('scroll', () => hideTranslateTweet());
