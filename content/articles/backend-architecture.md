# Backend architecture

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20632–20683](/research?document=interview&start=20632&end=20683). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Routing, Controllers and Services

**Q11.34. What is routing in Express?**

Answer: Routing defines how the server responds to a particular HTTP method and URL. For example, `GET /students` can retrieve students, while `POST /students` can create one.

**Q11.35. What are route parameters?**

Answer: Route parameters represent dynamic values in a URL.

```javascript
app.get("/students/:id", (req, res) => {
  res.json({ studentId: req.params.id });
});
```

A request to `/students/101` returns the ID `"101"`. Route parameters are strings by default, so validate and convert them when necessary.

**Q11.36. What are query parameters?**

Answer: Query parameters are values passed after `?` in a URL. They are commonly used for search, filtering, sorting, and pagination.

```http
GET /students?course=CSE&page=1&limit=10
```

**Q11.37. Difference between **`req.params`**, **`req.query`**, and **`req.body`**?**

| Property     | Example         | Purpose                  |
| ------------ | --------------- | ------------------------ |
| `req.params` | `/students/101` | Identify a resource      |
| `req.query`  | `?page=2`       | Filtering and options    |
| `req.body`   | JSON payload    | Data sent with a request |

**Q11.38. What is an Express Router?**

Answer: Express Router allows routes to be organized into separate modules. For example, student routes can live in `studentRoutes.js` and be mounted using `app.use("/api/students", studentRoutes)`.

**Q11.39. What are controllers?**

Answer: Controllers handle HTTP request and response logic. They read request parameters, call the required service, and return an appropriate status code and response.

**Q11.40. What are services?**

Answer: Services contain business logic. A student service might check whether a student exists, determine eligibility, check application deadlines, or create a student record.

**Q11.41. Why separate routes, controllers, and services?**

Answer: Separation of concerns improves maintainability and testing. Routes map endpoints, controllers handle HTTP interactions, services implement business rules, and repositories/data-access layers communicate with data sources. Avoid placing all business logic inside route handlers.

---

> Imported lesson from [Full-stack interview handbook, lines 20754–20787](/research?document=interview&start=20754&end=20787). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Backend Architecture and Folder Structure

**Q11.51. What is layered architecture?**

Answer: Layered architecture separates an application into logical responsibilities.

HTTP Request

Routes

Middleware

Controller — HTTP handling

Service — business logic

Repository — data access

Database

**Q11.52. What is MVC architecture?**

Answer: MVC stands for Model-View-Controller. The Model represents data and domain concepts, the View represents the user interface, and the Controller handles input and coordinates operations. In API backends, controllers commonly return JSON instead of rendering views.

**Q11.53. What is a modular monolith?**

Answer: A modular monolith is deployed as one application but divided into well-separated business modules. For example, authentication, student, company, recruitment, application, and notification modules can live in one backend. This gives internal structure without requiring distributed deployment.

**Q11.54. What are microservices?**

Answer: Microservices divide a system into independently deployable services. They can support independent scaling and team autonomy, but introduce network communication, distributed failures, data consistency challenges, and operational complexity. Having multiple folders or modules does not automatically make an application microservices-based.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
