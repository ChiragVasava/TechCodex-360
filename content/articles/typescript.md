# TypeScript

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 6479–7011](/research?document=interview&start=6479&end=7011). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## TypeScript Fundamentals

### Q4.1. What is TypeScript?

TypeScript is a programming language built on JavaScript. It adds a static type system and compiles into JavaScript.

It helps detect many errors during development rather than waiting for runtime.

JavaScript:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, "20")); // "1020"
```

TypeScript:

```typescript
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
```

The TypeScript compiler reports a type error if you try to pass a string where a number is required.

### Q4.2. Difference between JavaScript and TypeScript?

| JavaScript                                            | TypeScript                                    |
| ----------------------------------------------------- | --------------------------------------------- |
| Dynamically typed                                     | Static type system                            |
| `.js`                                                 | `.ts`                                         |
| No built-in static type checking                      | Compile-time type checking                    |
| Runs directly in supported runtimes                   | Usually compiled/transformed to JavaScript    |
| Types checked mainly at runtime through program logic | Many type errors can be caught before runtime |

Important: TypeScript types are generally erased during compilation. They do not automatically validate incoming API data at runtime.

### Q4.3. How do you install and compile TypeScript?

```bash
npm init -y

npm install -D typescript

npx tsc --init

npx tsc
```

A typical configuration:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### Q4.4. What are TypeScript's basic types?

```typescript
let username: string = "Chirag";
let age: number = 20;
let isStudent: boolean = true;

let marks: number[] = [80, 90, 85];

let user: {
    name: string;
    age: number;
} = {
    name: "Chirag",
    age: 20
};

let id: string | number = 101;

let anything: any = "Hello";
let unknownValue: unknown = "Hello";

function logMessage(): void {
    console.log("Hello");
}

function throwError(): never {
    throw new Error("Something failed");
}
```

Important:

- `any`: disables meaningful type checking for that value.
- `unknown`: requires type checking before use.
- `void`: commonly describes a function with no meaningful return value.
- `never`: represents values that do not occur, such as a function that never completes normally.

### Q4.5. Difference between any and unknown?

`any` permits almost any operation without checking.

```typescript
let a: any = "Hello";

console.log(a.toUpperCase());
console.log(a.someMethod());
```

`unknown` requires type narrowing first.

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

Prefer `unknown` when handling untrusted or uncertain data.

### Q4.6. What are TypeScript interfaces?

An interface defines the expected structure of an object.

```typescript
interface Student {
    id: number;
    name: string;
    age: number;
    email?: string;
}

const student: Student = {
    id: 1,
    name: "Chirag",
    age: 20
};
```

`email?` means the property is optional.

Interfaces are useful for:

- API request and response objects.
- React component props.
- Service contracts.
- Domain entities.

### Q4.7. Difference between type and interface?

Interface:

```typescript
interface User {
    name: string;
    age: number;
}
```

Type alias:

```typescript
type User = {
    name: string;
    age: number;
};
```

A type alias can also represent unions and intersections:

```typescript
type ID = string | number;

type Admin = {
    permissions: string[];
};

type Employee = {
    name: string;
};

type AdminEmployee = Employee & Admin;
```

Interfaces support declaration merging, while type aliases do not.

**Interview answer:** Both can describe object structures. Choose based on whether you need interface extension/declaration merging or type features such as unions, intersections and mapped types.

### Q4.8. What are union and intersection types?

Union (`|`): a value can be one of multiple types.

```typescript
type ID = string | number;

let userId: ID = 101;
userId = "USR101";
```

Intersection (`&`): a value must satisfy multiple types.

```typescript
type User = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeeUser = User & Employee;

const employee: EmployeeUser = {
    name: "Chirag",
    employeeId: 101
};
```

### Q4.9. What are generics?

Important advanced TypeScript topic

Generics allow reusable code to work with different data types while preserving type information.

Without generics:

```typescript
function getValue(value: any): any {
    return value;
}
```

With generics:

```typescript
function getValue<T>(value: T): T {
    return value;
}

const name = getValue<string>("Chirag");
const age = getValue<number>(20);
```

Practical API response example:

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}

interface User {
    id: number;
    name: string;
}

const response: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "Chirag"
    },
    message: "User fetched"
};
```

