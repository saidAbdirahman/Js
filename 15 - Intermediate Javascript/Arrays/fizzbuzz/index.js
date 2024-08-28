// for(let i = 1; i<=100; i++){
//     if(i % 3 == 0){
//         document.write("Fizz" + '<br>') 
//     }else if(i % 5 == 0){
//         document.write('Buzz' + '<br>') 
//     }else if(i % 3 == 0 &&i % 5 == 0 ){
//         document.write("Fizzbuzz" + '<br>') 
//     }
//     else{
//         document.write(i+ '<br>')
//     }
// }

var output = [];
var count = 1
function fizzBuzz(){
   while(count<=100){
    if(count % 3 == 0){
        output.push('fizz') 
         }else if(count % 5 == 0){
        output.push('Buzz') 
         }else if(count % 3 == 0 &&i % 5 == 0 ){
             output.push('fizzBuzz') 
         }
         else{
             output.push(count)
         }
 count++
   }
   console.log(output)
}
fizzBuzz()



