
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

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



let fruitName = document.getElementById("inputText");
let printRes = document.getElementById("printRes");


function fruitsDetect(){  
 
  let res = fruits.filter((word) => word === fruitName.value); 
  if (res >= fruitName){
   // fruitName.value = 'найдено '+ res;
    printRes.textContent = 'найдено ' + res;
    }
  else {
  //  fruitName.value = 'ничего нет!';
    printRes.textContent = 'ничего нет';
    }
    
}

