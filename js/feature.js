// document.getElementById('history-donate-menu').addEventListener('click', function(){
//     console.log('history button clicked');
    
//     // Hide main content and show history section
//     document.getElementById('history-container').classList.remove('hidden');
//     document.getElementById('main-container').classList.add('hidden');

//     // Clear previous history
//     const historyCard = document.getElementById('history-card');
//     historyCard.innerHTML = ''; 

//     // Loop through the donation history and append each entry
//     donationHistory.forEach(donation => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <p>Your Donation Amount: ${donation.amount} Tk</p>
//             <p>For: ${donation.title}</p>
//             <p>Donation Time: ${donation.time}</p>
//         `;
//         historyCard.appendChild(div);
//     });
// });

// // Switch back to donation screen
// document.getElementById('donate-menu').addEventListener('click', function(){
//     document.getElementById('main-container').classList.remove('hidden');
//     document.getElementById('history-container').classList.add('hidden');
// });
