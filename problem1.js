let number = 5;

let fact = 0;

for(let i=1; i<=number; i++)
{
   if(number % i == 0)
   {
      fact++;
   }
}
 
(fact == 2)?console.log("prime"):console.log("not prime");