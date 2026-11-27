# Time and space complexity

## Compare growth visually

![Element comparison counts for a repeated scan and a single scan, for nonempty arrays.](/diagrams/complexity-comparison.svg)

This graph counts value comparisons in two specific minimum/maximum procedures: a repeated full scan performing two comparisons for every pair gives 2n^2; a single scan initialized from the first element performs two comparisons for each remaining element, giving 2(n-1). These are operation counts, not measured running times. Big-O abstracts away constant factors and lower-order terms.

At n=10 the counts are 200 and 18. At n=50 they are 5,000 and 98. [Compare the exact table and run the scan](/practice/arrays).

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12221–12269](/research?document=interview&start=12221&end=12269). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Big-O Time and Space Complexity

Big-O describes how an algorithm's resource requirements grow as input size increases.

| Complexity       | Meaning      | Example                          |
| ---------------- | ------------ | -------------------------------- |
| \\(O(1)\\)       | Constant     | Access by array index            |
| \\(O(\log n)\\)  | Logarithmic  | Binary search                    |
| \\(O(n)\\)       | Linear       | Traverse an array                |
| \\(O(n\log n)\\) | Linearithmic | Efficient comparison sorting     |
| \\(O(n^2)\\)     | Quadratic    | Nested loops                     |
| \\(O(2^n)\\)     | Exponential  | Some recursive subset algorithms |

#### Example 1 — Constant time

```python
numbers = [10, 20, 30, 40]print(numbers[2])
```

Output: `30`

The number of elements does not change the number of index accesses.

#### Example 2 — Linear time

```python
def print_numbers(numbers):    for number in numbers:        print(number)
```

If there are 100 elements, the loop executes 100 times.

#### Example 3 — Quadratic time

```python
def print_pairs(numbers):    for i in numbers:        for j in numbers:            print(i, j)
```

For four elements, this produces 16 pairs. For \\(n\\) elements, it produces \\(n^2\\) pairs.

#### Important distinctions

- **Time complexity:** How running time grows.
- **Space complexity:** How additional memory grows.
- **Auxiliary space:** Extra memory used by the algorithm, excluding its input.

For example, creating a new list containing \\(n\\) elements requires \\(O(n)\\) additional space.

---

> Imported lesson from [DSA coding course - Java and Python, lines 124–175](/research?document=dsa&start=124&end=175). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## 0.4 Time complexity and space complexity

### Time complexity

Time complexity describes how the amount of work grows as the input size increases.

Let `n` be the number of array elements.

| Complexity | Example             | Work for n = 1,000 (illustrative)    |
| ---------- | ------------------- | ------------------------------------ |
| O(1)       | Access `a[3]`       | Constant amount                      |
| O(log n)   | Binary search       | About 10 halvings                    |
| O(n)       | Visit every element | About 1,000 visits                   |
| O(n log n) | Merge sort          | About 10,000 proportional operations |
| O(n²)      | Compare every pair  | About 1,000,000 pairs                |

These quantities describe mathematical growth, not exact execution time. Actual CPU instructions, memory accesses, and runtime overhead also matter.

### Space complexity

Space complexity describes memory usage. In this course, we will generally report **auxiliary space**, meaning additional working memory beyond the input and required output.

For example:

```python
largest = arr[0]
```

Only one extra variable is required, regardless of `n`, so auxiliary space is O(1).

However:

```python
copy = arr.copy()
```

The new list stores `n` references, so the auxiliary space used by that copy is O(n).

### Big-O, Big-Omega, and Big-Theta

- **O(f(n))** gives an asymptotic upper bound.
- **Ω(f(n))** gives an asymptotic lower bound.
- **Θ(f(n))** gives a tight bound.

If an algorithm performs `3n + 5` basic operations, then:

$$
 T(n)=3n+5=\Theta(n) 
$$

We ignore constant factors and lower-order terms when describing asymptotic growth, but those constants can still matter in actual performance.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
