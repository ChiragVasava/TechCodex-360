# Debouncing and throttling

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 5325–5439](/research?document=interview&start=5325&end=5439). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Debouncing, Throttling and Memory

### Q3.51. What is debouncing?

Debouncing delays execution until a specified period has passed without another invocation.

Useful for search suggestions.

```javascript
function debounce(callback, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("Java");
search("JavaScript");
```

Only the last invocation runs if no newer invocation occurs within 500 milliseconds.

### Q3.52. What is throttling?

Throttling limits how frequently a function can execute.

Useful for scroll events.

```javascript
function throttle(callback, delay) {
    let lastExecution = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastExecution >= delay) {
            lastExecution = now;
            callback.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll event handled");
}, 200);

window.addEventListener("scroll", handleScroll);
```

### Q3.53. Difference between debouncing and throttling?

| Debouncing                     | Throttling                         |
| ------------------------------ | ---------------------------------- |
| Waits until activity stops     | Limits execution frequency         |
| Useful for search inputs       | Useful for scroll events           |
| Executes after a quiet period  | Executes at controlled intervals   |
| Reduces repeated final actions | Controls continuous event handling |

### Q3.54. How does JavaScript garbage collection work?

Garbage collection is automatic memory management. JavaScript engines identify objects that are no longer reachable and can reclaim their memory.

```javascript
let user = {
    name: "Chirag"
};

user = null;
```

If no other reachable reference points to the object, it becomes eligible for garbage collection.

### Q3.55. What is a memory leak?

A memory leak occurs when an application retains references to data that is no longer needed.

Common causes:

- Unremoved event listeners.
- Unmanaged timers.
- Unnecessary global variables.
- Retained DOM references.
- Growing caches without eviction.
- Closures retaining large objects unintentionally.

Example:

```javascript
function startTimer() {
    const timer = setInterval(() => {
        console.log("Running");
    }, 1000);

    return () => clearInterval(timer);
}

const stopTimer = startTimer();

// Later, when no longer needed:
stopTimer();
```

This provides an explicit cleanup function.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
