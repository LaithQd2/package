export function createHomeContent() {
  let div = document.createElement('div');
  div.classList.add('home-container');

  const homeData = [
    {
      text: 'Best pizza in your city'
    },
    {
      text: 'Made with passion since 1908'
    },
    {
      text: 'Order online or visit us!'
    }
  ];

  for (let i = 0; i < homeData.length; i++) {
    const p = document.createElement('p');
    p.textContent = homeData[i].text;
    div.appendChild(p);
  }

  let img = document.createElement('img');
  img.src = 'images/the-cook.jpeg';
  img.alt = 'The cook';
  div.appendChild(img);
  
  return div;
};