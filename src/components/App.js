import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import youtube from '../api/youtube';


class App extends React.Component {

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                q: term
            }
        }) 
        console.log(response)
    }

    render() {
        return (
            <div className="ui container app-container">
                <SearchBar onSubmitApp={this.onSearchSubmit}/>
            </div>
        )
    }

}

export default App;