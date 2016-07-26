if(process.env.NOD_ENV === 'production'){
    module.exports = require('./configureStore.prod');
}else{
    module.exports = require('./configureStore.dev');    
}