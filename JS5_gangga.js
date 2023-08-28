function BookPurchasing(bookDetail, bookDiscount, bookTax, bookStockAmount, bookPurchasedAmount, creditDuration){
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



                //JS5
                currentDate.setMonth(currentDate.getMonth() + 1);

                for (let i = 1; i <= creditDuration; i++){ 
                    const dueDate = currentDate.toLocaleDateString();

                    dueDates.push("Due Date Month " + i + ": " + dueDate);
                    currentDate.setMonth(currentDate.getMonth() + 1);
                }
                console.log("Credit Duration : " + creditDuration + " Month");

                dueDates.forEach(function (dates) { 
                console.log(dates);
                });
                return dueDates; 
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

const dueDates = []; 
const currentDate = new Date();

BookPurchasing(bookDetail,bookDiscount,bookTax,bookStockAmount,bookPurchasedAmount, 4);