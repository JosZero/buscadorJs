//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const maxS = document.querySelector('#maximo');
const minS = document.querySelector('#minimo');
const puertas = document.querySelector('#puertas');
const transmicion = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
      marca: '',
      modelo: '',
      year: '',
      minimo: '',
      maximo: '',
      puertas: '',
      color: '',
      transmicion: ''
};
//eventos
document.addEventListener('DOMContentLoaded',()=>{
      mostrarAutos(autos);

      
      llenarSelectAnio();
});

//event listener para las busquedas
marca.addEventListener('change',(e)=>{
      datosBusqueda.marca = e.target.value;

      //console.log(datosBusqueda);
      filtrarAuto();
});

maxS.addEventListener('change',(e)=>{
      datosBusqueda.maximo = e.target.value;

      filtrarAuto();

      //console.log(datosBusqueda);
});
minS.addEventListener('change',(e)=>{
      datosBusqueda.minimo = e.target.value;

      filtrarAuto();
      //console.log(datosBusqueda);
});
puertas.addEventListener('change',(e)=>{
      datosBusqueda.puertas = parseInt(e.target.value);

      filtrarAuto();
      // console.log(datosBusqueda);
});
transmicion.addEventListener('change',(e)=>{
      datosBusqueda.transmicion = e.target.value;

      filtrarAuto();
      // console.log(datosBusqueda);
});
color.addEventListener('change',(e)=>{
      datosBusqueda.color = e.target.value;

      filtrarAuto();
      // console.log(datosBusqueda);
});
year.addEventListener('change',(e)=>{
      datosBusqueda.year = e.target.value;

      filtrarAuto();
      // console.log(datosBusqueda);
});


//funciones
function mostrarAutos(autosResukl){

      limpiarHTML();

      autosResukl.forEach(auto => {
            const { marca, modelo, year, precio, puertas, color, transmision} = auto;
            const autoContent = document.createElement('div');
            const autoHtml = document.createElement('p');
            autoHtml.textContent = `
            Marca: ${marca}  Modelo: ${modelo} 
              - ${year} Puertas: ${puertas} Puertas Transmision: ${transmision} -Precio: ${precio} Color: ${color}`;

            autoContent.appendChild(autoHtml);
            resultado.appendChild(autoContent);

      })

      
}

function limpiarHTML(){
      while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
      }
}

function llenarSelectAnio(){

      for(let i= max ;i >= min ; i--){
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            year.appendChild(opcion);
      }
}


function filtrarAuto(){
      const resultadoAutosFilter = autos.filter(filtrarMarca).filter(filtrarYEar).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);
      //console.log(resultadoAutosFilter);

      if(resultadoAutosFilter.length){
            mostrarAutos(resultadoAutosFilter);

      }else{
            noResult();
      }
}
function noResult(){
      limpiarHTML();
      const noresult = document.createElement('div');
      noresult.classList.add('alerta','error');
      noresult.textContent = 'No hay resultados';
      resultado.appendChild(noresult);

}
function filtrarMarca(auto){
      if(datosBusqueda.marca){
            return auto.marca === datosBusqueda.marca;
      }
      return auto;
      // return auto;
      //console.log(auto);
}
function filtrarYEar(auto){
      if(datosBusqueda.year){
            return auto.year ===  parseInt(datosBusqueda.year);
      }
      return auto;
}
function filtrarMinimo(auto){
      if(datosBusqueda.minimo){
            return auto.precio >=  datosBusqueda.minimo;
      }
      return auto;
}
function filtrarMaximo(auto){
      if(datosBusqueda.maximo){
            return auto.precio <=  datosBusqueda.maximo;
      }
      return auto;
      
}

function filtrarPuertas(auto){
      if(datosBusqueda.puertas){
            return auto.puertas ===  datosBusqueda.puertas;
      }
      return auto;
      
}

function filtrarColor(auto){
      if(datosBusqueda.color){
            return auto.color ===  datosBusqueda.color;
      }
      return auto;
      
}

function filtrarTransmision(auto){
      if(datosBusqueda.transmicion){
            return auto.transmision === datosBusqueda.transmicion;
      }
      return auto;
      
}
