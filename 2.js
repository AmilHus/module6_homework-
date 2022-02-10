let flag = true;
function CheckNumbers(num) {
    if (num > 1000){
        console.log("Данные неверны");
    }

    if (num == 1 || num == 0) {
        console.log("Число не является простым");
    }
    
    for (let i = 2;i<num;i++){
        if (num % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag == true && num != 0 && num !=1){
        console.log("Число простое");
    }

    else if(flag == false && num <= 1000){
        console.log("Число составное");
    }
}
CheckNumbers(99);