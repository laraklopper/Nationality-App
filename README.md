# NATIONALITY API CALL

## TABLE OF CONTENTS
1. [WHAT_THE_APPLICATION_DOES](#what-the-application-does)
2. [HOW_TO_START_THE_APPLICATION](#how-to-start-the-application)
3. [FEATURES](#features)
4. [REFERENCES](#references)
 
## WHAT THE APPLICATION DOES

The application only includes front-end code using react.js
```
npx create-react-app@latest nationality-app
```
The application  uses `https://nationalize.io/` to make a third party API call which provides data relating to the nationality of the name entered in the form.


## HOW TO START THE APPLICATION

To clone the app from github use `git clone` in the `terminal` (or Command Line Interface `CLI`) 
```
git clone [url]
```
To install the necessary packages use `npm install` in the `terminal` (or Command Line Interface `CLI`) 
```
npm i
```
To start the application use `npm start` in the `terminal` (or Command Line Interface `CLI`) 
```
npm start 
```
## FEATURES

### ARIA-ATTRIBUTES

The application uses `ARIA` (`Accessible Rich Internet Applications`) attributes to make the application more user freindly for users using accessibility for users relying on assistive technologies.

### STYLING

The application uses bootstrap and google fonts and css for styling.

**BOOTSTRAP**
```
npm install react-bootstrap bootstrap
```
**GOOGLE FONTS**
In the `/public/index.html` file

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&family=Martian+Mono:wdth,wght@75,100..800&family=Permanent+Marker&family=Signika:wght@300..700&display=swap" rel="stylesheet">


```
##### GOOGLE FONTS USED
- Martian Mono: CSS class for a variable style
- Alkatra: CSS class for a variable style
- Permanent Marker: CSS class
- Signika: CSS class for a variable style
```
<!-- Martian Mono -->
  font-family: "Martian Mono", monospace;
<!-- Alkatra  -->
  font-family: "Alkatra", system-ui;
<!-- Permanent Marker -->
  font-family: "Permanent Marker", cursive;
<!-- Signika -->
  font-family: "Signika", sans-serif;
```
## REFERENCES

- https://nationalize.io/
- https://fonts.google.com/
- https://react-bootstrap.netlify.app/
- https://color.adobe.com/create/color-wheel
- https://www.w3schools.com/colors/colors_groups.asp
- https://react.dev/blog/2023/03/16/introducing-react-dev
- https://www.w3schools.com/tags/tag_meta.asp
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes
- https://www.geeksforgeeks.org/html/how-to-use-aria-attributes-to-enhance-accessibility-in-html/
