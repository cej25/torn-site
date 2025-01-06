// Handle slider updates
const speedInput = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');

speedInput.addEventListener('input', () => {
    speedValue.textContent = speedInput.value; // Update displayed value
});

// Handle simulation start
document.getElementById('start-simulation').addEventListener('click', () => {
    const speed = speedInput.value;
    const mode = document.getElementById('mode').value;

    // Mock simulation result
    const result = `Running in ${mode} mode at speed ${speed}. Result: ${speed * 2} units.`;
    document.getElementById('output').textContent = result;
});
