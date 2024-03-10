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
        <button class="btn btn-ghost hover:text-purple-600" onclick = 'loadNews(${element.category_id})'>${element.category_name}</button>
        `
        container.appendChild(buttonDiv)
    });
}

let newsContainer = document.getElementById('news-container')
let searchResult = document.getElementById('search')

let displayNews = (news) => {
    searchResult.innerHTML = `
    <h1>${news.length} items found for This category </h1>
    `

    newsContainer.innerHTML = ""
    console.log(news)

    news.forEach(element => {
        let newsCard = document.createElement('div')
        newsCard.innerHTML = `
        <div class="flex gap-5 bg-slate-200 p-5 rounded-xl m-5 items-center">
        <img src="${element.thumbnail_url}" alt="" class="h-full w-[200px]">
        <div class="flex flex-col gap-4">
            <h1 class="font-extrabold">${element.title}</h1>
            <p>${element.details.slice(0,600)}</p>
            <div class="flex items-center justify-between">
                <div class="flex gap-2 items-center">
                    <img src="https://dummyimage.com/40x40/000/fff" alt="" class="rounded-full h-[40px] w-[40px]">
                    <div>
                        <h1>${element.author.name}</h1>
                        <h1>${element.author.published_date}</h1>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-regular fa-eye"></i>
                    <h1>${element.total_view}</h1>
                </div>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>


    </div>
        `
    newsContainer.appendChild(newsCard)

    });
}

let loadNews = async (category_id) => {
    let response = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)

    let news = await response.json()
    displayNews(news.data)
    console.log(news.data.length)
}

loadNews(8)
loadCatagory()