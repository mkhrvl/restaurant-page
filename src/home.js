import pizza from './pizza.png';

export default function Home() {
    const container = document.createElement('div');
    container.classList.add('home');

    const content = document.createElement('div');
    content.classList.add('home__content');

    const tagline = document.createElement('h2');
    tagline.classList.add('home__tagline');
    tagline.textContent = 'Savor the Fusion of Filipino Flair and Classic Pizza.';
    content.appendChild(tagline);

    const description = document.createElement('p');
    description.classList.add('home__desc');
    description.textContent =
        'At La Filipina, each pizza is a delicious blend of traditional Filipino flavors and classic pizza craftsmanship. Baked to perfection and made with love, our pizzas celebrate the rich, vibrant tastes of the Philippines. Experience a slice of culinary passion—welcome to La Filipina!';
    content.appendChild(description);

    const cta = document.createElement('button');
    cta.classList.add('home__cta');
    cta.textContent = 'See Menu';
    content.appendChild(cta);

    container.appendChild(content);

    const image = document.createElement('img');
    image.classList.add('home__img');
    image.setAttribute('src', pizza);
    image.setAttribute('alt', 'large pizza');
    container.appendChild(image);

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);
}