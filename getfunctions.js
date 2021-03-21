function GetCountries(){
  let dropdown = document.getElementById('locality-dropdown');
  dropdown.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose State/Province';

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>
  // var tbl = document.createElement("table");
  // var tblBody = document.createElement("tbody");
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
   // var selectlists =  document.getElementsByClassName('button');
    var mainul = document.getElementById('mainul');
    let option;
    for (let i = 0; i < json.length; i++) {
      option = document.createElement('option');
      option.text = json[i].name;
      option.value = json[i].name;
      dropdown.add(option);
      var lii= document.createElement('li');
      lii.innerHTML = json[i].name;

        // selectlistss = document.getElementsByClassName("button").innerHTML + "<option value='"+json[i].name["MainMenuId"]+"'>"+json[i].name+"</option>";
       // selectlists.appendChild('<option value=' + json[i].name + '>' + json[i].name + '</option>');

      var imgg = document.createElement('img');
      imgg.src= json[i].flag;
      lii.appendChild(imgg);
      mainul.appendChild(lii);
      //divv.appendChild(mainul)
     }
     })
}
function getdetails(){
 var selectedCountry = document.getElementById('locality-dropdown');
 console.log(selectedCountry.value);

  fetch('https://restcountries.eu/rest/v2/name/'+selectedCountry.value)
    .then(response => response.json())
    .then(json => {
   // var selectlists =  document.getElementsByClassName('button');
    document.getElementById('namee').innerHTML="Country: "+selectedCountry.value;
     document.getElementById('region').innerHTML="Region: "+json[0].region;
     //document.getElementById('currency').innerHTML="Currency"+json.currency;
     document.getElementById('flag').src=json[0].flag;
     }
     )
}
function useApi(){
  fetch('https://obscure-retreat-73939.herokuapp.com/rawaa')
  .then(response => response.json())
  .then(json => {
      console.log("bye")
      console.log(json)
      console.log(json.length)

   // var selectlists =  document.getElementsByClassName('button');
    var mainul = document.getElementById('mainul');
    let option;
    for (let i = 0; i < json.length; i++) {
      var x =`<div class="card" style="width: 18rem;">`+`
      <img src=`+json[i].image+` class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">`+json[i].name+`</h5>
      <p class="card-text">`+json[i].role+`</p>
      </div>
      </div> `
      var mydiv= document.createElement('div')
      mydiv.innerHTML= x;
      rawaa.appendChild(mydiv);    
     
     }
     })
}

function useApiFlag(){
  fetch('https://obscure-retreat-73939.herokuapp.com/rawaa2')
  .then(response => response.json())
  .then(json => {
      console.log("bye")
      console.log(json)
      console.log(json.length)

   // var selectlists =  document.getElementsByClassName('button');
    var mainul = document.getElementById('mainul');
    let option;
    for (let i = 0; i < json.length; i++) {
      var x =`<div class="card" style="width: 18rem;">`+`
      <img src=`+json[i].flag+` class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">`+json[i].name+`</h5>
      <p class="card-text">`+json[i].capital  +`</p>
      </div>
      </div> `
      var mydiv= document.createElement('div')
      mydiv.innerHTML= x;
      rawaa.appendChild(mydiv);    
     
     }
     })
}
