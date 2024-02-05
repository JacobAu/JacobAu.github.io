const main_image = document.querySelector(".main-image");
const yes_button = document.querySelector(".yes"); 
const no_button = document.querySelector(".no");
const title_text = document.querySelector(".title-text");

function onYesButtonClick() {
    main_image.src = "gallery/cat_yes.jpg";
    title_text.innerText = "YAAAAAAYYYYYYY"
}

function onNoButtonClick() {
    main_image.src ="gallery/cat_no.jpg";
    title_text.innerText = "GRRRRRRRRRRRRRRRRRRRRRRR TRY AGAIN"
}

yes_button.onclick = onYesButtonClick;
no_button.onclick = onNoButtonClick;