This is useful when creating reusable API response structures.

### Q4.10. What are type assertions?

Type assertions tell the TypeScript compiler to treat a value as a particular type.

```typescript
const input = document.querySelector("#username");

const usernameInput = input as HTMLInputElement;

console.log(usernameInput.value);
```

A type assertion does not perform runtime conversion or validation.

Safer approach:

```typescript
const input = document.querySelector("#username");

if (input instanceof HTMLInputElement) {
    console.log(input.value);
}
```

### Q4.11. What is type narrowing?

Type narrowing reduces a broad type to a more specific type through checks.

```typescript
function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(0));
    }
}
```

Common narrowing techniques:

- `typeof`
- `instanceof`
- `in`
- Equality checks.
- Discriminated unions.
- Custom type guards.

### Q4.12. What are enums?

Enums define a set of named constants.

```typescript
enum ApplicationStatus {
    PENDING,
    APPROVED,
    REJECTED
}

const status = ApplicationStatus.APPROVED;

console.log(status); // 1
```

String enum:

```typescript
enum Role {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    COMPANY = "COMPANY"
}
```

An alternative is a string literal union:

```typescript
type Role = "ADMIN" | "STUDENT" | "COMPANY";
```

### Q4.13. What is tsconfig.json?

It configures the TypeScript compiler.

Important options:

| Option             | Purpose                                |
| ------------------ | -------------------------------------- |
| `target`           | JavaScript version output              |
| `module`           | Module system                          |
| `moduleResolution` | Module resolution strategy             |
| `strict`           | Enables strict type checking           |
| `rootDir`          | Source directory                       |
| `outDir`           | Compiled output directory              |
| `esModuleInterop`  | Improves CommonJS import compatibility |
| `noEmit`           | Checks types without generating output |




## Practical TypeScript exercise

Build a typed version of the student-management example from the JavaScript phase.

### Q4.14. How would you implement the same logic in TypeScript?

Project structure:

```text
student-manager-ts/
│
├── src/
│   ├── types.ts
│   ├── data.ts
│   ├── studentService.ts
│   └── app.ts
│
├── package.json
└── tsconfig.json
```

`types.ts`

```typescript
export interface Student {
    id: number;
    name: string;
    marks: number;
}
```

`data.ts`

```typescript
import type { Student } from "./types.js";

export const students: Student[] = [
    { id: 1, name: "Amit", marks: 75 },
    { id: 2, name: "Chirag", marks: 90 },
    { id: 3, name: "Raj", marks: 65 }
];
```

`studentService.ts`

```typescript
import type { Student } from "./types.js";

export function searchStudent(
    students: Student[],
    name: string
): Student[] {
    return students.filter(student =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
}

export function getPassedStudents(
    students: Student[]
): Student[] {
    return students.filter(student => student.marks >= 40);
}

export function calculateAverage(
    students: Student[]
): number {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    return total / students.length;
}
```

`app.ts`

```typescript
import { students } from "./data.js";

import {
    searchStudent,
    getPassedStudents,
    calculateAverage
} from "./studentService.js";

console.log(searchStudent(students, "chi"));

console.log(getPassedStudents(students));

console.log(calculateAverage(students));
```

Compile and run:

```bash
npx tsc
node dist/app.js
```

This example uses Node.js ESM-compatible `.js` import specifiers with TypeScript's `NodeNext` configuration.

**What have we implemented?**

- Interface-based data modelling.
- Strongly typed functions.
- Module imports and exports.
- Array methods.
- Filtering and searching.
- Data aggregation.
- TypeScript compilation.

These principles also apply to larger applications such as UniNest AI.


### Q4.15. How is TypeScript useful in a large backend application?

Consider an insurance application managing policies.

```typescript
interface Policy {
    id: string;
    customerId: string;
    premium: number;
    status: "ACTIVE" | "PENDING" | "EXPIRED";
}

function calculatePremium(policy: Policy): number {
    return policy.premium * 1.18;
}
```

Benefits:

- Clear data contracts.
- Better IDE autocomplete.
- Compile-time checks.
- Easier refactoring.
- More maintainable service interfaces.

However, TypeScript types do not replace runtime validation for user input or API responses.

---

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
