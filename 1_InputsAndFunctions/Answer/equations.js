function calculate() {
    // Create our output text
    let output = "Results:\n";

    // Get the value from our fahrenheit text field
    let fahrenheit = document.getElementById('fahrenheit').value;
    fahrenheit = parseFloat(fahrenheit);

    // Calculate temperature in Celsius
    const celsius = fahrenheitToCelsius(fahrenheit);

    // Update our output text
    output = output + `${fahrenheit.toFixed(2)}&deg;F is ${celsius.toFixed(2)}&deg;C`;

    // Calculate temperature in Kelvin
    const kelvin = celsiusToKelvin(celsius);

    // Put the Kelvin temperature on the next line
    output = output + "\n";
    output = output + `${fahrenheit.toFixed(2)}&deg;F is ${kelvin.toFixed(2)}&deg;K`;

    // Put it in the text area
    const textArea = document.getElementById('results');
    textArea.innerHTML = output;
}

/**
 * This function takes a temperature in Fahrenheit and returns the 
 * temperature in Celsius
 * 
 * @param {Number} fahrenheit 
 * @returns {Number} the temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * This function takes a temperature in Celsius and returns the 
 * temperature in Kelvin
 * 
 * @param {Number} celsius
 * @returns {Number} the temperature in Kelvin
 */
function celsiusToKelvin(celsius) {
    return celsius + 273;
}