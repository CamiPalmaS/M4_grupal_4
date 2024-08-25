const apikey = "fdabdd0c45a343df4b7996272f0f0c77";

document.getElementById("verClima").addEventListener("submit", (event) =>{
    event.preventDefault();

    const ciudad = document.getElementById("nombreCiudad").value.trim();
    const pais = document.getElementById("nombrePais").value.trim();
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric&lang=es`;
    setTimeout(() =>{
        fetch(urlApi)
    .then(response => response.json())
    .then(data => mostrarInfo(data))
    .catch(error => {
        alert("Hubo un error: "+error);
    })
    return false;
    }, 2000)
}) 
    
function mostrarInfo(data){
    if (data.cod ===200){
        const respuesta = `
        <h2>Información del Clima en ${data.name}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Humedad: ${data.main.humidity}%</p>
        <p>Descripción: ${data.weather[0].description}</p>
        `;
    //ya que weather es un arreglo, se debe agregar los corchetes e indicar el index del objeto al que le estamos pidiendo informacion
    //en este caso solo hay un objeto guardado dentro, y se llama al atributo description
        document.getElementById("infoClima").innerHTML = respuesta
    }else {
        document.getElementById("infoClima").textContent = "Hubo un error al consultar"
    }
}