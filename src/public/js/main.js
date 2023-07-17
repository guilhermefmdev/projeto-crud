const eyePwdIcon = document.querySelector('.lnr-eye')

eyePwdIcon.addEventListener('click', function(){
    const pwdInput = document.getElementById('passwordInput')

    if(pwdInput.getAttribute('type') == 'password') {
        pwdInput.setAttribute('type', 'text')
        eyePwdIcon.classList.add('click')
    }   else {
        pwdInput.setAttribute('type', 'password')
        eyePwdIcon.classList.remove('click')
    }
})

