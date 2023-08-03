export function createContactContent() {
  let div = document.createElement('div');
  div.classList.add('contact-container');

  let phoneNumber = document.createElement('p');
  phoneNumber.className = 'phone-number';
  phoneNumber.textContent = '📞 123 456 789';
  div.appendChild(phoneNumber);
  
  let address = document.createElement('p');
  address.className = 'address';
  address.textContent = '🏠 Hollywood Boulevard 42, Los angeles, USA';
  div.appendChild(address);
  
  let img = document.createElement('img');
  img.src = 'images/map.png';
  img.alt = 'Google map';
  div.appendChild(img)

  return div;
};
