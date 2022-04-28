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
                maxResults: 10,
                q: term,
                type: 'video',
                key: 'AIzaSyCAXIHesihCdK0eT-eTQntIuMmltvg18RI'
            }
        }) 
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (vid) => {
        const videoId = this.setState( {selectedVideo: vid})
    }

    componentDidMount() {
        this.onSearchSubmit('nature');
    }

    render() {
        return (
            <div className="ui container app-container">
                <SearchBar onSubmitApp={this.onSearchSubmit}/>
                    <div className="grid-container">
                        
                            <div className="grid-column">
                                <VideoDetail 
                                    video={this.state.selectedVideo}>
                                </VideoDetail>
                            </div>
                            <div className="grid-column">
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