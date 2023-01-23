//https://randomuser.me/api/

function fetchData() {
  return fetch('https://randomuser.me/api/')
  .then(res => res.json());
};



function renderContent (content) {
 let phone;
  let image;
  let name;
  let city;
  let email;


  content.results.forEach((lists)=>{
    
    console.log(lists)
    name = `${lists.name.first} ${lists.name.last}`
    image =`<img class="photo-large" src="${lists.picture.large}">`
    phone = `${lists.cell}`
    email = `${lists.email}`
    city = `${lists.location.city}`

  });
  
  
  document.getElementById('phone').innerHTML= phone;
  document.getElementById('cv-photo').innerHTML = image;
  document.getElementById('name').innerHTML = name;
  document.getElementById('email').innerHTML = email;
  document.getElementById('city').innerHTML = city;
}
var data = await fetchData();
renderContent(data);
