import {firebaseAPIkey, newsAPIkey, iexCloudAPIkey} from './apikeys.js'
// console.log(firebaseAPIkey)
// console.log(newsAPIkey)
// console.log(firebaseAPIkey)

$(()=>{
    
    
    // News API search

    var $searchSubmit = $('#searchSubmit')
    $searchSubmit.click(function() {
        var $searchContent = $('#searchContent')[0].value
        var url = `https://newsapi.org/v2/everything?q=${$searchContent}&sortBy=relevancy&apiKey=${newsAPIkey}`
        $.get(url)
        .done(function (response) {
            // console.log(response.articles)
            for (let i = 0; i < response.articles.length; i++) {
                console.log(response.articles[i].title)
            }
        })
    })
})