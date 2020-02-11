import React from 'react';
import MPDSmall  from '../Assets/mpd-small.jpg'

const MPD = () => (
    <div className='mpd'>
        <img src={'https://media.sweetwater.com/api/i/f-webp__q-82__ha-e32c59b5702832f9__hmac-cca0592d512fff6b0be6b1e021f2739ae7827cce/images/items/750/MPD218-large.jpg'} className='mpd-large'>
        </img>
        <img src={MPDSmall} id='mpd-small' className='mpd-small'></img>
    </div>
)


export default MPD;