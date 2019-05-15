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

    module._handleClick = function () {
        const attrFor = this.getAttribute("for");
        const $input = document.querySelector(`#${attrFor}`);

        $input.setAttribute("type", "text")
    }

    module.render = ({ attrFor = ""}) => {
        module._style();

        return `
            <label
                for="${attrFor}" 
                class="eye-collabcode" 
                onClick="eyeCollabcode.handleClick.bind(this)()"
            >Show password</label>
        `;


    }

    return {
        render: module.render,
        handleClick: module._handleClick
    }

})();