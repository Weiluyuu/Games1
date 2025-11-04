const container = document.createElement('div')
container.className = 'container'

document.body.appendChild(container)

const title = document.createElement('h3')
title.textContent = "Магічна куля"
container.appendChild(title)

const magicBall = document.createElement('div')
magicBall.className = 'magic-ball'
container.appendChild(magicBall);

const answer = document.createElement('div')
answer.id = 'answer'
magicBall.appendChild(answer)

const text = document.createElement('h4')
text.textContent = "Задай питання"
container.appendChild(text);

const input = document.createElement('input')
input.type = 'text';
input.placeholder = 'Ввести...'
input.id = 'question'
container.appendChild(input)

const button = document.createElement('button')
button.textContent = 'Отримати відповідь'
container.appendChild(button)
button.onclick = func

function func() {
    const answers = ['Так', 'Ні', 'Не думаю', 'Можливо', 'Скоріш ні', 'Скоріш так', 'Спробуй знову', 'Дуже сумнівно', 'Неможливо сказати', 'Точно ні']
    const text2 = document.getElementById('answer')
    const questions = document.getElementById('question').value.trim();

    if (questions === '') {
        text2.innerHTML = 'Введіть питання'
    } else if (!questions.endsWith('?')) {
    text2.innerHTML = 'Питання закінчується на "?"'
    } else {
        text2.textContent = 'Думаю...'
        text2.style.animation = 'pulse 1s infinite'

        setTimeout(function() {
            const random = Math.floor(Math.random() * answers.length)
            answer.textContent = answers[random]
            text2.style.animation = ''
        }, 2000)
    }
}
