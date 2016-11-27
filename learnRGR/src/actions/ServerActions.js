const ServerActions = {
    recieveLinks(links){
        AppDispatcher.dispatch({
            actionType: "",
            links
        });
    }
}
export default ServerActions;