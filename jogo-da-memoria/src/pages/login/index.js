const login = (()=> {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in', true, "login");
    const $singupButton = flatButton.render('Sing up', false, "singup");
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Hello!!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $formLogin = formLogin.render()

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);

});