(()=> {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in', false);
    const $singupButton = flatButton.render('Sing up', true);
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Wellcome!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $labelCollabcode = labelCollabcode.render("Username");
    const $inputCollabcode = inputCollabcode.render("You Username", "text");
    const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
    const $inputCollabcodeEmail = inputCollabcode.render("example@email.com", "email");
    const $labelCollabcodePass = labelCollabcode.render("Password");
    const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollabcode);
    $root.insertAdjacentHTML("beforeend", $inputCollabcode);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodeEmail);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodeEmail);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodePass);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodePass);
    
})();