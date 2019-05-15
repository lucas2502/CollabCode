const eyeCollabcode = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                background-image: url(/img/eye.png) no-repeat;
                background-position: center;
                display: bloxk;
                text-indent: -9999px;
                width: 24px;
                height: 15px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style)
    };

    module.render = () => {
        module._style();

        return `
            <label class="eye-collabcode>Show password</label>
        `;


    }

    return {
        render: module.render
    }

})();