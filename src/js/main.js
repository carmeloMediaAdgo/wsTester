console.log ( "hola" );
i = 0;
parametros = {};
contenido = "";
contenidoParams = "";
respuesta = "";
ws = "";
estado = "";
$ ( document ).ready ( function () {

    $ ( "#submit" ).click ( function () {
        name = $ ( "#name" ).val ();
        value = $ ( "#value" ).val ();
        if ( name == "" || value == "" ) {
            $ ( "#submit" ).notify ( "Falta parametro name o value!", {
                position: "right-middle",
                style: "bootstrap",
                className: 'warning'
            } );

        } else if ( value == "" ) {
            value.notify ( "Falta Value" );

        } else {
            parametros[name] = value;
            showJson ();
            $ ( "#urlFinal" ).html ( (creaLaUrl ()) );
            $ ( "#submit" ).notify ( "Añadido!", {position: "right-middle", style: "bootstrap", className: 'success'} );
        }

    } );

    $ ( "#test" ).click ( function () {
        if ( estado != true ) {

            result = "No se dispone de datos para realizar la petición";
        } else {
            result = "Esta es la respuesta";
        }
        $ ( '#result' ).html ( result );
    } );


    function creaLaUrl () {
        url = "?";
        urlAux = "";
        ws = "http://webservice.com"; //$("#wsUrl").val();
        console.log ( contador = parametros.length );

        text = "";
        var x;
        for ( x in parametros ) {
            urlAux = x + "=" + parametros[x] + "&";
            url = url + urlAux;
        }
        return ws + url.substr ( 0, url.length - 1 );

    }

    function showJson () {

        aperturaJson = "{<br>";
        cierreJson = "}";
        contenidoParams += name + "= <code>" + value + "</code>"
        contenido = contenido + '"' + name + '" : "' + value + '",<br>';
        json = JSON.stringify ( parametros, undefined, "\n" );
        html = aperturaJson + contenido + cierreJson;

        $ ( "#params" ).html ( json );
        $ ( "#preview" ).html ( html );
        estado = true;
    }

} );
