# Algorithms

## Definition and simple example

An algorithm is a finite procedure for solving a class of problems. Its contract specifies the allowed inputs and the result or behavior it must produce. A program implements an algorithm in a particular language; different implementations may follow the same procedure.

To find the smallest number, remember the first value, inspect each remaining value, and replace the remembered value whenever a smaller one appears. After each step, the remembered value is the smallest in the portion already inspected. This is the loop invariant that explains why the procedure works.

```javascript
function minimum(values) {
  if (values.length === 0) throw new Error("Expected at least one number");
  let best = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] < best) best = values[i];
  }
  return best;
}
console.log(minimum([8, -2, 5]));
```

Expected output:

```text
-2
```

The input contract here is a nonempty array of finite numbers. An empty input raises the explicit error. The scan performs n-1 value comparisons and uses constant auxiliary storage. Try all-negative values, repeated values, and a single value before generalizing the implementation.

Explore the [array lab](/practice/arrays), [arrays](/knowledge/arrays), and [complexity](/knowledge/algorithm-complexity).

<!-- imported-study-material -->

> Imported lesson from [DSA coding course - Java and Python, lines 110–123](/research?document=dsa&start=110&end=123). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## 0.3 What is an algorithm?

An algorithm is a finite sequence of well-defined steps that solves a problem.

To find the maximum value in an array, a straightforward algorithm is:

1. Assume the first value is the maximum.
2. Visit each remaining value.
3. Compare it with the maximum stored so far.
4. Replace the maximum whenever a larger value appears.
5. Return the stored maximum.

This is an algorithm, even before we write Java or Python code.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
