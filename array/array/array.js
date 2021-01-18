let bubbles = [60, 59, 48, 71, 45, 56, 67, 65, 87, 32]

let fruits = ["ananas", "mango", "oragnge", "tomato", "cucumber"] 

bubbles.sort()
max = bubbles.pop()

fruits.sort()
fruits.reverse()

bubbles[0]
fruits[2]

console.log(max)
console.log(fruits)

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    let listItem = document.createElement("li")
    listItem.innerText =  fruit
    document.querySelector ("ul").appendChild(listItem)
    
}
// varianta noua de cod for-of//
for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText =  fruit
    document.querySelector ("ul").appendChild(listItem)
    
}
//variata noua de cod for-each//
fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText =  fruit
    document.querySelector ("ul").appendChild(listItem)
    
});


