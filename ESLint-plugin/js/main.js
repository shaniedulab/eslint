const getBooks = new Promise((resolve) => {
    resolve('Books Git');
});

var name;
getBooks().then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
