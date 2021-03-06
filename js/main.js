function consultaCep(){
    var cep = document.querySelector('#cep').value;
    var url = "https://viacep.com.br/ws/" + cep + "/json";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response){
            console.log(response);

            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
            $('.cep').show();
            // document.querySelector('#logradouro').innerHTM   = response.logradouro;
            // document.querySelector('#bairro').innerHTML = response.bairro;
            // document.querySelector('#localidade').innerHTML = response.localidade;
            // document.querySelector('#uf').innerHTML = response.uf;
        }
    })
}

$(function(){
    $('.cep').hide();
})