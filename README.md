## Dataviz demo using D3 with React Hooks

<a href="https://d3js.org"><img src="https://d3js.org/logo.svg" align="left" hspace="10" vspace="6"></a>

This demo was made for the Montreal [Data Viz Jam Sessions](https://www.meetup.com/Data-Viz-Jam-Sessions-MTL/) meetup as a [Makeover Monday](https://www.makeovermonday.co.uk/data/) excercise using data from [data.world](https://data.world/makeovermonday/2020w3-is-it-time-to-treat-sugar-like-smoking) on dietary sugar consumption [in the UK](https://www.nutrition.org.uk/nutritioninthenews/new-reports/ndnsyears7and8.html).

The data is from [Week 3, Jan 20, 2020](https://www.makeovermonday.co.uk/data/) of the Makeover Monday data sets.

<br>

You can see the live demo at [https://sugardata.netlify.com](https://sugardata.netlify.com)

## Installation

Clone this repo using `git clone https://github.com/anselbrandt/dataviz-sugar.git`

Or [download](https://github.com/anselbrandt/dataviz-sugar/archive/master.zip) it.

```shell
$ cd dataviz-sugar
```

Install npm packages

```shell
$ npm install
```

Then start

```shell
$ npm start
```

<br>

#### Notes:

The CSV data was converted to JSON for intial inspection, which isn't really necessary since D3 has great CSV handling.

If you're curious, the conversion script is in the `/utils` folder.

<br>

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
