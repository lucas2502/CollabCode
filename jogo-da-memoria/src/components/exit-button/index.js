const exitButton = (() => {
    const module = {}

    module._style = () => {
        const $head = document.querySelector("head")
        const $style = document.createElement("style")

        $style.textContent = `
            .btnExit {
                background-color: #fff;
                height: 20px;
                width: 20px;
                
            }        
        `

        $head.insertAdjacentElement("beforeend", $style)
    }

    module.handleClick = (event, path) => {
        event.preventDefault();
        location.hash = `#/${path}`
        location.reload()
    }

    module.render = ({ content = "", path = ""}) => {
        module._style()

        return `
            <button 
                class="btnExit"
                type="submit
                value=${content}
                onClick="exitButton.handleClick(event, '${path}')"
            />
        `
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();