const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");
const linksList = document.querySelector("#linksList");
const addedCategories = document.querySelector("#addedCategories");
const addLinkContainer = document.querySelector("#addLinkContainer");

let editIndex = -1;

let linkCategories = [];
let links = [
    {
        title: 'aaa',
        url: 'www.aaa',
        categories: ['cat aaa1', 'cat aaa2'],
        date: new Date()
    },
    {
        title: 'bbb',
        url: 'www.bbb',
        categories: ['cat bbb1', 'cat bbb2'],
        date: new Date()
    },
    {
        title: 'ccc',
        url: 'www.ccc',
        categories: ['cat ccc1', 'cat ccc2'],
        date: new Date()
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
    addLinkContainer.classList.remove('hidden');
    displayLinkCategories();
}

function hideFormPanel() {
    addLinkContainer.classList.add('hidden');
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
        categories,
        date : new Date()
    }

    if(editIndex === -1){
        links.unshift(newLink)
    }
    else{
        links[editIndex] = newLink;
        editIndex = -1;
    }


    clearLinkForm();

    displayLinkCategories();

    hideFormPanel();

    displayLinks();

});

function displayLinks() {
    linksList.innerHTML = '';
    let index = 0;
    for (let link of links) {
        let linkHTMLString = `
        <div class="flex-item">
            <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
                    <button class="btn-sm" onclick="editLink(${index})">Edit</button>
                </div>
                <a href="${link.url}">
                    <h1 class="header">
                        ${link.title}
                    </h1>
                </a>
                <p class="link-date">
                    ${link.date}
                </p>
                <div class="categories">
                    Categories:`
        for (let category of link.categories) {
            linkHTMLString += `<span class="category">${category}</span>`;
        }
        linkHTMLString += `
                </div>
            </div>
        </div>
        `
        linksList.innerHTML += linkHTMLString;
        index++;

    }
}

function deleteLink(index) {
    console.log("deleting", index);
    links.splice(index, 1);
    displayLinks();
}

function editLink(index) {
    console.log("editing", index);

    editIndex = index;
    linkTitle.value = links[index].titile;
    linkUrl.value = links[index].url;
    linkCategories = links[index].categories;

    showFormPanel();
}

function formatDate(date){
    return "hi there"
}


