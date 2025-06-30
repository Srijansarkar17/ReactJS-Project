function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    //the only problem with this is that we are manually creating the attributes, if there would have been one more attribute then it would have been a problem, so to solve that we will use loops

    container.appendChild(domElement) //this inserts the new domElement created by us into the mainContainer
    */


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children'){ //this code was used earlier because peoplr wrote children in props earlier
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = { //how the elements are seen by react
    type: 'a', //this means a tag
    props: { //these are the properties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit '
     
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)

