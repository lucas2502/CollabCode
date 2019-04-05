const inputCollabcode = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .input-collabcode {
            width: 80vw;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 1px solid rgb(85, 64, 66, 0.5) ;
            padding-top: 12px;
            padding-bottom: 5px;
            margin-left: 35px;
            opacity: 0.5;
            display: flex;
            aling-content: space-between;
            
        }
        
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = (content, typeName, name) => {
        module._style();

            return`
            <input class="input-collabcode" type="${typeName}" name="${name}" placeholder="${content}"/>  
        `;
    };

    return {
        render: module.render
    }

})();