### Requirements (Front-End-Boilerplate)

* Second, we will create a new react app for our front-end

* Create a new github repo called authfrontend, clone the repo to your computer and add the link to populi.
* Initialize the repo with create-react-app.
    * npx create-react-app .
* Install react-router
    * npm i react-router-dom@6
* Configure react-router by adding <BrowserRouter> to index.js.
  * import { BrowserRouter } from "react-router-dom";
  * root.render(
      <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </React.StrictMode>
    );