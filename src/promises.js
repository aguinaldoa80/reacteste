/**
 * DO NOT USE ASYNC/AWAIT
 * Using the below two functions produce the following output
 * {
 * authors: ['bob', 'sally'],
 * titles: ['Greeting the World', 'Hello World!']
 * }
 * */

const getBooks = () => {
  return new Promise((resolve) => {
    resolve([
      {
        bookId: 1,
        author: "bob"
      },
      {
        bookId: 2,
        author: "sally"
      }
    ]);
  });
};

const getTitle = (bookId) => {
  return new Promise((resolve, reject) => {
    switch (bookId) {
      case 1:
        resolve({ title: "Greeting the World" });
        break;
      case 2:
        resolve({ title: "Hello World!" });
        break;
      default:
        reject(new Error("404 - book not found"));
    }
  });
};

const getAll = () => {
  return new Promise((resolve) => {
    getBooks().then((value) => {
      const _return = {
        authors: [],
        titles: []
      };
      value.forEach((element, index, array) => {
        _return.authors.push(element.author);
        getTitle(element.bookId).then((value) => {
          _return.titles.push(value.title);
          if (!array[index + 1]) {
            resolve(_return);
          }
        });
      });
    });
  });
};

getAll().then(console.log);
