// if the <script> tag set in the <head> 
// then the javaScript run before the window onload

window.onload = () => {
  document.querySelector('h1').textContent = 'Hello World'
}

window.addEventListener('load', () => console.log('Page Loaded'))
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'))
window.addEventListener('resize', () => console.log('Window Resize '))
window.addEventListener('scroll', () => console.log('Window Scroll '))
window.addEventListener('focus', () => console.log('Window focus '))
window.addEventListener('blur', () => console.log('Window blur '))

