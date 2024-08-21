function takeInput() {
    return document.getElementById("inputText").value;
}

class Weather {
    weatheries = {};
    async getWeather() {
        let city = takeInput();
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d87015810cfe476ea10193622241607&q=${city}`);
        this.weatheries = await response.json();
        this.renderWeather();
    }
    renderWeather() {
        let mainDiv = document.getElementById("mainDiv");
        mainDiv.innerHTML = '';

        let condition = document.createElement("p");
        condition.innerHTML = this.weatheries.current.condition.text;

        let img = document.createElement("img");
        img.src = this.weatheries.current.condition.icon;
        img.alt = this.weatheries.current.condition.text;

        let h1 = document.createElement("h1");
        h1.innerHTML = `Last update: ${this.weatheries.current.last_updated}`;

        let h2 = document.createElement("h2");
        h2.innerHTML = this.weatheries.location.country;

        let h3 = document.createElement("h3");
        h3.innerHTML = this.weatheries.location.name;

        let h4 = document.createElement("h4");
        h4.innerHTML = `${this.weatheries.current.temp_c}°C`;

        // Append elements
        mainDiv.appendChild(img);
        mainDiv.appendChild(condition);
        mainDiv.appendChild(h4);
        mainDiv.appendChild(h3);
        mainDiv.appendChild(h2);
        mainDiv.appendChild(h1);
    }
}

function fetchWeather() {
    let weather = new Weather();
    weather.getWeather();
}