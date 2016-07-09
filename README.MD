# HapiJs MegaBoilerPlate

It's not only a boiler plate. ITS A MEGA BOILER PLATE. With things... NOT SUPPOSED TO BE PART OF THE BIOLER PLATE. *bwahaha*

**This boilerplate is setup for the ff:**
* JADE (because clean)
* LESS (because its more maintainable)
* BOWER (because everything is in bower)
* GRUNT (for DEPLOYMENT ONLY)
* NODEMON.JS (configurations for nodemon)
* Some file architecture
* Controller System


## Folder Architecture
```
bower-components\
assets\
  style\
api\
  controller\
config\
templates\
```
## Default Routes
* `assets\style\**.less`  - compiles files less files on the fly
* `assets\js\**.js`       - returns js files
* `assets\lib\**.*`       - maps to *bower-components*
* `assets\min\**.min.*`   - config file that contains a pseudo min a css/js file `TODO`

**bower example usage**
* Do `bower install jquery`
* Find `bower_components\jquery\dist\jquery.min.js\`
* Include `<script src="assets\lib\jquery\dist\jquery.min.js"></script>`

# TODO
* `npm build` Runs grunts tasks that builds the minis and shit like that
* include sequelize in the boiler plate
*
