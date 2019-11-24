//LocalStorage: guarada cadenas de textos, clave => valor
//SET => guardando ( en el navegador del usuario)
//GET => Obtener


// const nombreLocalStorage = localStorage.setItem('nombreUsuario')
// console.log(nombreLocalStorage)

// localStorage.removeItem('nombreUsuario')

//Variables globales

const BtnBotones = document.querySelector('#BtnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

(()=> {
BtnBotones.addEventListener("click", agregarBotones);
botones.addEventListener("click", delegacion);

})();

(()=>{
const color = localStorage.getItem('colorFondo');
if(color === null){
    fondo.className = 'bg-dark';
} else{
    fondo.className = color;
}

})();
function agregarBotones (e){
    e.preventDefault();
    botones.innerHTML = `
    <button class="btn btn-primary">primary</button>
            <button class="btn btn-secondary">secondary</button>
            <button class="btn btn-danger">danger</button>
            <button class="btn btn-success">success</button>
            <button class="btn btn-warning">warning</button>
    `

}

function delegacion(e){
    e.preventDefault();

    const colorBoton = e.target.classList[1];

    switch (colorBoton){
        case ('btn-primary'):
            fondo.className = "bg-primary";
            localStorage.setItem('colorFondo', "bg-primary");
            break;
         case ('btn-danger'):
            fondo.className = "bg-danger";
            localStorage.setItem('colorFondo', "bg-danger");
            break;
        case ('btn-warning'):
            fondo.className = "bg-warning";
            localStorage.setItem('colorFondo', "bg-warning");
            break;
        case ('btn-secondary'):
            fondo.className = "bg-secondary";
            localStorage.setItem('colorFondo', "bg-secondary");
            break; 
        case ('btn-success'):
            fondo.className = "bg-success";
            localStorage.setItem('colorFondo', "bg-success");
            break;  
        case ('btn-warning'):
                    fondo.className = "bg-warning";
                    localStorage.setItem('colorFondo', "bg-success");
                    break;              
    }
}

