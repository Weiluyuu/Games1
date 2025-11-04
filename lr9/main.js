const userName = prompt("Enter name", "User")
document.getElementById('name').innerHTML = userName

let round = 1
const cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const values = { '6':6, '7':7, '8':8, '9':9, '10':10, 'J':2, 'Q':3, 'K':4, 'A':11 }

let pointUser = 0
let pointComputer = 0

const scoreUser = document.getElementById('scoreUser')
const scoreComputer = document.getElementById('scoreComputer')

function drawCard() {
    return cards[Math.floor(Math.random() * cards.length)]
}

function func() {
    if (round > 3) return 
    
    document.querySelector('.round').innerHTML = `Round ${round} of 3`

    const cardUser = drawCard()
    const cardComputer = drawCard()

    document.getElementById('userCard').src = `img/${cardUser}.png`
    document.getElementById('computerCard').src = `img/${cardComputer}.png`

    pointUser += values[cardUser]
    scoreUser.innerHTML = pointUser

    pointComputer += values[cardComputer]
    scoreComputer.innerHTML = pointComputer
    round++
    if (round > 3 ) {
        if(pointUser > pointComputer) {
            document.getElementById('winner').innerHTML = `${userName} winner!`
        } else if (pointComputer > pointUser) {
            document.getElementById('winner').innerHTML = `Computer winner!`
        } else document.getElementById('winner').innerHTML = `Both winner!`
        return
    }
}
