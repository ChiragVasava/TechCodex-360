# Java

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 7020–7870](/research?document=interview&start=7020&end=7870). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Java Foundations

### 1. What is Java?

Java is a high-level, general-purpose, class-based, object-oriented programming language.

It was developed at Sun Microsystems and is now maintained by Oracle and the Java community.

Java is widely used for:

| Area                    | Applications                                  |
| ----------------------- | --------------------------------------------- |
| Backend development     | Spring Boot applications and REST APIs        |
| Enterprise applications | Banking, insurance and business software      |
| Android development     | Android applications                          |
| Distributed systems     | Backend services and large-scale applications |
| Desktop applications    | GUI applications                              |
| Financial systems       | Transaction processing and business systems   |

#### Important characteristics

1. **Object-oriented:** Supports classes, objects, inheritance, encapsulation, abstraction and polymorphism.
2. **Platform-independent:** Java bytecode can run on different operating systems when a compatible JVM is available.
3. **Strongly typed:** Variables have declared types, and type rules are enforced by the compiler and runtime.
4. **Automatic memory management:** Garbage collection manages many memory-reclamation tasks.
5. **Multithreaded:** Supports multiple threads of execution.
6. **Robust:** Provides exception handling, type checking and runtime checks.
7. **Secure-oriented:** Includes features such as bytecode verification and a managed runtime environment.

**Interview question: Why is Java called platform-independent?**

Java source code is compiled into bytecode rather than directly into machine code for one operating system. The bytecode can run on any compatible Java Virtual Machine, allowing the same compiled program to work across different platforms.

### 2. JDK, JRE and JVM

These three terms are extremely important in Java interviews.

### Java environment

**JDK — Java Development Kit**

Tools for developing and running Java applications

**JRE — Java Runtime Environment (traditional conceptual term)**

Runtime components needed to run Java applications

**JVM — Java Virtual Machine**

Loads and executes Java bytecode

Also includes supporting runtime libraries in the traditional JRE model.

Modern JDK distributions do not necessarily ship a separate JRE installation. The diagram illustrates the traditional conceptual relationship.

#### JVM

JVM stands for Java Virtual Machine.

It is responsible for:

- Loading Java class files.
- Verifying bytecode.
- Executing bytecode.
- Managing memory.
- Garbage collection.
- Runtime operations such as method invocation.

#### JRE

JRE stands for Java Runtime Environment.

Traditionally, it refers to the runtime environment required to execute Java programs, including the JVM and runtime libraries.

#### JDK

JDK stands for Java Development Kit.

It includes development tools such as:

- `javac` — Java compiler.
- `java` — Java application launcher.
- `javadoc` — Documentation generator.
- `jar` — Archive tool.
- Debugging and other development tools.

**Easy way to remember:**

- JVM executes bytecode.
- JRE provides the traditional runtime environment.
- JDK provides tools for developing Java programs.

### 3. How does Java execute a program?

Consider this program:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Execution flow:

**Java source code**

Main.java

**Java compiler — javac**

Compiles source code

**Bytecode**

Main.class

**JVM**

Class loading, verification and execution

**Output**

`Hello World`

The JVM generally executes bytecode using an interpreter and a Just-In-Time (JIT) compiler. The JIT compiler can compile frequently executed code into native machine code to improve performance.

#### Compile and run manually

```bash
javac Main.java
java Main
```

Output:

```text
Hello World
```

**Interview question: Is Java compiled or interpreted?**

Java uses both. The Java compiler converts source code into bytecode. The JVM then executes that bytecode using interpretation and, where appropriate, JIT compilation.

