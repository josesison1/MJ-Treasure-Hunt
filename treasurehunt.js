// to test if javascript is connected to html below:
// alert(`You are live and direct!`) <--------------


// a function to change the title when clicked below:
// const basketball = () => {
//    document.getElementById("title").innerHTML = "Greatest Of All Time"
// }


if (bomb === mj) {
  bomb = Math.floor(Math.random() * 9)
}

var mj = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)

const treasure = (c) => {
  if (c === mj) {
    document.getElementById(c).innerHTML = "&#10060"
    alert("You win!")
    document.getElementById('board').innerHTML = '<img src="jordan.jpg" height="400px" width="700px"/>'
    // setTimeout(() => { window.location.reload(); }, 575); <------- reloads after message pops up
  } else if (c === bomb) {
    document.getElementById("board").innerHTML = '<img src="lebron.jpg" height="400px" width="700px"/>'
    alert("You lose! Try again.")
  } else {
    document.getElementById(c).innerHTML = "&#10060"
  }
 }
