
let num = document.querySelector("#num");
let advise = document.querySelector("#advise");
let click = document.querySelector(".click");
fetch('	https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => num.innerHTML = data.slip.id,
);
fetch('	https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => advise.innerHTML = `"
    ${data.slip.advice}"
    ` 
);


    click.onclick = function () {
        window.location.reload();
}