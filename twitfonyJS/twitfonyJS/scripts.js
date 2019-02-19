var apiUrl = "";

function formatearTweet(tweet) { //RELLENAR
    salida = '<li class="tweet">';
    salida +='<div class="contenido">';
    salida +='<div class="cabecera">';
    salida +='<span class="delete"><a href="#" onclick="borrarTweet(ID);return false;">X</a></span>';
    salida +='<a href="' + apiUrl + '/tweet/ID">';
    salida +='<img class="avatarSmall" src="' + apiUrl +'/images/avatars/USUARIO-small.jpg" />'
    salida +='<strong>NOMBRE USUARIO</strong>';
    salida +='<span>@USUARIO</span>';
    salida +='</a>';
    salida +='<small class="time">FECHA</small>'
    salida +='</div>'
    salida +='<div class="mensaje">TEXTO</div>';
    salida +='</div>';
    salida +='</li>';
    return salida;
}

function obtenerTweets() {
    document.getElementById("contenedor").innerHTML="Conectando...";
    apiUrl = document.getElementById("txtURL").value;

    // ENVIAR PETICION GET USANDO LA API
    // RECIBIR JSON CON LOS TWEETS

        var contenido = "<ul class='tweetline'>";
        tweets.forEach(function(tweet) {
            contenido += formatearTweet(tweet, apiUrl);
        })
        contenido += "</ul>";
        document.getElementById("contenedor").innerHTML = contenido;


}

function borrarTweet(tweetId) {
    alert("Por hacer: Borrar tweet " + tweetId)
}
