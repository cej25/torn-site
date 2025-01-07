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

// Utility function to validate and adjust inputs
function validateAndAdjust(value, defaultValue = 0) {
    if (isNaN(value) || value < 0) {
        alert(`Invalid value! Setting to default value of ${defaultValue}.`);
        return defaultValue;
    }
    return value;
}

// Function to collect Hero or Villain parameters
function getParameters(prefix) {
    const strength = validateAndAdjust(parseInt(document.getElementById(`${prefix}-strength`).value, 10));
    const speed = validateAndAdjust(parseInt(document.getElementById(`${prefix}-speed`).value, 10));
    const defense = validateAndAdjust(parseInt(document.getElementById(`${prefix}-defense`).value, 10));
    const dexterity = validateAndAdjust(parseInt(document.getElementById(`${prefix}-dexterity`).value, 10));
    const life = validateAndAdjust(parseInt(document.getElementById(`${prefix}-life`).value, 10), 100);

    const strengthPassive = validateAndAdjust(parseInt(document.getElementById(`${prefix}-strength-passive`).value, 10));
    const speedPassive = validateAndAdjust(parseInt(document.getElementById(`${prefix}-speed-passive`).value, 10));
    const defensePassive = validateAndAdjust(parseInt(document.getElementById(`${prefix}-defense-passive`).value, 10));
    const dexterityPassive = validateAndAdjust(parseInt(document.getElementById(`${prefix}-dexterity-passive`).value, 10));

    return {
        strength,
        speed,
        defense,
        dexterity,
        life,
        passives: {
            strength: strengthPassive,
            speed: speedPassive,
            defense: defensePassive,
            dexterity: dexterityPassive
        }
    };
}

// Event listener for starting the simulation
document.getElementById('start-simulation').addEventListener('click', () => {
    // Read Hero parameters
    const heroParams = getParameters('hero');

    // Read Villain parameters
    const villainParams = getParameters('villain');

    // Log the results for debugging
    console.log('Hero Parameters:', heroParams);
    console.log('Villain Parameters:', villainParams);

    // Display a confirmation message (for now)
    document.getElementById('output').textContent = `
        Simulation Started!
        Hero vs. Villain parameters have been successfully read.
        Check the console for detailed values.
    `;

    // Future: Pass these parameters to a function for simulation or battle logic
});
