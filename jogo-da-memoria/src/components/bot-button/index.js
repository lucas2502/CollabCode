const botButton = (() => {
    const module = {};

    module._style = () => { 
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .btnBot{
                background-color: #f25a70;
                color: #fff;
                width: 70vw;
                height: 48px;
                border-radius: 24px;
                text-align: center;
            }
            .btnBot:hover {
                background-color: #fff;
                color: #f25a70;
                border: solid 1px #f25a70 ;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };
    module.handleClick = (event, path) => {
        event.preventDefault();
        window.locantion.hash = `#/${path}`;
    }
    module.render = ({content = "", path = ""}) => {
        module._style();

        return `
            <button 
                class="btnBot"
                onClick="BotButton.handleClick(event, '${path}')"
                >${content}</button>
        `;
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();