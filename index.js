import plugs from '/data.js'

const main = document.querySelector('.main')

main.innerHTML = 
`
   <div>
    <button class="button">Click me for new image</button>
   </div>

   <div class="place-holder">
   </div>

   <div>
    <button class='reveal'>reveal answer</button
   </div>
`

const btn = document.querySelector('.button')
const reveal = document.querySelector('.reveal')

function getRandom() {
    const randomNumber = Math.floor(Math.random() * plugs.length)
    return plugs[randomNumber]
}

const placeHolder = document.querySelector('.place-holder')

function randomImage() {
    const plug = getRandom()
    
    placeHolder.innerHTML = 
    `
    <div>
        <img class="images" src="./images/${plug.image}" />
    </div>
    `
    reveal.addEventListener('click', () => {
        reveal.innerHTML = `<h1>${plug.name}</h1>`
    })
}


btn.addEventListener('click', () => randomImage())

{/* <h1>This ${plug.name} works</h1> */}