(() => {
    
    const { hash } = window.location;

    const paths = [];
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/singup"] = singup;
    paths["#/game"] = game;

    paths[hash]();
    
})();