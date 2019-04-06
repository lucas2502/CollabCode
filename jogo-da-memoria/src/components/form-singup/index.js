const formSingup = (()=>{
    const module = {};

    module._children = () => {
        const $labelCollabcodeUsername = labelCollabcode.render("Username");
        const $inputCollabcodeUsername = inputCollabcode.render("You Username", "text");

        const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
        const $inputCollabcodeEmail = inputCollabcode.render("example@email.com", "email");

        const $labelCollabcodePass = labelCollabcode.render("Password");
        const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");

        const $labelCollabcodePassConfirm = labelCollabcode.render("Confirm Password");
        const $inputCollabcodePassConfirm = inputCollabcode.render("", "password", "pwd");
    
        return `
            ${$labelCollabcodeUsername}
            ${$inputCollabcodeUsername}
            
            ${$labelCollabcodeEmail}
            ${$inputCollabcodeEmail}

            ${$labelCollabcodePass}
            ${$inputCollabcodePass}

            ${$labelCollabcodePassConfirm}
            ${$inputCollabcodePassConfirm}
        `;
    };

    module.render = () => {
        return `
            <form action="" method="POST">
                ${module._children()}
            </form>
        `
    }

    return {
        render: module.render
    }
    
})();