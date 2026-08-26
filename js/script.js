document.addEventListener("DOMContentLoaded", function () {

  const modules = document.querySelectorAll(".modules details");
  

  modules.forEach(function(module) {

    const summary = module.querySelector("summary");
    const cloud = module.querySelector("ul");

    summary.addEventListener("click", function(event) {

      event.preventDefault();

      const estavaAberto = module.hasAttribute("open");


      /*
        PRIMEIRO:
        fecha imediatamente todos os módulos.
      */

      modules.forEach(function(outro) {

        if (outro !== module) {
          outro.removeAttribute("open");
        }

      });


      /*
        Se o módulo clicado já estava aberto,
        simplesmente fecha.
      */

      if (estavaAberto) {

        module.removeAttribute("open");

        return;
      }


      /*
        Abre somente o módulo clicado.
      */

      module.setAttribute("open", "");


      /*
        Calcula a posição da nuvem
        depois que ela foi aberta.
      */

      requestAnimationFrame(function() {

        const rect =
          summary.getBoundingClientRect();


        const margem = 20;


        /*
          Largura real da nuvem
        */

        const largura =
  Math.min(
    520,
    window.innerWidth - margem * 2
  );


        /*
          Centraliza a nuvem em relação
          ao módulo clicado.
        */

        let left =
          rect.left +
          rect.width / 2 -
          largura / 2;


        /*
          Não deixa sair da tela.
        */

        if (left < margem) {
          left = margem;
        }


        if (
          left + largura >
          window.innerWidth - margem
        ) {

          left =
            window.innerWidth -
            largura -
            margem;

        }


        /*
          Altura máxima disponível
        */

        const espacoAbaixo =
          window.innerHeight -
          rect.bottom -
          30;


        const espacoAcima =
          rect.top -
          30;


        let top;


        /*
          Preferência:
          colocar a nuvem abaixo.
        */

        if (espacoAbaixo >= 280) {

          top =
            rect.bottom + 18;

        }

        /*
          Se não houver espaço suficiente
          embaixo, coloca acima.
        */

        else {

          const altura =
            Math.min(
              cloud.scrollHeight,
              Math.max(250, espacoAcima)
            );

          top =
            rect.top -
            altura -
            18;

        }


        /*
          Segurança contra sair da tela.
        */

        if (top < margem) {
          top = margem;
        }


        /*
          Define a posição.
        */

        cloud.style.width =
          largura + "px";

        cloud.style.left =
          left + "px";

        cloud.style.top =
          top + "px";

      });

    });

  });


  /*
    Se a janela for redimensionada,
    reposiciona a nuvem aberta.
  */

  window.addEventListener("resize", function() {

    const aberto =
      document.querySelector(
        ".modules details[open]"
      );

    if (!aberto) return;


    const summary =
      aberto.querySelector("summary");

    const cloud =
      aberto.querySelector("ul");


    const rect =
      summary.getBoundingClientRect();


    const margem = 20;

const largura =
  Math.min(
    520,
    window.innerWidth - margem * 2
  );


    let left =
      rect.left +
      rect.width / 2 -
      largura / 2;


    left =
      Math.max(
        20,
        Math.min(
          left,
          window.innerWidth -
          largura -
          20
        )
      );


    cloud.style.width =
      largura + "px";

    cloud.style.left =
      left + "px";


    const espacoAbaixo =
      window.innerHeight -
      rect.bottom -
      30;


    if (espacoAbaixo >= 280) {

      cloud.style.top =
        (rect.bottom + 18) + "px";

    }

  });

/* =========================================
   VISUALIZADOR DAS PRÉVIAS
========================================= */

const previewItems =
    document.querySelectorAll(".preview-item[data-preview]");

const previewModal =
    document.getElementById("previewModal");

const previewModalImage =
    document.getElementById("previewModalImage");

const previewCloseButtons =
    document.querySelectorAll("[data-close-preview]");


function abrirPreview(item){

    const imagem =
        item.getAttribute("data-preview");

    const imgOriginal =
        item.querySelector("img");

    if(!imagem || !previewModal || !previewModalImage){
        return;
    }

    previewModalImage.src = imagem;

    previewModalImage.alt =
        imgOriginal
        ? imgOriginal.alt
        : "Prévia ampliada da aula";

    previewModal.classList.add("is-open");

    previewModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "preview-modal-open"
    );

}


function fecharPreview(){

    if(!previewModal || !previewModalImage){
        return;
    }

    previewModal.classList.remove(
        "is-open"
    );

    previewModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "preview-modal-open"
    );

    previewModalImage.src = "";

    previewModalImage.alt = "";

}


/* =========================================
   CLIQUE NAS AULAS BLOQUEADAS
========================================= */

const lockedItems =
    document.querySelectorAll(".preview-item-locked");

const whatsappCompra =
    "https://wa.me/5521967748037?text=" +
    encodeURIComponent(
        "Olá, Gabriel! Quero adquirir o curso Código das Cordas."
    );

lockedItems.forEach(function(item){

    item.addEventListener("click", function(){

        window.location.href = whatsappCompra;

    });

    item.addEventListener("keydown", function(event){

        if(
            event.key === "Enter" ||
            event.key === " "
        ){

            event.preventDefault();

            window.location.href = whatsappCompra;

        }

    });

});


previewCloseButtons.forEach(
    function(botao){

        botao.addEventListener(
            "click",
            fecharPreview
        );

    }
);


document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape" &&
            previewModal.classList.contains("is-open")
        ){

            fecharPreview();

        }

    }
);
  
window.addEventListener("scroll", function() {

  document
    .querySelectorAll(".modules details[open]")
    .forEach(function(modulo){

      modulo.removeAttribute("open");

    });

});
});
