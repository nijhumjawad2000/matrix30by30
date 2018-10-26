var button= document.querySelector('.start');
var walk= document.querySelector('.array');
var arraySize = 30;
var first_i = 0;
var first_j = 0;
var myArray= new Array(30);
for (var i = 0; i < 30; i++){
myArray[i] = new Array(30).fill( 0 );
}
function clickButton() {
    button.style.visibility = 'hidden';
    walk.innerHTML = pre_myArray();
    setTimeout(() => {
        var new_i = 15;
        var new_j = 15;
        myArray[first_i][first_j] = 0;
        new_i += Math.floor(Math.random() * 2);
        new_j += Math.floor(Math.random() * 2);
        myArray[new_i][new_j] = 1;
        first_i = new_i;
        first_j = new_j;
 
        clickButton();
    }, 1000);
 }
 
 function pre_myArray() {
    var result = [];
    for (var k = 0; k < arraySize; k++) {
        result += myArray[k].join(" &nbsp; ") + '<br/>';
    }
    return result;
 }
 
 button.addEventListener('click', function (e) {
    clickButton();
 })