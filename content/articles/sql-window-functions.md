# SQL subqueries, CTEs and window functions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 15001–15422](/research?document=interview&start=15001&end=15422). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## SQL Practice — Customer, Order and Payment Queries

These exercises use PostgreSQL syntax. Foundations, joins, normalization and ACID are taught earlier in this phase; they are not repeated in the coding phase.

### Sample database

**customers**

| customer_id | name  | city      |
| ----------- | ----- | --------- |
| 1           | Aarav | Vadodara  |
| 2           | Neha  | Ahmedabad |
| 3           | Riya  | Surat     |
| 4           | Dev   | Vadodara  |

**orders**

| order_id | customer_id | amount | status    |
| -------- | ----------- | ------ | --------- |
| 101      | 1           | 1500   | completed |
| 102      | 2           | 2500   | completed |
| 103      | 1           | 800    | pending   |
| 104      | 3           | 3000   | completed |
| 105      | 2           | 1200   | cancelled |

**payments**

| payment_id | order_id | amount | status     |
| ---------- | -------- | ------ | ---------- |
| 501        | 101      | 1500   | successful |
| 502        | 102      | 2500   | successful |
| 503        | 103      | 800    | pending    |
| 504        | 104      | 3000   | successful |

### Problem 19: Calculate total spending per customer

```sql
SELECT
    customer_id,
    SUM(amount) AS total_spending
FROM orders
GROUP BY customer_id;
```

Expected result:

| customer_id | total_spending |
| ----------- | -------------- |
| 1           | 2300           |
| 2           | 3700           |
| 3           | 3000           |

How `GROUP BY` works:

1. Groups rows with the same `customer_id`.
2. Calculates the aggregate for each group.
3. Returns one result row per group.

### Problem 20: Find customers whose total orders exceed ₹2,000

```sql
SELECT
    customer_id,
    SUM(amount) AS total_spending
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 2000;
```

Expected result:

| customer_id | total_spending |
| ----------- | -------------- |
| 1           | 2300           |
| 2           | 3700           |
| 3           | 3000           |

### Problem 21: Find customers who have never placed an order

```sql
SELECT
    customers.customer_id,
    customers.name
FROM customers
LEFT JOIN orders
    ON customers.customer_id = orders.customer_id
WHERE orders.order_id IS NULL;
```

Expected result:

| customer_id | name |
| ----------- | ---- |
| 4           | Dev  |

Alternative using `NOT EXISTS`:

```sql
SELECT c.customer_id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);
```

`NOT EXISTS` clearly expresses an anti-join: find records with no matching row.



## Subqueries, CTEs and CASE

### 10.1 Subqueries

A subquery is a query inside another query.

**Problem 22: Find orders above the average order amount.**

```sql
SELECT *
FROM orders
WHERE amount > (
    SELECT AVG(amount)
    FROM orders
);
```

The inner query calculates the average. The outer query returns orders above that value.

Expected result:

| order_id | customer_id | amount |
| -------- | ----------- | ------ |
| 102      | 2           | 2500   |
| 104      | 3           | 3000   |

### 10.2 CTE — Common Table Expression

A CTE makes complex queries easier to read and organize.

```sql
WITH customer_totals AS (
    SELECT
        customer_id,
        SUM(amount) AS total_spending
    FROM orders
    GROUP BY customer_id
)
SELECT *
FROM customer_totals
WHERE total_spending > 2500;
```

Think of a CTE as a named query result that can be referenced by the main query.

### 10.3 CASE

`CASE` adds conditional logic to SQL.

```sql
SELECT
    order_id,
    amount,
    CASE
        WHEN amount >= 2500 THEN 'High Value'
        WHEN amount >= 1000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_category
FROM orders;
```

Expected classification:

| order_id | amount | order_category |
| -------- | ------ | -------------- |
| 101      | 1500   | Medium Value   |
| 102      | 2500   | High Value     |
| 103      | 800    | Low Value      |
| 104      | 3000   | High Value     |
| 105      | 1200   | Medium Value   |

### 10.4 NULL handling

`NULL` represents missing or unknown data. It is not the same as zero or an empty string.

Incorrect:

```sql
SELECT *
FROM orders
WHERE status = NULL;
```

Correct:

```sql
SELECT *
FROM orders
WHERE status IS NULL;
```

Use `COALESCE` to provide a fallback:

```sql
SELECT
    name,
    COALESCE(city, 'Unknown') AS city
FROM customers;
```

