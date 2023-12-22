import ImageGallery from "react-image-gallery";
import React from "react";
import slide_1 from '../images/live_photo/HeadPhone.png'
import slide_2 from '../images/live_photo/keyboard.jpg'
import slide_3 from '../images/live_photo/23-27.jpg'
const images = [
    {
        original: slide_1,
        thumbnail: slide_1,
    },
    {
        original: slide_2,
        thumbnail: slide_2,
    },
    {
        original: slide_3,
        thumbnail: slide_3,
    },
];

export default class MyGallery extends React.Component {
    render() {
      
            return  <div className="s"> <ImageGallery items={images} />;
        </div>
    }
}
