document.addEventListener('DOMContentLoaded', ()=>{
    console.log('event successfully loaded')
    //creating the fetch method
    fetch('https://judithawino.github.io/phase-1-project/db.json')
    .then(response=>response.json())
    .then(data=>{
        firstFruitData(data[0])
        console.log('sucessfully fetched fruits object', data)
        data.forEach((elements=>{fruitList(elements)
        }))

    })    

let divName=document.getElementById('name')
    //creating a function to display the first fruit once the browser loads
const firstFruitData=function(fruitobj){
    
    let divOrigin=document.getElementById('origin')
    let divInfo=document.getElementById('fruit-info')
    let divBenefits=document.getElementById('benefits')    
    let divRisks=document.getElementById('risks')
    let image=document.querySelector('img')

    divName.textContent=fruitobj.name
    divOrigin.textContent=fruitobj.origin
    divInfo.textContent=fruitobj.description
    //creating a new element tag
    let par=document.createElement('p')
    par.textContent=fruitobj.benefits
    divBenefits.append(par)
    let paragraph=document.createElement('p')
    paragraph.textContent=fruitobj.risk
    divRisks.appendChild(paragraph)
    image.src=fruitobj.photo_url
}

const fruitList=function(fruitobj){
    let ul=document.getElementById('fruits')
    let span=document.createElement('span')
    span.setAttribute('id','list')
    span.textContent=fruitobj.name
    ul.appendChild(span)

    span.addEventListener('click',()=>{
        firstFruitData(fruitobj)
    })
}
const submitComment=function(){
    let commentsForm=document.getElementById('comments-form')
    commentsForm.addEventListener('submit', (event)=>{
        console.log(event)
        event.preventDefault()
        let inputComment=document.getElementById('input')
        let p=document.createElement('p')
        p.textContent=inputComment
         text.style.color = "red"
         inputComment.append(p)
         form.reset()


    })
    submitComment()
}
fetch("https://judithawino.github.io/phase-1-project/db.json", requestPostMethod)
  .then(response => response.text())
  .then(result => createNewFruit(result))
  .catch(error => console.log('error', error));

  const requestPostMethod = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'}

  let raw = JSON.stringify({
    "name": "",
    "origin": "",
    "photo_url": "",
    "description": "",
    "benefits":"",
    "risks":""
})

const createNewFruit=function(fruitobj){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let form=document.querySelector('form')

    
}});













