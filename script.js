var header = document.createElement("h2")
header.innerHTML="List Breweries"
header.className="titlename"
document.body.append(header)


const xhr = new XMLHttpRequest();
const url = 'https://api.openbrewerydb.org/breweries';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) 
  {
    var brewery = xhr.response;
  }
  const breweriesList = document.createElement("div");
  breweriesList.className="listdiv";


  brewery.forEach((breweries) => 
{
  const breweriesrContainer = document.createElement("div");
  breweriesrContainer.className="container"
  breweriesrContainer.innerHTML = `
    <p class = "name">      Brewery Name : <span class="content">${breweries.name}</span></p>
    <p class = "type">      Brewery Type : <span class="content">${breweries.brewery_type}</span></p>
    <p class = "website">   Brewery’s Address : <span class="content">${breweries.city},${breweries.state},${breweries.country} </span></p>
    <p class = "country">   Website URL : <a href="${breweries.website_url}" target="_blank">${breweries.website_url}</a></p>
    <p class = "phone">     Phone No. : <span class="content">${breweries.phone} </span></p>
`;
  breweriesList.append(breweriesrContainer);
});


document.body.append(breweriesList);
};
xhr.open('GET', url);
xhr.send();

