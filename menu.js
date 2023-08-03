export function createMenuContent() {
  let div = document.createElement('div');
  div.classList.add('menu-container');

  const dishData = [
    {
      title: 'Salsiccia',
      description: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      imageSrc: 'images/pizza1.png',
      imageAlt: 'Salsiccia'
    },
    {
      title: 'Gamberi',
      description: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      imageSrc: 'images/pizza2.png',
      imageAlt: 'Gamberi'
    },
    {
      title: 'Pepe',
      description: 'White sauce, Mozarella, Onion, Homemade sausage',
      imageSrc: 'images/pizza3.png',
      imageAlt: 'Pepe'
    },
    {
      title: 'Disgustoso',
      description: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      imageSrc: 'images/pizza4.png',
      imageAlt: 'Disgustoso'
    },
    {
      title: 'Colorato',
      description: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      imageSrc: 'images/pizza5.png',
      imageAlt: 'Colorato'
    },
    {
      title: 'Pomodoro',
      description: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      imageSrc: 'images/pizza6.png',
      imageAlt: 'Pomodoro'
    },
    {
      title: 'Crema',
      description: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      imageSrc: 'images/pizza7.png',
      imageAlt: 'Crema'
    },
    {
      title: 'Carne',
      description: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      imageSrc: 'images/pizza8.png',
      imageAlt: 'Carne'
    }
  ];

  for (let i = 0; i < dishData.length; i++) {
    const dish = document.createElement('div');
    dish.className = 'dish';
    
    const h1 = document.createElement('h1');
    h1.textContent = dishData[i].title;
    
    const p = document.createElement('p');
    p.textContent = dishData[i].description;
    
    const img = document.createElement('img');
    img.src = dishData[i].imageSrc;
    img.alt = dishData[i].imageAlt;
    
    dish.appendChild(h1);
    dish.appendChild(p);
    dish.appendChild(img);
    
    div.appendChild(dish);
  }

  return div;
};