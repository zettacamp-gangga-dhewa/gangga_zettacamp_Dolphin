const favbook=[1,2];
const leastbook=[3,4];

let book1={
    Title : "When Mockingbird Sing",
    Author : "Albert Camus",
    Genre : "Fiction"
};
const book2={
    Title : "Cloud Atlas",
    Author : "David Mitchell",
    Genre : "Science Fiction"
};
let book3={
    Title :"White Fang",
    Author : "Jack London",
    Genre : "Adventure"
};

let book4={
    Title :"The Secret Habits to Master Your Art of Speaking",
    Author : "Oh Su Hyang",
    Genre : "Non-Fiction"
};

// books.push(5);
favbook[1]=book1;
favbook[2]=book2;
leastbook[3]=book3;
leastbook[4]=book4;

//1b
//book2=book3;
//favbook[2]=leastbook[3];

//concat
allbook=favbook.concat(leastbook);


console.log("\nMy Favourite Book :\n",favbook[1]);
//console.log("\nMy Least Favourite Book :\n",leastbook[3]);

// console.log("\nBook Collection :\n",allbook);

//concat
// books[2]=book2 + "\n" + book3;

// let bookall = books[1].concat(books[2],books[3]);


// console.log(book2);
