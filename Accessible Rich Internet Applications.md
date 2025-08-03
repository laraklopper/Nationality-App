# Accessible Rich Internet Applications (ARIA)

#### **INTRODUCTION**
The domain of web accessibility defines how to make web content usable by persons with disabilities. Accessible Rich Internet Applications (ARIA) define ways to make the web more accessible to people with disabilities. ARIA attributes improve accessibility for users relying on assistive technologies. Many standard HTML elements have built-in accessibility features. However, when developers create custom components (like modals, tabs, sliders, etc.), these features might not be present. 

## TABLE OF CONTENTS
1. [KEY ARIA ROLES](#key-aria-roles)
2. [COMMON ARIA ATTRIBUTES](#common-aria-attributes)
3. [REFERENCES](#references)


ARIA bridges this gap by:

- Providing semantic information to assistive technologies (e.g., screen readers).
- Enhancing the usability of interactive elements for users with disabilities.
- Enabling dynamic content updates to be communicated effectively.

##  KEY ARIA ROLES

ARIA defines a number of **roles** that describe the type of widget presented to the user:

| Role | Description |
|------|-------------|
| `button` | Identifies an element as a button |
| `dialog` | Marks a dialog window |
| `navigation` | Denotes a navigation section |
| `alert` | Marks a message that should grab the user’s attention |
| `tooltip` | Describes a pop-up that provides more information |

## COMMON ARIA ATTRIBUTES

| Attribute | Use |
|-----------|-----|
| `aria-label` | Provides a label to an element |
| `aria-hidden` | Hides an element from assistive technologies |
| `aria-live` | Indicates content updates to screen readers |
| `aria-expanded` | Indicates the expanded/collapsed state |
| `aria-controls` | Identifies the elements controlled by a widget |
| `aria-pressed` | State of a toggle button |

## REFERENCES

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides
- https://www.w3.org/TR/wai-aria-1.2/#intro_ria_accessibility