# Accessible Rich Internet Applications (ARIA)

#### **INTRODUCTION**

The domain of web accessibility defines how to make web content usable by persons with disabilities.
HTML provides various features to improve web accessibility, and one powerful tool is ARIA (`Accessible Rich Internet Applications`) attributes. ARIA attributes extended HTML features, providing additional features to enhance web content and make it more usable for users with disabilities using assistive technoligies such as screen readers.

## TABLE OF CONTENTS
1. [KEY ARIA ROLES](#key-aria-roles)
2. [COMMON ARIA ATTRIBUTES](#common-aria-attributes)
3. [REFERENCES](#references)


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

### EXAMPLES OF ARIA ATTRIBUTES BEING USED

```javascript
    <Row id='headerRow' aria-labelledby="main-title">
    <header id='header' role='banner' aria-label="Main header">
      {/* Render a column with an id and className */}
          <Col id='headerCol'>
            <h1  id="mainTitle" aria-label='mainTitle'>
              NATIONALITY API
            </h1>
          </Col>
    </header>
     </Row >
```
```javascript
<label htmlFor='nameInput' className='label' id='nameLabel'>
         <p id='labelText'>Enter a name to get the country</p>
                <input
                     type='text'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     ref={inputRef}
                        autoComplete='off'
                        required
                        id='nameInput'
                        aria-label='name-input'
                        aria-required='true'        
                        placeholder='Enter a name'
                        />
                        </label>
                       
```

## REFERENCES

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides
- https://www.w3.org/TR/wai-aria-1.2/#intro_ria_accessibility
- https://www.geeksforgeeks.org/html/how-to-use-aria-attributes-to-enhance-accessibility-in-html/
- https://accessibe.com/glossary/aria