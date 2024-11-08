const API_URL = "https://valorant-api.com/v1";


export const obtenerAPI = async (url) => {
    const response = await fetch(`${API_URL}/agents`);
    const data = await response.json();
    return data;
};


export const obtenerAgentePorId = async (id) => {
    console.log(id);
    const list = await obtenerAPI();
    console.log("lista completa");
    console.log(list);

    // filtro para encontrar el agente.
    const agenteEncontrado = list.data.filter((agente) => {
        return agente.uuid === id;
    })

    console.log("agente encontrado", agenteEncontrado)

    if(agenteEncontrado.length === 0){
        throw new Error("Agente no encontrado");
    }
    0
    return agenteEncontrado[0];
}

export class Agente {
    #id;
    #nodoContenedorAgente;
    #nodoNombreAgente;
    #nodoEliminarAgente;

    

    constructor(nombre, role ,abilities, id, imagen){
        this.nombre = nombre;
        this.role = role;
        this.abilities = abilities;
        this.id = id;
        this.imagen = imagen;
    }

    render(){
        const contenedorAgente = document.createElement("div");
        contenedorAgente.id = this.id;
        contenedorAgente.classList.add("agente");
        this.#nodoContenedorAgente = contenedorAgente;

        const imagenAgente = document.createElement("img");
        imagenAgente.src = this.imagen;
        imagenAgente.alt = this.nombre;
        imagenAgente.classList.add("agente__imagen");

        const contenedorNombre = document.createElement("div");
        contenedorNombre.classList.add("agente__nombre-contenedor");


        const nombreAgente = document.createElement("h2");
        nombreAgente.textContent = this.nombre;
        nombreAgente.classList.add("agente__nombre");

        const roleAgente = document.createElement("p");
        roleAgente.innerHTML = `<strong>Role:</strong> <br>${this.role}`;
        roleAgente.classList.add("agente__role");

        const descripcionAgente = document.createElement("p");
        descripcionAgente.innerHTML =`<strong>Habilidades:</strong> <br> ${this.abilities}`;
        descripcionAgente.classList.add("agente__descripcion");

        const trashImage = document.createElement("img");
        trashImage.src = "trash.svg";
        trashImage.alt = "trash";
        trashImage.width = 20;
        this.#nodoEliminarAgente = trashImage;

        const boton = document.createElement("button");
        boton.textContent = "Ver información";       
        boton.classList.add("agente__boton");
        boton.addEventListener("click", () => {

            window.location.href = `segunda_pagina.html?id=${this.id}`;
            console.log(this.id);
        });

        contenedorAgente.appendChild(imagenAgente);
        contenedorAgente.appendChild(contenedorNombre);
        contenedorNombre.appendChild(nombreAgente);
        contenedorNombre.appendChild(roleAgente);
        contenedorNombre.appendChild(descripcionAgente);
        console.log(descripcionAgente);
        contenedorNombre.appendChild(boton);
        contenedorNombre.appendChild(trashImage);


        return contenedorAgente;
    }

    addEventListeners(){
      this.#nodoEliminarAgente.addEventListener("click", () => {
          this.#nodoContenedorAgente.remove();
      });
    }
}