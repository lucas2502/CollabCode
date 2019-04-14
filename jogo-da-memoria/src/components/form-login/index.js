const formLogin = (()=>{
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style")

        $style.textContent = `
            .login{
                padding-left: 35px;
                padding-right: 35px;
            }

            .login > .btnBot {
                margin: 45px 0px 36px 0px;
            }
        
        `;

        $head.insertAdjacentElement("beforeend", $style);

    };

    module._children = () => {
        const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
        const $inputCollabcodeEmail = inputCollabcode.render("example@email.com", "email");
        const $labelCollabcodePass = labelCollabcode.render("Password");
        const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");
        const $linkCollab = linkCollab.render({href: "#", content: "Forget password?"});
        const $btn = botButton.render("SUBMIT");
    
        return `
            ${$labelCollabcodeEmail}    
            ${$inputCollabcodeEmail}
            

            ${$labelCollabcodePass}
            ${$inputCollabcodePass}
            
            ${$linkCollab}
            
            ${$btn}
        `
    };

    module.render = () => {
        module._style();

        return `
            <form class="login" action="" method="POST">${module._children()}</form>
        `
    }

    return {
        render: module.render
    }

})();