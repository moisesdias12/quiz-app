const linkCategory = document.querySelector("#linkCategory");

let linkCategories = [];

linkCategory.addEventListener('keydown', function (event) {
    if(event.keyCode === 188) {
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        console.log(linkCategories)
        linkCategory.value = '';

        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("displaying link categories");
}