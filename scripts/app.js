const library = [];

class Book {
  constructor(title, author, publicationYear, pages, category, isRead = false) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.pages = pages;
    this.category = category;
    this.isRead = isRead;
  }
}

function addBook(title, author, publicationYear, pages, category) {
  const newBook = new Book(title, author, publicationYear, pages, category);
  library.push(newBook);
}

function displayBooks() {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ''; 

  library.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.innerHTML = `
      <div class="card-text">
        <p class="book-title">${book.title}</p>
        <div class="table">
          <div class="column">
            <div class="data">Author:</div>
            <div class="data">YOP:</div>
            <div class="data">Total Pages:</div>
            <div class="data">Category:</div>
            <div class="data">BookCode:</div>
            <div class="data">Status:</div>
          </div>
          <div class="column">
            <div class="data">${book.author}</div>
            <div class="data">${book.publicationYear}</div>
            <div class="data">${book.pages}</div>
            <div class="data">${book.category}</div>
            <div class="data">gitn-00${index + 1}</div>
            <div class="data">${book.isRead ? 'Read' : 'Not Read'}</div>
          </div>
        </div>
        <div class="buttons">
          <button class="toggle-read-btn" data-index="${index}">
            ${book.isRead ? 'Unread' : 'Read'}
          </button>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      </div>
    `;
    cardContainer.appendChild(bookCard);
  });
}

document.getElementById('book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const yop = document.getElementById('yop').value;
  const category = document.getElementById('category').value;

  addBook(title, author, yop, pages, category);

  document.getElementById('popup-form').classList.add('hidden');
  event.target.reset();

  displayBooks();
});

document.getElementById('card-container').addEventListener('click', (event) => {
  const index = event.target.dataset.index;

  if (event.target.classList.contains('toggle-read-btn')) {
    library[index].isRead = !library[index].isRead;
    displayBooks();
  }

  if (event.target.classList.contains('remove-btn')) {
    library.splice(index, 1); 
    displayBooks(); 
  }
});


const popupForm = document.getElementById('popup-form');
document.getElementById('add-book-btn').addEventListener('click', () => {
  popupForm.classList.remove('hidden');
});

document.getElementById('close-popup').addEventListener('click', (event) => {
  event.preventDefault();
  popupForm.classList.add('hidden');
});








// const library = [];

// class Book {
//     id;
//     title;
//     author;
//     publicationYear;
//     pages;
//     category
//     bookCode;
//     isRead;

//     constructor(title, author, publicationYear, pages, category, isRead) {
//         this.title = title;
//         this.author = author;
//         this.publicationYear = publicationYear;
//         this.pages = pages;
//         this.category = category;
//         this.isRead = isRead;
//     }
// }

// function addBook(title, author, publicationYear, pages, category) {
//     const newBook = new Book(title, author, publicationYear, pages, category);
//     newBook.id = library.length;
//     newBook.isRead = "Unread"
//     library.push(newBook);
// }

// document.getElementById('book-form').addEventListener('submit', (event) => {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const pages = document.getElementById('pages').value;
//     const yop = document.getElementById('yop').value;
//     const category = document.getElementById('category').value;


//     addBook(title, author, yop, pages, category);


//     document.getElementById('popup-form').classList.add('hidden');
//     event.target.reset();

//     // Redisplay the library
//     displayBooks();
// });


// function displayBooks() {
//     const libraryContainer = document.getElementById('library-container');
//     libraryContainer.innerHTML = ''; 
  
//     library.forEach((book, index) => {
//       const bookCard = document.createElement('div');
//       bookCard.classList.add('book-card');
  
