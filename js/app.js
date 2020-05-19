`use strict`

var objArr = [];
var timeArr = ['theLocation','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','total:  ']

var myTable = document.getElementById('myTable');
var container = document.createElement('table');
myTable.appendChild(container);
var row1 = document.createElement('tr');
container.appendChild(row1);


for (x=0;x<timeArr.length;x++){
    var th1 = document.createElement('th');
    row1.appendChild(th1).textContent = timeArr[x];
}



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

 function sumCalculator (arrsum){
     var prod = 0 
     
     for (y=0;y<=13;y++){
prod = prod + arrsum[y]
     }
     return prod;
 }
       


function Location(name ,mincus , maxcus , avgSales){
    this.name = name
    this.mincus=mincus;
    this.maxcus=maxcus;
    this.avgSales=avgSales;
    this.coockes=arrMaker(this.mincus,this.maxcus,this.avgSales);
    this.sumCoockes=sumCalculator (this.coockes);
    objArr.push(this);
    render2(this.name,this.coockes,this.sumCoockes);
}



  

var seattle = new Location (
    'seattle',
    23,
    65,
    6.3
)   ;                       

var Tokyo = new Location (
    'Tokyo',
    3,
    24,
    1.2
);


var Dubai = new Location (
    'Dubai',
    11,
    38,
    3.7
);


var Paris = new Location (
    'Paris',
    20,
    38,
    2.3
);


var Lima = new Location (
    'Lima',
    2,
    16,
    4.6
);

console.log(objArr)
/*
Location.prototype.render = function (){
    var row2 = document.createElement('tr');
    container.appendChild(row2);
    var td1 = document.createElement('td');
        row2.appendChild(td1).textContent = this.name;
    
        for (n=0;n<this.coockes.length;n++)
        {
        var td1 = document.createElement('td');
        row2.appendChild(td1).textContent = this.coockes[n];
       }
    var td1 = document.createElement('td');
        row2.appendChild(td1).textContent = this.sumCoockes;
    
}
*/


function render2 (locationName,locationArr,locationSum){
var row2 = document.createElement('tr')
container.appendChild(row2)
var td1 = document.createElement('td');
    row2.appendChild(td1).textContent = locationName;

    for (n=0;n<locationArr.length;n++){
    var td1 = document.createElement('td');
    row2.appendChild(td1).textContent = locationArr[n];
}
var td1 = document.createElement('td');
    row2.appendChild(td1).textContent = locationSum;

}

// function render3(locationName,locationArr,locationSum){
//     for(var i=0; ;i++){
//         var row2 = document.createElement('tr')
//         container.appendChild(row2)
//         for(){
//             var td1 = document.createElement('td');
//         }
//     }

//}

//render2 (seattle.name,seattle.coockes,seattle.sumCoockes)















 








