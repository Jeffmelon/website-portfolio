import React from 'react';
import ArtGallery from '../Components/artList';
import "../Style/website.css";
import {artList} from "../helpers/artList.js"

function Art() {
  return (
    <div className='websites'>
      <h1 className='webTitle'>Art Pieces</h1>
      <div className='webList'>
        {artList.map((art, idx) => {
          return <ArtGallery id={idx} name={art.name} image={art.image}/>
        })}
      </div>
    </div>
  )
}

export default Art