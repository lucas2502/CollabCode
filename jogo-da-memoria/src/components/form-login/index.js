const formLogin = (()=>{
    const module = {};

    module._children = () => {
        const $labelCollabcodeUsername = labelCollabcode.render("Username");
        const $inputCollabcodeUsername = inputCollabcode.render("You Username", "text");
        const $labelCollabcodePass = labelCollabcode.render("Password");
        const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");
    
        return `
            ${$inputCollabcodeUsername}
            ${$labelCollabcodeUsername}

            ${$labelCollabcodePass}
            ${$inputCollabcodePass}
        `
    };

    module.render = () => {
        
        return `
            <form action="" method="POST">${module._children()}</form>
        `
    }

})();