`use strict`
//array 0-13 14
//for loop
// random number of cust
//multiply by ave
//add to array..


//  function numCookes(minfun,maxfun,avgfun) {
    
//     var randomNum = Math.random() * (maxfun - minfun) + minfun;
//     randomNum = Math.floor(randomNum);
//    var numOfSales = randomNum * avgfun;
//    return numOfSales;
// }

var timeArr = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ']
function arrMaker(minfun,maxfun,avgfun){
    var arrfun = [];
    for (i=0 ; i<=13 ; i++){
        var randomNum = Math.random() * (maxfun - minfun) + minfun;
        var numOfSales = randomNum * avgfun;
 var numOfSales = Math.floor(numOfSales)
         arrfun[i] = numOfSales
 }
 return arrfun;
 }  
       

console.log(arrMaker(1,10,1.5))




var Seattle = {
    mincus:23,
    maxcus:65,
    avgSales:6.3,
}
   var Coocke1 = arrMaker (Seattle.mincus , Seattle.maxcus , Seattle.avgSales)
   console.log(Coocke1)
 



var Tokyo = {
    mincus:3,
    maxcus:24,
    avgSales:1.2
}
var Coocke2 = arrMaker (Seattle.mincus , Seattle.maxcus , Seattle.avgSales)

var Dubai = {
    mincus:11,
    maxcus:38,
    avgSales:3.7
}
var Coocke3 = arrMaker (Seattle.mincus , Seattle.maxcus , Seattle.avgSales)

var Paris = {
    mincus:20,
    maxcus:38,
    avgSales:2.3
}
var Coocke4 = arrMaker (Seattle.mincus , Seattle.maxcus , Seattle.avgSales)

var Lima = {
    mincus:2,
    maxcus:16,
    avgSales:4.6
}
var Coocke5 = arrMaker (Seattle.mincus , Seattle.maxcus , Seattle.avgSales)

function printValues(locationName , CoockeX , idName){

var container = document.getElementById(idName);
container.appendChild(document.createElement('p')).textContent = locationName +': '
var myUl = document.createElement('ul');
container.appendChild(myUl);

for (var x=0 ; x<=13 ; x++ ){
    
myUl.appendChild(document.createElement('li')).textContent = timeArr[x] + CoockeX[x];

}
}

printValues('Seattle',Coocke1,'h1');
printValues('Tokyo',Coocke2,'h2');
printValues('Dubai',Coocke3,'h3');
printValues('Paris',Coocke4,'h4');
printValues('Lima',Coocke5,'h5')