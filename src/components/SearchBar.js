import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {

    constructor() {
        super();

        this.state = {
            term: ""
        };
    }

    onInputChang = (event) => {
        console.log(event.target.value);
        this.setState(
            {
                term: event.target.value
            }
        );
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmitCallback(this.state.term);
    }



    render() {
        return (
            <div className="ui compact segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Search Images</label>
                    <input onChange={this.onInputChang} value={this.state.term} type="text" placeholder="Search..." />
                </form>
            </div>
        );
    }
}


SearchBar.propTypes = {
    onSubmitCallback: PropTypes.func
};
export default SearchBar;
