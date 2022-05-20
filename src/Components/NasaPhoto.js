import React from 'react';

const dummyData = {
    date: "2022-05-19",
    explanation: "Recorded on May 15/16 this sequence of exposures follows the Full Moon during a total lunar eclipse as it arcs above treetops in the clearing skies of central Florida. A frame taken every 5 minutes by a digital camera shows the progression of the eclipse over three hours. The bright lunar disk grows dark and red as it glides through planet Earth's shadow. In fact, counting the central frames in the sequence measures the roughly 90 minute duration of the total phase of this eclipse. Around 270 BC, the Greek astronomer Aristarchus also measured the duration of total lunar eclipses, but probably without the benefit of digital watches and cameras. Still, using geometry he devised a simple and impressively accurate way to calculate the Moon's distance in terms of the radius of planet Earth, from the eclipse duration.",
    hdurl: "https://apod.nasa.gov/apod/image/2205/TLE_2022-05-16-02-59-35s.jpg",
    title: "A Digital Lunar Eclipse"
  }

const NasaPhoto = (props) => {
   return (
    <div className='nasa-photo-wrapper'>
        <h3>{props.photo.title}</h3>
        <p>{props.photo.date}</p>
        <img src = {props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
    </div>
   ) 
}

export default NasaPhoto;