import {firebaseAPIkey, newsAPIkey, iexCloudAPIkey} from './apikeys.js'
// console.log(firebaseAPIkey)
// console.log(newsAPIkey)
// console.log(firebaseAPIkey)

$(()=>{
    
    
    // News API search
    var $searchSubmit = $('#nameList')
    $searchSubmit.click(function(e) {
        console.log(e.target.id)
        var $searchContent = e.target.id
        var url = `https://newsapi.org/v2/everything?q=${$searchContent}&sortBy=relevancy&apiKey=${newsAPIkey}`
        $.get(url)
        .done(function (response) {
            // console.log(response.articles)
            for (let i = 0; i < 3; i++) {
                // console.log(response.articles[i].title)
                let articleList = [$('#article1'),$('#article2'),$('#article3')]
                // console.log(articleList[i][0].innerText)
                articleList[i][0].innerText = response.articles[i].title
            }
        })
    })
})