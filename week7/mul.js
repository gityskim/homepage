onmessage = function(e){
    if(e.data[0] == "add"){
        let x = eval(e.data[1] + "+" + e.data[2]);
        postMessage(x);
    }
    else if (e.data[0] == "mul") {
        let x = eval(e.data[1] + "*" + e.data[2]);
        postMessage(x);
    }
}