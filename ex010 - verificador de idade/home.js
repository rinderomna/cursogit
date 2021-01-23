function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','Images/menino.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','Images/moço.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Images/homem.png');
            } else {
                //idoso
                img.setAttribute('src','Images/idoso.png');
            }
        } else {
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','Images/menina.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','Images/moça.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Images/mulher.png');
            } else {
                //idoso
                img.setAttribute('src','Images/idosa.png');
            }
        }
        res.innerHTML = `É ${gênero} com ${idade} anos.<br><br>`;
        res.appendChild(img);
    }
}