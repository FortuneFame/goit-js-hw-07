const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.table(ingredients)

ingredients.forEach(value => {
    const itemRef = document.createElement('li')
    console.log(itemRef)
    itemRef.textContent = value
    const listRef = document.querySelector('#ingredients')
    listRef.append(itemRef)
})
