(function(){
    'use strict';

    const $heart = document.querySelector(".-heart");

    $heart.addEventListener("click", handleClick);
    console.log($heart);
    
    function handleClick() { 
        /*if($heart.classList.contains("-active")){
            $heart.classList.remove('-active');
        }
        else{
            $heart.classList.add('-active');
        }*/

        $heart.classList.toggle("-active");
    };

})();

