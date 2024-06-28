document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").querySelector(".highlight").textContent = lastModified;

    const temperature = 28; // Static temperature in °C
    const windSpeed = 15; // Static wind speed in km/h

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
});