Important interview distinction:

- `COUNT(*)` counts rows.
- `COUNT(column)` counts non-NULL values in that column.
- `COUNT(DISTINCT column)` counts unique non-NULL values.



## Advanced SQL Interview Questions

These problems are especially useful for backend development, financial systems and reporting.

### Problem 23: Find the second-highest salary

Assume an `employees` table:

| employee_id | name  | salary |
| ----------- | ----- | ------ |
| 1           | Aarav | 50000  |
| 2           | Neha  | 70000  |
| 3           | Riya  | 60000  |
| 4           | Dev   | 70000  |
| 5           | Mira  | 40000  |

Approach 1 — DISTINCT with a subquery:

```sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

Expected result: `60000`

We want the second-highest **distinct** salary, not simply the second row after sorting.

Approach 2 — `DENSE_RANK()`:

```sql
WITH ranked_salaries AS (
    SELECT
        name,
        salary,
        DENSE_RANK() OVER (
            ORDER BY salary DESC
        ) AS salary_rank
    FROM employees
)
SELECT name, salary
FROM ranked_salaries
WHERE salary_rank = 2;
```

Expected result:

| name | salary |
| ---- | ------ |
| Riya | 60000  |

#### Window function comparison

| Function       | What happens with ties?                  |
| -------------- | ---------------------------------------- |
| `ROW_NUMBER()` | Different sequential number for each row |
| `RANK()`       | Same rank for ties, then skips ranks     |
| `DENSE_RANK()` | Same rank for ties, no skipped ranks     |

For salaries `70000, 70000, 60000, 50000`:

| Salary | RANK | DENSE_RANK |
| ------ | ---- | ---------- |
| 70000  | 1    | 1          |
| 70000  | 1    | 1          |
| 60000  | 3    | 2          |
| 50000  | 4    | 3          |

### Problem 24: Find duplicate records

Find customers sharing the same name:

```sql
SELECT
    name,
    COUNT(*) AS occurrences
FROM customers
GROUP BY name
HAVING COUNT(*) > 1;
```

For duplicate email addresses:

```sql
SELECT
    email,
    COUNT(*)
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;
```

### Problem 25: Top three highest-paid employees in each department

Assume employees also have a `department_id`.

```sql
WITH ranked_employees AS (
    SELECT
        employee_id,
        name,
        department_id,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC
        ) AS salary_rank
    FROM employees
)
SELECT *
FROM ranked_employees
WHERE salary_rank <= 3;
```

Important concepts:

- `PARTITION BY` creates independent ranking groups.
- `ORDER BY` defines ranking order.
- The outer query filters the window-function result.

If the requirement is exactly three employees per department, use `ROW_NUMBER()` with a deterministic tie-breaker such as `employee_id`.

### Problem 26: Calculate monthly revenue

Assume the `payments` table has a `created_at` timestamp.

```sql
SELECT
    DATE_TRUNC('month', created_at) AS month,
    SUM(amount) AS monthly_revenue
FROM payments
WHERE status = 'successful'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;
```

`DATE_TRUNC('month', ...)` groups timestamps by calendar month.

Why filter successful payments? Pending or failed payments should not be counted as collected payments. The exact definition of revenue depends on the business's accounting rules.

### Problem 27: Find orders without successful payments

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.amount
FROM orders o
WHERE NOT EXISTS (
    SELECT 1
    FROM payments p
    WHERE p.order_id = o.order_id
      AND p.status = 'successful'
);
```

With our sample data, orders `103` and `105` are returned.

### Problem 28: Compare order amount and successful payment amount

This is a simple reconciliation query.

```sql
SELECT
    o.order_id,
    o.amount AS order_amount,
    COALESCE(
        SUM(
            CASE
                WHEN p.status = 'successful' THEN p.amount
                ELSE 0
            END
        ),
        0
    ) AS successful_payment_amount
FROM orders o
LEFT JOIN payments p
    ON p.order_id = o.order_id
GROUP BY o.order_id, o.amount
HAVING o.amount <> COALESCE(
    SUM(
        CASE
            WHEN p.status = 'successful' THEN p.amount
            ELSE 0
        END
    ),
    0
);
```

This identifies orders where successful payment totals differ from the order amount.

A production reconciliation system may also need to consider refunds, partial payments, payment attempts, currencies, settlement status, gateway transaction IDs and time differences.

---

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
