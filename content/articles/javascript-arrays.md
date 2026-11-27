# JavaScript array methods

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4497–4646](/research?document=interview&start=4497&end=4646). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Arrays and Higher-Order Array Methods

Assume this dataset:

```javascript
const students = [
    { name: "Amit", marks: 75 },
    { name: "Chirag", marks: 90 },
    { name: "Raj", marks: 65 },
    { name: "Neha", marks: 85 }
];
```

### Q3.27. Difference between map() and forEach()?

- `map()` returns a new transformed array.
- `forEach()` executes a callback for each item and returns `undefined`.

```javascript
const names = students.map(student => student.name);

console.log(names);
// ["Amit", "Chirag", "Raj", "Neha"]
```

```javascript
students.forEach(student => {
    console.log(student.name);
});
```

### Q3.28. What does filter() do?

It creates a new array containing elements that satisfy a condition.

```javascript
const passedStudents = students.filter(
    student => student.marks >= 75
);
```

### Q3.29. What does reduce() do?

It processes an array and combines its elements into a single accumulated result.

```javascript
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log(totalMarks); // 315
```

| Iteration | Accumulator | Current marks | Result |
| --------- | ----------- | ------------- | ------ |
| 1         | 0           | 75            | 75     |
| 2         | 75          | 90            | 165    |
| 3         | 165         | 65            | 230    |
| 4         | 230         | 85            | 315    |

### Q3.30. Difference between find() and filter()?

- `find()` returns the first matching element.
- `filter()` returns all matching elements.

```javascript
const firstTopper = students.find(
    student => student.marks >= 85
);

const allTopStudents = students.filter(
    student => student.marks >= 85
);
```

### Q3.31. Difference between some() and every()?

- `some()` returns `true` if at least one element matches.
- `every()` returns `true` only if all elements match.

```javascript
const hasTopper = students.some(
    student => student.marks >= 90
);

const allPassed = students.every(
    student => student.marks >= 40
);
```

### Q3.32. What is destructuring?

Destructuring extracts values from arrays and properties from objects.

```javascript
const user = {
    name: "Chirag",
    age: 20,
    city: "Vadodara"
};

const { name, age } = user;
```

Array destructuring:

```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;
```

### Q3.33. What are spread and rest operators?

Both use `...`.

Spread expands an iterable or object:

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

const user = { name: "Chirag", age: 20 };

const updatedUser = {
    ...user,
    age: 21
};
```

Rest collects remaining arguments or values:

```javascript
function sum(...numbers) {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}

console.log(sum(10, 20, 30)); // 60
```

Important: Spread creates a shallow copy, not a deep copy.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
