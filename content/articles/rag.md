# Retrieval-augmented generation

Retrieval-augmented generation (RAG) combines information retrieval with a generative model. A system retrieves material relevant to an input and makes that material available during answer generation.

## Why retrieve before generating?

A model's parameters are not a complete, current, auditable copy of your documents. Retrieval creates a path to source material that can be maintained separately. It does not guarantee that the model understands or faithfully uses that material.

The original [RAG paper](https://arxiv.org/abs/2005.11401) studied a particular combination of a sequence-to-sequence generator and dense retrieval over Wikipedia. Contemporary engineering usage is broader; an arbitrary document chatbot does not necessarily implement the paper's training method.

## Architecture and boundaries

```text
documents → parse and preserve provenance → index
                                           ↑
question → access policy → retrieve → select context
                                           ↓
                                  generate response
                                           ↓
                               check support and cite
```

[Data engineering](/knowledge/data-engineering) manages ingestion, updates, deletion, and reproducibility. [Embeddings](/knowledge/embeddings) can support semantic retrieval, but keyword search or hybrid retrieval can also be suitable. A vector database is an implementation choice, not the definition of RAG.

## Example: asking the codex a question

Suppose the question is “Does a USB connector prove that a board supports HID?” A retrieval stage should find the exact board documentation and the [USB HID](/knowledge/usb-hid) explanation. An answer should distinguish a physical connector, controller capabilities, and firmware support.

If no exact model is known, the system should ask for that information or state the limitation. A source about one board variant is not evidence for every variant.

## Evaluate the stages separately

Start with a fixed set of questions and expected supporting passages. Measure whether retrieval finds those passages before adding a generator. Then review answer correctness, source support, citation accuracy, and behavior when the corpus lacks an answer.

Removing a document must remove its retrievable chunks as well. Track document versions and source ranges so an answer can be traced to the evidence actually used.

## Security and reliability

Retrieved text is untrusted input. It must not override application instructions or grant permissions. Filter access before material is exposed to a model or user, and recheck policy where appropriate. [Authorization](/knowledge/authorization) applies to individual documents and derived data.

Long context, stale indexes, poorly chosen chunks, and superficially similar passages can produce confident mistakes. Do not treat a displayed citation as proof that it supports the accompanying claim.

## Practical exercise

Build a retrieval-only prototype over ten public technical documents. Save query, retrieved source IDs, source versions, and human relevance judgments. Add generation only after this baseline is understandable. Assessment: demonstrate an answerable question, an unsupported question, a stale document, and a denied document without exposing restricted content. Continue with [testing](/knowledge/testing), [observability](/knowledge/observability), and [input validation](/knowledge/input-validation).
