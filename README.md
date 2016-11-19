# Workout Visualizer
This is an app to test out react and d3. The idea is to be able to put in as much data as possible and give the user a plethora of ways to see it. My first goal will be to take in an array of days that will have your workout information for each day (which includes sessions, sets, and individual exercises) and present your performance over a range of time.

Below are some words taken directly from the starter kits I used to get this thing going.

# react-webpack-babel
Simple React Webpack Babel Starter Kit

Tired of complicated starters with 200MB of dependencies which are hard to understand and modify?

Try this is a simple [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application with nothing else in it.

https://github.com/alicoding/react-webpack-babel

# Playing With React and D3
Playing With React and D3 by freddyrangel is a short introduction to React and D3. If you want to learn more about React, take a look at [React Under the Hood](https://gumroad.com/l/react-under-the-hood). To learn more about using React with D3, take a look at [React + D3.js](http://swizec.com/reactd3js/).

https://github.com/freddyrangel/playing-with-react-and-d3/

### What's in it?

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your css by ```import styles from './path/to.css';```.
* Both js(x) and css hot loaded during development.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/senterright/Workout-Visualizer.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* other styles are considered global styles used by many components and are included in the css bundle directly.
