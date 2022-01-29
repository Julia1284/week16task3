let arr1 = ['js', 'css', 'html']
alert(arr1[0]);//  вывод первого элемента массива

let arr2 = [[1,2], [1,2,3], [1,2,3,4]];
arr2.forEach (function(item, index){
     if(item.length == 3){
         console.log(index)
     }
})//переберет все элементы и выведет в консоль все элементы, у которых длина ==3

let el = arr2.findIndex ( el => el.length == 3);
console.log (el)
// найдет индекс первого элементы, у которого длина ==3



let arr3 = [0, 1, false, 2, undefined, '', 3, null ]

let filArr = arr3.filter (number => number > 0);
alert (filArr);

console.log(filArr)