### 4. Your first Java program

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

        System.out.println("I am learning Java.");

        System.out.println(10 + 20);
    }
}
```

Output:

```text
Hello, World!
I am learning Java.
30
```

#### Understanding every part

`public`

An access modifier. It makes the class or method accessible from other classes, subject to Java's access rules.

`class`

A keyword used to declare a class.

`Main`

The class name.

`static`

Allows the method to be called through the class without first creating an object.

`void`

Indicates that the method does not return a value.

`main()`

The conventional entry-point method recognized by the Java launcher.

`String[] args`

An array of strings used to receive command-line arguments.

`System.out.println()`

Prints a value followed by a line break.

Difference:

```java
System.out.print("Hello");
System.out.println("World");
```

Output:

```text
HelloWorld
```

### 5. Variables in Java

A variable is a named storage location that holds a value.

Syntax:

```java
dataType variableName = value;
```

Examples:

```java
int age = 20;

String name = "Chirag";

double marks = 85.5;

boolean isStudent = true;
```

Unlike Python, Java requires variable types to be declared.

#### Variable naming rules

Valid:

```java
int age = 20;
String studentName = "Chirag";
int total_marks = 500;
```

Invalid:

```java
int 2age = 20;
int student-name = 10;
```

Java conventionally uses `camelCase` for variables and methods.

#### Types of variables

**Local variable**

Declared inside a method, constructor or block.

```java
public class Main {

    public static void main(String[] args) {

        int age = 20;

        System.out.println(age);
    }
}
```

Local variables must be initialized before use.

**Instance variable**

Declared inside a class but outside methods, constructors and blocks. Each object has its own instance fields.

```java
class Student {

    String name;
    int age;
}
```

**Static variable**

Belongs to the class rather than each individual object.

```java
class Student {

    static String college = "MSU";

    String name;
}
```

All instances share the same static field.

### 6. Data types in Java

Java data types are divided into two major categories.

**Java data types**

**Primitive data types**

`byte`

`short`

`int`

`long`

`float`

`double`

`char`

`boolean`

**Reference types**

Class types, arrays, interfaces, enums and other reference types.

Examples: `String`, `Student`, `int[]`, `ArrayList`.

#### 6.1 Primitive data types

| Type      | Size                                 | Example             |
| --------- | ------------------------------------ | ------------------- |
| `byte`    | 8 bits                               | `byte a = 10;`      |
| `short`   | 16 bits                              | `short a = 100;`    |
| `int`     | 32 bits                              | `int a = 1000;`     |
| `long`    | 64 bits                              | `long a = 100000L;` |
| `float`   | 32 bits                              | `float a = 10.5f;`  |
| `double`  | 64 bits                              | `double a = 10.5;`  |
| `char`    | 16 bits                              | `char a = 'A';`     |
| `boolean` | JVM-dependent storage representation | `boolean a = true;` |

A `char` represents a UTF-16 code unit, not necessarily an entire Unicode character.

#### 6.2 Reference types

Reference variables hold references to objects.

```java
String name = "Chirag";

int[] numbers = {10, 20, 30};
```

`String` and arrays are reference types.

#### Primitive vs reference types

| Primitive                       | Reference                                       |
| ------------------------------- | ----------------------------------------------- |
| Stores a primitive value        | Holds a reference to an object                  |
| Has a predefined primitive type | Can refer to instances of classes, arrays, etc. |
| Cannot be `null`                | Can be `null`                                   |
| Examples: `int`, `char`         | Examples: `String`, arrays                      |

### 7. Type conversion and casting

Type conversion changes a value from one type to another.

#### Widening conversion

A smaller compatible numeric type is converted into a larger type automatically.

```java
int number = 10;

double result = number;

System.out.println(result);
```

Output:

```text
10.0
```

#### Narrowing conversion

A larger numeric type is converted into a smaller type explicitly.

```java
double number = 10.75;

int result = (int) number;

System.out.println(result);
```

Output:

```text
10
```

The fractional part is discarded.

#### String conversion

```java
int number = 100;

String text = String.valueOf(number);

System.out.println(text);
```

String to integer:

```java
String text = "100";

int number = Integer.parseInt(text);
```

String to double:

```java
double price = Double.parseDouble("99.50");
```

Invalid numeric strings can cause `NumberFormatException`.

### 8. Operators in Java

#### Arithmetic operators

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `++`     | Increment      |
| `--`     | Decrement      |

Example:

```java
int a = 10;
int b = 3;

