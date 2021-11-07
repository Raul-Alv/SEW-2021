var imported = document.createElement("infoNavegador");
imported.src="";
document.head.appendChild(imported);

document.write("<p>Version: " + nav.version + "</p>" +
"<p>Codigo Nombre: " + nav.codigoNombre + "</p>" +
"<p>Plataforma: " + nav.plataforma +  "</p>" +
"<p>Cookies: " + nav.cookies +  "</p>" +
"<p>Agente: " + nav.agente +  "</p>" +
"<p>Online: " + nav.online +  "</p>" +
"<p>Vendedor: " + nav.vendedor +  "</p>" +
"<p>Producto: " + nav.producto +  "</p>");