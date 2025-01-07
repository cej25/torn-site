// Handle slider updates
const speedInput = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');

speedInput.addEventListener('input', () => {
    speedValue.textContent = speedInput.value; // Update displayed value
});

// Global chart variable
let resultsChart;

// Mock createChart function
function createChart({ labels, values }) {
    console.log("Chart data:", { labels, values });
    document.getElementById('chart-container').textContent = `Chart Placeholder: ${values.join(', ')}`;
}


// Validate if the input is a number and adjust if necessary
function validateAndAdjust(value, defaultValue = 0) {
    if (isNaN(value) || value <= 0) {
        alert(`Invalid value! Setting to default value of ${defaultValue}.`);
        return defaultValue;  // Set to 0 if invalid or not positive
    }
    return value;  // Return the valid positive number
}

document.getElementById('start-simulation').addEventListener('click', () => {
    // Collect and validate attribute values
    const strength = validateAndAdjust(parseInt(document.getElementById('strength').value, 10), 50);
    const speed = validateAndAdjust(parseInt(document.getElementById('speed-input').value, 10), 50);
    const defense = validateAndAdjust(parseInt(document.getElementById('defense').value, 10), 50);
    const dexterity = validateAndAdjust(parseInt(document.getElementById('dexterity').value, 10), 50);
    const life = validateAndAdjust(parseInt(document.getElementById('life').value, 10), 100);

    // Mock simulation data
    const labels = ['Strength', 'Speed', 'Defense', 'Dexterity', 'Life'];
    const values = [strength, speed, defense, dexterity, life];

    // Update output text
    document.getElementById('output').textContent = `Simulation complete! Results are displayed below.`;

    // Update the chart
    createChart({ labels, values });
});


