const listRef = document.querySelectorAll('.item');
console.log(`В списке ${listRef.length} категории.`)

listRef.forEach( categori =>  {
    console.log(`Категория: ${categori.querySelector('h2').textContent} `)
    console.log(`Количество элементво: ${categori.querySelectorAll('li').length}`)
})
