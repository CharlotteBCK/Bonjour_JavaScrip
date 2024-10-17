let firstName =prompt("Quel est ton nom ?")

function sayHello (firstName, hour) {



let message = `Bonjour ${firstName} !`

if (hour >=18) {message = `Bonsoir ${firstName} !`}


document.querySelector('h1').innerText = message;


}

sayHello(firstName,2)

