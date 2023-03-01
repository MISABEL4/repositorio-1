//Menu
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//creo las barritas de una barra identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=9;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let atencionalcliente = document.getElementById("atencionalcliente");
crearBarra(atenciónalcliente);
let organización = document.getElementById("organización");
crearBarra(organización);
let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);
let manejodeestres = document.getElementById("manejodeestrés");
crearBarra(manejodeestrés);
let habilidadesfinancieras = document.getElementById("habilidadesfinancieras");
crearBarra(habilidadesfinancieras);
let marketing = document.getElementById("marketing");
crearBarra(marketing);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando en cada barra. Para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalAtenciónalcliente = setInterval(function(){
            pintarBarra(atenciónalcliente, 9, 0, intervalAtenciónalcliente);
        },100);
        const intervalOrganización = setInterval(function(){
            pintarBarra(organización, 8, 1, intervalOrganización);
        },100);
        const intervalLiderazgo = setInterval(function(){
            pintarBarra(liderazgo, 8, 2, intervalLiderazgo);
        },100);
        const intervalManejodeestrés = setInterval(function(){
            pintarBarra(manejodeestres, 6, 3, intervalManejodeestrés);
        },100);
        const intervalHabilidadesfinancieras = setInterval(function(){
            pintarBarra(habilidadesfinancieras, 8, 4, intervalHabilidadesfinancieras);
        },100);
        const intervalMarketing = setInterval(function(){
            pintarBarra(marketing, 7, 5, intervalMarketing);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}