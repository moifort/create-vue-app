# create-vue-app

Bootstrap a VueJs application ready for developpement and put it right away in production!
Hot reloading, developpement server, minification, uglification, scss compilation...

## Prerequise

* [yarn](https://yarnpkg.com/fr/) for development
* [docker](https://www.docker.com) for production

## How to

* Download the project
* In the project folder `yarn install`
* Run the application `yarn dev`
* Go to http://localhost:4000
* Modify some code lines (vuejs, scss), and see in real time your application changing!

## Init your project

* Set properties `name` and `author` in `package.json`
* Set meta data `title` in `index.ejs`
* Modify your favicon in `./static/img/favicon.png`

## Tools and libraries

* [POI](https://github.com/egoist/poi) to prepare and set the project ready for developpement (dev server, hot reloading, minification, uglyfication...).
* Abviously [VueJs 2](https://vuejs.org/v2/guide/)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com) using [SCSS](http://sass-lang.com)
* [Axios](https://github.com/mzabriskie/axios) for http resources
* Docker for deployement
* [http-server](https://github.com/indexzero/http-server) fast/easy http server for production

## How it's work

* **POI** make all the boring work to have ready to start development environment. More information [here](https://poi.js.org/#/home)
* `main.js` is the entry point the POI use to start application.
* `index.ejs` is the html template that POI use to inject the application. In this file you can make you import, change meta, etc.
* `./style` folder contain all the SCSS style file. `bootstrap` contain all the scss file, `vendors` contain all the third library like fontawesom, chartjs, etc. All the file will be compiled and generate automatically. 
* `./static` contains all the image or other static files. Images will be compressed automatically.
* `./src` all your VueJs files.
* To see what looks your project in production mode run `yarn build`. It will generate aggregate minified file: css, javascripts.

## Deploy your application in production with Docker

* In the project folder run `docker build .`
* When finish run `docker run -p 8080:8080 [image id previously build]`
* Go to http://localhost:8080, your website 

## Configure your IntelliJ

* Set the JavaScript version: **Preference > Language & Framework > JavaScript**, select `ECMAScript 6`
* Remove semicolon: **Preference > Editor > Code Style > JavaScript > Punctuation**, select `Don't use`
* Install docker, vuejs, ejs plugins
