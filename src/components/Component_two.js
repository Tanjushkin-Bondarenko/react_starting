import React from 'react';
import piano from './img/piano.jpg'


export const BlockTwo = () => {
    return (
       <div className='pianoBlock'>
            <p>This block has picture</p>
            <img src={piano} className ="piano" alt='piano'></img>
       </div>
   )
}