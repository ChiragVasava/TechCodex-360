# Browser DevTools

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

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
