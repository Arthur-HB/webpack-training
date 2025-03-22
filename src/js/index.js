import '../css/style.scss';

const textComponent = () => {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World';
    element.classList.add('title');
    return element;
    };
    document.body.appendChild(textComponent());