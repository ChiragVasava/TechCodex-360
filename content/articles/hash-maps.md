# Hash maps and counting

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12770–12913](/research?document=interview&start=12770&end=12913). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Array and Hash-Map Interview Problems

### Problem 6: Find duplicate elements

Input:

```python
numbers = [1, 2, 3, 2, 4, 5, 1]
```

Expected output: `[2, 1]`

```python
def find_duplicates(numbers):    seen = set()    added = set()    duplicates = []    for number in numbers:        if number in seen and number not in added:            duplicates.append(number)            added.add(number)        seen.add(number)    return duplicatesprint(find_duplicates([1, 2, 3, 2, 4, 5, 1]))
```

This preserves the order in which duplicates are first encountered.

- Time: \\(O(n)\\) average.
- Space: \\(O(n)\\).

**Project connection:** In a recruitment system, a database unique constraint on `(student_id, drive_id)` can prevent the same student from applying to the same drive twice. An application-level check improves the user experience, but the database constraint protects against concurrent requests.

### Problem 7: Two Sum

High-priority interview problem

Question: Given an array and a target, return the indices of two numbers that add up to the target.

Input:

```python
numbers = [2, 7, 11, 15]target = 9
```

Expected output:

```text
[0, 1]
```

**Approach 1 — Brute force**

```python
def two_sum(numbers, target):    for i in range(len(numbers)):        for j in range(i + 1, len(numbers)):            if numbers[i] + numbers[j] == target:                return [i, j]    return None
```

- Time: \\(O(n^2)\\)
- Space: \\(O(1)\\)

**Approach 2 — Hash map optimization**

```python
def two_sum(numbers, target):    seen = {}    for index, number in enumerate(numbers):        complement = target - number        if complement in seen:            return [seen[complement], index]        seen[number] = index    return Noneprint(two_sum([2, 7, 11, 15], 9))
```

Output: `[0, 1]`

Dry run:

| Index | Number | Complement | Dictionary before check | Action          |
| ----- | ------ | ---------- | ----------------------- | --------------- |
| 0     | 2      | 7          | `{}`                    | Store `2: 0`    |
| 1     | 7      | 2          | `{2: 0}`                | Return `[0, 1]` |

Complexity:

- Time: \\(O(n)\\) average.
- Space: \\(O(n)\\).

Why is it better? Instead of repeatedly searching the remaining array, we store previously visited numbers and look up the required complement.

### Problem 8: Remove duplicates from a sorted array

Input:

```python
numbers = [1, 1, 2, 2, 3, 4, 4]
```

Expected output:

```text
[1, 2, 3, 4]
```

```python
def remove_duplicates(numbers):    if not numbers:        return []    result = [numbers[0]]    for number in numbers[1:]:        if number != result[-1]:            result.append(number)    return result
```

Why does it work? Because the array is sorted, duplicate values are adjacent.

- Time: \\(O(n)\\)
- Space: \\(O(n)\\) for output.

### Problem 9: Move all zeros to the end

Input:

```python
numbers = [0, 1, 0, 3, 12]
```

Expected output:

```text
[1, 3, 12, 0, 0]
```

```python
def move_zeros(numbers):    position = 0    for number in numbers:        if number != 0:            numbers[position] = number            position += 1    while position < len(numbers):        numbers[position] = 0        position += 1    return numbersprint(move_zeros([0, 1, 0, 3, 12]))
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)
- The function modifies the original list.

### Problem 10: Maximum subarray sum — Kadane's algorithm

Question: Find the maximum sum of a contiguous subarray.

Input:

```python
numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Expected output: `6`

The maximum-sum subarray is `[4, -1, 2, 1]`.

```python
def max_subarray_sum(numbers):    if not numbers:        return None    current_sum = numbers[0]    maximum_sum = numbers[0]    for number in numbers[1:]:        current_sum = max(number, current_sum + number)        maximum_sum = max(maximum_sum, current_sum)    return maximum_sumprint(max_subarray_sum(    [-2, 1, -3, 4, -1, 2, 1, -5, 4]))
```

Core idea: At every position, decide whether to start a new subarray at the current element or extend the existing subarray.

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)

Initializing with the first element also allows the algorithm to handle arrays containing only negative numbers.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
