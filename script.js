let linhaCriativa = document.getElementById("linhaCriativa");
let versao = document.getElementById("versao");
let formato = document.getElementById("formato");
let banner = document.getElementById("banner");
let btn_reload = document.getElementById("btn-reload");

// Seleção da linha criativa***********************************************************
// MANUAL: COLOCAR QUANTAS LINHAS ESTÃO DISPONÍVEIS
let linhaSelecionada = '';
function selecionaLinha() {
    linhaSelecionada = linhaCriativa.value;
    let versaoDiponivel = document.getElementById("versao");
    let formatoDiponivel = document.getElementById("formato");
    
    // Confere a linha selecionada e adiciona as Versões disponíveis ao campo versão:
    if(linhaSelecionada == "nulo") {
        versaoDiponivel.innerHTML = `<option value="nulo">-</option>`;
        formatoDiponivel.innerHTML = `<option value="nulo">-</option>`;
    }
    

    // LINHA vídeos 1
    else if(linhaSelecionada == "linhaVideos1") {
        versaoDiponivel.innerHTML = versaoDiponivel;
        versaoDiponivel.innerHTML += versaoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="v1">Linha 1 Versão 1</option>
        `;

        formatoDiponivel.innerHTML = `<option value="nulo">-</option>`;
        banner.innerHTML = "";
    }

    // LINHA vídeos 2
    else if(linhaSelecionada == "linhaVideos2") {
        versaoDiponivel.innerHTML = versaoDiponivel;
        versaoDiponivel.innerHTML += versaoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="v1">Linha 2 Versão 1</option>
        <option value="v2">Linha 2 Versão 2</option>
        `;

        formatoDiponivel.innerHTML = `<option value="nulo">-</option>`;
        banner.innerHTML = "";
    }

    // LINHA vídeos 3
    else if(linhaSelecionada == "linhaVideos3") {
        versaoDiponivel.innerHTML = versaoDiponivel;
        versaoDiponivel.innerHTML += versaoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="v1">Linha 3 Versão 1</option>
        `;

        formatoDiponivel.innerHTML = `<option value="nulo">-</option>`;
        banner.innerHTML = "";
    }
}
// Fim da Seleção da linha criativa

// Seleção da versão********************************************************************
// MANUAL: COLOCAR QUANTAS VERSÕES TEM ATÉ O MOMENTO EM CADA LINHA
let versaoSelecionada = '';
function selecionaVersao() {
    linhaSelecionada = linhaCriativa.value;
    versaoSelecionada = this.value;
    let formatoDiponivel = document.getElementById("formato");
    // Confere a versão selecionada e adiciona os Formatos disponíveis ao campo formato:
    if(versaoSelecionada == "nulo") {
        formatoDiponivel.innerHTML = `<option value="nulo">-</option>`;
    }


    // LINHA Vídeos 1 VERSÃO 1
    else if(linhaSelecionada == "linhaVideos1" && versaoSelecionada == "v1") {
        formatoDiponivel.innerHTML = formatoDiponivel;
        formatoDiponivel.innerHTML += formatoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="video_sonhos">Sonhos 1920x1080</option>
        <option value="video_congelados">Congelados 1920x1080</option>
        `;
    }

    // LINHA Vídeos 2 VERSÃO 1
    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v1") {
        formatoDiponivel.innerHTML = formatoDiponivel;
        formatoDiponivel.innerHTML += formatoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="video_cafeteria">Cafeteria 1920x1080</option>
        <option value="video_pastelaria">Patelaria 1920x1080</option>
        <option value="video_vegetariana">Vegetariana 1920x1080</option>
        `;
    }
    // LINHA Vídeos 2 VERSÃO 2
    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v2") {
        formatoDiponivel.innerHTML = formatoDiponivel;
        formatoDiponivel.innerHTML += formatoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="video_vegetariana">Vegetariana 1920x1080</option>
        `;
    }

    // LINHA Vídeos 3 VERSÃO 1
    else if(linhaSelecionada == "linhaVideos3" && versaoSelecionada == "v1") {
        formatoDiponivel.innerHTML = formatoDiponivel;
        formatoDiponivel.innerHTML += formatoDiponivel + 
        `
        <option value="nulo">-</option>

        <option value="video_pizza">Pizza 1920x1080</option>
        `;
    }
}
// Fim Seleção da versão

// Seleção do formato****************************************************************
// MANUAL: COLOCAR AS DIMENSÕES DOS FORMATOS DE CADA LINHA
let formatoSelecionado = '';
function selecionarFormato() {

    linhaSelecionada = linhaCriativa.value;
    versaoSelecionada = versao.value;
    formatoSelecionado = this.value;

    // Confere o fomato selecionada e gera o banner:
    if(formatoSelecionado == "nulo") {
        formatoSelecionado.innerHTML = `<option value="nulo">-</option>`;
        banner.innerHTML = "";
    }

    // Linha 1 V1*****
    else if(linhaSelecionada == "linhaVideos1" && versaoSelecionada == "v1" && formatoSelecionado == "video_sonhos") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha1/v1/conquiste_seus_sonhos-1920x1080.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }

    else if(linhaSelecionada == "linhaVideos1" && versaoSelecionada == "v1" && formatoSelecionado == "video_congelados") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha1/v1/mega_promocao_congelados-1920x1080.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }

    // Linha 2 V1*****
    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v1" && formatoSelecionado == "video_cafeteria") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha2/v1/video_cafeteria.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }

    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v1" && formatoSelecionado == "video_pastelaria") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha2/v1/video_pastelaria.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }

    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v1" && formatoSelecionado == "video_vegetariana") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha2/v1/video_vegetariana.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }
    // Linha 2 V2*****
    else if(linhaSelecionada == "linhaVideos2" && versaoSelecionada == "v2" && formatoSelecionado == "video_vegetariana") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha2/v2/video_vegetariana.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }

    // Linha 3 V1*****
    else if(linhaSelecionada == "linhaVideos3" && versaoSelecionada == "v1" && formatoSelecionado == "video_pizza") {
        banner.innerHTML = `
        <div class="btn-r">
            <button class="btn_reload" id="btn_reload" onclick="reloadBanner()">X</button>
        </div>

        <div class="video">
            <video src="videos/linha3/v1/video_pizza.mp4" controls autoplay></video>
        </div>`;

        scrollWindow();
    }
}

function scrollWindow() {
    window.scrollTo({top: 700, behavior: "smooth"});
}

function reloadBanner() {
    banner.innerHTML = "";
    formatoSelecionado = formato.children;
    formatoSelecionado[0].setAttribute("selected", "");
    window.scrollTo({top: 0, behavior: "smooth"});
    removerAtt();
}

function removerAtt() {
    formatoSelecionado = formato.children;
    formatoSelecionado[0].removeAttribute("selected");
}

// Fim Seleção do formato

linhaCriativa.addEventListener("change", selecionaLinha);
versao.addEventListener("change", selecionaVersao);
formato.addEventListener("change", selecionarFormato);


