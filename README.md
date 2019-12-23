# ComicClan - React Webapp Specification

### Description


ComicClan, an online community of comic book enthusiasts, has contacted you to help them develop their new online library of comic books. The library will represent the combined collection of comic books owned by the community members.

Fortunately enough, all the data is already cataloged into their DB with a simple API delivering all the information you need. They are asking that you develop a React web-app based on a provided design.


### Specifications

- Implement the following designs into a working web application based on React.
- The API endpoint for the list of comic books is accessible at `https://comicclan.vett.io/comics`. 
  - For authentication pass the following header:  `Authorization: Bearer ComicClanVettIO2019`.
  - If you add the `?q=<term>` url parameter you’ll get a filtered list of comic books based on their name.
- Parse the API response and display the results as outlined in the design (including the inner page).
- The application should allow the following grouping categories:
  - Year (default)
  - Writer
  - Artist
  - Owner
  - Random
- The application should allow searching for comic books based on a name (or partial name).
- It is highly recommended that you use [Redux](https://redux.js.org/) for state management and [ReactRouter](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
- You may use any boilerplate of your choice or start completely clean.

### Bonus Points

- Use inJS style libraries such as [styled-components](https://www.styled-components.com/).
- Use [Sagas](https://redux-saga.js.org/) for async calls management.
- Allow grouping through the URL of the app.


### Evaluation

- Design implemented according to attached files using React Components. Result should be as close as possible to the design provided.
- The application should be responsive and support mobile browsers.
- Proper routing including a route for the home, inner book page and support for category grouping through the URL.
- Searching for a comic book (on the main page) filters the current view to show only relevant results.


### Submission

Please organize, design, test and document your code as if it were going into production. Also include detailed instructions on how to build and serve your code;  finally push your changes to the master branch. After you have pushed your code, let us know so we can review your work, **if you won’t let us know you’re done we won’t know we should start testing.**

All the best and good luck!

The [Vett.io](https://vett.io) Team.