System.out.println(a + b);
System.out.println(a / b);
System.out.println(a % b);
```

Output:

```text
13
3
1
```

Important: Integer division truncates the fractional part.

```java
System.out.println(10 / 3);    // 3
System.out.println(10.0 / 3);  // 3.333...
```

#### Relational operators

```java
== != > < >= <=
```

Example:

```java
int a = 10;
int b = 20;

System.out.println(a < b);
```

#### Java logical operators

```java
&&   // AND
||   // OR
!    // NOT
```

Example:

```java
int age = 20;
boolean hasId = true;

if (age >= 18 && hasId) {
    System.out.println("Allowed");
}
```

#### Assignment operators

```java
int x = 10;

x += 5;
x -= 2;
x *= 2;
x /= 2;
x %= 3;
```

#### Ternary operator

A shorter way of writing a simple `if-else`.

```java
int age = 20;

String result = age >= 18 ? "Adult" : "Minor";

System.out.println(result);
```

#### Increment operators

Pre-increment:

```java
int a = 5;

System.out.println(++a);
```

Output: `6`

Post-increment:

```java
int a = 5;

System.out.println(a++);
System.out.println(a);
```

Output:

```text
5
6
```



## Control Flow and Arrays

### 9. Conditional statements

#### if

```java
int age = 20;

if (age >= 18) {
    System.out.println("Adult");
}
```

#### if-else

```java
int number = 10;

if (number % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}
```

#### if-else-if

```java
int marks = 85;

if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else if (marks >= 50) {
    System.out.println("C");
} else {
    System.out.println("Fail");
}
```

#### switch

Useful when selecting among multiple fixed cases.

```java
int day = 2;

switch (day) {

    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    case 3:
        System.out.println("Wednesday");
        break;

    default:
        System.out.println("Invalid day");
}
```

The `break` statement prevents execution from falling through to the next case in this traditional switch form.

Modern Java also supports switch expressions:

```java
int day = 2;

String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Invalid";
};

System.out.println(result);
```

### 10. Loops

#### for loop

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

Execution:

1. Initialize `i = 1`.
2. Check `i <= 5`.
3. Execute the body.
4. Increment `i`.
5. Repeat.

#### while loop

```java
int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}
```

#### do-while loop

Executes at least once because the condition is checked after the body.

```java
int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

#### Enhanced for loop

Used to iterate through arrays and other iterable collections.

```java
int[] numbers = {10, 20, 30};

for (int number : numbers) {
    System.out.println(number);
}
```

#### break and continue

`break` terminates the loop.

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        break;
    }

    System.out.println(i);
}
```

`continue` skips the current iteration.

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}
```

### 11. Arrays

An array stores a fixed number of elements of the same declared component type.

#### Declaration

```java
int[] numbers;
```

#### Creation

```java
numbers = new int[5];
```

#### Declaration and initialization

```java
int[] numbers = {10, 20, 30, 40, 50};
```

#### Accessing elements

```java
System.out.println(numbers[0]);
System.out.println(numbers[2]);
```

Array indexing starts at zero.

#### Modifying elements

```java
numbers[1] = 100;
```

#### Array length

```java
System.out.println(numbers.length);
```

For arrays, `length` is a field, not a method.

#### Iterating through an array

```java
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

#### Enhanced for loop

```java
for (int number : numbers) {
    System.out.println(number);
}
```

#### Multidimensional arrays

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[0][1]);
```

Output: `2`

#### Iterating a matrix

```java
for (int i = 0; i < matrix.length; i++) {

    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }

    System.out.println();
}
```

#### Useful Arrays class

```java
import java.util.Arrays;

int[] numbers = {5, 2, 8, 1};

Arrays.sort(numbers);

System.out.println(Arrays.toString(numbers));
```

Other useful methods:

```java
Arrays.equals(a, b);
Arrays.copyOf(a, a.length);
Arrays.fill(a, 0);
Arrays.binarySearch(a, 5);
```

`binarySearch()` requires a sorted array for its normal expected use.



## Strings

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
