function CheckNumbers(
    arr,
    odd = 0,
    even = 0,
    x = 0,
    y = 0)
    {
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
    });
    console.log("Нечетные числа:" + odd);
    console.log("Четные числа:" + even);
    console.log("Нулевые значения:" + x);
    console.log("Не числовые значения:" + y);
}
CheckNumbers([3,3,3,4,0,{},"!"]);
