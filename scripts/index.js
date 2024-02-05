const main_image = document.querySelector(".main-image");
const yes_button = document.querySelector(".yes"); 
const no_button = document.querySelector(".no");
const title_text = document.querySelector(".title-text");

console.log(main_image);
function onYesButtonClick() {
    main_image.src = "gallery/cat_yes.jpg";
    title_text.innerText = "YAAAAAAYYYYYYY"
    console.log("yes clicked");
}

function onNoButtonClick() {
    main_image.src ="gallery/cat_no.jpg";
    title_text.innerText = "GRRRRRRRRRRRRRRRRRRRRRRR"
    console.log("no clicked");
}

yes_button.onclick = onYesButtonClick;
no_button.onclick = onNoButtonClick;
