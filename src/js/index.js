import '../css/style.scss';

const textComponent = () => {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World';
    return element;
    };
    document.body.appendChild(textComponent());