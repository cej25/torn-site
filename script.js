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

// Mock createChart function
function createChart({ labels, heroValues, villainValues }) {
    console.log("Chart Data:", { labels, heroValues, villainValues });

    // Display mock chart placeholder in the chart container
    const chartContainer = document.getElementById('chart-container');
    chartContainer.textContent = `
        Mock Chart: 
        Hero (${heroValues.join(', ')}), Villain (${villainValues.join(', ')})
    `;
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

    // Prepare data for the mock chart
    const labels = ['Strength', 'Speed', 'Defense', 'Dexterity', 'Life'];
    const heroValues = [
        heroParams.strength,
        heroParams.speed,
        heroParams.defense,
        heroParams.dexterity,
        heroParams.life
    ];
    const villainValues = [
        villainParams.strength,
        villainParams.speed,
        villainParams.defense,
        villainParams.dexterity,
        villainParams.life
    ];

    // Render the mock chart
    createChart({ labels, heroValues, villainValues });
});
