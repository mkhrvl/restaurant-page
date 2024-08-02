export default function About() {
    const container = document.createElement('div');
    container.classList.add('about');

    const aboutUsSection = document.createElement('section');
    aboutUsSection.classList.add('about-us');
    container.appendChild(aboutUsSection);

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.classList.add('about__header');
    aboutUsHeader.textContent = 'About Us';
    aboutUsSection.appendChild(aboutUsHeader);

    const aboutUsBody = document.createElement('p');
    aboutUsBody.classList.add('about__body');
    aboutUsBody.textContent = `Welcome to La Filipina, where Filipino flavor meets classic pizza perfection! Established in 2024, our pizzeria is more than just a place to eat—it's a celebration of the vibrant fusion of Filipino cuisine and traditional pizza.`;
    aboutUsSection.appendChild(aboutUsBody);

    const ourStorySection = document.createElement('section');
    ourStorySection.classList.add('story');
    container.appendChild(ourStorySection);

    const ourStoryHeader = document.createElement('h2');
    ourStoryHeader.classList.add('about__header');
    ourStoryHeader.textContent = 'Our Story';
    ourStorySection.appendChild(ourStoryHeader);

    const ourStoryBody = document.createElement('p');
    ourStoryBody.classList.add('about__body');
    ourStoryBody.textContent = `La Filipina was born out of a love for both Filipino culinary heritage and the timeless appeal of pizza. Our journey began with a simple idea: to create a dining experience that beautifully marries the rich, diverse flavors of the Philippines with the beloved comfort of pizza. As a new addition to the culinary scene, we are passionate about crafting unique, mouthwatering dishes that reflect our heritage and our dedication to great food.`;
    ourStorySection.appendChild(ourStoryBody);

    const ourMissionSection = document.createElement('section');
    ourMissionSection.classList.add('mission');
    container.appendChild(ourMissionSection);

    const ourMissionHeader = document.createElement('h2');
    ourMissionHeader.classList.add('about__header');
    ourMissionHeader.textContent = 'Our Mission';
    ourMissionSection.appendChild(ourMissionHeader);

    const ourMissionBody = document.createElement('p');
    ourMissionBody.classList.add('about__body');
    ourMissionBody.textContent = `At La Filipina, our mission is to offer a culinary experience that delights the senses and warms the heart. We’re dedicated to using the freshest, locally-sourced ingredients to create dishes that not only taste amazing but also tell a story of tradition and innovation. From our signature pizzas topped with Filipino favorites to our handcrafted sides and desserts, every bite is a journey through the rich tapestry of our culture.`;
    ourMissionSection.appendChild(ourMissionBody);

    const wrapper = document.querySelector('#content');
    wrapper.appendChild(container);
}
