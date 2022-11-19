import { menuArray } from './data.js'

const container = document.getElementById('main')
const cartContainer = document.getElementById('modal-cart')
const cartContents = document.getElementById('cart-contents')
const cartButton = document.getElementById('open-cart-button')
const menuOptionsSelector = document.getElementById('menu-options')
const closeCartModalButton = document.getElementById('close-cart-modal-button')
const closePaymentModalButton = document.getElementById('close-payment-modal-button')
const paymentModalContainer = document.getElementById('modal-payment-container')
const paymentModal = document.getElementById('modal-payment')
const completeOrderButton = document.getElementById('complete-order-button')
const modalOutro = document.getElementById('modal-outro')
const modalOutroContainer = document.getElementById('modal-outro-container')
const ratingStars = document.querySelectorAll(".rating-star")

let feedHtml = ''
let shoppingCart = []
let ratingSelected

// Buttons to interact with Modals
cartButton.addEventListener('click', () => {
    cartContainer.style.display = "block"
})

closeCartModalButton.addEventListener('click', () => {
    cartContainer.style.display = "none"
})

closePaymentModalButton.addEventListener('click', () => {
    paymentModalContainer.style.display = "none"
    cartContainer.style.display = "block"
})

completeOrderButton.addEventListener('click', () => {
    paymentModalContainer.style.display = "block"
    cartContainer.style.display = "none"
    completeOrder()
})

// to handle menu item values to add/remove to shopping cart
document.addEventListener('click', e => {
    if (e.target.dataset.id) {
        handleAddItemToCart(e.target.dataset.id)
    } else if (e.target.dataset.subtract) {
        handleRemoveItemFromCart(e.target.dataset.subtract)
    }
})

// *** HTML Render functions ***

// To render menu on load and when called with menu selector on full menu option
function getMenuHtml() {
    menuArray.forEach(menuItem => {
        const { name, ingredients, profile, price, type, uuid, category } = menuItem
        if (type === "label") {
            feedHtml += `
            <div class="recipe-container background-menu-category">
                <h2>${category}</h2>
                <hr>
            </div>`
        } else if (type == undefined) {
            feedHtml += ""
        } else
            feedHtml += `
            <div class="recipe-container flex flex-between">
                <div class="item-information flex flex-column">
                    <h3 id="menu-item" class="menu-item">${name}
                        <span> - ${price}</span>
                    </h3>
                    <p id="ingredients" class="ingredients">${ingredients || profile}</p>
                </div>
                <div class="menu-button-container">
                    <i class="fa-solid fa-minus subtract-btn i-tag i-tag-minus" data-subtract="${uuid}"></i>
                    <i class="fa-solid fa-plus add-btn i-tag" data-id="${uuid}"></i>
                </div>
            </div>
            `
    })
    return feedHtml
}

// Using the value of menu selector to change rendered HTML in "main" element
menuOptionsSelector.addEventListener("change", () => {
    let optionValue = menuOptionsSelector.value

    if (optionValue === 'Full-menu') {
        render()
    } else {
        container.innerHTML = `<div class="recipe-container background-menu-category">
        <h2>${optionValue}</h2>
        <hr>
        </div>`
        menuArray.map(item => {
            if (item.type == optionValue) {
                container.innerHTML += `
                <div class="recipe-container flex flex-between">
                    <div class="item-information flex flex-column">
                        <h3 id="menu-item" class="menu-item">${item.name}
                            <span> - ${item.price}</span>
                        </h3>
                        <p id="ingredients" class="ingredients">${item.ingredients || item.profile}</p>
                    </div>
                    <div class="menu-button-container">
                        <i class="fa-solid fa-minus subtract-btn i-tag i-tag-minus" data-subtract="${item.uuid}"></i>
                        <i class="fa-solid fa-plus add-btn i-tag" data-id="${item.uuid}"></i>
                    </div>
                </div>
                `
            }
        })
    }
})

// To take the value of each menu item and convert it to an order reciept
function renderShoppingCartHtml() {
    const totalArray = shoppingCart.map(item => item.amount)
    let num = 0
    let amountOrderedInCart = 0

    shoppingCart.map(item => {
        return num = num + item.price
    })
    document.getElementById('total-contents').textContent = "$ " + num

    for (let num of totalArray) {
        amountOrderedInCart = num + amountOrderedInCart
    }
    document.getElementById('cart-ordered-amount').textContent = amountOrderedInCart
    // needs a clear cart function
    cartContents.innerHTML = ''
    shoppingCart.forEach(obj => {
        cartContents.innerHTML +=
            `
            <div class="flex shopping-cart-container flex-between align-items-center">
                <div class="flex flex-column">
                    <h3 id="menu-item" class="checkout-item">${obj.name}
                        <span class="block"> - in cart - ${obj.amount}</span>
                    </h3>
                </div>
                
                <div class="checkout-button-container">
                <p>$${obj.price}</p>
                <i class="fa-solid fa-minus subtract-btn i-tag i-tag-minus" data-subtract="${obj.uuid}"></i>
                <i class="fa-solid fa-plus add-btn i-tag" data-id="${obj.uuid}"></i>
                </div>
            </div>
            <hr>
        `
    })
}

