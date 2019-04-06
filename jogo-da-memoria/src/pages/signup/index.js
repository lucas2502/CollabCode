(()=> {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in', false);
    const $singupButton = flatButton.render('Sing up', true);
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Wellcome!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $formSingup = formSingup.render();

    

    const $botButton = botButton.render("SUBMIT");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSingup);
    $root.insertAdjacentHTML("beforeend", $botButton);
    
})();