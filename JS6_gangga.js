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

                console.log(bookDetail)
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
        
                console.log(bookDetail)
                console.log('========================')
                console.log('Discount Amount :',bookDiscount)
                console.log('Tax Amount :',bookTax)
                console.log('==========================')
                console.log('Discount Price :',discountPrice)
                console.log('Price after Tax :',taxPrice)
                console.log('Quantity :',bookPurchasedAmount)
                console.log('==========================')
                console.log('Total Price :',totalPrice)
                console.log('==========================')


                //JS5
                const currentDate = new Date()

                //JS6
                // Update the function to calculate the amount of payment for each month using array function. 
                // display the data as an array of objects that have values due date of payment and amount of payment.
                // be careful the total amount of payment must be the same as total price of books purchased.
                // let dueDates = new Object()
                
                // let creditDetails = new Array()
                // currentDate.setMonth(currentDate.getMonth() + 1);

                
                const creditPrice = totalPrice / creditDuration;
                currentDate.setMonth(currentDate.getMonth() + 1);

                const creditDetails = Array.from({ length: creditDuration }, (v, i) => {
                    const dueDate = currentDate.toLocaleDateString();
                    currentDate.setMonth(currentDate.getMonth() + 1);

                    return{
                        creditDuration: i+1,
                        dueDateOfPayment: dueDate,
                        amountOfPayment: creditPrice,
                    }
                }
                
                );


                // for (let tempCredit = 1; tempCredit <= creditDuration; tempCredit++){ 
                //     const dueDate = currentDate.toLocaleDateString();
                //     const creditPrice = totalPrice / creditDuration; //harga kredit
                    
                //     dueDates.Month = tempCredit;
                //     dueDates.DueDateOfPayment = dueDate;
                //     dueDates.AmountOfPayment = creditPrice;


                //     // creditDetails.Due = dueDates
                //     // console.log(dueDates)
                //     // dueDates.push("Due Date Month " + tempCredit + ": " + dueDate + ' Amount of Payment :' + creditPrice);
                //     currentDate.setMonth(currentDate.getMonth() + 1);
                // }
        
                console.log(creditDetails)

                console.log("Credit Duration : " + creditDuration + " Months");
                console.log('==========================')                

                // dueDates.forEach(function (dates) { 
                //     console.log(dates);
                // })
                // return dueDates
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

BookPurchasing(bookDetail,4000, 3000, 5, 4, 4);
// BookPurchasing(bookDetail,bookDiscount,bookTax,bookStockAmount,bookPurchasedAmount, creditDuration);