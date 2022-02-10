let arr = [3,3,3,4,0,{},"!"];
let odd = 0;
let even = 0;
let x = 0
let y = 0
function CheckNumbers(){
    arr.forEach(element => {
    if (typeof (element) == "number"){
        if (element % 2 == 0 && element != 0){
            even++;  
        }
        else if (element % 2 != 0){
            odd++;
        }
        else if (isNaN.element){
            y++;
        }
        else {
            x++;
        }
    }
    else{
        y++;
    }
})}
CheckNumbers();
console.log("Нечетные числа:" + odd);
console.log("Четные числа:" + even);
console.log("Нулевые значения:" + x);
console.log("Не числовые значения:" + y);