//       bookCard.innerHTML = `
//         <div class="card">
//             <div class="card-text">
//         <p class="book-title">${book.title}</p>
//         <div class="table">
//           <div class="column">
//             <div class="data">Author:</div>
//             <div class="data">YOP:</div>
//             <div class="data">Total Pages:</div>
//             <div class="data">Category:</div>
//             <div class="data">BookCode:</div>
//             <div class="data">Status:</div>
//           </div>
//           <div class="column">
//             <div class="data">${book.author}</div>
//             <div class="data">${book.publicationYear}</div>
//             <div class="data">${book.pages}</div>
//             <div class="data">${book.category}</div>
//              <div class="data">Dynamic-${index + 1}</div>
//              <div class="data">${book.isRead ? 'Read' : 'Not Read'}</div>
//           </div>
//         </div>
//           <div class="buttons">
//           <button class="toggle-read-btn" data-index="${index}">
//             ${book.isRead ? 'Mark as Not Read' : 'Mark as Read'}
//           </button>
//           <button class="remove-btn" data-index="${index}">Remove</button>
//         </div>
//       </div>
//         </div>
//       `;
  
//       libraryContainer.appendChild(bookCard);
//     });
//   }
  

//   document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('toggle-read-btn')) {
//       const index = event.target.dataset.index; // Get the book index
//       library[index].isRead = !library[index].isRead; // Toggle read status
//       displayBooks(); // Redisplay books to update the UI
//     }
//   });
  
//   document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('remove-btn')) {
//       const index = event.target.dataset.index; // Get the book index
//       library.splice(index, 1); // Remove the book from the array
//       displayBooks(); // Redisplay books to update the UI
//     }
//   });
  


// // const library = [];

// // class Book {
// //     id;
// //     title;
// //     author;
// //     numOfPages;
// //     publicationYear;
// //     isRead;
// //     bookCode;

// //     constructor() {
// //         this.id = this.id++,
// //         // this.title = title,
// //         // this.author = author,
// //         // this.numOfPages = numOfPages,
// //         // this.publicationYear = publicationYear,
// //         this.isRead = false
// //     }
// // }

// // function addBook(title, author, numOfPages, publicationYear) {
// //     let newBook = new Book();
// //     newBook.title = title;
// //     newBook.author = author;
// //     newBook.numOfPages = numOfPages;
// //     newBook.publicationYear = publicationYear;
// //     newBook.title = title;

// //     library.push(newBook);
// //     newBook.id = library.length;
// //     return library;
// // }

// // let testbook = addBook("Go to school", "Kola", 10, 2019);
// // let testbook2 = addBook("Go to school", "Kola", 10, 2019);
// // let testbook3 = addBook("Go to school", "Kola", 10, 2019);
// // console.log(testbook);

// // function createBook(){

// // }

// // ------------------------------ Form JS -------------------------------

// // Ensure the DOM is fully loaded before running the script
// // document.addEventListener('DOMContentLoaded', () => {
// // Select elements
// const addBookBtn = document.getElementById("add-book-btn"); // Button to trigger popup
// const popupForm = document.getElementById("popup-form"); // Popup container
// const closePopup = document.getElementById("close-popup"); // Cancel button in the popup

// // addBookBtn.onclick() = function(){showForm()}

// // function showForm ()
// // {
// //     popupForm("unhidden")
// // }

// // document.addEventListener('DOMContentLoaded', () => {
// //     addBookBtn.addEventListener('click', (event) => {
// //             event.preventDefault();
// //             popupForm.classList.add('unhidden'); // Remove 'hidden' class to show popup
// //           });
// //   });

// addBookBtn.addEventListener("click", (event) => {
//     // event.preventDefault();
//     popupForm.id = "unhidden";
// });

// closePopup.addEventListener("click", () => {
//     popupForm.id = "popup-form";
// });

// // Show the popup when the button is clicked
// //   addBookBtn.addEventListener('click', () => {
// //     // event.preventDefault();
// //     popupForm.style = '.unhidden'; // Remove 'hidden' class to show popup
// //   });

// //   // Hide the popup when the cancel button is clicked
// //   closePopup.addEventListener('click', () => {
// //     popupForm.classList.add('unhidden'); // Add 'hidden' class to hide popup
// //   });

// //   // Hide the popup when clicking outside the form
// //   popupForm.addEventListener('click', (e) => {
// //     if (e.target === popupForm) {
// //       popupForm.classList.add('unhidden');
// //     }
// //   });
// // });
