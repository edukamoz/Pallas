function clickMenu() {
    let menu = document.getElementById('menu')
    console.log(menu)
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('finalizarCadastro').addEventListener('click', function() {
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmacao = document.getElementById('confirmacao').value.trim();

        if (email === '' || senha === '' || confirmacao === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        if (senha !== confirmacao) {
            alert('As senhas não coincidem.');
            return;
        }

        alert('Cadastro realizado!');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
})

$(document).ready(function(){
    $('#carrossel').slick({
        slidesToShow: 2, // Mostra 2 slides por vez
        slidesToScroll: 2, // Rola 2 slides por vez
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});
