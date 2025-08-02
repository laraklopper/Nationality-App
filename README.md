# NATIONALITY API CALL

## TABLE OF CONTENTS
1. [WHAT_THE_APPLICATION_DOES](#what-the-application-does)
2. [HOW_TO_START_THE_APPLICATION](#how-to-start-the-application)
3. [STYLING](#styling)
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

## STYLING

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
**Martian Mono: CSS class for a variable style**
```
  font-family: "Martian Mono", monospace;
```
Used in the output
**Alkatra: CSS class for a variable style**
```
font-family: "Alkatra", system-ui;
```
Used in the header

**Permanent Marker: CSS class**
```
  font-family: "Permanent Marker", cursive;
```
Used in the output heading
**Signika: CSS class for a variable style**

```
    font-family: "Signika", sans-serif;
```
Used in form tags
## REFERENCES

- https://nationalize.io/
- https://fonts.google.com/
- https://react-bootstrap.netlify.app/
- https://color.adobe.com/create/color-wheel
- https://www.w3schools.com/colors/colors_groups.asp
- https://react.dev/blog/2023/03/16/introducing-react-dev