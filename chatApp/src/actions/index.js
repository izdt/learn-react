import alt from '../alt';
import Firebae from 'firebase';

class Actions {
    login(args){
        return (dispatch) => {
            var firebaseRef = new Firebae('https://chatappio.firebaseio.com');
            firebaseRef.authWithOAuthPopup("google",(error,user)=>{
               if(error){
                   return;
               } 
               dispatch(user);
            });
        }
    }
}

export default alt.createActions(Actions);