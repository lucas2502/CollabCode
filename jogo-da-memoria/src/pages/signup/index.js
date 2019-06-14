const singup = (() => {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in', false, "login");
    const $singupButton = flatButton.render('Sing up', true, "singup");
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Wellcome!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $formSingup = formSingup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSingup);
    
});