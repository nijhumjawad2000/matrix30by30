var button= document.querySelector('.start');
var walk= document.querySelector('.array');
var preX = 0;
var preY = 0;
var myArray= new Array(30);
for (var i = 0; i < 30; i++){
myArray[i] = new Array(30).fill( 0 );
}
// document.write(myArray[15].splice(15,1,1));
function clickButton(){
    // walk.innerHTML=myArray.indexOf(1);
    walk.innerHTML= '['+myArray[0].join(" ")+']'+'<br/>'
    +'['+myArray[1].join(" ")+']'+'<br/>'+'['+myArray[2].join(" ")+']'+
    '<br/>'+'['+myArray[3].join(" ")+']'+'<br/>'+'['+myArray[4].join(" ")
    +']'+'<br/>'+'['+myArray[5].join(" ")+']'+'<br/>'+'['+myArray[6].join(" ")+']'
    +'<br/>'+'['+myArray[7].join(" ")+']'+'<br/>'+'['+myArray[8].join(" ")+']'
    +'<br/>'+'['+myArray[9].join(" ")+']'+'<br/>'+'['+myArray[10].join(" ")+']'
    +'<br/>'+'['+myArray[11].join(" ")+']'+'<br/>'+'['+myArray[12].join(" ")+']'
    +'<br/>'+'['+myArray[13].join(" ")+']'+'<br/>'+'['+myArray[14].join(" ")+']'
    +'<br/>'+'['+myArray[15].join(" ")+']'+'<br/>'+'['+myArray[16].join(" ")+']'
    +'<br/>'+'['+myArray[17].join(" ")+']'+'<br/>'+'['+myArray[18].join(" ")+']'
    +'<br/>'+'['+myArray[19].join(" ")+']'+'<br/>'+'['+myArray[20].join(" ")+']'
    +'<br/>'+'['+myArray[21].join(" ")+']'+'<br/>'+'['+myArray[22].join(" ")+']'
    +'<br/>'+'['+myArray[23].join(" ")+']'+'<br/>'+'['+myArray[24].join(" ")+']'
    +'<br/>'+'['+myArray[25].join(" ")+']'+'<br/>'+'['+myArray[26].join(" ")+']'
    +'<br/>'+'['+myArray[27].join(" ")+']'+'<br/>'+'['+myArray[28].join(" ")+']'
    +'<br/>'+'['+myArray[29].join(" ")+']';
 
 
 



setInterval(() =>{
   var posX =  15;
   var posY = 15;
   myArray[preX][preY]= 0;
   posX +=Math.floor(Math.random()* 2);
   posY +=Math.floor(Math.random()* 2);
   myArray[posX][posY] = 1
   preX = posX;
   preY = posY;

  // clickButton();
}, 1000);
}

button.addEventListener('click',function(e){
    clickButton();
 })
