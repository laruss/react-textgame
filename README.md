# React TextGame Engine

React Text Game Engine is a powerful tool for creating interactive stories and games. It allows developers to create branching narratives and dynamic game mechanics using the popular React framework. The engine's intuitive point-and-click interface makes it easy to create complex and interactive elements without the need for extensive programming knowledge. Additionally, it provides a wide range of built-in features such as save and load functionality, modal-contents and other game components. Using this engine, developers can create engaging and immersive timely experiences for players while saving time and resources during the development process. With its flexibility and scalability, this engine is perfect for creating interactive fiction, visual novels, and other interactive content.

## Commands:

### `npm install`

Installs all requirements for project

### `npm run story`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

### Main directory to work: `./src/Story`

### `./src/Story/passages`

Directyory to store all the passage-containers.

### `./src/Story/settings.ts`

Project settings. Here you can change start passage and name of the project.

### `./src/Story/variables.js`

File to contain your game variables. You can add there both single variables as `var: 1` and complex as `var: { subvar: ["sub1", "sub"] }` and so on.

### TODO-list:
- [ ]  GBlurText - show text on hover
- [ ]  previous passage handler
- [ ]  error handlings
- [ ]  dark theme creation
- [ ]  adding game settings (fonts, sound, dark theme)
- [ ]  side-menu refactoring
- [ ]  right-side menu extension
- [ ]  change custom fade to `framer-motion`
- [ ]  @media refactoring
- [ ]  landscape banner for mobile devices
- [ ]  creating diffs of versions
- [ ]  tracebacks of the errors
- [ ]  possibility of hiding everything
- [ ]  auto-translations
- [ ]  player interface tutorial
- [ ]  web-application
