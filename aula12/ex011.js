var idade = 80
console.log(`você tem ${idade} anos. `)
if(idade <16){
    console.log('não vota')
}else if( idade < 18 || idade>65){
        console.log('voto opcional')
    }else if(idade >=18){ //esse comando já esta subtendido, se for retirado vai rodar do mesmo jeito
        console.log('voto obrigatorio')
    }
