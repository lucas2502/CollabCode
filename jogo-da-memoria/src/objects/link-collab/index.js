const linkCollab = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .link-collab {
                color: #3a4042;
                text-decoration: none;
                font-size: 14px;
                opacity: 0.7;
                margin-top: 40px;
                margin-bottom: 60px;
                display: block;
                text-align: right;
                margin-right: 40px;
            }
            .link-collab:hover{
                color: #f25a70;
            }
        `

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = ({ href, content }) => {
        module._style();

        return `
            <a class="link-collab" href="${href}">${content}</a>
        `;

    };

    return {
        render: module.render
    }
})();