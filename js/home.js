let donationHistory = [];  // Global array to store donation history

// Function to handle donations
function handleDonateButton(cardIndex) {
    const inputElement = document.getElementById(`donate-amount-input-${cardIndex}`);
    const addBalanceElement = document.getElementById(`adding-balance-amount-${cardIndex}`);
    const donateButton = document.getElementById(`donate-button-${cardIndex}`);

    donateButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        const inputAmount = parseFloat(inputElement.value.trim());
        const accountBalanceElement = document.getElementById('account-balance');
        const accountBalanceToNum = parseFloat(accountBalanceElement.innerText.replace(' BDT', ''));

        // Validation
        if (isNaN(inputAmount) || inputAmount <= 0) {
            alert("Please enter a valid donation amount greater than zero.");
            return; 
        }

        if (inputAmount > accountBalanceToNum) {
            alert("Donation amount exceeds your account balance.");
            return; 
        }

        // Update the balance
        const updateAmountToNum = parseFloat(addBalanceElement.innerText);
        const newBalance = inputAmount + updateAmountToNum;
        addBalanceElement.innerText = newBalance + " Tk";

        const updatedAccountBalance = accountBalanceToNum - inputAmount;
        accountBalanceElement.innerText = updatedAccountBalance + " BDT";

        // Store donation info
        const donationData = {
            amount: inputAmount,
            title: 'Donate for Flood at Noakhali, Bangladesh',
            time: new Date().toLocaleString()
        };
        donationHistory.push(donationData);

        // Show success modal
        setTimeout(() => {
            const congratsModal = document.getElementById('congratsModal');
            document.getElementById('donation-amount-info').innerHTML = `<p>Your Donation Amount: ${inputAmount} Tk</p><p class='text-teal-800'>Total donation amount: ${newBalance} Tk</p>`;
            document.getElementById('account-balance-info').innerText = `Remaining Account Balance: ${updatedAccountBalance} BDT`;
            congratsModal.classList.remove('hidden');
        }, 500);
    });
}

// Call the function for all cards
for (let i = 1; i <= 3; i++) {
    handleDonateButton(i);
}

// Close the modal
document.getElementById('closeModalButton').addEventListener('click', function () {
    document.getElementById('congratsModal').classList.add('hidden');
});

// Get references to the buttons
const donateMenuBtn = document.getElementById('donate-menu');
const historyMenuBtn = document.getElementById('history-donate-menu');

// Function to update button active state
function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add('bg-teal-800', 'text-white');
    activeButton.classList.remove('btn-outline', 'text-teal-700');
    inactiveButton.classList.remove('bg-teal-800', 'text-white');
    inactiveButton.classList.add('btn-outline', 'text-teal-700');
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

    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('main-container').classList.add('hidden');

    const historyCard = document.getElementById('history-card');
    historyCard.innerHTML = ''; 

    // Check if there's any donation history
    if (donationHistory.length === 0) {
        historyCard.innerHTML = `<p>No donation history available.</p>`;
        return;
    }

    donationHistory.forEach(donation => {
        const div = document.createElement('div');
        div.classList.add('border', 'border-gray-200', 'rounded-lg', 'p-4', 'my-2');
        div.innerHTML = `
            <h3 class='font-bold'>Your Donation Amount: ${donation.amount} Tk</h3>
            <h3 class='font-bold'>For: ${donation.title}</h3>
            <p>Donation Time: ${donation.time}</p>
            <hr class="my-2">
        `;
        historyCard.appendChild(div);
    });

    setActiveButton(historyMenuBtn, donateMenuBtn);
});
