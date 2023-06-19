"use strict";

/* Crear los objetos Post */
let post = [];
for (const p of data) {
    post.push(new Post(
        p.avatar,
        p.titulo,
        p.texto
    )
    );
}

/* Renderizar datos */
let accumulator = ""
for (const p of post) {
    accumulator += p.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPostMouseEvents();
