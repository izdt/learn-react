import AppDispatcher from '../AppDispatcher';
import {ActionType} from '../Constants';

const ServerActions = {
    recieveLinks(links){
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVE_LINKS,
            links
        });
    }
}
export default ServerActions;