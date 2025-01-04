function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp').value);
    const unit = document.getElementById('unit').value;
  
    if (isNaN(temp)) {
      alert("Please enter a valid number!");
      return;
    }
  
    let resultCelsius, resultFahrenheit, resultKelvin;
  
    if (unit === "Celsius") {
      resultFahrenheit = (temp * 9/5) + 32;
      resultKelvin = temp + 273.15;
      resultCelsius = temp;
    } else if (unit === "Fahrenheit") {
      resultCelsius = (temp - 32) * 5/9;
      resultKelvin = (temp - 32) * 5/9 + 273.15;
      resultFahrenheit = temp;
    } else if (unit === "Kelvin") {
      resultCelsius = temp - 273.15;
      resultFahrenheit = (temp - 273.15) * 9/5 + 32;
      resultKelvin = temp;
    }
  
    // Display results
    document.getElementById('resultCelsius').textContent = `Celsius: ${resultCelsius.toFixed(2)} °C`;
    document.getElementById('resultFahrenheit').textContent = `Fahrenheit: ${resultFahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKelvin').textContent = `Kelvin: ${resultKelvin.toFixed(2)} K`;
  }
  