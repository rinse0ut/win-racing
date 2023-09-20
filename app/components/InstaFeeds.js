import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Slideshow from './Slideshow'

import './instaFeeds.css'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    console.log('FEEDSxxx', feeds)
    if (feeds.length === 0) return null;

    return (
        <div className="container">
            <Slideshow feeds={feeds} />
            {/* {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))} */}
        </div>
    );
}

export default InstaFeeds;