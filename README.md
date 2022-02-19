# React TextGame Engine

### This is template to create React Text Games.

### Main directory to work: `./src/Story`

### There are 4 .js files in it:

### `./src/Story/stories/01.js`

Sample story file, located in stories folder, which you can create so many as you want.
either way they won't be work.

### `./src/Story/images.js`

File for image registration.

#### _Caution:_
Images will be imported automatically from `./src/images` and all sub-folders. You can call an image by calling path to image after `images` folder.

#### <b>E.G.:</b> 
For example, you have an image file "sample.jpg" with path `./src/images/samples/sample.jpg`. You can call image in the game by code `images.samples.sample`


### `./src/Story/settings.js`
Project settings. Here you can change start passage and name of the project.
Also there is "debug" variable. If you need to debug project and variables.

If `true` variables and current passage won't be saved and will be changed to default after reloading the page

If `false` variables will be stored and passages will be changed.

_Please do not change initial object, you can add your key and values there, if you want_

### `./src/Story/variables.js`

File to contain your game variables. You can add there both single variables as `var: 1` and complex as `var: { subvar: ["sub1", "sub"] }` and so on.


## Commands:

### `npm install`

Installs all requirements for project

### `npm run story`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
