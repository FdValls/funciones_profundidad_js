"use strict";


// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;


function Post(avatar, titulo, texto) {
    this.avatar = avatar;
    this.titulo = titulo;
    this.texto = texto;

    this.render = () => {
        return ` <article class="post">
                    <div class="post-header">
                    <img
                    src= "${this.avatar}"
                        class="icon-avatar"
                        alt="avatar icon"
                        width="75"
                    />
                    <h2>${this.titulo}</h2>
                    </div>
                    <div>
                    <p>
                        ${this.texto}
                    </p>
                    </div>
                </article>
                `
    };
}
