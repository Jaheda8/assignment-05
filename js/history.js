// Get references to the buttons
const donateMenuBtn = document.getElementById('donate-menu');
const historyMenuBtn = document.getElementById('history-donate-menu');

// Function to update button active state
function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add('bg-teal-800', 'text-white'); // Set active button style
    activeButton.classList.remove('btn-outline', 'text-teal-700'); // Remove inactive style
    inactiveButton.classList.remove('bg-teal-800', 'text-white'); // Reset inactive button style
    inactiveButton.classList.add('btn-outline', 'text-teal-700'); // Add inactive style
}

// Handle Donation button click
donateMenuBtn.addEventListener('click', function() {
    console.log('Donation button clicked');
    setActiveButton(donateMenuBtn, historyMenuBtn);
    document.getElementById('main-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
});

// Handle History button click
historyMenuBtn.addEventListener('click', function() {
    console.log('History button clicked');
    
    // Hide main content and show history section
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('main-container').classList.add('hidden');

    // Clear previous history
    const historyCard = document.getElementById('history-card');
    historyCard.innerHTML = ''; 

    // Loop through the donation history and append each entry
    donationHistory.forEach(donation => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3 class='font-bold'>Your Donation Amount: ${donation.amount} Tk</h3>
            <h3 class='font-bold'>For: ${donation.title}</h3>
            <p>Donation Time: ${donation.time}</p>
        `;
        historyCard.appendChild(div);
    });

    // Activate history button and deactivate donate button
    setActiveButton(historyMenuBtn, donateMenuBtn);
});
