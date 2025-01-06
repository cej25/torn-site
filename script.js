// Handle slider updates
const speedInput = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');

speedInput.addEventListener('input', () => {
    speedValue.textContent = speedInput.value; // Update displayed value
});

// Global chart variable
let resultsChart;

// Function to create or update the chart
function createChart(data) {
    const ctx = document.getElementById('results-chart').getContext('2d');

    // If a chart already exists, destroy it
    if (resultsChart) {
        resultsChart.destroy();
    }

    // Create a new chart
    resultsChart = new Chart(ctx, {
        type: 'bar', // Type of chart (e.g., bar, line, pie)
        data: {
            labels: data.labels, // Labels for the X-axis
            datasets: [{
                label: 'Simulation Results',
                data: data.values, // Data points
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Handle simulation start
document.getElementById('start-simulation').addEventListener('click', () => {
    const speed = speedInput.value;
    const mode = document.getElementById('mode').value;

    // Mock simulation data
    const labels = ['Parameter 1', 'Parameter 2', 'Parameter 3', 'Parameter 4'];
    const values = labels.map(() => Math.floor(Math.random() * speed)); // Generate random values based on speed

    // Update output text
    document.getElementById('output').textContent = `Simulation complete! Results are displayed below.`;

    // Update the chart
    createChart({ labels, values });
});
