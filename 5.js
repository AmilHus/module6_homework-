const setDegree = (x,n) => {
    let y = x;
    for (let i = 1;i<n;i++){
        x *= y;
    }
    console.log(x);
}
setDegree(2,10);
