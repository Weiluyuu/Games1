let round = 1
let pointUser = 0
let pointComputer = 0
const userName = prompt("Enter name", "User")
document.getElementById('name').innerHTML = userName
const winner = document.getElementById('winner')
const point_1 = document.getElementById('point-1')
const point_2 = document.getElementById('point-2')
function func() {
        if (round > 3) {
            return null
        }
        let number1 = (Math.random() * 10).toFixed(0)
        let number2 = (Math.random() * 10).toFixed(0)

        document.getElementById('number-1').innerHTML = number1
        document.getElementById('number-2').innerHTML = number2

        if (number1 > number2) {
            pointUser++
            point_1.innerHTML = pointUser
        } else if (number2 > number1) {
            pointComputer++
            point_2.innerHTML = pointComputer
        } else {
            pointComputer++
            pointUser++
            point_1.innerHTML = pointUser
            point_2.innerHTML = pointComputer
        }
        round++

        if(round > 3) {
            if (pointUser > pointComputer) {
                winner.innerHTML = `${userName} winner!`
            } else if (pointComputer > pointUser) {
                winner.innerHTML = `Computer winner!`
            } else winner.innerHTML = `Both winner!`;
            return null
        }
}