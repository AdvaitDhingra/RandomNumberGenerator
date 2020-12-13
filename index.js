function generate(){
    var d = new Date();
    var n = String(d.getTime());
    var numberone = n.charAt(0);
    var numbertwo = parseInt(n.charAt(12)) + 1
    var number = parseFloat("0" + "." + numbertwo)
    formula(parseFloat(number))
    var a = formula(parseFloat(number));
    console.log(a)
    var answer = a * 10
    console.log(answer)
    document.getElementById("number").innerHTML = answer || console.log(answer);
}
function formula(x){
    return((x + 3.8) * x * (1 - x));
}