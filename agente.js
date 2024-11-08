import { obtenerAgentePorId } from "./utils.js";



const render = async () => {
    const params = new URLSearchParams(window.location.search);

    const id= params.get("id");

    console.log("ID :: ", id);

    const agente = await obtenerAgentePorId(id);  
    
    console.log(agente);

    const container = document.querySelector(".agenteMain");
    const descriptionSelector = document.querySelector(".desc");
    const role = document.querySelector("role");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    container.appendChild(textContainer);
    
    const containerImg = document.createElement("img");
    containerImg.src = agente.fullPortrait == null ? agente.displayIcon : agente.fullPortrait;
    containerImg.alt = agente.displayName;
    containerImg.classList.add("agente__imagen");
 
   

    const spanName = document.createElement("h2");
    spanName.textContent = agente?.displayName;
    textContainer.appendChild(spanName);

    const pDescription = document.createElement("p");
    pDescription.textContent = agente?.description;
    textContainer.appendChild(pDescription);

    const RolName = document.createElement("h2");
    RolName.textContent = "Rol:";
    textContainer.appendChild(RolName);


    const RolDescription = document.createElement("p");
    RolDescription.textContent = agente?.role?.description;
    textContainer.appendChild(RolDescription);

    container.appendChild(containerImg);

    return container;
};

document.addEventListener("DOMContentLoaded", render);