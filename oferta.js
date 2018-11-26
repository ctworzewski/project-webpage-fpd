const images = document.querySelector('img');

const showText = (e) => {
    e.target.parentNode.querySelector('.image-text').style.display = 'block';
    // e.target.parentNode.querySelector('.image-text').style.display = 'block';
}


images.addEventListener('click', showText);
// const p = document.createElement('p');
// const p = document.querySelector('.image-text');

// const showText = (e) => {
//     // console.log('dziala');
//     // p.innerText = 'Cezary';
//     console.log(p);
//     // document.body.appendChild('p');
//     // document.parentNode('p');
//     e.target.parenNode.querySelector('.image-text').style.display = 'block';
// }

// image_offer_list.addEventListener('click', showText);