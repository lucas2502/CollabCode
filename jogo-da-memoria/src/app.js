(() => {
    
    const { hash } = window.location;

    if ( hash === "#/singup"){
        singup()
    }else{
        login();
    }
    
})();