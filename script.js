
document.addEventListener('DOMContentLoaded',()=>{
  console.log('Cargado!');
  
});

const agarraPokemon = async () => {

  try{
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await resp.json();
    console.log(data);
  }

  catch(error){
    console.log(error);
  }

}

