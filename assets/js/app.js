const cities = [
    {
        id: 1,
        name: "Santiago",
        image: "santiago.jpg",
        temp: 22,
        condition: "Soleado",
        humidity: 30,
        wind: 10,
        forecast: [22, 24, 23, 21, 20, 22, 25],
    },
    {
        id: 2,
        name: "Valparaíso",
        image: "valparaiso.jpg",
        temp: 18,
        condition: "Lluvioso",
        humidity: 80,
        wind: 12,
        forecast: [18, 19, 17, 16, 18, 20, 19],
    },
    {
        id: 3,
        name: "Puerto Montt",
        image: "puerto-montt.jpg",
        temp: 16,
        condition: "Nublado",
        humidity: 70,
        wind: 8,
        forecast: [16, 15, 17, 16, 14, 16, 15],
    },
    {
        id: 4,
        name: "Concepción",
        image: "concepcion.jpg",
        temp: 20,
        condition: "Parcial",
        humidity: 60,
        wind: 9,
        forecast: [20, 21, 19, 22, 20, 21, 19],
    },
    {
        id: 5,
        name: "La Serena",
        image: "la-serena.jpg",
        temp: 24,
        condition: "Soleado",
        humidity: 40,
        wind: 7,
        forecast: [24, 25, 23, 26, 24, 25, 26],
    },
    {
        id: 6,
        name: "Iquique",
        image: "iquique.jpg",
        temp: 28,
        condition: "Soleado",
        humidity: 20,
        wind: 15,
        forecast: [28, 29, 27, 30, 28, 29, 27],
    },
    {
        id: 7,
        name: "Arica",
        image: "arica.jpg",
        temp: 29,
        condition: "Soleado",
        humidity: 18,
        wind: 11,
        forecast: [29, 30, 28, 31, 30, 29, 28],
    },
    {
        id: 8,
        name: "Chiloé",
        image: "chiloe.jpg",
        temp: 14,
        condition: "Lluvioso",
        humidity: 85,
        wind: 13,
        forecast: [14, 15, 13, 14, 15, 14, 13],
    },
    {
        id: 9,
        name: "Temuco",
        image: "temuco.jpg",
        temp: 19,
        condition: "Lluvioso",
        humidity: 75,
        wind: 11,
        forecast: [19, 20, 18, 19, 21, 20, 19],
    },
    {
        id: 10,
        name: "Punta Arenas",
        image: "punta-arenas.jpg",
        temp: 10,
        condition: "Ventoso",
        humidity: 65,
        wind: 25,
        forecast: [10, 11, 9, 8, 10, 11, 9],
    },
];

const container = document.getElementById("cities-container");

if (container) {
    cities.forEach((city) => {
        container.innerHTML += `
      <article class="col-12 col-md-6 col-lg-4 mb-4">

        <div class="place-card">

          <img
            src="assets/img/${city.image}"
            alt="${city.name}"
            class="place-card__image">

          <h2 class="place-card__name">
            ${city.name}
          </h2>

          <p class="place-card__temp">
            ${city.temp}°C
          </p>

          <span class="badge bg-primary">
            ${city.condition}
          </span>

          <button
            class="btn btn-primary weather-button mt-4"
            onclick="goDetail(${city.id})">

            Ver detalle

          </button>

        </div>

      </article>
    `;
    });
}

function goDetail(id) {
    localStorage.setItem("cityId", id);

    window.location.href = "detail.html";
}

const detailContainer = document.getElementById("city-detail");

if (detailContainer) {
    const id = localStorage.getItem("cityId");

    const city = cities.find((c) => c.id == id);

    if (city) {
        detailContainer.innerHTML = `
      <article class="weather-detail">

        <h2 class="mb-4">
          ${city.name}
        </h2>

        <img
          src="assets/img/${city.image}"
          alt="${city.name}"
          class="place-card__image mb-4">

        <ul class="list-group list-group-flush">

          <li class="list-group-item">
            Temperatura: ${city.temp}°C
          </li>

          <li class="list-group-item">
            Humedad: ${city.humidity}%
          </li>

          <li class="list-group-item">
            Viento: ${city.wind} km/h
          </li>

        </ul>

      </article>
    `;

        const forecastContainer = document.getElementById("forecast");

        city.forecast.forEach((temp, i) => {
            forecastContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 mb-4">

          <div class="place-card text-center">

            <h3 class="place-card__name">
              Día ${i + 1}
            </h3>

            <p class="place-card__temp">
              ${temp}°C
            </p>

          </div>

        </div>
      `;
        });
    }
}
