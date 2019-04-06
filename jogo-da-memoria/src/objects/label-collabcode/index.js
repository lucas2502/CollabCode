const labelCollabcode = (() => {
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .label-collabcode {
                color: #3a4042;
                font-size: 16px;
                display: flex;
                aling-content: space-between;
                margin-top: 29px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = content => {
        module._style();

        return `
            <label class="label-collabcode">${content}</label>
        `
    };

    return{
        render: module.render
    };

})();