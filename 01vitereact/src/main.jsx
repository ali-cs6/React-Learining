import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// not only we take functions from App.jsx but can create functions here too, like...
function MyApp(){ 
    return (
        <>
        <h1>Added this part directly within the main file</h1>
        </>
    )
}

// another way of adding
const element = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

// above code is first converted into tree like object we have seen in (customreact.js)
// so can we directly pass objects as below?
/*
const ReactElement = { //inject. this is how jsx form is converted, this is how react undertsand the code
    type: 'a', //its type of HTML tag
    props: { // attributes for above html element
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' //children to the added element (content of reactElement)
} 
*/
// the above code is not working like this, there is i think no way we can inject like this, the syntax won't allow it.

// method of creating elemnts through react imported in first line of this file
// we can inject more JS into React elemnts below, like...
const insideRactElement = 'This is injected inside React Element from out side the object/function';
const ReactElement = React.createElement( // this synatx is all by react, we should strictly follow
    'a',
    {href: 'https://google.com', target: '_blank'}, //this is necessory, empty if no attributes
    'Click me to fucking visit Google!',
    insideRactElement //we just have to mention for the final outcome/evaluated code here
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />

    // <MyApp />
    
    // element

    ReactElement


);