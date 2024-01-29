function customRender(reactElement, container){ //this function will do the whole function, first parameter is what we wil inject, 2nd element where we will inject
    //this is not an optimized code lol
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement)
}

const reactElement = { //inject. this is how jsx form is converted, this is how react undertsand the code
    type: 'a', //its type
    props: { // attributes for above html element
        href: 'https://google.com',
        target: '__blank'
    },
    children: 'Click me to visit google' //children to the added element (content of reactElement)
}

const mainContainer = document.querySelector('#root'); //here we will inject

customRender(reactElement, mainContainer); //rendering call