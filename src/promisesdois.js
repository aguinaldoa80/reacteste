/**
 * Using the below two functions produce the following output
 * {
 * authors: ['bob', 'sally'],
 * titles: ['Greeting the World', 'Hello World!']
 * }
 **/

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

(async () => {
  const output = {
    authors: [],
    titles: []
  };
  const authors = await getBooks().then((result) => result);
  await authors.forEach(({ bookId, author }) => {
    output.authors.push(author);
    getTitle(bookId).then(({ title }) => {
      output.titles.push(title);
    });
  });
  console.log(output);
})();
