var limit=10, msjs=''

for ( ini = 0; ini < limit; ini++) {
   
   msjs+=ini+ ", "
}

msjs+=ini
console.log(msjs)


//----------------------------------------------

var li=0, mens=''

for ( ini = 10; ini > li; ini--) {
   
    
    mens +=ini+", "
}

mens+=ini
console.log(mens)
//-----------------------------------------------


var limit=12, par=0,mens=''

for (i = 1; par< limit; i++) {
   
    mens+=par+"\n"
    par= i*2
}

mens+=i
console.log(mens)


//--------------------------------------------

let   multi=5, rs=0,mensa='' 

for ( i = 1;  i<= 10; i++) {
 
  
    rs= multi*i
    mensa+=multi+"x"+i+'='+rs+"\n";
}

mensa+=rs
console.log("TABLA DE "+multi+"\n"+mensa)
 //----------------------------------------------------



 let num=14, div=3

for (let i = 0; i < num; i++) {
  
  

    if(i%3==2){
        console.log(i)
    }
}


//-------------------------------------------------------------


var limit=5, msjs='', letra='xD'

for ( ini = 1; ini < limit; ini++) {
   
   msjs+=letra+','
}

msjs+=letra
console.log(msjs)
//-------------------------------------------------------------------

function financial(x) {
    return Number.parseFloat(x).toFixed(4);
  }
  
  console.log(financial(123.4569));
  // Expected output: "123.46"
  
//---------------------------------

var lim=1.4, mens='',i=0
Number.parseFloat(lim).toFixed(2);
for ( i = 0; i <= lim ; i++) {
 
    mens+=i+','
}
mens+=i
console.log(mens)
