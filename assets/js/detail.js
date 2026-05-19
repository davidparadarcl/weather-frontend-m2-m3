const detailContainer = document.getElementById("detailContainer");

const cityId = localStorage.getItem("selectedCity");

const city = cities.find((c) => c.id == cityId);

if (city) {
    let weekHTML = "";

    city.week.forEach((day) => {
        weekHTML += `
            <li class="list-group-item">
                ${day}
            </li>
        `;
    });

    detailContainer.innerHTML = `

        <section class="card shadow overflow-hidden">

            <img
                src="${city.image}"
                class="img-fluid"
                alt="${city.name}">

            <div class="card-body">

                <h1 class="mb-4">
                    ${city.name}
                </h1>

                <p class="fs-3">
                    ${city.icon} ${city.temp}
                </p>

                <p>
                    <strong>Estado:</strong> ${city.state}
                </p>

                <p>
                    <strong>Humedad:</strong> ${city.humidity}
                </p>

                <p>
                    <strong>Viento:</strong> ${city.wind}
                </p>

                <h3 class="mt-5 mb-3">
                    Pronóstico semanal
                </h3>

                <ul class="list-group">
                    ${weekHTML}
                </ul>

            </div>

        </section>
    `;
}
