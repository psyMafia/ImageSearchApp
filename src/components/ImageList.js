import React from "react";
import PropTypes from "prop-types";
import "./Imagelist.css";
import ImageCard from "./ImageCard";

const Imagelist = (props) => {

    console.log(props);

    const imgeElemnts = props.images.map((item) => {
        return (
            <ImageCard key={item.id} image={item} ></ImageCard>
        );
    });


    return (
        <div className="image-list">{imgeElemnts}</div>
    );

};

export default Imagelist;

Imagelist.propTypes = {
    images: PropTypes.array
};