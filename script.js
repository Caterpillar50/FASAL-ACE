
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function analyzeSoil() {
    const ph = document.getElementById('ph').value;
    const moisture = document.getElementById('moisture').value;
    const texture = document.getElementById('texture').value;

    let analysisResult = 'Based on your input: ';
    analysisResult += `<br><strong>pH:</strong> ${ph}`;
    analysisResult += `<br><strong>Moisture Level:</strong> ${moisture}%`;
    analysisResult += `<br><strong>Texture:</strong> ${texture}`;
    analysisResult += '<br> Recommended Crop: Wheat (example)';

    document.getElementById('analysis-result').innerHTML = analysisResult;

    // Simulated fertilizer recommendations based on soil analysis
    let fertilizerResult = 'For the provided soil, we suggest using organic compost.';
    document.getElementById('fertilizer-result').innerHTML = fertilizerResult;
}

window.onload = function() {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = 'Sunny, 24°C (example weather data)';
}
