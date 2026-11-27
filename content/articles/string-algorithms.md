# String interview algorithms

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12654–12769](/research?document=interview&start=12654&end=12769). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## String Coding Problems

These are common entry-level interview problems.

### Problem 1: Reverse a string

```python
def reverse_string(text):    return text[::-1]print(reverse_string("chirag"))
```

Output:

```text
garihc
```

Complexity:

- Time: \\(O(n)\\)
- Space: \\(O(n)\\) for the resulting string.

Alternative using two pointers:

```python
def reverse_string(text):    chars = list(text)    left = 0    right = len(chars) - 1    while left < right:        chars[left], chars[right] = chars[right], chars[left]        left += 1        right -= 1    return "".join(chars)
```

Python strings are immutable, so the two-pointer version converts the string into a list before swapping characters.

### Problem 2: Check whether a string is a palindrome

A palindrome reads the same forward and backward.

Examples:

- `madam` → palindrome
- `racecar` → palindrome
- `hello` → not a palindrome

```python
def is_palindrome(text):    return text == text[::-1]print(is_palindrome("madam"))  # Trueprint(is_palindrome("hello"))  # False
```

Follow-up: What if uppercase and spaces should be ignored?

```python
def is_palindrome(text):    cleaned = "".join(        char.lower()        for char in text        if char.isalnum()    )    return cleaned == cleaned[::-1]print(is_palindrome("A man, a plan, a canal: Panama"))
```

Output: `True`

### Problem 3: Count character frequency

Input: `"programming"`

```python
def character_frequency(text):    frequency = {}    for char in text:        frequency[char] = frequency.get(char, 0) + 1    return frequencyprint(character_frequency("programming"))
```

Output:

```text
{    'p': 1,    'r': 2,    'o': 1,    'g': 2,    'a': 1,    'm': 2,    'i': 1,    'n': 1}
```

Explanation:

- `frequency.get(char, 0)` returns the existing count.
- If the character does not exist, it returns zero.
- We increment the count.

Complexity:

- Time: \\(O(n)\\) average.
- Space: \\(O(k)\\), where \\(k\\) is the number of distinct characters.

Alternative:

```python
from collections import Counterprint(Counter("programming"))
```

### Problem 4: Find the first non-repeating character

Input: `"swiss"`

Expected output: `"w"`

```python
def first_non_repeating(text):    frequency = {}    for char in text:        frequency[char] = frequency.get(char, 0) + 1    for char in text:        if frequency[char] == 1:            return char    return Noneprint(first_non_repeating("swiss"))
```

Why two loops?

1. First pass counts occurrences.
2. Second pass preserves original order and finds the first character with count one.

Complexity: \\(O(n)\\) average time and \\(O(k)\\) space.

### Problem 5: Check whether two strings are anagrams

Two strings are anagrams if they contain the same characters with the same frequencies, regardless of order.

```python
from collections import Counterdef are_anagrams(first, second):    return Counter(first) == Counter(second)print(are_anagrams("listen", "silent"))  # Trueprint(are_anagrams("hello", "world"))    # False
```

Complexity:

- Time: \\(O(n+m)\\) average.
- Space: \\(O(k)\\).

This solution is case-sensitive and treats spaces as characters. Normalize the inputs if the problem requires case-insensitive comparison.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
