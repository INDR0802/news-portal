let loadCatagory = async () => {
    let response = await fetch('https://openapi.programming-hero.com/api/news/categories')

    let data = await response.json()

    let category = data.data.news_category

    displayCategory(category)
}


let displayCategory = (category) => {

    let container = document.getElementById('category-container')

    category.forEach(element => {
        let buttonDiv = document.createElement('div')
        buttonDiv.innerHTML = `
        <button class="btn btn-ghost hover:text-purple-600" onclick = 'displayNews(${element.category_id})'>${element.category_name}</button>
        `
        container.appendChild(buttonDiv)
    });
}

let loadNews = async (category_id) => {
    let response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)

    let news = await response.json()

    console.log(news)
}

let displayNews = (category_id) => {
    loadNews(category_id)
}
loadCatagory()