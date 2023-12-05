let listBlock = document.querySelector('.list__block')
let site = document.querySelector('.container')
let callMaster = document.querySelector('.list__btn__text')
let callBlock = document.querySelector('.call')
let l = document.querySelector('.list')
let left = document.querySelector('.facts__left')
let right = document.querySelector('.facts__right')
let imgs = document.querySelectorAll('.facts__picture')
let circles = document.querySelectorAll('.facts__circle')
let price_btn = document.querySelector('.services__price')
let discount_btn = document.querySelector('.discount__get')

let call_bad = document.querySelector('.call__bad')
let call_good = document.querySelector('.call__succes')

let name = document.querySelector('.list__inputName')
let phone = document.querySelector('.list__inputPhone')

let services_btn = document.querySelector('.header__Sbtn')
let services_block = document.querySelector('.services__title')

let reviews_btn = document.querySelector('.header__Rbtn')
let reviews_block = document.querySelector('.reviews')

let prices_btn = document.querySelector('.header__Pbtn')

let contacts_btn = document.querySelector('.header__Cbtn')
let contacts_block = document.querySelector('.basement')

let show_status = false
let active_img = 0
img_count = imgs.length

callMaster.addEventListener('click', call_m)

left.addEventListener('click', change_left)
right.addEventListener('click', change_right)

services_btn.addEventListener('click', go_services)
reviews_btn.addEventListener('click', go_reviews)
prices_btn.addEventListener('click', go_prices)
contacts_btn.addEventListener('click', go_contacts)
price_btn.addEventListener('click', go_prices)
discount_btn.addEventListener('click', go_prices)

function go_services() {
	services_block.scrollIntoView({ behavior: 'smooth' })
}

function go_reviews() {
	reviews_block.scrollIntoView({ behavior: 'smooth' })
}

function go_contacts() {
	contacts_block.scrollIntoView({ behavior: 'smooth' })
}

function go_prices() {
	l.scrollIntoView({ behavior: 'smooth' })
}

function change_left() {
	active_img = (img_count + active_img - 1) % img_count
	move()
}

function change_right() {
	active_img = (active_img + 1) % img_count
	move()
}

function call_m() {
	if (validation()) {
		call_bad.style.display = 'none'
		call_good.style.display = 'block'
	} else {
		call_bad.style.display = 'block'
		call_good.style.display = 'none'
	}
	name.value = ''
	phone.value = ''
	callBlock.style.display = 'flex'
	callBlock.classList.add('out')
	setTimeout(closeCall, 2000)
}

function closeCall() {
	callBlock.style.display = 'none'
	callBlock.classList.remove('out')
}

function validation() {
	if (
		name.value === '' ||
		phone.value === '' ||
		phone.value.length > 11 ||
		phone.value.length < 11 ||
		phone.value[0] != '7'
	) {
		return false
	}
	return true
}

function move() {
	for (let i = 0; i < img_count; i++) {
		if (i == active_img) {
			imgs[i].style.display = 'block'
			circles[i].classList.add('facts__circle-active')
			imgs[i].classList.add('in')
		} else {
			imgs[i].style.display = 'none'
			circles[i].classList.remove('facts__circle-active')
			imgs[i].classList.remove('in')
		}
	}
}

move()
