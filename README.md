# contactKeeper

## Summary

A fullstack app that keeps track of contacts using Mongo DB, Express, React, and Node (MERN). The app has full Create Read Update Delete (CRUD) for contacts; users can registers, sign in, create contacts, update, and delete contacts, and sign out. Authentication and authorization accomplished with JSON Web Tokens (JWTs) between front and back end. A hosted Mongo database using Atlas holds the data for users and contacts. React Context API manages the app state for users, contacts, and simple filtering/search of contacts.

## Issues

The biggest issue was learning how to use the Context API with React hooks to manage user state across different pages and browser refresh. The pattern used is similar to Redux where an onSubmit event would dispatch an action that sends a GET, POST, PATCH, or DELETE request to the server, receive the response, and update the appropriate state. The useContext and useEffect hooks make getting and updating state easier than Redux and simulate lifecycle methods associated with React class components.
