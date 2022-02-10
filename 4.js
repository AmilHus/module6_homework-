function ShowInterval(firstnum,lastnum) {
    const loop = setInterval(()=>{
        if (firstnum<=lastnum){
            console.log(firstnum);
            firstnum++;
        }
        if (firstnum>lastnum){
            clearInterval(loop);
        }
    },1000)   
}
ShowInterval(5,15);