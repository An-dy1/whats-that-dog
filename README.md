# About

I created this project as an example app for the LiftOff portion of the [LaunchCode Women+ web development boot camp](https://www.launchcode.org/women-plus).

I am also using it to practice React, which I've been learning in 2022.

The idea is that it's a quasi-clone of The Knot, a site for creating personalized wedding websites. Instead of a wedding planning site, however, it is a dog breed reveal planning site.

My goal is to deploy this in its roughest, most MVP shape, and then keep v1 available as I refine the site in order to show how iterative software engineering is.

# To run:

1. Start the Express serve on port 5001:

```
cd server
npm install
npm start
```

2. Start the React app on port 3000:

```
cd app
npm install
npm start
```

# Tech stack

- Database: Mongodb
- API: Express
- Front-end: React
- Server: Node

# Supporting links

[My Trello board](https://trello.com/b/cCc8HnOe/guess-my-dog)
[Miro board](https://miro.com/app/board/uXjVOhG86lE=/)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Things I need to do to set up connection with mongo

1. See if I can create a new cluster
2. If not, just create a new schema?
3. install mongo client
4. import in a new db directory/file

### Things I still want to reinforce:

- when/why you'd use an arrow function over the classic way of declaring functions
- ES6 syntax vs CommonJS - why you'd use one over the other
- callback functions

### TODO: improvements that don't fit in the repo in-line

1. One script to start the server and front-end? Is there some reason that would not be a good idea?

### Thigns I'm learning/challenges:

1.
