import React from "react";

class SearchBar extends React.Component {


    

    handleFormSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                            type="text" 
                            onChange={this.props.searchMovieProp} 
                            className="form-control" 
                            placeholder="Search a movie"
                            // value={this.state.searchQuery}
                            >
                            
                        </input>
                    </div>
                </div>
            </form>
        )
            
        
    }
}

export default SearchBar;