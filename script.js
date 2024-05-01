
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'green apple', 
                'kiwi', 'strawberry large', 'apple juice', 
                'banana', 'raspberry', 'watermelon', 'gavana melon', 'raw potato'];

//пошук фрукта у консолі              
const countItems = (list) => {
const count = {};
fruits.forEach( f => {
    if (!count[f]){
        count[f] = 1;
    } else {
        count[f]++;
    }
});
return count;
};

const countResult = countItems(fruits);
console.log(countResult);


/* 
function findFruits(){
    
const count = {};
fruits.forEach( f => {
    if (!count[f]){
        count[f] = 1;
    } else {
        count[f]++;
    }
});
console.log(count);

}
 */

let fruitName = document.getElementById("inputText");
let printRes = document.getElementById("printRes");

function fruitsDetect(){  
   
  let res = fruits.filter((word) => word.includes(fruitName.value)); 
    
    if (res >= fruitName){   
        printRes.textContent = 'найдено ' + res;
        }
    else {  
        printRes.textContent = 'ничего нет';
        }  
        
    
    
}


