## Summary {: #summary }

A `<howto-checkbox>` represents a boolean option in a form. The most common type
of checkbox is a dual-type which allows the user to toggle between two
choices -- checked and unchecked.

The element attempts to self apply the attributes `role="checkbox"` and
`tabindex="0"` when it is first created. The `role` attribute helps assistive
technology like a screen reader tell the user what kind of control this is.
The `tabindex` attribute opts the element into the tab order, making it keyboard
focusable and operable. To learn more about these two topics, check out
[What can ARIA do?][what-aria] and [Using tabindex][using-tabindex].

When the checkbox is checked, it adds a `checked` boolean attribute, and sets
a corresponding `checked` property to `true`. In addition, the element sets an
`aria-checked` attribute to either `"true"` or `"false"`, depending on its
state. Clicking on the checkbox with a mouse, or space bar, toggles these
checked states.

The checkbox also supports a `disabled` state. If either the `disabled` property
is set to true or the `disabled` attribute is applied, the checkbox sets
`aria-disabled="true"`, removes the `tabindex` attribute, and returns focus
to the document if the checkbox is the current `activeElement`.

Warning: Just because you _can_ build a custom element checkbox, doesn't
necessarily mean that you _should_. As this example shows, you will need to add
your own keyboard, labeling, and ARIA support. It's also important to note that
the native `<form>` element will NOT submit values from a custom element. You
will need to wire that up yourself using AJAX or a hidden `<input>` field. For
these reasons it can often be preferrable to use the built-in `<input
type="checkbox">` instead.

## Reference {: #reference }

- [Checkbox Pattern in ARIA Authoring Practices 1.1][checkbox-pattern]
- [What can ARIA Do?][what-aria]
- [Using tabindex][using-tabindex]

[checkbox-pattern]: https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox
[what-aria]: https://developers.google.com/web/fundamentals/accessibility/semantics-aria/#what_can_aria_do
[using-tabindex]: https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
