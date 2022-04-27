import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitApp(this.state.term)
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Vid</label>
                        <input 
                            value={this.state.term} 
                            type="text" 
                            onChange={this.onInputChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;