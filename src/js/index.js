import '../css/style.scss';
import img from '../assets/praia.jpg';

const textComponent = () => {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World';
    element.classList.add('title');
    return element;
};

const imgComponent = () => {
    const elImg = new Image(3000,4000);
    elImg.src = img;
    return elImg;
}
document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());

