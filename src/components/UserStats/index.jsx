import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../services/api';

import Loading from '../Loading';
import Error from '../Error';
import Head from '../Head';
/* import UserStatsGraphs from '../UserStatsGraphs'; */

const UserStatsGraphs = React.lazy( () => import('../UserStatsGraphs'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch();
  
  useEffect( () => {
    async function getData(){
      const {url, options} = STATS_GET();
      await request(url, options)
    }
    getData();
  },[request]);

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head 
        title='Estatísticas'
        />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    )
  else return null;
}

export default UserStats
