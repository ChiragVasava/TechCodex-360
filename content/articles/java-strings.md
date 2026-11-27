# Java strings

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 7870–8020](/research?document=interview&start=7870&end=8020). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Strings

### 12. Strings in Java

A `String` represents a sequence of characters.

```java
String name = "Chirag";
```

Strings are objects, not primitive types.

#### String immutability

Strings are immutable in Java. Once a `String` object is created, its contents cannot be changed.

```java
String text = "Hello";

text.concat(" World");

System.out.println(text);
```

Output:

```text
Hello
```

Why? `concat()` returns a new string. It does not modify the original string.

Correct:

```java
String text = "Hello";

text = text.concat(" World");

System.out.println(text);
```

Output:

```text
Hello World
```

### 13. == vs .equals()

This is an extremely important Java interview question.

`==` compares primitive values for equality, but for reference types it checks whether references identify the same object.

`.equals()` compares object equality according to the class's implementation.

Example:

```java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);
System.out.println(a.equals(b));
```

Output:

```text
false
true
```

The two objects contain equal text but are separate objects.

**Interview answer:** Use `.equals()` to compare string contents, not `==`.

### 14. Important String methods

```java
String text = "Hello Java";

System.out.println(text.length());
System.out.println(text.charAt(0));
System.out.println(text.toUpperCase());
System.out.println(text.toLowerCase());
System.out.println(text.substring(0, 5));
System.out.println(text.contains("Java"));
System.out.println(text.startsWith("Hello"));
System.out.println(text.endsWith("Java"));
System.out.println(text.indexOf("Java"));
System.out.println(text.replace("Java", "Python"));
```

#### split()

```java
String text = "Java,Python,JavaScript";

String[] languages = text.split(",");

for (String language : languages) {
    System.out.println(language);
}
```

#### trim() and strip()

```java
String text = "  Java  ";

System.out.println(text.trim());
System.out.println(text.strip());
```

`strip()` uses Unicode-aware whitespace handling and is available from Java 11.

### 15. StringBuilder and StringBuffer

Repeated string concatenation can create many temporary string objects.

For repeated modifications, use `StringBuilder`.

```java
StringBuilder builder = new StringBuilder("Hello");

builder.append(" Java");

System.out.println(builder);
```

Other methods:

```java
builder.insert(5, " World");
builder.replace(0, 5, "Hi");
builder.delete(0, 3);
builder.reverse();
builder.toString();
```

#### String vs StringBuilder vs StringBuffer

| Feature                        | String           | StringBuilder                 | StringBuffer                                               |
| ------------------------------ | ---------------- | ----------------------------- | ---------------------------------------------------------- |
| Mutable                        | No               | Yes                           | Yes                                                        |
| Thread-safe for its operations | Immutable object | No                            | Synchronized methods                                       |
| Typical use                    | Fixed text       | Repeated string modifications | Shared mutable string operations requiring synchronization |

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
