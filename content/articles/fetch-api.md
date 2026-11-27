# Fetch API

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 5226–5324](/research?document=interview&start=5226&end=5324). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Fetch API and HTTP Communication

### Q3.48. What is the Fetch API?

Fetch is an API for making HTTP requests.

```javascript
async function getProducts() {
    const response = await fetch(
        "https://api.example.com/products"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    return products;
}
```

### Q3.49. How do you send a POST request?

```javascript
async function createUser(userData) {
    const response = await fetch(
        "https://api.example.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
}

createUser({
    name: "Chirag",
    email: "chirag@example.com"
});
```

Important properties:

- `method`: HTTP method.
- `headers`: request metadata.
- `body`: request payload.
- `JSON.stringify()`: converts JavaScript objects into JSON text.
- `response.json()`: reads and parses a JSON response body.

### Q3.50. What is AbortController?

`AbortController` allows you to cancel certain asynchronous operations, including Fetch requests.

```javascript
const controller = new AbortController();

async function loadData() {
    try {
        const response = await fetch(
            "https://api.example.com/users",
            {
                signal: controller.signal
            }
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request cancelled");
        } else {
            console.error(error);
        }
    }
}

loadData();

// Cancel the request:
controller.abort();
```

**Real-world example:** When a user types into a search field, cancel the previous request before sending a new one to reduce unnecessary work and avoid stale results.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
