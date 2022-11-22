import plugs from '/data.js'

const main = document.querySelector('.main')

main.innerHTML = 
`
   <div>
    <button class="button">Click me for new image</button>
   </div>
   <div class="place-holder">
   </div>
`

const btn = document.querySelector('.button')

function getRandom() {
    const randomNumber = Math.floor(Math.random() * plugs.length)
    return plugs[randomNumber]
}

const placeHolder = document.querySelector('.place-holder')

function randomImage() {
    const plug = getRandom()
    
    console.log(plug)
    placeHolder.innerHTML = 
    `
    <div>
        <h1>This ${plug.name} works</h1>
        <img src="./images/${plug.image}" />
    </div>
    `
}

btn.addEventListener('click', () => randomImage())