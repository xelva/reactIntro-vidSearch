import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    headers: {
        key: 'AIzaSyCywUmlf4VjnSRozccYZlLYk8QVpc54yzo'
    }

});