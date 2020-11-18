function verify(text){
    if (text == 'test') console.log("Вірно!");
    else console.log("Невірно!");
}

verify('test');
verify('тест');
verify(3);