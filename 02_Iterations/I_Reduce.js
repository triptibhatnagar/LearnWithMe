const myNums = [1,2,3,4,5]
// const initialVal = 0
// const sumOfNum = myNums.reduce((acc, currVal) => acc+currVal,initialVal)
const sumOfNum = myNums.reduce(function (acc, currVal) {
    console.log(`Accumulator: ${acc} and Current value: ${currVal}`)
    /*
    Accumulator: 0 and Current value: 1
    Accumulator: 1 and Current value: 2
    Accumulator: 3 and Current value: 3
    Accumulator: 6 and Current value: 4
    Accumulator: 10 and Current value: 5
    */
    return acc+currVal
}, 0)
console.log(sumOfNum)// 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "java course",
        price: 4000
    },
    {
        itemName: "web dev course",
        price: 5000
    },
]

//add the prices of all items in shoppingcart
const totalPrice = shoppingCart.reduce((acc,currVal)=> acc + currVal.price,0)
console.log(totalPrice);
