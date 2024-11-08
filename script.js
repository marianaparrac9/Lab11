import { obtenerAPI, Agente } from "./utils.js";


const renderizarPersonajes = async (textoBusqueda) => {
    const data = await obtenerAPI();

    const textoLimpio = textoBusqueda.toLowerCase();
    console.log(textoLimpio);
    const contenedor = document.querySelector("#personajes-container");
    contenedor.innerHTML = "";
    // console.log(personajes);
    
    for (const personaje of data.data){
        const agente = new Agente(
            personaje?.displayName,
            personaje?.role?.displayName,
            personaje?.abilities[0]?.description,
            personaje?.uuid,
            personaje?.displayIcon,
            personaje?.fullPortrait
        );
        const agenteRender = agente.render();

        if(textoLimpio === "" || personaje?.displayName.toLowerCase().includes(textoLimpio)){
            contenedor.appendChild(agenteRender);
            agente.addEventListeners();
        }
    }
};

const render = async () => {
       await renderizarPersonajes("");
       const dataAgents = await obtenerAPI();
       
       dataAgents.data.forEach(agent => {
        console.log(agent.uuid);
    });

       console.log(dataAgents.data);

       const barraBusqueda = document.querySelector(".barraBusqueda");
       barraBusqueda.addEventListener("input", async (event) =>{
           const textBusqueda = event.target.value;
           await renderizarPersonajes(textBusqueda);
       });
};

document.addEventListener("DOMContentLoaded", render);
