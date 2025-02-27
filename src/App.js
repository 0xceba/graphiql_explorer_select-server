import '@graphiql/plugin-explorer/dist/style.css';
import 'graphiql/graphiql.css';
import * as React from 'react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { explorerPlugin } from '@graphiql/plugin-explorer';
import { GraphiQL } from 'graphiql';
import { serverSelectPlugin, LAST_URL_KEY } from './select-server-plugin';
import { useStorageContext } from '@graphiql/react';

// The starting URL for the GraphiQL fetcher
export const STARTING_URL = 'https://graphql.org/graphql/';

const App = () => {
  // Create an instance of the explorer plugin
  const explorerPluginInstance = explorerPlugin();

  // Access the storage context to retrieve the last used URL
  const storage = useStorageContext();
  const lastUrl = storage?.get(LAST_URL_KEY);

  // Initialize the current URL state with the last used URL or the starting URL
  const [currentUrl, setUrl] = React.useState(lastUrl ?? STARTING_URL);

  // Create a fetcher function for GraphiQL using the current URL
  const fetcher = createGraphiQLFetcher({ url : currentUrl});

  // Create an instance of the server select plugin with the starting URL
  const serverSelectInstance = serverSelectPlugin({ url: STARTING_URL, setUrl });

    // Define the default query
  const defaultQuery = `
query _0xceba {
  __typename
}
`;

  // Return the GraphiQL component with the specified props
  return (
    <GraphiQL
      // The fetcher function to use for making GraphQL requests
      fetcher={fetcher}
      // Set the default visibility of the editor tools
      defaultEditorToolsVisibility={true}
      // Include the explorer and server select plugins
      plugins={[explorerPluginInstance, serverSelectInstance]}
      // Set the default query
      defaultQuery={defaultQuery} 
    />
  );
};

export default App;