const eyeCollabcode = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                background-image: url(/img/eye.png) no-repeat;
                background-position: center;
                display: block;
                text-indent: -999px;
                width: 24px;
                height: 15px;
                cursor: pointer;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style)
    };

    module._handleClick = () => {
        console.log('Ae!')
    }

    module.render = () => {
        module._style();

        return `
            <label
                for="password" 
                class="eye-collabcode" 
                onClick="eyeCollabcode.handleClick()"
            >Show password</label>
        `;


    }

    return {
        render: module.render,
        handleClick: module._handleClick
    }

})();