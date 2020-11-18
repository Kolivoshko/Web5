function verify(num){
    let result;
    switch(num){
        case 1:
            result = "зима";
            break;
        case 2:
            result = "весна";
            break;
        case 3:
            result = "літо";
            break;
        case 4:
            result = "осінь";
            break;
        default:
            result = "";
            break;
    }
    return result;
}

console.log(verify(1));
console.log(verify(2));
console.log(verify(3));
console.log(verify(4));
console.log(verify(5));