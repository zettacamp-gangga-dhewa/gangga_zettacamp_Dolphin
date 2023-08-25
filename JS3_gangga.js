function BookPurchasing(bookDetail, bookDiscount, bookTax){
    if (bookDetail.Discount==true) {
        discountPrice = bookDetail.Price - (bookDetail.Price*(bookDiscount/100));
        taxPrice = discountPrice + (discountPrice*(bookTax/100));

        console.log(bookDetail);
        console.log('Discount Amount :',bookDiscount, '%');
        console.log('Discount Price :',discountPrice);
        console.log('Tax Amount :',bookTax, '%');
        console.log('Total Price after Tax :',taxPrice);
    } else {
        console.log(bookDetail,'Discount Not available');
    }
};

const bookDetail=
{
    Title :'Cloud Atlas',
    Author :'David Mitchell',
    Price : 20000,
    Discount : true
};
const bookDiscount = 20;
const bookTax = 10;

BookPurchasing(bookDetail,bookDiscount,bookTax);


