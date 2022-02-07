//Buscar os links salvos.
export  async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvando um link no localStorage.

export async function saveLink(key,newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA')
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key,JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO!');

}

//Deletar algum link salvo

export function deleteLink(links, id){
    let myLinks =links.filter( item =>{
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

    return myLinks;
}