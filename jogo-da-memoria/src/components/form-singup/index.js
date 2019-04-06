const formSingup = (()=>{
    const module = {};

    module._sytyle = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style")

        $style.textContent = `
            .sing-up{
                padding-left: 35px;
                padding-right: 35px;
            }

            .sing-up > .btnBot {
                margin: 45px 0px 36px 0px;
            }
        
        `;

        $head.insertAdjacentElement("beforeend", $style);

    };

    module._children = () => {
        
        const $labelCollabcodeUsername = labelCollabcode.render("Username");
        const $inputCollabcodeUsername = inputCollabcode.render("You Username", "text");

        const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
        const $inputCollabcodeEmail = inputCollabcode.render("example@email.com", "email");

        const $labelCollabcodePass = labelCollabcode.render("Password");
        const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");

        const $labelCollabcodePassConfirm = labelCollabcode.render("Confirm Password");
        const $inputCollabcodePassConfirm = inputCollabcode.render("", "password", "pwd");

        const $btn = botButton.render("SUBMIT");
    
        return `
            ${$labelCollabcodeUsername}
            ${$inputCollabcodeUsername}
            
            ${$labelCollabcodeEmail}
            ${$inputCollabcodeEmail}

            ${$labelCollabcodePass}
            ${$inputCollabcodePass}

            ${$labelCollabcodePassConfirm}
            ${$inputCollabcodePassConfirm}

            ${$btn}
        `;
    };

    module.render = () => {
        module._sytyle();

        return `
            <form class="sing-up" action="" method="POST">
                ${module._children()}
            </form>
        `
    }

    return {
        render: module.render
    }
    
})();