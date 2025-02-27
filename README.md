# GraphiQL with Explorer and Server Select Plugins
This is a React application that integrates GraphiQL with the Explorer and Explorer plugins. The Explorer plugin provides an interactive interface for visually exploring and constructing GraphQL operations, as seen below:
!assets/README_explorer.png!

The Select Server plugin allows users to conveniently switch the GraphQL endpoint, as seen below:
!assets/README_server-select.png!

## Features
- **GraphiQL**: A graphical interactive in-browser GraphQL IDE. Source repo: https://github.com/graphql/graphiql.
- **Explorer Plugin**: Provides an interactive way to explore the GraphQL schema. Source repo: https://github.com/OneGraph/graphiql-explorer.
- **Select Server Plugin**: Allows users to switch between different GraphQL endpoints. Source repo: https://github.com/graphql/graphiql/blob/main/examples/graphiql-webpack/src/select-server-plugin.jsx.

## Getting Started
### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Install the Dependencies
To install the application's dependencies, run:
```bash
npm install
```

### Running the Application
To run the application on the Webpack Development Server, run:
```bash
npm start
```

### Building for Production
To build the application for production, run:
```bash
npm run build
```