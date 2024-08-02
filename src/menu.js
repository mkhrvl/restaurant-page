export default function Menu() {
    const container = document.createElement('div');
    container.classList.add('menu');

    const filipinoSection = document.createElement('div');
    filipinoSection.classList.add('menu__filipino');
    container.appendChild(filipinoSection);

    const filipinoHeader = document.createElement('h2');
    filipinoHeader.classList.add('menu__header');
    filipinoHeader.textContent = 'Filipino Style';
    filipinoSection.appendChild(filipinoHeader);

    const filipinoContainer = document.createElement('div');
    filipinoContainer.classList.add('menu__container');
    filipinoSection.appendChild(filipinoContainer);

    const filipinoMenu = [
        {
            flavor: 'Adobo Loco',
            description:
                'Tender adobo-marinated chicken or pork with caramelized onions, bell peppers, and bay leaf cheese in a tomato base with soy and vinegar.',
        },
        {
            flavor: 'Longganisa Delight',
            description:
                'Sweet longganisa sausage with pineapple and mozzarella, in a tomato sauce with garlic and ginger.',
        },
        {
            flavor: 'Tapa Temptations',
            description: 'Filipino tapa with onions and tomatoes on a tomato base with soy, topped with scallions.',
        },
        {
            flavor: 'Pinoy BBQ',
            description:
                'Sweet and smoky BBQ pork with red onions and cilantro, on a pizza crust with tangy BBQ sauce.',
        },
    ];

    for (let i = 0; i < 4; i++) {
        const filipinoCard = document.createElement('div');
        filipinoCard.classList.add('menu__card');
        filipinoContainer.appendChild(filipinoCard);

        const filipinoCardImage = document.createElement('div');
        filipinoCardImage.classList.add('menu__card-img');
        filipinoCardImage.textContent = 'To Be Updated';
        filipinoCard.appendChild(filipinoCardImage);

        const filipinoCardContent = document.createElement('div');
        filipinoCardContent.classList.add('menu__card-content');
        filipinoCard.appendChild(filipinoCardContent);

        const filipinoCardHeader = document.createElement('h3');
        filipinoCardHeader.classList.add('menu__card-header');
        filipinoCardHeader.textContent = filipinoMenu[i].flavor;
        filipinoCardContent.appendChild(filipinoCardHeader);

        const filipinoCardDesc = document.createElement('p');
        filipinoCardDesc.classList.add('menu__card-desc');
        filipinoCardDesc.textContent = filipinoMenu[i].description;
        filipinoCardContent.appendChild(filipinoCardDesc);
    }

    const classicSection = document.createElement('div');
    classicSection.classList.add('menu__classic');
    container.appendChild(classicSection);

    const classicHeader = document.createElement('h2');
    classicHeader.classList.add('menu__header');
    classicHeader.textContent = 'Classic Style';
    classicSection.appendChild(classicHeader);

    const classicContainer = document.createElement('div');
    classicContainer.classList.add('menu__container');
    classicSection.appendChild(classicContainer);

    const classicMenu = [
        {
            flavor: 'Hawaiian',
            description: 'Ham and pineapple with melted mozzarella and tangy tomato sauce for a tropical twist.',
        },
        {
            flavor: 'Pepperoni',
            description:
                'Spicy pepperoni with mozzarella and rich tomato sauce, offering bold flavors and crispy edges.',
        },
        {
            flavor: 'Meat Overload',
            description: 'A hearty mix of pepperoni, sausage, ham, and bacon, with mozzarella and robust tomato sauce.',
        },
        {
            flavor: 'Four Cheese',
            description: 'A blend of mozzarella, cheddar, Parmesan, and Gorgonzola with garlic and herbs.',
        },
    ];

    for (let i = 0; i < 4; i++) {
        const classicCard = document.createElement('div');
        classicCard.classList.add('menu__card');
        classicContainer.appendChild(classicCard);

        const classicCardImage = document.createElement('div');
        classicCardImage.classList.add('menu__card-img');
        classicCardImage.textContent = 'To Be Updated';
        classicCard.appendChild(classicCardImage);

        const classicCardContent = document.createElement('div');
        classicCardContent.classList.add('menu__card-content');
        classicCard.appendChild(classicCardContent);

        const classicCardHeader = document.createElement('h3');
        classicCardHeader.classList.add('menu__card-header');
        classicCardHeader.textContent = classicMenu[i].flavor;
        classicCardContent.appendChild(classicCardHeader);

        const classicCardDesc = document.createElement('p');
        classicCardDesc.classList.add('menu__card-desc');
        classicCardDesc.textContent = classicMenu[i].description;
        classicCardContent.appendChild(classicCardDesc);
    }

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}
