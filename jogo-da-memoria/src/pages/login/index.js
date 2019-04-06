(()=>{
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in', true);
    const $singupButton = flatButton.render('Sing up', false);
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Hello!!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $botButton = botButton.render("LOGIN");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    
    $root.insertAdjacentHTML("beforeend", $botButton);

})();