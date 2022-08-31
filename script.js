function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0||fAno.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'homemCrianca.png')
            }else if(idade < 21){
                //adolecente
                img.setAttribute('src', 'homemAdolecente.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'homemAdulto.png')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src', 'homemIdoso.png')
            }else{
                //morto
                img.setAttribute('src', 'morto.png')
            }
        
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'mulherCrianca.png')
            }else if(idade < 21){
                //adolecente
                img.setAttribute('src', 'mulherAdolecente.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'mulherAdulta.png')
            }else if(idade < 120){
                //idoso
                img.setAttribute('src', 'mulherIdosa.png')
            }else{
                //morto
                img.setAttribute('src', 'morto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}