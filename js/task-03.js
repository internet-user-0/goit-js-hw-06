const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];






const listGallery = document.querySelector('.gallery')
listGallery.style.display = 'flex';

const gallery = images.map(element => {
  const addLiEl = document.createElement('li');
  const addImgEl = document.createElement('img');

  addLiEl.style.marginRight ='30px';
  addLiEl.style.listStyle = 'none';

  addImgEl.style.width = '300px';
  addImgEl.style.height = 'auto';
  addImgEl.src = element.url;  
  addImgEl.alt = element.alt;

  addLiEl.append(addImgEl);
  return addLiEl
});

listGallery.append(...gallery);