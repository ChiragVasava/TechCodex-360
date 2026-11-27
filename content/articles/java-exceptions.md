# Java exception handling

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 8635–8827](/research?document=interview&start=8635&end=8827). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Exception Handling

### 26. What is an exception?

An exception is an event that disrupts the normal flow of a program.

Examples:

- Dividing by zero.
- Accessing an invalid array index.
- Opening a missing file.
- Converting invalid text into a number.

Java exception hierarchy begins with `Throwable`.

**Throwable**

**Error**

Serious JVM/system problems

Example: OutOfMemoryError

**Exception**

Conditions applications may handle

**RuntimeException**

Unchecked exception family

Example: NullPointerException

#### Checked exceptions

Checked exceptions are checked by the compiler.

Examples:

- `IOException`
- `SQLException`
- `ClassNotFoundException`

You must handle them or declare them with `throws`, subject to the language rules.

#### Unchecked exceptions

These are subclasses of `RuntimeException`.

Examples:

- `NullPointerException`
- `ArithmeticException`
- `ArrayIndexOutOfBoundsException`
- `NumberFormatException`

The compiler does not require you to catch or declare them.

### 27. try-catch

```java
public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("Cannot divide by zero");
        }
    }
}
```

### 28. Multiple catch blocks

```java
try {

    int[] numbers = {10, 20};

    System.out.println(numbers[5]);

} catch (ArithmeticException e) {

    System.out.println("Arithmetic error");

} catch (ArrayIndexOutOfBoundsException e) {

    System.out.println("Invalid index");
}
```

Catch more specific exceptions before more general exceptions.

### 29. finally

The `finally` block normally executes after `try` and `catch` processing, whether or not an exception occurred.

```java
try {

    int result = 10 / 2;

} catch (Exception e) {

    System.out.println("Error");

} finally {

    System.out.println("Cleanup");
}
```

For resource cleanup, prefer try-with-resources when working with `AutoCloseable` resources.

### 30. throw vs throws

`throw` explicitly throws an exception.

```java
throw new IllegalArgumentException("Invalid age");
```

`throws` declares that a method may propagate specified exceptions.

```java
void readFile() throws IOException {
    // File operation
}
```

#### Custom exception

```java
class InsufficientBalanceException extends Exception {

    InsufficientBalanceException(String message) {
        super(message);
    }
}
```

Use it:

```java
class BankAccount {

    double balance = 1000;

    void withdraw(double amount)
            throws InsufficientBalanceException {

        if (amount > balance) {
            throw new InsufficientBalanceException(
                "Insufficient balance"
            );
        }

        balance -= amount;
    }
}
```

### 31. Try-with-resources

Automatically closes resources that implement `AutoCloseable`.

```java
try (
    java.io.FileReader reader =
        new java.io.FileReader("data.txt")
) {

    int character = reader.read();

    System.out.println(character);

} catch (IOException e) {

    System.out.println(e.getMessage());
}
```

This is useful for file handling, database connections and streams.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
