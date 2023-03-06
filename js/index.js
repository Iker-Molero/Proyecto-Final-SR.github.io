const divPrincipal = document.querySelector(".main");
const modal = document.querySelector(".modal");

function AbrirModal(index){
    divPrincipal.classList.add("hide");
    modal.classList.remove("hide");
    switch(index){
        case 0: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Cloud
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Tecnología que permite acceso remoto a softwares,
                        almacenamiento de archivos y procesamiento de datos
                        por medio de Internet.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://aws.amazon.com/es/" target="_blank">AWS</a>
                    </div>
                    <div class="link">
                        <a href="https://azure.microsoft.com/es-es" target="_blank">Azure</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 1: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Proxy
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Es un equipo informático que intercepta conexiones
                        de red hechas desde un cliente a un servidor
                        de destino.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.proxfree.com" target="_blank">ProxFree</a>
                    </div>
                    <div class="link">
                        <a href="https://hide.me/es/" target="_blank">HideMe</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 2: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        VPN
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Una red privada virtual es una tecnología de
                        red de ordenadores que permite una extensión 
                        segura de la red de área local sobre una red
                        pública o no controlada como Internet.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://es.norton.com" target="_blank">Norton</a>
                    </div>
                    <div class="link">
                        <a href="https://openvpn.net" target="_blank">OpenVPN</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 3: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Control Remoto
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                    Capacidad de acceder a un ordenador o dispositivo
                    desde otro dispositivo, en cualquier momento y
                    desde cualquier lugar.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://anydesk.com/es" target="_blank">AnyDesk</a>
                    </div>
                    <div class="link">
                        <a href="https://www.teamviewer.com/es/" target="_blank">TeamViewer</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 4: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Correo Electrónico
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Sistema que permite el intercambio de mensajes entre
                        distintas computadoras interconectadas a través
                        de una red.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.google.com/intl/es/gmail/about/" target="_blank">Gmail</a>
                    </div>
                    <div class="link">
                        <a href="https://outlook.live.com" target="_blank">Outlook</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 5: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        VoIP
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Voz sobre protocolo de internet es un conjunto de
                        recursos que hacen posible que la señal de voz viaje
                        a través de Internet empleando el protocolo IP.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.zendesk.es" target="_blank">ZenDesk</a>
                    </div>
                    <div class="link">
                        <a href="https://www.talkdesk.com" target="_blank">TalkDesk</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 6: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Proveedores de internet
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        El proveedor de servicios de internet es la
                        empresa que brinda conexión a Internet a
                        sus clientes.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.jazztel.com" target="_blank">Jazztel</a>
                    </div>
                    <div class="link">
                        <a href="https://www.vodafone.es/c/particulares/es/" target="_blank">Vodafone</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 7: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Servicio Wifi con un portal cautivo
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Herramienta que permite controlar y gestionar
                        el acceso a redes WiFi a través de un proceso
                        de autenticación o login.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://wifisafe.com" target="_blank">WifiSafe</a>
                    </div>
                    <div class="link">
                        <a href="http://www.teldat.com" target="_blank">Teldat</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 8: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Copias de seguridad
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Copia de los datos originales que se realiza
                        con el fin de disponer de un medio para 
                        recuperarlos en caso de su pérdida.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://go.carbonite.com/backup-for-office-365-ES.html" target="_blank">Carbonite</a>
                    </div>
                    <div class="link">
                        <a href="https://www.backblaze.com/es_ES/" target="_blank">BackBlaze</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 9: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Gestión de contraseña
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Permite almacenar los nombres de usuarios y
                        contraseñas de cada sitio en el que
                        estamos registrados.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://bitwarden.com" target="_blank">Bitwarden</a>
                    </div>
                    <div class="link">
                        <a href="https://www.dashlane.com/es" target="_blank">Dashlane</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 10: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Antivirus
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Un antivirus es un tipo de software que
                        se utiliza para evitar, buscar, detectar
                        y eliminar virus de una computadora.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.mcafee.com/es-es/index.html" target="_blank">McAfee</a>
                    </div>
                    <div class="link">
                        <a href="https://www.avast.com/es-es/index#pc" target="_blank">Avast</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 11: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        INCIBE
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Instituto Nacional de Ciberseguridad INCIBE 
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="http://www.incibe.es" target="_blank">INCIBE</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 12: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Para hacer webs
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Un sistema de gestión de contenidos o CMS
                        es un programa informático que permite crear
                        un entorno de trabajo para la creación y
                        administración de páginas web.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://wordpress.com" target="_blank">Wordpress</a>
                    </div>
                    <div class="link">
                        <a href="https://carrd.co" target="_blank">Carrd.co</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 13: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Dominios
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Un dominio de internet es un nombre único
                        que identifica a una subárea de Internet.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://dominios.es/es" target="_blank">Dominios.es</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 14: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Hosting
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Un hosting es un servicio de alojamiento
                        para páginas web bajo un servidor.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.hostinger.es/hosting-web" target="_blank">Hostinger</a>
                    </div>
                    <div class="link">
                        <a href="https://www.siteground.es" target="_blank">SiteGround</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 15: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Analytics
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        El análisis web es un conjunto de técnicas
                        relacionadas con el análisis de datos
                        relativos al tráfico en un sitio web con
                        el objetivo de entender su tráfico como
                        punto de partida para optimizar diversos
                        aspectos del mismo.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://analytics.google.com/" target="_blank">Google Analytics</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 16: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Chat Bot
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Programa informático basado en la inteligencia
                        artificial que es capaz de mantener una
                        conversación con un internauta, sobre un
                        tema específico.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://openai.com/blog/chatgpt/" target="_blank">ChatGPT</a>
                    </div>
                    <div class="link">
                        <a href="https://openai.com" target="_blank">Open AI</a>
                    </div>
                    <div class="link">
                        <a href="https://replika.com" target="_blank">Replika</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 17: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Gestores de tareas
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Un gestor de tareas es una herramienta que
                        sirve para coordinar y realizar un
                        seguimiento de actividades.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://trello.com/es" target="_blank">Trello</a>
                    </div>
                    <div class="link">
                        <a href="https://es.smartsheet.com" target="_blank">SmartSheet</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 18: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        ERP
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Los sistemas de planificación de recursos empresariales
                        son los sistemas de información gerenciales que integran
                        y manejan muchos de los negocios asociados con las
                        operaciones de producción.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://www.odoo.com/es_ES" target="_blank">Odoo</a>
                    </div>
                </div>
            </div>
        `
        break;
        case 19: 
        modal.innerHTML = `
            <div class="top-wrapper">
                <div class="title">
                    <p>
                        Repositorios
                    </p>
                </div>
                <div class="close" onclick="CerrarModal()">
                    <p>
                        X
                    </p>
                </div>
            </div>
            <div class="bottom-wrapper">
                <div class="desc">
                    <p>
                        Se llama control de versiones a la gestión de los diversos
                        cambios que se realizan sobre los elementos de algún
                        producto o una configuración del mismo.
                    </p>
                </div>
                <div class="links-wrapper">
                    <div class="link">
                        <a href="https://github.com" target="_blank">GitHub</a>
                    </div>
                    <div class="link">
                        <a href="https://azure.microsoft.com/es-es/products/devops/repos" target="_blank">Azure Repos</a>
                    </div>
                </div>
            </div>
        `
        break;
        default:
        modal.innerHTML = "";
        break;
    }
}
function CerrarModal(){
    divPrincipal.classList.remove("hide");
    modal.classList.add("hide");
}
function Enlace(){
    window.open(
    'https://fondoseuropeosdigitalizacion.es/#:~:text=Al%20abrir%20las%20convocatorias%2C%20el,de%20un%20año%20de%20duración',
    '_blank');
}