const button = document.getElementById('sendButton')
const plane = document.querySelector('#sendButton > i')
const message = document.getElementById('message')

button.addEventListener('click', () => {
  plane.style.transform = 'rotate(-90deg)';
  button.style.backgroundColor = '#ffc85c';
  message.innerText = 'Sending';
  setTimeout(() => {
    button.classList.add('send');
  }, 300)
  setTimeout(() => { 
    button.classList.remove('send') 
    message.innerText = 'Sent'
    button.style.backgroundColor = '#61b15a';
    button.classList.add('sent')
    setTimeout(() => { 
      button.classList.remove('sent')
      message.innerText = 'Send'
      button.style.backgroundColor = '#151718';
      plane.style.transform = 'rotate(0)';
    }, 1350)
  }, 2300)
})