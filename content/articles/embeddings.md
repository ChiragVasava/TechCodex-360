# Embeddings

An embedding represents an item as a vector in a space intended to preserve useful relationships for a task. Items may be words, passages, images, products, users, or other structured inputs.

## Representation is a modeling choice

The dimensions of a learned vector generally do not have simple human-readable meanings. Nearness means similarity under a particular representation and distance function, not guaranteed factual equivalence.

In a two-tower retrieval model, one model encodes the query and another encodes candidates into compatible vector spaces. A scoring operation compares the two. This is illustrated in [TensorFlow Recommenders](https://www.tensorflow.org/recommenders/examples/basic_retrieval).

## A small similarity example

For nonzero vectors, cosine similarity divides the dot product by the product of their lengths. This JavaScript example uses tiny illustrative vectors, not outputs from a trained language model:

```javascript
function cosine(a, b) {
  if (a.length !== b.length || a.length === 0) {
    throw new Error("Expected equal nonempty dimensions");
  }
  const dot = a.reduce((sum, value, i) => sum + value * b[i], 0);
  const lengthA = Math.hypot(...a);
  const lengthB = Math.hypot(...b);
  if (!lengthA || !lengthB) throw new Error("Zero vector");
  return dot / (lengthA * lengthB);
}
console.log(cosine([1, 0], [1, 1])); // about 0.707
```

Production code also needs finite-value checks and bounds on dimensions and resource use. Some retrieval models use dot product rather than cosine; use the scoring rule the model was designed for.

## Common failures

Vectors from incompatible models or preprocessing pipelines should not be mixed in one index without a justified transformation. Record model identity, dimensionality, input preparation, and index version.

Embedding a private document does not remove its sensitivity. Apply access controls to both stored content and retrieval results. Approximate nearest-neighbor search trades exactness for efficiency and needs measurement.

## Exercise

Write ten domain questions and manually label relevant documents. Compare retrieval results with those labels, including similar-looking but irrelevant passages. Assessment: distinguish retrieval quality from the quality of a generated answer. Continue with [RAG](/knowledge/rag), [machine learning](/knowledge/machine-learning), and [data engineering](/knowledge/data-engineering).
