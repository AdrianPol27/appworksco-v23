const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form')[0];

submit.addEventListener('submit', (e)=> {
    e.preventDefault();

    Email.send({
        SecureToken : "7ed351fc-b024-4d3e-8181-0f94c4547f22",
        To : 'info.appworksco@gmail.com',
        From : 'adrianpolpeligrino27@gmail.com',
        Subject : "Appworks Co. Inquiry",
        Body : 'message'
    }).then(
      message => alert(message)
    );
})
