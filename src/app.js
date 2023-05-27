let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J', 'A']
let icons = [
    {key: '♦', color: 'red'},
    {key: '♥', color: 'red'},
    {key: '♠', color: 'black'},
    {key: '♣', color: 'black'}
] 
    
const iconTop = document.querySelector('.top-icon')
const iconBottom = document.querySelector('.bottom-icon')
const cardValue = document.querySelector('.number')
const btnGenerator = document.querySelector('.generate')

btnGenerator.addEventListener('click', generateCard)


function generateCard (){
    let randomNum = numbers[Math.floor(Math.random() * numbers.length)]
    let randomIcon = icons[Math.floor(Math.random() * icons.length)]

    iconTop.innerHTML = randomIcon.key
    iconBottom.innerHTML = randomIcon.key
    iconTop.style.color = randomIcon.color
    iconBottom.style.color = randomIcon.color
    cardValue.innerHTML = randomNum
}


