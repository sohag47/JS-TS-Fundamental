var topic = "JS";

if(topic){
    var topic = "React";
    document.getElementById("root").innerHTML = "Block"+topic;
}
        
var x = function(x , y){
    return x * y;
}

const x = (x, y) => x * y;
document.getElementById('root').innerHTML = x(5, 5);