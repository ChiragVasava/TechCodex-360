# Searching, sorting and recursion practice

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12914–13094](/research?document=interview&start=12914&end=13094). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Searching, Sorting, Stacks and Recursion

### Problem 11: Binary search

Question: Find the index of a target in a sorted array.

Input:

```python
numbers = [10, 20, 30, 40, 50, 60]target = 40
```

Expected output: `3`

```python
def binary_search(numbers, target):    left = 0    right = len(numbers) - 1    while left <= right:        mid = (left + right) // 2        if numbers[mid] == target:            return mid        elif numbers[mid] < target:            left = mid + 1        else:            right = mid - 1    return -1print(binary_search([10, 20, 30, 40, 50, 60], 40))
```

Dry run:

| Left | Right | Mid | Value | Decision          |
| ---- | ----- | --- | ----- | ----------------- |
| 0    | 5     | 2   | 30    | Search right half |
| 3    | 5     | 4   | 50    | Search left half  |
| 3    | 3     | 3   | 40    | Found             |

- Time: \\(O(\log n)\\)
- Auxiliary space: \\(O(1)\\)

**Important:** Binary search requires sorted data or another suitable monotonic search condition. Each iteration eliminates approximately half of the remaining search space.

### Problem 12: Merge two sorted arrays

Input:

```python
first = [1, 3, 5]second = [2, 4, 6]
```

Expected output:

```text
[1, 2, 3, 4, 5, 6]
```

```python
def merge_sorted_arrays(first, second):    i = 0    j = 0    result = []    while i < len(first) and j < len(second):        if first[i] <= second[j]:            result.append(first[i])            i += 1        else:            result.append(second[j])            j += 1    result.extend(first[i:])    result.extend(second[j:])    return resultprint(merge_sorted_arrays([1, 3, 5], [2, 4, 6]))
```

- Time: \\(O(n+m)\\)
- Space: \\(O(n+m)\\) for the result.

This is also a core idea used in merge sort.

### Problem 13: Valid parentheses

High-priority interview problem

Valid:

```text
()
{}[]
({[]})
```

Invalid:

```text
(]
([)]
(((
```

```python
def is_valid_parentheses(text):    stack = []    matching = {        ")": "(",        "}": "{",        "]": "["    }    for char in text:        if char in "({[":            stack.append(char)        elif char in matching:            if not stack or stack.pop() != matching[char]:                return False    return len(stack) == 0print(is_valid_parentheses("({[]})"))  # Trueprint(is_valid_parentheses("([)]"))    # False
```

Why a stack? The most recently opened bracket must be the first one closed. This is LIFO behavior.

- Time: \\(O(n)\\)
- Space: \\(O(n)\\)

### Problem 14: Recursion — Factorial

Recursion occurs when a function calls itself to solve a smaller version of the same problem.

$$
 n! = n \times (n-1)! 
$$

Base case:

$$
 0! = 1 
$$

```python
def factorial(n):    if n < 0:        raise ValueError("Factorial is not defined for negative integers")    if n == 0 or n == 1:        return 1    return n * factorial(n - 1)print(factorial(5))
```

Output: `120`

Call flow:

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1
```

Unwinding:

```text
5 × 4 × 3 × 2 × 1 = 120
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(n)\\), because of the call stack.

A **base case** stops recursive calls. Without one, recursion may continue until a recursion-depth error occurs.

### Problem 15: Fibonacci sequence

Each Fibonacci number is the sum of the previous two.

$$
 F(n) = F(n-1) + F(n-2) 
$$

Naive recursive implementation:

```python
def fibonacci(n):    if n < 0:        raise ValueError("n must be non-negative")    if n <= 1:        return n    return fibonacci(n - 1) + fibonacci(n - 2)print(fibonacci(6))
```

Output: `8`

This naive implementation has approximately \\(O(2^n)\\) time complexity because it recalculates many values.

Better iterative solution:

```python
def fibonacci(n):    if n < 0:        raise ValueError("n must be non-negative")    a, b = 0, 1    for _ in range(n):        a, b = b, a + b    return aprint(fibonacci(6))
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)

**Interview lesson:** Recursion can make a solution easier to express, but it is not automatically more efficient.

### Sorting algorithms — What you should know

| Algorithm      | Average time     | Worst time       | Stable?    |
| -------------- | ---------------- | ---------------- | ---------- |
| Bubble sort    | \\(O(n^2)\\)     | \\(O(n^2)\\)     | Yes        |
| Selection sort | \\(O(n^2)\\)     | \\(O(n^2)\\)     | No         |
| Insertion sort | \\(O(n^2)\\)     | \\(O(n^2)\\)     | Yes        |
| Merge sort     | \\(O(n\log n)\\) | \\(O(n\log n)\\) | Yes        |
| Quick sort     | \\(O(n\log n)\\) | \\(O(n^2)\\)     | Usually no |

In real Python applications, use built-in sorting unless there is a specific reason to implement an algorithm yourself.

```python
numbers = [5, 2, 8, 1, 3]print(sorted(numbers))
```

Output:

```text
[1, 2, 3, 5, 8]
```

`sorted()` returns a new list. `list.sort()` sorts the existing list in place.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
