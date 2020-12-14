function generate(){
    var d = new Date();
    var n = String(d.getTime());
    var numberone = parseInt(n.charAt(11)) + 1;
    var numbertwo = parseInt(n.charAt(12)) + 1;
    var number = parseFloat("0" + "." + numbertwo)
    formula(parseFloat(number))
    var a = formula(numberone, parseFloat(number));
    console.log(a)
    var answer = a * 10
    console.log(answer)
    document.getElementById("number").innerHTML = answer;
}
function formula(r, x){
    return((r + 3.8) * x * (1 - x));
}