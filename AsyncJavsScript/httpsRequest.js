const getTodos = (callback) => {


    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
            console.log(request.responseText)
        }else{
            callback('could not fetch data', undefined);
        }

    })

//logs the price of bitcoin on gbp, usd, eur
    request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    request.send();

}

getTodos((err, data) => {
console.log('callback fired')
    console.log(err,data)
    if(err){
        console.log('err')
    }else {
        console.log('data')
    }


});