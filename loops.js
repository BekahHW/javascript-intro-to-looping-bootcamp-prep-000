var array = []
 function forLoop(array){
for (var i = 0; i<array.length; i++) {
  if (i===1){console.log('I am 1 strange loop.');}
  else {console.log('I am ${i} strange loops.');}
  
}
 return array 
}

function whileLoop(n){
  let countdown = n;
  while (countdown>0){
    console.log(countdown);
    countdown--;
    
  }
  return 'done'
}

function doWhileLoop(array){
  var i = []
 do {console.log();
}
while (array.length > 0 && maybeTrue());
return array
}