const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;
let timeup=false;



function startGame(){
    scoreEl.textContent = 0;
    score=0;
    timeup=false;
    run();
    setTimeout(()=> timeup=true,10000)
}

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'mole.svg'

    img.addEventListener('click', () => {
        score += 10
        scoreEl.textContent = score
        img.src = 'mole.svg'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            if(!timeup) run()
        })
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        if(!timeup) run()
    }, 1000)
}