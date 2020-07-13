import {APIurls} from "./apikeys.js"

$(()=>{

    var companies = []


function createCompanyData(compArr){
   
    for(let company of compArr[0]){
        companies.push({
            symbol : company["ACT Symbol"],
            name : company["Company Name"]
        })
    }
    for(let company of compArr[1]){
        companies.push({
            symbol : company["Symbol"],
            name : company["Company Name"]
        })
    }

    console.log(companies);
  }

  Promise.all([fetch(APIurls[0]),fetch(APIurls[1])])
  .then(results => {
    return Promise.all(results.map(response => response.json()))
      
    })
  .then(json => {
      createCompanyData(json)    
  }) 


  $('#searchField').keyup(function () {
    $("#nameList").html("");
    $("#companyDataContainer").html("");
    let input = document.getElementById('searchField');
    let patt = new RegExp(`^${input.value.toUpperCase()}`);
    
    let ul = document.getElementById("nameList");
    let count = 0;
    for (let company of companies) {

      if (patt.test(company.name.toUpperCase()) && input.value.length > 0 && count<=10) {
         $("#nameList").append(`<li id="${company.symbol}">${company.name} (${company.symbol})</li>`)
        console.log(company)
        count++;
      } 
    }
  });


})
