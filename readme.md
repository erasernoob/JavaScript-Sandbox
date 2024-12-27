# The full stack web application
## Intro 
This whole project is followed the [course](https://www.youtube.com/watch?v=BI1o2H9z9fo) and make it step by step.Although I just do the Javascript's part, and use the html/css as the template to finish the project, I learned so much, and understand the part of the things behind those frontend framework, and what's going on under the hood.The mind thinking of Components, the way to use the webpack and how to configure it, the whole npm nodejs stuff. And below is this project's configuration tips, in case this project will become useful in the future, as well as help me to memory these things
## Front-end
The whole Front-end stuff is in the client folder, and that's where to run the `npm run build` command to build the whole front-end stuff to the public folder, which will generate the bundle.js and index.html etc.
`webpack-config.js` is the most important file. And you can see the configuration stuff in it about how to set it up.
## Back-end
Backend is the root directory. `routes`, `database-config`, `models`(which is used by express to validate the object), `
### Express
In this project, literally use the express to help create routes and backend api, which you gonna find in the `routes/ideas.js` files
## Deploy
When deploy the website you gonna need to do 
- change the webpack's mode to production 
- change the `IdeaApi.js` use the back-end proxy to 'api'
## Additions

- the commonjs and the ES module are two different ways to import the JavaScript module, 
  > Nodejs(back-end) can not use the ES module, and in frontend we use the commonjs module way to import module

