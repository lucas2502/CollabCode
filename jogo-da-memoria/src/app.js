(() => {
    
    const { hash } = window.location;

    const paths = [];
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/singup"] = singup;
    paths["#/game"] = game;
    paths["#/404"] = status404;

    paths[hash]();
    
})();