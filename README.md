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

## Dynamic Right Panel Rendering
The signed in section has a right panel, depending on the page / route that is being rendered, this is called using an angular event, emitted with the following code: `$scope.$emit('render-right-panel', { page: 'feed' });` . The event name must remain the same, the page section can differ based on which route is currently active. If the developer chooses not to render the right panel at all, use `null` in the page argument, or do not call this function at all.

Right panel consists of contextually relevant information, so in listing pages, this will consist of filters and other stuff. In case of feed, it will show events, and snippets from other sections on the site. Regardless of what is rendered, it's height must always equal less than viewport height

## Form Input Guidelines
To save vertical space, this project styles the form elements using the material-styling guidelines. To enable that, it is important that all input elements have the `material-style` class attached to them in DOM.

These elements must be succeeded immediately by a label element for the intended material effect, all labels must carry the `sr-only` class with them. Input elements shall not have a placeholder text in this view.

However, the form shall be rendered differently for forms that are spawned from the listing pages (such as all opportunities -> Add new). These forms will be traditional and are given in `modules/common/partial/opp-form` partial. This is to ensure a separate form page, apart from the main `editor` module.


## Contributing
All contributors must make use of standard angular conventions of directives, modals etc. to keep the code reusable, and programmable. Only in the rare event of creating 