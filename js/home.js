let donationHistory = [];  // Global array to store donation history

document.getElementById('donate-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Get the input value and convert it to a number
    const inputAmount = parseFloat(document.getElementById('donate-amount-input').value.trim());
    
    // Get the current account balance
    const accountBalanceElement = document.getElementById('account-balance');
    const accountBalanceToNum = parseFloat(accountBalanceElement.innerText.replace(' BDT', '')); // Remove " BDT"
    
    // Validation
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid donation amount greater than zero.");
        return; // Stop the transaction
    }

    if (inputAmount > accountBalanceToNum) {
        alert("Donation amount exceeds your account balance.");
        return; // Stop the transaction
    }

    if (!document.getElementById('donate-amount-input').value.trim()) {
        alert("Donation amount cannot be empty.");
        return; // Stop the transaction
    }

    // Update the balance after successful validation
    const updateAmountElement = document.getElementById('adding-balance-amount');
    const updateAmuntToNum = parseFloat(updateAmountElement.innerText);
    
    // Add the new donation amount to the current balance
    const newBalance = inputAmount + updateAmuntToNum;
    
    // Update the UI with the new balance
    updateAmountElement.innerText = newBalance + " Tk";

    // Update the account balance
    const updatedAccountBalance = accountBalanceToNum - inputAmount; // Subtract the donation amount from the account balance
    accountBalanceElement.innerText = updatedAccountBalance + " BDT"; // Update with new balance

    // Store the donation info and time in the global array
    const donationData = {
        amount: inputAmount,
        title: 'Donate for Flood at Noakhali, Bangladesh',
        time: new Date().toLocaleString()  // Get the current time
    };
    donationHistory.push(donationData);

    // Delay showing the congrats modal by 2 seconds
    setTimeout(() => {
        const congratsModal = document.getElementById('congratsModal');
        
        // Populate the modal with donation and account balance information
        document.getElementById('donation-amount-info').innerHTML = `<p  '> Your Donation Amount: ${inputAmount} Tk </p>
       <p class =' text-teal-800'> Total donation amount: ${newBalance} Tk </p>`;
        document.getElementById('account-balance-info').innerText = `Remaining Account Balance: ${updatedAccountBalance} BDT`;
        
        // Show the modal by removing 'hidden' class
        congratsModal.classList.remove('hidden');
    }, 500);
});

// Close the modal when "Close" button is clicked
document.getElementById('closeModalButton').addEventListener('click', function() {
    const congratsModal = document.getElementById('congratsModal');
    congratsModal.classList.add('hidden'); // Hide the modal
});
