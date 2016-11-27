import {get} from 'jquery';
import ServiceActions from './actions/ServiceActions';

const API = {
    fetchLinks() {
        get('/data/links').done((resp)=>{
            ServiceActions.receiveLinks(resp);
        });
    }
};
export default API;
