# File upload and document processing

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22326–22430](/research?document=interview&start=22326&end=22430). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Upload and document processing boundaries

**What is Multer?**

Multer is Express middleware used to handle `multipart/form-data`, especially file uploads.

Why is it needed?

When a user uploads a PDF, the browser sends the file as part of a multipart form request.

Multer processes that incoming file and makes its data available to the backend.

A simplified example:

```javascript
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage()
});

app.post(
    "/upload-resume",
    upload.single("resume"),
    (req, res) => {
        console.log(req.file?.originalname);

        res.json({
            message: "File received"
        });
    }
);
```

Here:

- `multer()` creates the upload middleware.
- `memoryStorage()` stores the uploaded file in memory.
- `single("resume")` accepts one file from the form field named `resume`.
- `req.file` contains information about the uploaded file.

Interview question: Why did you use memory storage?

"Memory storage allows the backend to process an uploaded file directly from its buffer without first writing it to disk. This is useful for temporary processing, such as extracting text from a PDF. However, file size limits and memory usage need to be controlled."

**What is `pdf-parse`?**

`pdf-parse` is a library that extracts text from PDF documents.

For example, suppose the PDF contains:

```text
Name: Rahul

Skills:
JavaScript
Node.js
Express
PostgreSQL
```

The parser extracts text that the application can pass to its ATS analysis logic.

Important limitation:

A text extractor is not the same as an OCR engine. A PDF containing only scanned images may not provide extractable text without an OCR process.

**Axios**

Axios is an HTTP client library used by JavaScript applications.

The technical analysis identifies a custom Axios instance at `lib/api.ts` with request and response interceptors for JWT handling. 

Example:

```javascript
const response = await axios.get(
    "/api/v1/drives"
);
```

What is an interceptor?

An interceptor allows the application to process requests or responses centrally.

For example, a request interceptor can attach a JWT to outgoing requests.

```javascript
api.interceptors.request.use(config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;
});
```

This is an illustrative example. The actual token storage and interceptor implementation should be checked in `lib/api.ts`.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
