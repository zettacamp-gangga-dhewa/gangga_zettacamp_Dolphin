let book1 = 'When Mockingbird Sing';
const book2 = 'Cloud Atlas';

const bookOnePrice = 900000;
const bookTwoPrice = 100000;

const isBookSame = (book1 == book2);
//const isBookSame = (book1 !== book2);

const isPriceHigh = (bookOnePrice > bookTwoPrice);

const averagePrice = (bookOnePrice+bookTwoPrice)/2;

//task1
console.log(isBookSame);
console.log('These 2 Books are', isBookSame ? 'Same Book' : 'Different Book');
//console.log('These 2 Books are', isBookSame ? 'Different Book' : 'Same Book');

//task2a
if (bookOnePrice == bookTwoPrice) {
    console.log('These Books have same price\n',book1,bookOnePrice,'\n',book2,bookTwoPrice);
} else {
    console.log(isPriceHigh);
    console.log('Highest Price :', isPriceHigh ? book1 : book2);
}

//task2b
console.log('\nAverage Price :', averagePrice);

//task2c
console.log(averagePrice >= 500000 ? 'Expensive' : 'Cheap');







