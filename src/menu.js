    import cheeseMint from './imgs/cheese.jpg';
    import zaatar from './imgs/zaatar.jpg';
    import meat from './imgs/meat.jpg';
    import coffee from './imgs/coffee.jpg';
    import tea from './imgs/tea.jpg';




export function createMenuPage() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.textContent = 'Menu Page Content Goes Here';
    content.appendChild(menuDiv);



    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Delicious Menu';
    menuDiv.appendChild(menuTitle);


    const menuItems = [
        { name: 'Manqoosh Cheese & Mint', description: 'A soft and melted cheese pie garnished with fresh mint', price: '€2.50', Image: cheeseMint },
        { name: 'Manqoosh Zaatar', description: 'Rich baked Zaatar with fresh olive oil, great for students!', price: '€1.50', Image: zaatar },
        { name: 'Manqoosh miced meat', description: 'Classic baked miced beef with rich spices and pomogrant moleses', price: '€3.50', Image: meat},
        { name: 'Coffee', description: 'Freshly brewed coffee', price: '€2.00', Image: coffee},
        { name: 'Tea', description: 'Selection of herbal and black teas', price: '€1.50', Image: tea },
    ];
    
    menuItems.forEach(item => {
        const cards = document.createElement('div');
        cards.classList.add('menu-card');

        const img = document.createElement('img');
        img.src = item.Image;
        img.alt = item.name;

        const title = document.createElement('h2');
        title.textContent = item.name;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        cards.append(img, title, desc, price);
        menuDiv.appendChild(cards);
    });

}