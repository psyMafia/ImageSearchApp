import React from "react";
import Types from "prop-types";

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            spans: 0
        };
        this.imageRef = React.createRef();
    }


    componentDidMount(){
     this.imageRef.current.addEventListener("load", ()=>{
        console.log("image hight: " + this.imageRef.current.clientHeight);

        const spans = Math.ceil(this.imageRef.current.clientHeight/10);
        this.setState({
            spans: spans
        });
     });
    }

    render(){

        const {description, urls} = this.props.image;

        return(
            <div  style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img className="ui raised segment"  ref={this.imageRef} alt={description} src={urls.regular}></img>
            </div>
        );
    }
}

export default ImageCard;

ImageCard.propTypes = {
    image: Types.object,
};