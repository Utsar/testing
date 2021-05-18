/*<!-- EXERCISE 1:
    Specify the title, the charset (UTF-8) and the viewport of the page.
    -->
    */

    let specifyTitle = document.getElementsByTagName("title")[0].innerText = "My Tasklist Site"

/* EXERCISE 2:  
       Create a CSS class for the task list with a diverse background
       Create a CSS class for the task list item with a border, a bold text and a bigger font size
       Style every button of the page to be bigger
    */

//  creating a div
let firstDiv = document.createElement(`div`)

let inBody = document.getElementsByTagName(`body`)[0]
inBody.appendChild(firstDiv)
firstDiv.id = `div-container`

// creating a heading

let headings = document.createElement(`h1`)
document.getElementById(`div-container`).appendChild(headings)
headings.id = 'first-header'
headings.className = 'class-h1'
document.getElementById(`first-header`).innerHTML = "Find the task list below"

// creating a heading and field to input

let heading2 = document.createElement(`h2`)
document.getElementById(`div-container`).appendChild(heading2)
heading2.id = 'second-header'
heading2.className = 'second-header-h2'
document.getElementById(`second-header`).innerHTML = "Enter task below"

let firstSpan = document.createElement(`span`)
let inSpan = document.getElementsByTagName(`body`)[0]
inSpan.appendChild(firstSpan)
firstSpan.id = `span-container`

let input = document.createElement(`input`)
let insertInput = document.getElementsByTagName('span')[0]
insertInput.appendChild(input)
input.id = `first-input`
input.className = `first-input-class`

input.type = `text`

// creating a button

let button = document.createElement(`button`)
let insertButton = document.getElementsByTagName('body')[0]
insertButton.appendChild(button)
button.innerText = `First button`
button.id = "first-button"
button.className = "first-button-class"
button.addEventListener('click', function(){
    console.log('test')
    const value = input.value
    const li = document.createElement('li')
    li.innerText = value
    const ul = document.getElementById('first-list')
    ul.appendChild(li)
})



/*

EXERCISE 3
        Create a button "Remove Last Task" to trigger the method "removeLast"

*/

let button2 = document.createElement(`button`)
let insertButton2 = document.getElementsByTagName('body')[0]
insertButton.appendChild(button2)
button2.innerText = `Remove Last Task`
button2.id = "second-button"
button2.className = "second-button-class"
button2.addEventListener('click', function(){
    const ul = document.getElementById('first-list')
    ul.lastChild.remove()
})

/*

EXERCISE 4
        Create a button "Remove First Task" to trigger the method "removeFirst"

*/
let button3 = document.createElement(`button`)
let insertButton3 = document.getElementsByTagName('body')[0]
insertButton.appendChild(button3)
button3.innerText = `Remove First Task`
button3.id = "third-button"
button3.className = "third-button-class"
button3.addEventListener('click', function(){
    const ul = document.getElementById('first-list')
    ul.firstChild.remove()
})

// creating a list

let newList = document.createElement(`ul`)
let insertList1 = document.getElementsByTagName(`body`)[0]
insertList1.appendChild(newList)

newList.id = `first-list`
newList.className = `first-list-class`
