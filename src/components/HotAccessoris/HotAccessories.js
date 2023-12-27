import React from 'react';
import HotItemCard from './HotItemCard';
import './HotAccessories.css'

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>

      {/* 1st part */}

      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="musicCover" />
      </div>


      {/* 2nd part */}
      <div>
        {music && music.map((item, index)=>{
            return(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            )})}

            {/* smart device */}
        {smartDevice && smartDevice.map((item, index)=>{
            return(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            )})}

            {/* home */}
            {home && home.map((item, index)=>{
            return(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            )})}

            {/* lifestyle */}
            {lifestyle && lifestyle.map((item, index)=>{
            return(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            )})}

            {/* mobileAccessoriesCover */}
            {mobileAccessories && mobileAccessories.map((item, index)=>{
            return(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            )})}

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>

    </div>
  )
}

export default HotAccessories