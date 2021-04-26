
//
// let somefunk = function(height){
//     for ( a = 7, b = 1; a < height; a = a + 7){
//                  if (a >= height){
//                      alert(b);
//                  } else {
//                      a = a - 2 ;
//                      b++;
//                  }
//
//     }
//     // console.log(b);
// }
// somefunk(42);

// let test = function (a){
//    a ? alert('it is true') : alert('it is false');
// }
// test(true);









let somefunk = function(height){
    for ( a = 7, b = 1; a < height; a = a + 7){
        a >= height ? console.log(b) : a = a - 2 ;
        b++;
    }
    console.log(b);
}
somefunk(42);
