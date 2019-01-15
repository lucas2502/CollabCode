(function(){
    'use-strict';
    let valorInicial = 0;
    const $buttonSecond = document.querySelector(".-second");
    
    $buttonSecond.addEventListener("click", handleClick);

    console.log($buttonSecond);
    function handleClick() {
        const $carInfo =  document.querySelector(".-last");
        valorInicial ++;
        $carInfo.textContent=`Carrinho (${valorInicial})`;
        
    };

})();