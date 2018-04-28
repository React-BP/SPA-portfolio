![React](./public/favicon.ico)
# SPA : Single Page App
##### Brought to you by Team React BP

This is a React boilerplate single page responsive portfolio app. There are a ton of components you can use to build your own custom app. This package is bootstrapped with [Creat React App](https://github.com/facebook/create-react-app/blob/next/README.md). It utilizes [React Parallax](https://www.npmjs.com/package/react-parallax), [React-Modal](https://www.npmjs.com/package/react-modal), CSS Grid and a __data json__ to store the info of your portfolio items (or whatever items you choose.)

# Components
* Navbar
    -With Icon and Text Links
* Side Dot Nav
    -Makes you to the next component
* Billboard
    -Large Display Text
* About
    -2 column component
* Portfolio Cards
    -Responsive Card Component populated by the JSON.
* Portfolio Detail
    -Another 2 column component
* Detail Modal
    -Modal with more details for you portfolio item
* Footer
    -Text and icon links for your contact info
* card-data.json
    -This hold the data that populates the cards, just add your own info

# Folder Structure

```
README.md
node_modules
├──package.json
├──public
    ├──favicon.ico
    ├──index.html
    ├──manifest.json
├──src
    ├──App.css
    ├──App.js
    ├──App.test.js
    ├──card-data.json
    ├──components
        ├──About
        ├──Arrow
        ├──Billboard
        ├──Card
        ├──CardBox
        ├──DetailModal
        ├──Dotnav
        ├──Footer
        ├──Items
        ├──Navbar
        ├──Wrapper
    ├──images
    ├──index.css
    ├──index.js
    ├──registerServiceWorker.js

```
# card-data.json Structure
* id - number
* img - image of your portfolio item
* alt - alt text for your portfolio item
* title - title of your portfolio item
* desc - description of your portfolio item
* button - text for the button on the card

### You're awesome! Have fun creating your React BP App.