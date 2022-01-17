var clicks = 6

var snugglesLocation = Math.floor(Math.random() * 9)
var raccoonLocation = Math.floor(Math.random() * 9)

if(snugglesLocation===raccoonLocation){
  var snugglesLocation = Math.floor(Math.random() * 9)
}

console.log(snugglesLocation)
console.log(raccoonLocation)

const catGame = (location) => {
 if(location===snugglesLocation){
    document.getElementById(location).innerHTML= "😸"
       document.getElementById("win-lose").innerHTML= `YOU FOUND SNUGGLES!! ${clicks - 1}`

    }
 else if (location===raccoonLocation){
   document.getElementById(location).innerHTML= "🦝"
   document.getElementById("win-lose").innerHTML= `YOU'VE BEEN BIT BY A RABBID RACCOON ${clicks - 1}`

 }
 else {
   document.getElementById(location).innerHTML= "❌"
document.getElementById("win-lose").innerHTML= `${clicks - 1}`

 }
clicks=clicks - 1
}
