function navegador(nombre, lenguaje, version, codigoNombre, plataforma, cookies, agente,
    online, vendedor, producto){
        this.nombre=nombre;
        this.lenguaje=lenguaje;
        this.version=version;
        this.codigoNombre=codigoNombre;
        this.plataforma=plataforma;
        this.cookies=cookies;
        this.agente=agente;
        this.online=online;
        this.vendedor=vendedor;
        this.producto=producto;
    }
    
    nav = new navegador(navigator.appName, navigator.language, navigator.appVersion,
        navigator.platform, navigator.cookieEnabled, navigator.userAgent, navigator.onLine, 
        navigator.vendor, navigator.product);