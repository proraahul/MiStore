import React from 'react';
import './Videos.css';
import './VideoCard'
import VideoCard from './VideoCard';

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item, index) => {
                return(
                    <VideoCard key={item.image} index={index} image={item.image} name={item.name} />
                )
            })
        }
    </div>
  )
}

export default Videos