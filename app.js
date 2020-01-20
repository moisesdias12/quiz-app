const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const linksList = document.querySelector("#linksList");
const addedCategories = document.querySelector("#addedCategories");

let linkCategories = [];
let links = [
    {
        title: 'aaa',
        url: 'www.aaa',
        categories: ['cat aaa1', 'cat aaa2']
    },
    {
        title: 'bbb',
        url: 'www.bbb',
        categories: ['cat bbb1', 'cat bbb2']
    },
    {
        title: 'ccc',
        url: 'www.ccc',
        categories: ['cat ccc1', 'cat ccc2']
    }
];

displayLinks();

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
    clearLinkForm();
}

linkCategory.addEventListener('keydown', function (event) {
    if (event.keyCode === 188) {
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        console.log(linkCategories)
        linkCategory.value = '';

        displayLinkCategories();
    }
})


function displayLinkCategories() {
    console.log("displaying link categories");
    addedCategories.innerHTML = '';
    for (let category of linkCategories) {
        var categoryHTMLString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString;
    }
}

function clearLinkForm() {
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];
    addedCategories.innerHTML = '';

}

submitButton.addEventListener('click', (event) => {

    event.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }

    links.unshift(newLink)

    clearLinkForm();

    displayLinkCategories();

    hideFormPanel();

    displayLinks();

});

function displayLinks() {
    linksList.innerHTML = '';

    for (let link of links) {
        let linkHTMLString = `
        <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm">Delete</button>
                    <button class="btn-sm">Edit</button>
                </div>
                <a href="${link.url}">
                    <h1 class="header">
                        ${link.title}
                    </h1>
                </a>
                <p class="link-date">
                    ${Date.now()}
                </p>
                <div class="categories">
                    Categories:`
        for (let category of link.categories) {
            linkHTMLString += `<span class="category">${category}</span>`;
        }
        linkHTMLString += `
                </div>
            </div>
        `
        linksList.innerHTML += linkHTMLString;

    }
}



