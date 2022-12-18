# New Fitness Hut app

Project for "Modelação e Análise de Sistemas", 2022-2023.\
Check the live page at https://rgarrido03.github.io/mas.

## Development
This is a [React](https://reactjs.org/) app, created with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

First, install the Current version of [Node.js](https://nodejs.org/en/) on your computer. Then, open the console inside the project folder, and install the project dependencies by running `npm install`.

Run the app with `npm start`. Node.js will automatically open [http://localhost:3000](http://localhost:3000) on your default browser, and the page will reload when you make changes.

You may also see any lint errors in the console.

## Deployment
The app is deployed on GitHub Pages. To deploy the app, run `npm run deploy`. This will build the app for production to the `build` folder, and then push the build files to the `gh-pages` branch.

Due to the way GitHub Pages works, the app's routing wouldn't work properly on the live page. To fix this, an HTML file named `404.html` was added to the `public` folder, which redirects all requests to the `index.html` file. This file is automatically copied to the `build` folder when the app is built for production.

Because of that, <b>a few changes are required to the app's routing</b>. The `package.json` file has to be modified to add the `homepage` prop, with the value `"https://rgarrido03.github.io/mas"`, and the `BrowserRouter` component needs a `basename` prop, with the value `"/mas"`. An example is shown here 👇:
```json
package.json
{
  "name": "mas",
  "version": "1.0",
  "homepage": "https://rgarrido03.github.io/mas",
  "private": true,
  ...
}
```

```html
index.jsx
<Router basename="/mas">
  ...
</Router>
```
By default, the `main` branch doesn't include these changes. They have to be added every time one wants to deploy the app to GitHub Pages.

## File & folder structure
`package.json`\
Contains the project's dependencies and scripts.

`404.html`\
HTML page that replaces the default GitHub Pages 404 page and redirects all requests to the `index.html` file.

`public`\
Contains the `index.html` file, which is base HTML for every page. It also has the app logos and manifest.

`src`\
Contains the source code for the app.
- The `actorChoosing.jsx` file contains the first page, where you can choose which actor you want to see. A no-PT client is yet to be implemented on v2.0.
- The `notFound.jsx` file contains the default routing page (usually a 404 one). This page is used for all unimplemented features.
- The `api` folder resembles the backend of the app, and contains the data for the app's pages.
- The `css` folder contains stylesheets featuring color, fonts and animations.
- The `img` folder contains images required by the app.
- The `modal`, `footer` and `navbar` folders contain the code for the modal, footer and navbar components, respectively.
- The `client` folder contains the code for the Client pages.
- The `pt` folder contains the code for the Personal Trainer pages.

Every jsx file in the `client` and `pt` folders is a page, and its filename is based on the path. For example, the `client/ClientExercise.jsx` file is the Client Exercise page, and its path is `/client/exercise`.