
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countItems = (list) =>{
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
