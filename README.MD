# HapiJs MegaBoilerPlate

It's not only a boiler plate. ITS A MEGA BOILER PLATE. 
With things... NOT SUPPOSED TO BE PART OF THE BOILER PLATE. *bwahaha*

**This boilerplate is setup for the ff:**
* JADE (because clean)
* LESS (because its more maintainable)
* SEQUELIZE (because ORM)
* BOWER (because everything is in bower)
* GRUNT (for easieness ONLY)
* NODEMON.JS (configurations for nodemon)
* Some file architecture
* Controller System

## Getting Started

### Installation
`npm install && npm install -g grunt-cli && npm install -g nodemon`  
If you don't want to install the cli stuff, you have to change `start.sh`

### Lazy Start
`npm start` runs `start.sh` which runs nodemon +g grunt watch in the background

### Actual Start
`$terminal1: grunt watch`
`$terminal2: nodemon`


## Folder Architecture
```
bower-components\
assets\
  style\
api\
  model\
  controller\
config\
templates\
```

## Routing

### Default Routes
* `assets\style\**.less`  - compiles files less files on the fly
* `assets\lib\**.*`       - maps to *bower-components*
* `assets\**`             - returns files as is
* 


### Controller Routes
* `api\controller\Foo.js` - Maps to *host/foo*
* `api\controller\BarController.js`  - Maps to *host/bar*

*WARNING*: Do NOT name your controller `ControllerController`. You dick.

**bower example usage**
* Do `bower install jquery`
* Find `bower_components\jquery\dist\jquery.min.js\`
* Include `<script src="assets\lib\jquery\dist\jquery.min.js"></script>`

## Controllers
* Are just json objects. Which are directly plugged into `(new Hapi.Server).route(...)`
* See http://hapijs.com/tutorials/routing
* But they are auto included if they are in *api/controller/*
* If no path is given it auto generates one from the filename

## Models
* Are just json objects. Which are directly plugged into `sequelize.define(...,{...})`
* See http://docs.sequelizejs.com/en/latest/
* But they are auto included if they are in *api/model/*
* The filename becomes a global. Ie. `api/model/User` can be accessed via `global.User`

## Grunt Watch
* The grunt watch simply concatenates all the files in this pattern `assets/**/*.js`
* It moves it into `.tmp/js/app.min.js` ( in dev mode, its not minified )

# TODO
* `npm build` Runs grunts tasks that builds the minis and shit like that
