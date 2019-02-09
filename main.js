// constructor Book object
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

function UI() {
     
    // create prototype method to add book to the UI
    UI.prototype.addBook = function(book) {
         
         // declare variables
         const list = document.getElementById('book-list');
         const row = document.createElement('tr');
         if (book.title === '' || book.author === '' || book.isbn === '') {
            return alert('Some inputs are empty please fill it ://////')
         }
         // create td tags with values from the book obj
         row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a src="#" class="delete">X</a></td>
         `
         // append row to the table 
         list.appendChild(row);
    }

    // create prototype method to clear inputs after adding item to the UI
    UI.prototype.clearFields = function () {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

    // create prototype methid to delete book from the list
    UI.prototype.deleteItem = function(target) {        
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
};


// Event listener 
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // instantiate book
    const book = new Book(title,author,isbn);
   
    // instatiate UI
    const  ui = new UI();
     
    // add book to the UI
    ui.addBook(book);
    // clear fields
    ui.clearFields();
         // prevent default behaviour submit
    e.preventDefault();
});

// Event listener to delete item
document.getElementById('book-list').addEventListener('click', function(e) {
    // instantiate UI
   const ui = new UI();

    // delete item
    ui.deleteItem(e.target);

})