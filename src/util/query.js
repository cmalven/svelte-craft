import { request, gql } from 'graphql-request';

/**
 * Retrieve data from Craft CMS using GraphQL
 *
 * @param gqlQuery (string) The GraphQL query to execute
 * @param request (object) The common Svelte `load` parameters
 * @returns {Promise<{error: Error, status: number}|{props: {data: any}}>}
 */
const query = async function(gqlQuery, { url, params, fetch, session, stuff } = {}) {
  // Look for preview token in the URL
  const preview = url.searchParams.get('x-craft-preview');
  const livePreview = url.searchParams.get('x-craft-live-preview');
  const token = url.searchParams.get('token');

  // If the URL is a preview URL, use the preview token
  const urlToken = (preview || livePreview) && token ? `?token=${token}` : '';

  console.log('preview', preview);
  console.log('token', token);

  // Make the request
  const res = request('http://craft-headless.test/api' + urlToken, gql`${gqlQuery}`);

  // If we get a response, return the data via props
  if (res) {
    const data = await res;

    return {
      props: { data },
    };
  }

  // For no valid response, 404
  return {
    status: 404,
    error: new Error(`Could not find the requested page`),
  };

};

/**
 * Returns a GraphQL query for common matrix-based page content
 */
const pageContentQuery = `
  pageContent {
    ... on pageContent_cards_BlockType {
      typeHandle
      cards {
        heading
        text
      }
    }

    ... on pageContent_gridList_BlockType {
      typeHandle
      heading
      items {
        text
      }
    }
  }
`;

export default query;

export {
  query,
  pageContentQuery,
};
