 const info = document.getElementById('info')
 const caret = document.getElementById('icon1')
 const caret2 = document.getElementById('icon2')
 const url = document.getElementById('click')
 const displayInfo2 = ()=>{
caret2.addEventListener('click',(e)=>{
  e.preventDefault(e)
  
   if(info.style.display ==='none'){
    info.style.display ='block'
    caret2.style.display ='none'
    caret.style.display ='block'
   }else{
    info.style.display ='none'
    caret.style.display ='none'
    caret2.style.display ='block'
   };
})};

 const displayInfo = ()=>{
 caret.addEventListener('click',(e)=>{
  
  e.preventDefault(e)
   if(info.style.display ==='none'){
    info.style.display ='block'
    caret2.style.display ='none'
    caret.style.display ='block'
   }else{
    info.style.display ='none'
    caret.style.display ='none'
    caret2.style.display ='block'
   };
})};




  function fetchData() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data  => {
    let author = data.results;
    let output = "";
    let name = "";
    author.forEach(function Render(lists){
      output+= `
      <ul id="info-list" class="info-list">
       <li>Age: ${lists.dob.age}</li>
       <li>Email: ${lists.email}</li>
       <li>City: ${lists.location.city}</li>
       <li>State: ${lists.location.state} </li>
       <li>Cellphone: ${lists.cell}</li>
      </ul>
      `
      name = `${lists.name.first} ${lists.name.last}`
      image =`<img class="photo-large" src="${lists.picture.large}">`
    });
    document.getElementById('info').innerHTML = output;
    document.getElementById('name').innerHTML = name;
    document.getElementById('cv-photo').innerHTML = image;
  });
 };
 
 play =(url)=> {
  new Audio(url).play();
}
 
fetchData();
displayInfo();
displayInfo2();
play();
