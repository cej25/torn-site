// Function to format the number with commas
function formatNumberWithCommas(value) {
    // Replace all non-digit characters except for the commas
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function to handle input formatting
function formatInputs() {
    // Get all the input fields that should have formatted numbers
    const numberInputs = document.querySelectorAll('input[type="text"]');
    
    numberInputs.forEach(input => {
        input.addEventListener('input', function () {
            // Remove all non-numeric characters except for the commas
            let value = input.value.replace(/[^\d]/g, '');
            
            // Format the number with commas
            input.value = formatNumberWithCommas(value);
        });
    });
}

// Function to simulate data from input fields and mock chart
function runSimulation() {
    // Get the values from the input fields
    const strengthHero = parseInt(document.getElementById('strength-hero').value.replace(/,/g, '')) || 0;
    const strengthVillain = parseInt(document.getElementById('strength-villain').value.replace(/,/g, '')) || 0;
    const speedHero = parseInt(document.getElementById('speed-hero').value.replace(/,/g, '')) || 0;
    const speedVillain = parseInt(document.getElementById('speed-villain').value.replace(/,/g, '')) || 0;
    const defenseHero = parseInt(document.getElementById('defense-hero').value.replace(/,/g, '')) || 0;
    const defenseVillain = parseInt(document.getElementById('defense-villain').value.replace(/,/g, '')) || 0;
    const dexterityHero = parseInt(document.getElementById('dexterity-hero').value.replace(/,/g, '')) || 0;
    const dexterityVillain = parseInt(document.getElementById('dexterity-villain').value.replace(/,/g, '')) || 0;
    const lifeHero = parseInt(document.getElementById('life-hero').value.replace(/,/g, '')) || 0;
    const lifeVillain = parseInt(document.getElementById('life-villain').value.replace(/,/g, '')) || 0;

    // Mock battle logic
    const heroScore = strengthHero + speedHero + defenseHero + dexterityHero + lifeHero;
    const villainScore = strengthVillain + speedVillain + defenseVillain + dexterityVillain + lifeVillain;

    // Mock outcome (just a simple comparison for now)
    let outcome = "It's a draw!";
    if (heroScore > villainScore) {
        outcome = "Hero Wins!";
    } else if (villainScore > heroScore) {
        outcome = "Villain Wins!";
    }

    // Displaying the mock result (you can replace this logic with a real chart later)
    document.getElementById('outcome').innerHTML = `Hero Score: ${heroScore} | Villain Score: ${villainScore}<br>Outcome: ${outcome}`;
}

// Function to initialize everything once the page loads
window.onload = function() {
    // Apply the number formatting for inputs
    formatInputs();

    // Set up the run simulation button
    const simulateButton = document.getElementById('simulate-button');
    simulateButton.addEventListener('click', function() {
        runSimulation();
    });
};
