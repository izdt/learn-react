import {get} from 'jquery';
import ServerActions from './actions/ServerActions';

const API = {
    fetchLinks() {
        get('/data/links').done((resp)=>{
            ServerActions.receiveLinks(resp);
        });
    }
};
export default API;
