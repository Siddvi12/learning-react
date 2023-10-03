function customRender(reactElements, root){

const domElements = document.createElement(reactElements.type);

domElements.innerHTML = reactElements.children;
    
for (const prop in reactElements.props) {
   domElements.setAttribute(prop, reactElements.props[prop]);
}



root.appendChild(domElements);
}



const reactElements ={
    type: 'a',
    props: {
        href: "https://www.google.com/",
        target: '_blank'
    },

    children: 'Click me to visit google'
}

const root = document.getElementById("root");

customRender(reactElements,root);