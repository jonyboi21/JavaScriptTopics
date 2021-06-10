let paragraph1 = document.querySelector('p')

console.log(paragraph1);

const table = document.querySelector('table');
console.log(table)


const paragraphs = document.querySelectorAll('p')

// console.log(paragraphs)

paragraphs[0].style.color = "red";
console.log(paragraphs[0])

paragraphs.forEach(paragraphs =>{
    console.log(paragraphs)
})

mj = document.querySelector('.Jordan')

console.log(mj)

const l = document.getElementsByClassName('Left')

console.log(l);
const people = ['Lebron', 'Kobe', 'Jordan']

const paragraphs2 = document.getElementsByTagName('p')
console.log(paragraphs2)




console.log(paragraphs2[1]);


let paraChanger = document.querySelector('p');
console.log(paraChanger.innerText);

paraChanger.innerText = 'I Just changed this text';

const paraChangers = document.querySelectorAll('p');
paraChangers.forEach(paraChangers =>{
    console.log(paraChangers.innerText);
})

const content = document.querySelector('.content');
content.innerHTML ='<h2> THIS IS THE NEW H2 I ALTERED THE TEXT</h2>'


people.forEach(person =>{
    content.innerHTML +=`<p>${person}</p>`
})

const link =document.querySelector('a')
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.youtube.com/');



//
//
// let para = document.querySelector('div.error')
//
// console.log(para);
//
//
// const paras = document.querySelectorAll("p");
//
// console.log(paras[0])
// paras.forEach(para => {
//     console.log(para)
// })
//
// const error = document.querySelectorAll('.error');
//
// console.log(error);
//
// const title = document.getElementById('page-title')
// console.log(title);
//
// const errors = document.getElementsByClassName('error')
//
// console.log(errors)
//
//
// const paras1 = document.getElementsByTagName('p')
// console.log(paras1)
// console.log(paras1[1])
//
//
//
//
// const para1 = document.querySelector('p');
// console.log(para.innerText);
//
// para1.innerText = 'ninjas are awesome!';
//
//
// const paras2 = document.querySelectorAll('p')
// paras2.forEach(para =>{
//     console.log(para.innerText)
//     para.innerText += ' new text'
// })
//
//
// const content = document.querySelector('.content')
// console.log(content.innerHTML)
//
// content.innerHTML +=   `<h2>THIS IS  NEW H2</h2>`
//
// const people = ['mario', 'luigi', 'yoshi']
// people.forEach(person=>{
//     content.innerHTML += `<p>${person}</p>`
// })
//
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.youtube.com')
// link.innerText = 'The Net Ninja Website'
// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green')
//
//
// const title1 = document.querySelector('h1')
// title1.setAttribute('style', 'margin: 50px;')
//
// console.log(title1.style)
// console.log(title1.style.color);
//
// title.style.margin = '50px'



