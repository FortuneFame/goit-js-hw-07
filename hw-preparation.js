const products = [
  {
    name: 'Сервоприводы',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 2000,
    available: true,
  },
  {
    name: 'Генератор поля',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 3000,
    available: false,
  },
  {
    name: 'Нулевой элемент',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 1500,
    available: true,
  },
  {
    name: 'Титаниум',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 2500,
    available: true,
  },
];

console.table(products)

const creatProductCard = product => {
const containerRef = document.createElement('div')
containerRef.classList.add('product-card')


const titleRef = document.createElement('h2')
titleRef.textContent = product.name
titleRef.classList.add('product-card__name')
// console.log(titleRef)

const descrRef = document.createElement('p')
descrRef.textContent = product.description
descrRef.classList.add('product-card__description')
// console.log(descrRef)

const priceRef = document.createElement('p')
priceRef.textContent = `Цена ${product.price} кредитов`
priceRef.classList.add('product-card__price')
// console.log(priceRef)

// containerRef.appendChild(titleRef)
// containerRef.appendChild(descrRef)
// containerRef.appendChild(priceRef)

containerRef.append(titleRef, descrRef, priceRef)
// console.log(containerRef)
    
return containerRef
}

// console.log(creatProductCard(products[0]))
// console.log(creatProductCard(products[1]))
// console.log(creatProductCard(products[2]))
// console.log(creatProductCard(products[3]))

// products.forEach(product => { 
//     console.log(creatProductCard(products))
// })

const productCards = products.map(product => creatProductCard(product))
console.log(productCards)
const productsListRef = document.querySelector('.js-products')
console.log(productsListRef)
productsListRef.append(...productCards)