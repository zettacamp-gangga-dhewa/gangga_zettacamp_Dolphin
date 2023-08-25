// Update your book purchasing function to have parameter 
// - amount of stock
// - amount of purchased book 
// Then calculate total price & display the result

// Note:
// The function must have at least:
// - for loop iteration
// - break when amount of book is already out of stock
// - Display text if amount of book after purchasing can be purchased again or not

function BookPurchasing(bookDetail, bookDiscount, bookTax, bookStockAmount, bookPurchasedAmount){
    console.log('Book Stock :',bookStockAmount)
    if(bookDetail.Discount !== true){
        console.log('Discount Not Available')
    }
    else{
        for(let i=0;i<bookStockAmount;i++){
            stock = bookStockAmount - bookPurchasedAmount
            if(stock<0){
                console.log(stock)
                console.log('Cant Purchase')
                break
            }else if(stock==0){
                console.log('Out of Stock')

                discountPrice = (bookDetail.Price - bookDiscount) //harga setelah diskon
                taxPrice = discountPrice + bookTax //harga setelah pajak
                totalPrice = taxPrice*bookPurchasedAmount //total harga
        
                console.log('========================')
                console.log('Discount Amount :',bookDiscount)
                console.log('Tax Amount :',bookTax)
                console.log('==========================')
                console.log('Discount Price :',discountPrice)
                console.log('Price after Tax :',taxPrice)
                console.log('Quantity :',bookPurchasedAmount)
                console.log('==========================')
                console.log('Total Price :',totalPrice)
                break
            }else if(stock>0){
                discountPrice = (bookDetail.Price - bookDiscount) //harga setelah diskon
                taxPrice = discountPrice + bookTax //harga setelah pajak
                totalPrice = taxPrice*bookPurchasedAmount //total harga
        
                console.log('========================')
                console.log('Discount Amount :',bookDiscount)
                console.log('Tax Amount :',bookTax)
                console.log('==========================')
                console.log('Discount Price :',discountPrice)
                console.log('Price after Tax :',taxPrice)
                console.log('Quantity :',bookPurchasedAmount)
                console.log('==========================')
                console.log('Total Price :',totalPrice)
            }
        }      
    }
};

const bookDetail=
{
    Title :'Cloud Atlas',
    Author :'David Mitchell',
    Price : 50000,
    Discount : true
};
const bookDiscount = 4000;
const bookTax = 3000;
const bookStockAmount = 5;
const bookPurchasedAmount = 4;

BookPurchasing(bookDetail,bookDiscount,bookTax,bookStockAmount,bookPurchasedAmount);