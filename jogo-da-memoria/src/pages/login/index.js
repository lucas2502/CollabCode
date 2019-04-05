(()=>{
    const $root = document.querySelector("root");

    const $loginButton = flatButton.render('Log in', true);
    const $singupButton = flatButton.render('Sing up', false);
    const $imgLogo = logoLogin.render();
    const $titleCollabcode = titleCollabcode.render("Hello!!");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleCollabcode);
    const $labelCollabcode = labelCollabcode.render("Username");
    const $inputCollabcode = inputCollabcode.render("You Username", "text");
    const $labelCollabcodePass = labelCollabcode.render("Password");
    const $inputCollabcodePass = inputCollabcode.render("", "password", "pwd");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollabcode);
    $root.insertAdjacentHTML("beforeend", $inputCollabcode);
    $root.insertAdjacentHTML("beforeend", $labelCollabcodePass);
    $root.insertAdjacentHTML("beforeend", $inputCollabcodePass);
    
})()