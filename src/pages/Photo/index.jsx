import React, { useEffect } from 'react'

import styles from './Photo.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTOPAG_GET } from '../../services/api';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PhotoContent from '../../components/PhotoContent';
import Head from '../../components/Head';

const Photo = () => {
    const {id} = useParams();
    const {data, loading, error, request} = useFetch();

    useEffect( () => {
        const {url, options} = PHOTOPAG_GET(id);
        request(url, options);
    }, [id, request]);

    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data) 
    return (
        <section className='container mainContainer'>
            <Head 
            title={data.photo.title}
            />
            <PhotoContent 
            data={data} 
            single={true}
            />
        </section>
    )
    else return null;
}

export default Photo
