function calculate() {
    let output = "";

    // Get the value from our fahrenheit text field
    let fahrenheit = document.getElementById('fahrenheit').value;
    fahrenheit = parseFloat(fahrenheit);

    // Calculate temperature in Celsius
    const celsius = fahrenheitToCelsius(fahrenheit);

    // Create our output text
    output = `${fahrenheit.toFixed(2)}&deg;F is ${celsius.toFixed(2)}&deg;C`;

    // Calculate temperature in Kelvin
    const kelvin = celsiusToKelvin(celsius);

    // Put the Kelvin temperature on the next line
    output = output + "\n";
    output = output + `${fahrenheit.toFixed(2)}&deg;F is ${kelvin.toFixed(2)}&deg;K`;

    // Put it in the text area
    const textArea = document.getElementById('results');
    textArea.innerHTML = output;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273;
}