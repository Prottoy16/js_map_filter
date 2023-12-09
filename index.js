// for Each method
const number=[16,2,3,45,5,63];
const newNumber=[];

number.forEach(Myfunction);
function Myfunction(value){
    newNumber.push(value*value);
}
console.log(newNumber);

// map method
const NewNumber=number.map(function(value){
   return value*value*value; 
});

console.log(NewNumber);

const FilteredNumber=number.filter(filterfnc);
function filterfnc(value){
    return value<10;
}

console.log(FilteredNumber);