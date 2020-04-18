# ComicClan - React Webapp Specification

### Description


ComicClan, an online community of comic book enthusiasts, has contacted you to help them develop their new online library of comic books. The library will represent the combined collection of comic books owned by the community members.

Fortunately enough, all the data is already cataloged into their DB with a simple API delivering all the information you need. They are asking that you develop a React web-app based on a provided design.


### Specifications

- Implement the following designs into a working web application based on React.
- The API endpoint for the list of comic books is accessible at `https://comicclan.vett.io/comics`. 
  - For authentication pass the following header:  `Authorization: Bearer ComicClanVettIO2019`.
  - If you add the `?q=<term>` url parameter you’ll get a filtered list of comic books based on their name.
- Parse the API response and display the results as outlined in the design (including the inner page).
- The application should allow the following grouping categories:
  - Year (default)
  - Writer
  - Artist
  - Owner
  - Random
- The application should allow searching for comic books based on a name (or partial name).
- It is highly recommended that you use [Redux](https://redux.js.org/) for state management and [ReactRouter](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
- You may use any boilerplate of your choice or start completely clean.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
