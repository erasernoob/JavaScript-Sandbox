const img = document.querySelector('img')

const onClick = () => {
    document.querySelector('h1').style.color = 'blue'
}

const onDoubleClick = () => {
    if (document.body.style.backgroundColor == 'purple') {
        document.body.style.backgroundColor = 'white'
    } else {
        document.body.style.backgroundColor = 'purple'
    }
} 

// right click 
const onRightClick = () => {

}

const onMouseover = () => {
    console.log('mouse OVER ')
}

const onDragStart = () => console.log('Drag start')

img.addEventListener('click', onClick)
img.addEventListener('dblclick', onDoubleClick)
img.addEventListener('contextmenu', onRightClick)
img.addEventListener('mouseup', onDoubleClick)
img.addEventListener('mousedown', onDoubleClick)
img.addEventListener('mousewheel', onDoubleClick)
// hover thing
img.addEventListener('mouseover', onMouseover)
img.addEventListener('mouseout', onMouseover)
// drag
img.addEventListener('dragstart', onDragStart)
img.addEventListener('drag', onDrag)
img.addEventListener('dragend', onDragEnd)


