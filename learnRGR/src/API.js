import {get} from 'jquery';

const API = {
    fetchLinks() {
        get('/data/links').done((res)=>{
            console.log(res);
        });
    }
};
export default API;
