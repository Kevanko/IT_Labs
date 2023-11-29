let showPrices = document.querySelector('.services__price')
let getDiscount = document.querySelector('.discount__get')
let listBlock = document.querySelector('.list__block')
let site = document.querySelector('.container')
let closeBlock = document.querySelector('.list__close')
let l = document.querySelector('.list')

let show_status = false

showPrices.addEventListener('click', show)
getDiscount.addEventListener('click', show)
closeBlock.addEventListener('click', close_block)

function show() {
	l.style.display = 'flex'
}

function close_block() {
	l.style.display = 'None'
}
