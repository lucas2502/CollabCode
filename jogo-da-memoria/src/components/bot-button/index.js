const botButton = (() => {
    const module = {};

    module._style = () => { 
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .buttonBot{
                background-color: #f25a70;
                color: #fff;
                width: 302px;
                height: 48px;
                border-radius: 24px;
                margin: 45px 35px 36px 35px;
                text-align: center;
            }
            .buttonBot:hover {
                background-color: #fff;
                color: #f25a70;
                border-color: #f25a70;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = (content) => {
        module._style();

        return `
            <button class="buttonBot">${content}</button>
        `;
    }

    return {
        render: module.render
    }
})();