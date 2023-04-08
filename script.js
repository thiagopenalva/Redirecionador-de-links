function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')
   
    /* if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    
    
    
    // pegar a tag img
    //substituir a imagem
    // se tiver light mode, adicionar a imagem light'
    //se tiver sem light mode, manter a imagem normal*/

    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('light')) {

        img.setAttribute("src", "./assets/avatar-light.png") 
        img.setAttribute("alt", "Foto de Thiago Penalva olhando para o lado direito de camisa preta e barba, fundo com o céu laranja")
       
    } else {
        
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Thiago Penalva olhando para o lado direito de camisa preta e barba, fundo com o céu laranja")
}



} 