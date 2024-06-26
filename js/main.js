$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Aplicando máscaras aos campos
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(DDD) 12345-6789' });
    $('#cpf').mask('000.000.000-00', { placeholder: '123.456.789-00' });
    $('#cep').mask('00000-000', { placeholder: '01234-567' });

    // Validando o formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15 // Tamanho da máscara (15 caracteres)
            },
            cpf: {
                required: true,
                minlength: 14 // Tamanho da máscara (14 caracteres)
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9 // Tamanho da máscara (9 caracteres)
            }
        },
        messages: {
            telefone: {
                minlength: "Por favor, digite um telefone válido"
            },
            cpf: {
                minlength: "Por favor, digite um CPF válido"
            },
            cep: {
                minlength: "Por favor, digite um CEP válido"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos corretamente para prosseguir com a compra!");
        }
    });
});
