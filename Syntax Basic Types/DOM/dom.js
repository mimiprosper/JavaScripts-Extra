const para = document.querySelector('body > div:nth-child(2) > p:nth-child(1)');
//console.log(para.innerText)
// para.innerText = 'Going Higher'
// para.innerText += 'Am the best'

//const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' new text'
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML)
// content.innerHTML += '<h2>THIS IS AN UPDATE</h2>'

const people = ['paul', 'ade', 'chukwudi']
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });

// const link = document.querySelector('body > a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.yahoo.com')
// link.innerText = 'check your mail'

// const msg = document.querySelector('body > div.error')
// msg.setAttribute('class', 'success')
// msg.setAttribute('style', 'color:green;')

// const title = document.querySelector('body > h1')

// console.log(title.style)
// title.style.margin = '50px';
// title.style.color = 'blue';
// title.style.fontSize = '50px'

// const detail = document.querySelector('body > div:nth-child(2) > p.error')
// console.log(detail.classList);
// detail.classList.remove('error'); // remove a class
// detail.classList.add('success'); // add a class

const paras = document.querySelectorAll('p');
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    } 
});
