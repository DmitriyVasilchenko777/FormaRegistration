let inputName: HTMLInputElement = document.querySelector("#name");
let inputLastName: HTMLInputElement = document.querySelector("#last-name");
let inputEmail: HTMLInputElement = document.querySelector("#email");
let inputPassword: HTMLInputElement = document.querySelector("#password");
let inputPasswordReplace: HTMLInputElement = document.querySelector("#password-replace");

let button: HTMLButtonElement = document.querySelector("#button");

let alertMessage: HTMLDivElement = document.querySelector("#alert-message");

let errorText: string = "";

button.onclick = (event) => {
    if(inputName.value  === "") {
        event.preventDefault();

        errorText = "Пожалуйста введите свое имя!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputName.value.length <= 2) {
        event.preventDefault();

        errorText = "Имя должно содержать не менее 3 символов!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputLastName.value === "") {
        event.preventDefault();

        errorText = "Пожалуйста введите фамилию!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputLastName.value.length < 5) {
        event.preventDefault();

        errorText = "Фамилия должна состоять из не менее 5 символов!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputEmail.value === "") {
        event.preventDefault();

        errorText = "Введите ваш почтовый ящик!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputEmail.value.length <= 4) {
        event.preventDefault();

        errorText = "Адрес  почты должен содержать знаки точки и символа @!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputPassword.value === "") {
        event.preventDefault();

        errorText = "Придумайте пароль состоящий из не менее 5 символов!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputPassword.value.length < 5) {
        event.preventDefault();

        errorText = "Длина пароля должна состоять из не менее 5 символов!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputPasswordReplace.value === "") {
        event.preventDefault();

        errorText = "Введите пароль еще раз!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
    else if(inputPasswordReplace.value !== inputPassword.value) {
        event.preventDefault();

        errorText = "Пароли не совпадают!";
        alertMessage.style.display = "block";
        alertMessage.innerHTML = errorText;
    }
}

