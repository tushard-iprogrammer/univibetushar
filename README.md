# Univibe Front End Rewrite

## Basics
The project has been generated using the Yeoman generator, for more on this please read up on the [Yeoman Project](http://yeoman.io/), using the [angular-cg generator](https://github.com/cgross/generator-cg-angular) by cgross, for using the best practices around making modular angular enterprise grade applications. Tasks are automated using the grunt task runner. The styling is done using LESS, on a bootstrap base

## Requirements
- Node, NPM (latest stable version, this was built on node v6.6.0)
- Bower, installed using `npm install -g bower`
- Yeoman, installed using `npm install -g yo`
- Grunt, for task automation, installed using `npm install -g grunt && npm install -g grunt-cli`

## Setup Up & Serving locally
- Clone this git repo into univibenew
- `cd univibenew && npm install && bower install`
- To serve the site locally, use the command `grunt serve` and open `http://localhost:9001`
- To build the site, use `grunt build`

## Changes to configuration
- Configurations for task automation can be made in the Gruntfile.js
- LESS styles for individual elements must be written in respective modules
- Additional modules can be added by the instructions present [here](https://github.com/cgross/generator-cg-angular)
- Any element that is used on all screens are to be designed as directives (Refer sample directives under the common & feed modules)

### Directory Layout
All subgenerators prompt the user to specify where to save the new files.  Thus you can create any directory structure you desire, including nesting.  The generator will create a handful of files in the root of your project including `index.html`, `app.js`, and `app.less`.  You determine how the rest of the project will be structured.

In this example, the user has chosen to group the app into an `admin` folder, a `search` folder, and a `service` folder.


    app.less ....................... main app-wide styles
    app.js ......................... angular module initialization and route setup
    index.html ..................... main HTML file
    Gruntfile.js ................... Grunt build file
    /admin ......................... example admin module folder
      admin.js ..................... admin module initialization and route setup
      admin.less ................... admin module LESS
      /admin-directive1 ............ angular directives folder
        admin-directive1.js ........ example simple directive
        admin-directive1-spec.js.... example simple directive unit test
      /admin-directive2 ............ example complex directive (contains external partial)
        admin-directive2.js ........ complex directive javascript
        admin-directive2.html ...... complex directive partial
        admin-directive2.less ...... complex directive LESS
        admin-directive2-spec.js ... complex directive unit test
      /admin-partial ............... example partial
        admin-partial.html ......... example partial html
        admin-partial.js ........... example partial controller
        admin-partial.less ......... example partial LESS
        admin-partial-spec.js ...... example partial unit test
    /search ........................ example search component folder
      my-filter.js ................. example filter
      my-filter-spec.js ............ example filter unit test
      /search-partial .............. example partial
        search-partial.html ........ example partial html
        search-partial.js .......... example partial controller
        search-partial.less ........ example partial LESS
        search-partial-spec.js ..... example partial unit test
    /service ....................... angular services folder
        my-service.js .............. example service
        my-service-spec.js ......... example service unit test
        my-service2.js ............. example service
        my-service2-spec.js ........ example service unit test
    /img ........................... images (not created by default but included in /dist if added)
    /dist .......................... distributable version of app built using grunt and Gruntfile.js
    /bower_component................ 3rd party libraries managed by bower
    /node_modules .................. npm managed libraries used by grunt

Grunt Tasks
-------------

Now that the project is created, you have 3 simple Grunt commands available:

    grunt serve   #This will run a development server with watch & livereload enabled.
    grunt test    #Run local unit tests.
    grunt build   #Places a fully optimized (minified, concatenated, and more) in /dist

When `grunt serve` is running, any changed javascript files will be linted using JSHint as well as have their appropriate unit tests executed.  Only the unit tests that correspond to the changed file will be run.  This allows for an efficient test driven workflow.

Yeoman Subgenerators
-------------

There are a set of subgenerators to initialize empty Angular components.  Each of these generators will:

* Create one or more skeleton files (javascript, LESS, html, spec etc) for the component type.
* Update index.html and add the necessary `script` tags.
* Update app.less and add the @import as needed.
* For partials, update the app.js, adding the necessary route call if a route was entered in the generator prompts.

There are generators for `directive`,`partial`,`service`, `filter`, `module`, and `modal`.

Running a generator:

    yo cg-angular:directive my-awesome-directive
    yo cg-angular:partial my-partial
    yo cg-angular:service my-service
    yo cg-angular:filter my-filter
    yo cg-angular:module my-module
    yo cg-angular:modal my-modal

The name paramater passed (i.e. 'my-awesome-directive') will be used as the file names.  The generators will derive appropriate class names from this parameter (ex. 'my-awesome-directive' will convert to a class name of 'MyAwesomeDirective').  Each sub-generator will ask for the folder in which to create the new skeleton files.  You may override the default folder for each sub-generator in the `.yo-rc.json` file.

The modal subgenerator is a convenient shortcut to create partials that work as modals for Bootstrap v3 and Angular-UI-Bootstrap v1.3 (both come preconfigured with this generator).  If you choose not to use either of these libraries, simply don't use the modal subgenerator.

Subgenerators are also customizable.  Please read [CUSTOMIZING.md](CUSTOMIZING.md) for details.

Submodules
-------------

Submodules allow you to more explicitly separate parts of your application.  Use the `yo cg-angular:module my-module` command and specify a new subdirectory to place the module into.  Once you've created a submodule, running other subgenerators will now prompt you to select the module in which to place the new component.

## Dynamic Right Panel Rendering
The signed in section has a right panel, depending on the page / route that is being rendered, this is called using an angular event, emitted with the following code: `$scope.$emit('render-right-panel', { page: 'feed' });` . The event name must remain the same, the page section can differ based on which route is currently active. If the developer chooses not to render the right panel at all, use `null` in the page argument, or do not call this function at all.

Right panel consists of contextually relevant information, so in listing pages, this will consist of filters and other stuff. In case of feed, it will show events, and snippets from other sections on the site. Regardless of what is rendered, it's height must always equal less than viewport height

## Form Input Guidelines
To save vertical space, this project styles the form elements using the material-styling guidelines. To enable that, it is important that all input elements have the `material-style` class attached to them in DOM.

These elements must be succeeded immediately by a label element for the intended material effect, all labels must carry the `sr-only` class with them. Input elements shall not have a placeholder text in this view.

However, the form shall be rendered differently for forms that are spawned from the listing pages (such as all opportunities -> Add new). These forms will be traditional and are given in `modules/common/partial/opp-form` partial. This is to ensure a separate form page, apart from the main `editor` module.

## Links that work
Following links work at this point in time:
| Page                  | Page URL                                                              | Element                                                                           | Direct URL                        |
|---------------------  |-------------------------------------------------------------------    |---------------------------------------------------------------------------------  |--------------------------------   |
| Landing               | http://localhost:9001/#/welcome                                       | Log In                                                                            | http://localhost:9001/#/login     |
| Static                | http://localhost:9001/#/welcome                                       | About                                                                             | http://localhost:9001/#/static    |
| Feed                  | http://localhost:9001/#/app/feed                                      | Home, Network, Invite, Inbox, Notifications, 'Ankit', Posts (more), Right Panel   | /                                 |
| Listing               | http://localhost:9001/#/app/list/type                                 |                                                                                   |                                   |
| Profile               | http://localhost:9001/#/app/profile                                   |                                                                                   |                                   |
| Video List            | http://localhost:9001/#/app/list/exclusive                            |                                                                                   |                                   |
| Status Detail Page    | http://localhost:9001/#/app/detail/status/123                         |                                                                                   |                                   |
| Video Detail          | http://localhost:9001/#/app/detail/exclusive/789?type=liveContent     |                                                                                   |                                   |
| Donations Detail      | http://localhost:9001/#/app/detail/donation/                          | 46 Contributions                                                                  |                                   |
| Event Detail          | http://localhost:9001/#/app/detail/event/1231                         |                                                                                   |                                   |
| About Institute       | http://localhost:9001/#/app/about                                     |                                                                                   |                                   |
| New Individual Form   | http://localhost:9001/#/app/new                                       |                                                                                   |                                   |


## Contributing
All contributors must make use of standard angular conventions of directives, modals etc. to keep the code reusable, and programmable. This project follows the [Angular Best Practice Guidelines for Project Structure.](https://blog.angularjs.org/2014/02/an-angularjs-style-guide-and-best.html?_escaped_fragment_=)

## Upgrading
The contributors may upgrade to the newer form of coding using the ng best practices by visiting [this](https://github.com/cgross/generator-cg-angular15) 

## Copyright
All of this code is copyrighted content of Univibe, under a private license that ensures this code may not be used by anyone without the consent of [Univibe network](http://univibenetwork.in). Originally authored by [Abbas Dawood](https://github.com/abbasdawood) from [Vulpe](https://vulpe.in)