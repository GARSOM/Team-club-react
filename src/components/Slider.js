import ImageGallery from "react-image-gallery";
import React from "react";
import img from '../images/1672426171_17-zefirka-club-p-chernii-fon-s-liniyami-19.jpg'
const images = [
    {
        original: 'https://fikiwiki.com/uploads/posts/2022-02/1644932622_3-fikiwiki-com-p-kartinki-priroda-na-rabochii-stol-1920kh10-3.jpg',
        thumbnail: 'https://fikiwiki.com/uploads/posts/2022-02/1644932622_3-fikiwiki-com-p-kartinki-priroda-na-rabochii-stol-1920kh10-3.jpg',
    },
    {
        original: 'https://fikiwiki.com/uploads/posts/2022-02/1644932622_3-fikiwiki-com-p-kartinki-priroda-na-rabochii-stol-1920kh10-3.jpg',
        thumbnail: 'https://fikiwiki.com/uploads/posts/2022-02/1644932622_3-fikiwiki-com-p-kartinki-priroda-na-rabochii-stol-1920kh10-3.jpg',
    },
];

export default class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}
