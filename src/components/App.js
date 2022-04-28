import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';



class App extends React.Component {
    state = { videos: [], selectedVideo: null}
    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                q: term,
                type: 'video',
                key: 'AIzaSyCAXIHesihCdK0eT-eTQntIuMmltvg18RI'
            }
        }) 
        this.setState({ selectedVideo: null })
        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (vid) => {
        const videoId = this.setState( {selectedVideo: vid})
    }

    render() {
        return (
            
            <div className="ui container app-container">
                <SearchBar onSubmitApp={this.onSearchSubmit}/>
                    
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail 
                                    video={this.state.selectedVideo}>
                                </VideoDetail>
                            </div>
                            <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                videoSelect={this.onVideoSelect}></VideoList>
                            </div>
                        </div>
                    
            </div>
        )
    }

}

export default App;