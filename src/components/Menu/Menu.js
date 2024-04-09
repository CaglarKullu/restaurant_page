import './Menu.css';
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Sample data for menu items
    const menuItems = [
        {
            category: "Starters",
            items: [
                { name: "Bruschetta", description: "Grilled bread garlic, tomatoes, olive oil.", price: "$8" },
                { name: "Stuffed Mushrooms", description: "Mushrooms filled with herbs cream cheese.", price: "$10" }
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Margherita Pizza", description: "Tomato sauce, mozzarella, and fresh basil.", price: "$14" },
                { name: "Lasagna", description: "Layers of pasta, ragu, bechamel, and cheese.", price: "$18" }
            ]
        },
        // Add more categories and items as needed
    ];

    // Creating and appending menu sections
    menuItems.forEach(category => {
        const section = document.createElement('section');
        section.classList.add('menu-category');

        const title = document.createElement('h2');
        title.textContent = category.category;
        title.classList.add('category-title');
        section.appendChild(title);

        const itemsList = document.createElement('ul');
        itemsList.classList.add('items-list');

        category.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;

            listItem.appendChild(itemName);
            listItem.appendChild(itemDescription);
            listItem.appendChild(itemPrice);
            itemsList.appendChild(listItem);
        });

        section.appendChild(itemsList);
        menu.appendChild(section);
    });

    return menu;
}

export default createMenu;
