# 5e-homebrew-monsters

A front-end application to help users homebrew creatures and export their creation into the typical 5e monster format.
Currently can be found at: https://tjcowx.github.io/5e-homebrew-monsters/

## VERSIONS

### 0.3.1 (2020-10-8)

- Added a new feature. This allows the stat block to be toggled with two columns if 1 is too long for you
- The app is now mobile responsive. This means it is no longer hard to use on a smaller screen.

### 0.3.0 (2020-10-06)

- Added Passive perception into the stat block. This only shows up if the monster is proficient in perception
- Speed is now moved from a text input into it's own set of fields which have the speeds setup via their own property
- Senses have moved from a multi-select into it's own set of fields where you can put the range of the sense
- Added Roll20 monster help guide to the navigation menu
- Fixed an issue where the image may be cut off. This requires the page to scroll to the top to work functionally before it exports now
- Updated expansion panel headers to describe what is inside it better.
- Added standard legendary action summary to the Legendary Actions section of the stat block

### 0.2.2 (2020-09-29)

- Added navigation bar to link to 5-homebrew-items
- Added version number on the site to quick reference it

### 0.2.1 (2020-09-17)

- Added the type field to the stat builder

### 0.2.0 (2020-09-16)

- Added the stat block generator. Image generation is still yet to come

### 0.1.0

- Basic form has been added. Image generation is still in the works
- Can export configurations and import them now.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
