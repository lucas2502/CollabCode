const eyeCollabcode = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElemente("style");

        $style.textContent = `
        
        `;

        $head.insertAdjacentElement("beforeend", $style)
    };

    module.render = () => {
        module._style();

        return `
            <label>Show password</label>
        `;


    }

    return {
        render: module.render
    }

})();