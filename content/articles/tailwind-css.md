# Tailwind CSS

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 1276–1319](/research?document=interview&start=1276&end=1319). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Tailwind CSS — Utility Styling After CSS Foundations

### What is Tailwind CSS, and why learn ordinary CSS first?

Tailwind CSS generates CSS utilities that you compose in markup. A class such as `p-4` applies padding; `flex` changes the layout mode. You still need the box model, cascade, flexbox, grid and responsive design to understand the result. Tailwind is a styling system, not a JavaScript UI framework.

### Responsive and Accessible Components

Unprefixed utilities define the base style. Breakpoint variants such as `md:` apply at that minimum width and above. Start with a usable narrow layout, then enhance it for wider screens. A small screen is not necessarily a mobile device. [Official responsive-design reference](https://tailwindcss.com/docs/responsive-design).

```html
<article class="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
  <div>
    <h2 class="text-xl font-semibold">Placement applications</h2>
    <p class="mt-2 text-slate-700">Review your submitted applications.</p>
  </div>
  <button
    type="button"
    class="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800
           focus-visible:outline-2 focus-visible:outline-offset-2
           disabled:cursor-not-allowed disabled:opacity-50">
    View applications
  </button>
</article>
```

The base layout has one column; the medium breakpoint introduces two. The button keeps native keyboard behavior. Styling alone does not supply accessible names, form labels, error announcements or correct contrast; check those independently.

### Class Detection and Component Reuse

Use complete class names in conditional mappings. Constructing a class such as `bg-${color}-500` can prevent the build from detecting it. Choose between complete alternatives instead. [Official class-detection reference](https://tailwindcss.com/docs/detecting-classes-in-source-files).

Extract repeated markup into components rather than hiding every utility behind a new custom CSS class. Prefer shared spacing and color tokens to unrelated arbitrary values. In a React component, the attribute is `className`, not `class`.

### Interview Questions and Practice

**Why can a Tailwind class work locally but disappear in a build?** Inspect source detection, dynamically assembled names and whether the stylesheet is included. Confirm the project's Tailwind version before copying configuration: installation and theme configuration differ across major versions.

**Does Tailwind replace CSS?** No. It expresses CSS choices through generated utilities. You must still explain why a layout overflows or which rule wins.

**Practice:** Build a labelled registration form with a responsive grid, visible keyboard focus, validation messages and disabled submission state. Inspect the computed styles in DevTools and explain each utility you chose.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
