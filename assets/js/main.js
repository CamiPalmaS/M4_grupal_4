const apikey = "e0c15b8e93223e5c828fbf46a5d20e5f";

async function obtenerClima() {
    const ciudad = document.getElementById("nombreCiudad").value.trim();
    const pais = document.getElementById("nombrePais").value.trim();
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric&lang=es`;
    setTimeout(() =>{
        fetch(urlApi)
    .then(response => response.json(), console.log("Información enviada"))
    .then(data => mostrarInfo(data), console.log(urlApi))
    .catch(error => {
        alert("Hubo un error: "+error);
    })
    return false;
    }, 2000)
}

document.getElementById("verClima").addEventListener("submit", (event) =>{
    event.preventDefault();
    obtenerClima();  
}) 
    
function mostrarInfo(data){
    if (data.cod ===200){
        const respuesta = `
        <div class="card">
            <div class="card-header bg-info text-white">
                <h2>Información del Clima en ${data.name}</h2>
            </div>
            <div class="card-body">
                <p class="lead">Temperatura: ${data.main.temp}°C</p>
                <p>T° min: ${data.main.temp_min}°C</p>
                <p>T° max: ${data.main.temp_max}°C</p>
            </div>
        </div>
        `;
    
        document.getElementById("infoClima").innerHTML = respuesta
        document.getElementById("verClima").reset();
    }else {
        document.getElementById("infoClima").textContent = "Hubo un error al consultar"
    }
}