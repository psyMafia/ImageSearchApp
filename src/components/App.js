//101
import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import Imagelist from "./ImageList";

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (term) => {

        console.log("call onSearchSubmit:  " + term);

        const responce = await Unsplash.get(
            "/search/photos",
            {
                params: {
                    query: term
                }
            }
        );

        console.log(responce.data.results);

        this.setState({
            images: responce.data.results
        });

    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmitCallback={this.onSearchSubmit}></SearchBar>
                {/* Found Images: {this.state.images.length} */}
                <Imagelist images={this.state.images}></Imagelist>
            </div>
        );
    }
}
export default App;