## 2.0.0 (June 14, 2018)

### React-Startkit
* Fixed servals webpack config bugs.
* Create home page to introduce our startkit.
* Update all dependencies and devDependencies to latest version including redux-observable@next and immutable@next.
* Add styled-components as basic library
* Add @e-group/git-flow-cli a tool to scale down time using github flow
* Remove json server and express server

### Breaking Changes
* Change redux-thunk to redux-observable. Also write it's simple demo and test script.
* Use semantic-ui-react to be our ui framework.
* "@e-group/react-component-kit" is our extended uikit for semantic-ui-react.
* Use "@/" to represent our root dir which is "src/".
* Create basic redux structure which is following [ducks](https://github.com/erikras/ducks-modular-redux) proposal and use with immutable, normalizr.