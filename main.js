const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')) // this and the one beneath this comment 
// were giving me an uncaught error because my js script tag was in the head element 
// instead of just above the closing of the body element , the error was as a result of my script running in the
// head and referencing ids in elements yet to be created

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'))
