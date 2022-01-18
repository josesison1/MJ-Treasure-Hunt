// alert(`You are live and direct!`)


// A function that resets the title of the page to ---> "Michael Jordan Treasure Hunt"
// code below:

// const basketball = () => {
//    document.getElementById("title").innerHTML = "Greatest Of All Time"
// }



//
//   var mj = Math.floor(Math.random() * 9)
//   var bomb = Math.floor(Math.random() * 9)
//
// while (mj === bomb) {
//   var bomb = Math.floor(Math.random() * 9)
// }
//
// const treasure = (n) => {
//   if (n == mj) {
//   document.getElementById(id).innerHTML = "&#x1f308"
//   alert('You are goated!')
// }  else if (n === bomb) {
//   document.getElementById(id).innerHTML = "&#x2620"
//   alert('You lose!')
// } else {
//   document.getElementById(id).innerHTML = "&#x1f332"
// }
// }

const bomb = Math.floor(Math.random()*9)

const treasure = (id) => {
  if (id === bomb){
     document.getElementById(id).innerHTML = "&#x2620"
    alert("You lose!")
    // document.getElementById(lose).innerHTML = '<img src="skull.png"/>'
  } else {
     document.getElementById(id).innerHTML = "&#x1f332"
  }
}
//




// var id = Math.floor(Math.random() * 12)
// const rainbow = () => {
//    return document.getElementById(id).innerHTML = "&#x1f332"
// }