// required inputs not enabled for testing and scrim review because its annoying 
function completeOrder() {
    paymentModal.innerHTML = `
    <div class="payment-modal-content">
        <h2>Please enter your fake information</h2>
        <form class="payment-form  flex flex-column" id="payment-form">
            <input class="payment-input" id="customer-name" required type="text" placeholder="Enter your full name">
            <input class="payment-input" minlength="16" maxlength="16" pattern="[0-9]*" type="tel" required placeholder="Enter card number">
            <input class="payment-input" minlength="3" maxlength="3" pattern="[0-9]*" type="tel" required placeholder="Enter CVV">
            <div>
                <i class="fa-brands fa-cc-visa payment-icons"></i>
                <i class="fa-brands fa-cc-mastercard payment-icons"></i>
            </div>
            <button class="pay-button">Process Payment</button>
        </form>
    </div>`

    paymentModal.addEventListener("submit", (e) => {
        e.preventDefault()
        const customerName = document.getElementById('customer-name').value
        paymentModalContainer.style.display = "none"
        renderOutroRating(customerName)
    })
}

// Render the final modal using the the rating modal's passed information
function renderOutro(name) {

    modalOutroContainer.style.display = 'none'
    modalOutro.style.display = "block"

    modalOutro.innerHTML = `
    <div class="success-modal-content">
        <p class="success-thanks-text">Thank you ${name} for playing on this app and giving us a ${ratingSelected + 1} star review.</p>
        <p class="success-order-text">Your food will take some time as the restaurant is not real.</p>
        <div class="success-rating-container">
            <p class="success-order-text">Would you like hire me as a Junior Dev? Will work for food and diapers for my little one...</p>
            <p>Oh and our employees will be paid based on your review. On a 1 star review we will take their stapler and move their office space to the basement.</p>
        </div>
        <button class="survey-button" id="survey-button">Continue</button>
    </div>
    `
    if (ratingSelected + 1 === 1) {
        modalOutro.innerHTML += `<p>I'll let Timmy know.</p>`
    }
    const surveyButton = document.getElementById('survey-button')
    surveyButton.addEventListener('click', clearContent)
}

// *** Action Functions *** 

// To iterate through the id's of menuArray and push them to the "shoppingCart"
function handleAddItemToCart(id) {
    const object = menuArray.find(obj => obj.uuid === id)

    if (!shoppingCart.some(item => item.uuid === id)) {
        shoppingCart.push({
            uuid: object.uuid,
            name: object.name,
            price: object.price,
            amount: 1
        })
    } else {
        shoppingCart[(shoppingCart.findIndex(item => item.uuid === id))].amount += 1
        shoppingCart[(shoppingCart.findIndex(item => item.uuid === id))].price += object.price
    }
    renderShoppingCartHtml()
}

// needs some work. This leaves an object with 0 amount untill clicked one more time. Then 
// throws errors if clicked on an minus button where the object does not exist.
function handleRemoveItemFromCart(id) {
    const object = menuArray.find(obj => obj.uuid === id)
    const objectIndex = shoppingCart.findIndex(item => item.uuid === id)

    if (shoppingCart[objectIndex] && shoppingCart[objectIndex].amount > 1) {
        shoppingCart[objectIndex].amount -= 1
        shoppingCart[objectIndex].price -= object.price
    }
    else if (shoppingCart[objectIndex] && shoppingCart[objectIndex].amount === 1) {
        shoppingCart.splice(objectIndex, 1)
    }
    renderShoppingCartHtml()
}

// render the outer div containing the rendered content. 
// needed to use a div within a div to enable buttons to be clicked. 
// Seems to be an issue with using innerHtml 
function renderOutroRating(name) {
    modalOutroContainer.style.display = 'block'
    document.getElementById('confirm-rating').addEventListener('click', () => {
        renderOutro(name)
    })
}

// Used to loop through the stars and change the color
ratingStars.forEach((star, checkedIndex) => {
    star.addEventListener('click', () => {
        ratingStars.forEach((subStars, subIndex) => {
            ratingSelected = checkedIndex
            if (subIndex <= checkedIndex) {
                subStars.classList.add('active')
            } else if (subIndex >= checkedIndex) {
                subStars.classList.remove('active')
            }
        })
    })
})

// Clears final modal and all content
function clearContent() {
    modalOutro.style.display = 'none'
    shoppingCart = []
    modalOutro.innerHTML = ''
    renderShoppingCartHtml()
    render()
}

function render() {
    container.innerHTML = getMenuHtml()
}

render()

