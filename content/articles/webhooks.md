# Webhooks

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 31080–31208](/research?document=interview&start=31080&end=31208). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Payment Integration and Webhooks

### Q17.24. How does a payment integration work?

A typical flow:

1. Customer clicks Pay.
2. Frontend calls the backend.
3. Backend retrieves the order and calculates the payable amount.
4. Backend creates a payment order with the provider.
5. Customer completes checkout.
6. Provider sends a webhook or checkout response.
7. Backend verifies authenticity.
8. Backend updates the payment record.
9. Order or invoice status is updated according to business rules.

Example endpoint:

```http
POST /api/payments/create
```

Request:

```json
{
  "orderId": 101
}
```

The backend should look up the order and calculate the amount itself. It should not trust a client-supplied amount.

Illustrative response:

```json
{
  "paymentId": "pay_12345",
  "providerOrderId": "order_98765",
  "status": "CREATED"
}
```

### Q17.25. Why should the backend create payment orders?

Because the backend enforces the application's business rules.

Suppose the actual order total is ₹15,000. If the frontend is allowed to dictate the amount, a malicious user could try to change it to ₹1.

The backend should:

1. Retrieve the order from the database.
2. Verify the user's ownership and authorization.
3. Calculate the payable amount from trusted records.
4. Create the provider payment order.
5. Store the provider reference.

The frontend can display the amount, but it must not be the authoritative source.

### Q17.26. What is a webhook?

A **webhook** is an HTTP callback sent by one system to another when an event occurs.

For example, a payment provider might send:

```http
POST /api/webhooks/payment
```

Illustrative event:

```json
{
  "event": "payment.captured",
  "payment": {
    "id": "pay_12345",
    "order_id": "order_98765",
    "amount": 1500000,
    "currency": "INR"
  }
}
```

The amount is illustrative and uses a minor-unit representation. Always follow the actual provider's amount and currency conventions.

Why are webhooks useful? The browser might close or lose its connection after a payment succeeds. The provider can still notify the backend independently.

The backend should:

- Verify webhook authenticity.
- Validate the event and its expected payment/order relationship.
- Deduplicate repeated deliveries.
- Update records transactionally.
- Return an appropriate HTTP response.
- Support safe retries.

### Q17.27. What is webhook signature verification?

Providers commonly sign webhook payloads using a secret. The backend verifies the signature to check that the event came from the expected provider and was not modified.

Conceptually:

```text
Webhook request
       |
       v
Read raw request body
       |
       v
Calculate expected signature
       |
       v
Compare with supplied signature
       |
       +-----> Invalid: reject
       |
       v
Valid: process event
```

A generic HMAC-SHA256 example in Python:

```python
import hashlibimport hmacdef verify_signature(payload, supplied_signature, secret):    expected = hmac.new(        secret.encode(),        payload,        hashlib.sha256    ).hexdigest()    return hmac.compare_digest(        expected,        supplied_signature    )
```

This is a generic example, not a drop-in integration for every provider. Providers differ in header names, signature formats, raw-body requirements, encoding and timestamp validation. Use the provider's official verification procedure.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
