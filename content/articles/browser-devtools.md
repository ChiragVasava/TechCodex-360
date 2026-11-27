# Browser DevTools

## Inspect the live document and shadow roots

The Elements panel displays the live [DOM](/knowledge/dom), including changes made after the original HTML was parsed. A [shadow root](/knowledge/shadow-dom) belongs to that page too. DevTools displays a tree; it does not create a separate Shadow DOM version of the site. Browser settings may expose user-agent shadow trees used by native controls. Exact UI labels and native internals vary across browser versions. Compare [DOM selection results](/knowledge/dom-selection) with the selected root when a query unexpectedly returns nothing.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 27814–27834](/research?document=interview&start=27814&end=27834). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Browser DevTools — A Practical Investigation

For a failed form submission, inspect layers in order:

1. **Elements and computed styles:** Check the actual DOM, disabled controls and layout rules rather than assuming the JSX matches what is displayed.
2. **Console:** Read the first relevant exception and its stack; later failures may be consequences.
3. **Network:** Inspect method, URL, request payload, status, timing, response and preflight behavior. Separate a rejected server response from a request the browser never sent.
4. **Sources:** Pause at the event handler or exception, inspect values and step through the failing branch.
5. **Application/storage:** Inspect cookies and stored values, including expiration and scope. Do not publish tokens in screenshots or logs.
6. **Performance and memory:** Record a repeatable slow interaction, locate expensive work and compare after the fix. A single slow observation is not enough to establish a bottleneck.

**Interview exercise:** A request succeeds in Postman but fails in the UI. Compare the exact requests, credentials and origins, inspect the preflight if present, and correlate with server logs. Postman's success does not prove browser CORS configuration is correct. Browser storage and CORS mechanics are in [Web Foundations](/research?document=interview&start=64); authorization belongs in [Security](/research?document=interview&start=22528).

---



## Browser and API investigation exercises

---

> Imported lesson from [Browser rendering, Web Components and storage, lines 113–130](/research?document=browser-notes&start=113&end=130). Needs review: examples and claims retain their source context; reading does not certify proficiency.

This plain-text research passage is preserved in the [browser research collection](/study). Read the connected canonical articles for explanations with corrections; the source export is not independently verified.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
