(function(){

    const buttons = document.querySelectorAll(".btn-counter");
    let count = 0;

    const counter = document.querySelector(".counter-machine");
    const countercontainer = document.querySelector(".counter");

    buttons.forEach(function(button){
        button.addEventListener('click',function(){

            if (button.classList.contains("decrease-btn")){
                count--;
            }else if(button.classList.contains("increase-btn")){
                count++;

            }
            counter.textContent = count;

            if(count > 0){
                countercontainer.classList.remove("negative");
                countercontainer.classList.add("positive");

            }else if(count < 0){
                countercontainer.classList.remove("positive");
                countercontainer.classList.add("negative");

            }else{
                   countercontainer.classList.remove("positive","negative");

            }


    });

    });

})();
