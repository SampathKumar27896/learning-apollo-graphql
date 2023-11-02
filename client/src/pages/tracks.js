import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import  TrackCard  from '../containers/track-card';
import QueryResult from '../components/query-result';
const TRACKS = gql`
  {
    tracksForHomePage {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  
  return (
  <QueryResult loading = {loading} error = {error} data = {data}>
      <Layout grid>
        {
          data?.tracksForHomePage?.map((track) => (
            <TrackCard key={track.id} track={track}/>
          ))
        }
      </Layout>
  </QueryResult>
  );
};

export default Tracks;
