const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");


let linkCategories = [];
links = [];

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showFormPanel();
    console.log("add event clicked");
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    hideFormPanel();
    console.log("cancel clicked");
});

console.log(addLinkPanel.classList);


function showFormPanel() {
    addLinkPanel.classList.remove('hidden');
}

function hideFormPanel() {
    addLinkPanel.classList.add('hidden');
}

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
submitButton.addEventListener('click',(event) => {

    event.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }

    links.push(newLink)

    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];

    displayLinkCategories();

    hideFormPanel();
    
});



