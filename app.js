let myLibrary = [];
const bookGrid = document.getElementById('books');
let bookCount = 0;

function Book(author, title, pageNum, status) {
    this.author = author
    this.title = title
    this.pageNum = pageNum
    this.status = status
}

function changeStatus() {
    let status = document.querySelector(`#bookstatus${this.id}`)
    status.innerHTML = "Read";
}

function removeBook() {
    let card = document.querySelector(`#card${this.id}`);
    bookGrid.removeChild(card);;
    bookCount -= 1;
}

function addBookToLibrary() {
    // Push book into library array
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pagenum = document.getElementById("pagenum").value;
    let status = document.getElementById("status").value;
    let book = new Book(title, author, pagenum, status);
    myLibrary.push(book);
    // Add book information to card
    // main card div
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('id', `card${bookCount}`);
    // card title
    let titleContainer = document.createElement('div');
    titleContainer.classList.add("cardField");
    let cardTitle = document.createElement('h3');
    let labelTitle = document.createElement('p');
    labelTitle.classList.add("cardLabel");
    labelTitle.innerHTML = "Title:"
    titleContainer.appendChild(labelTitle);
    cardTitle.innerHTML = `${title}`;
    titleContainer.appendChild(cardTitle);
    // card author
    let authorContainer = document.createElement('div');
    authorContainer.classList.add("cardField");
    let labelAuthor = document.createElement('p');
    labelAuthor.classList.add("cardLabel");
    labelAuthor.innerHTML = "Author:";
    authorContainer.appendChild(labelAuthor);
    let cardAuthor = document.createElement('p');
    cardAuthor.innerHTML = `${author}`;
    authorContainer.appendChild(cardAuthor);
    // card page count
    let pagecountContainer = document.createElement('div');
    pagecountContainer.classList.add("cardField");
    let labelPagecount = document.createElement('p');
    labelPagecount.classList.add("cardLabel");
    labelPagecount.innerHTML = "Page Count:"
    pagecountContainer.appendChild(labelPagecount);
    let cardPagenum = document.createElement('p');
    cardPagenum.innerHTML = `${pagenum}`;
    pagecountContainer.appendChild(cardPagenum);
    // card status
    let statusContainer = document.createElement('div');
    statusContainer.classList.add("cardField");
    let labelStatus = document.createElement('p');
    labelStatus.classList.add("cardLabel");
    labelStatus.innerHTML = "Status:"
    statusContainer.appendChild(labelStatus);
    let cardStatus = document.createElement('p');
    cardStatus.setAttribute('id', `bookstatus${bookCount}`);
    cardStatus.innerHTML = `${status}`;
    statusContainer.appendChild(cardStatus);
    // div container for buttons
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttonContainer');
    // Add read book button
    let readBtn = document.createElement('button');
    readBtn.classList.add("readBtn");
    readBtn.setAttribute('id', `${bookCount}`);
    readBtn.onclick = changeStatus;
    readBtn.innerHTML = "Read";
    buttonContainer.appendChild(readBtn);
    // Add remove button
    let removeBtn = document.createElement('button');
    removeBtn.classList.add("removeBtn");
    removeBtn.setAttribute('id', `${bookCount}`);
    removeBtn.onclick = removeBook;
    removeBtn.innerHTML = "Remove"
    buttonContainer.appendChild(removeBtn);
    // add elements to card
    card.appendChild(titleContainer);
    card.appendChild(authorContainer);
    card.appendChild(pagecountContainer);
    card.appendChild(statusContainer);
    card.appendChild(buttonContainer);
    bookGrid.appendChild(card);
    bookCount += 1;
}

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup")
}
function closePopup() {
    popup.classList.remove("open-popup")
}

function clearFields() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pagenum = document.getElementById("pagenum");
    let status = document.getElementById("status");
    title.value = "";
    author.value = "";
    pagenum.value = "";
    status.value = "";
}