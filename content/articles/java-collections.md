# Java Collections Framework

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 8828–9137](/research?document=interview&start=8828&end=9137). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Java Collections Framework

This is a particularly important topic for interviews and coding rounds.

### 32. What is the Collections Framework?

The Java Collections Framework provides interfaces and implementations for storing and manipulating groups of objects.

Main interfaces include:

- `List`
- `Set`
- `Queue`
- `Deque`
- `Map` (part of the framework, but not a subtype of `Collection`)

**Simplified Collections hierarchy**

**Iterable**

**Collection**

**List**

ArrayList, LinkedList

**Set**

HashSet, TreeSet

**Queue**

PriorityQueue

**Map**

HashMap, LinkedHashMap, TreeMap

Simplified view; Map is a separate interface and does not extend Collection.

### 33. ArrayList

`ArrayList` is a resizable array implementation of the `List` interface.

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Amit");
        names.add("Rahul");
        names.add("Chirag");

        System.out.println(names);
    }
}
```

#### Important methods

```java
names.add("Karan");
names.get(0);
names.set(0, "Raj");
names.remove(1);
names.contains("Chirag");
names.size();
names.clear();
```

#### ArrayList characteristics

- Maintains insertion order.
- Allows duplicates.
- Allows `null`.
- Provides fast indexed access.
- Inserting or removing elements in the middle can require shifting elements.
- It is not synchronized by default.

### 34. LinkedList

`LinkedList` implements both `List` and `Deque`.

```java
import java.util.LinkedList;

LinkedList<Integer> numbers = new LinkedList<>();

numbers.add(10);
numbers.add(20);
numbers.addFirst(5);
numbers.addLast(30);

System.out.println(numbers);
```

It is a doubly linked list implementation.

Accessing an element by index requires traversal, so it is generally slower than ArrayList for frequent random access.

### 35. HashSet

`HashSet` stores unique elements using hash-based storage.

```java
import java.util.HashSet;

HashSet<Integer> numbers = new HashSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(10);

System.out.println(numbers);
```

Only one `10` is retained.

Characteristics:

- Does not guarantee iteration order.
- Does not allow duplicate elements.
- Allows one `null`.
- Average-case basic operations are generally \\(O(1)\\), assuming suitable hash distribution.

### 36. TreeSet

`TreeSet` stores unique elements in sorted order.

```java
import java.util.TreeSet;

TreeSet<Integer> numbers = new TreeSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);

System.out.println(numbers);
```

Output:

```text
[10, 20, 30]
```

It generally offers \\(O(\log n)\\) basic operations.

### 37. HashMap

A `HashMap` stores key-value pairs.

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> students = new HashMap<>();

        students.put(1, "Chirag");
        students.put(2, "Amit");
        students.put(3, "Rahul");

        System.out.println(students.get(1));
    }
}
```

Output:

```text
Chirag
```

#### Important methods

```java
students.put(4, "Karan");
students.get(2);
students.remove(3);
students.containsKey(1);
students.containsValue("Amit");
students.size();
students.isEmpty();
```

#### Iterating through HashMap

```java
for (Map.Entry<Integer, String> entry : students.entrySet()) {

    System.out.println(
        entry.getKey() + " " + entry.getValue()
    );
}
```

#### HashMap characteristics

- Keys are unique.
- Values can be duplicated.
- Allows one `null` key and multiple `null` values.
- Does not guarantee iteration order.
- Average-case lookup and insertion are generally \\(O(1)\\).

### 38. HashMap vs Hashtable

| HashMap                            | Hashtable                  |
| ---------------------------------- | -------------------------- |
| Not synchronized by default        | Synchronized methods       |
| Allows one null key                | Does not allow null keys   |
| Allows null values                 | Does not allow null values |
| Generally preferred in modern code | Legacy collection          |

For concurrent access, modern applications commonly use `ConcurrentHashMap` when its behavior fits the use case.

### 39. Queue and PriorityQueue

A queue generally follows FIFO: First In, First Out.

```java
import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> queue = new LinkedList<>();

queue.offer(10);
queue.offer(20);
queue.offer(30);

System.out.println(queue.poll());
System.out.println(queue.peek());
```

Output:

```text
10
20
```

- `offer()` inserts.
- `poll()` retrieves and removes the head.
- `peek()` retrieves without removing it.

A `PriorityQueue` retrieves elements according to priority, not ordinary insertion order.

```java
import java.util.PriorityQueue;

PriorityQueue<Integer> queue = new PriorityQueue<>();

queue.add(30);
queue.add(10);
queue.add(20);

System.out.println(queue.poll());
```

Output: `10`

### 40. Comparable vs Comparator

These interfaces help define sorting behavior.

#### Comparable

Defines a class's natural ordering.

```java
class Student implements Comparable<Student> {

    int marks;

    Student(int marks) {
        this.marks = marks;
    }

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.marks, other.marks);
    }
}
```

#### Comparator

Defines an external comparison strategy.

```java
import java.util.Comparator;

Comparator<Student> byMarks =
    Comparator.comparingInt(student -> student.marks);
```

**Interview question: Comparable vs Comparator?**

Comparable defines the natural ordering inside the class. Comparator defines an external or alternative ordering, allowing different sorting strategies without modifying the class.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
