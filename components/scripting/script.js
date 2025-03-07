

function showAndHide() {
    let inputPass = document.querySelector('input');
    let btn = document.querySelector('button');

    if(inputPass.getAttribute('type') == 'password') {
        inputPass.setAttribute('type', 'text');
        btn.textContent = 'Hide';
    } else {
        inputPass.setAttribute('type', 'password');
        btn.textContent = 'Show';
    }

}