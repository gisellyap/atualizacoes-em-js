var hora = 1
console.log(`Agora são exatamente ${hora} horas do dia!`)

if( hora >0 && hora<12){
    console.log('Bom dia')
}else if(hora>=12 && hora<18 ){
    console.log('Boa tarde')
}else if(hora >=18 && hora <24||hora ==00){
    console.log('Boa noite')
}else if(hora >24 || hora !=00){
    console.log('Desculpe, esse horario nâo existe em horas por dia! ')
}