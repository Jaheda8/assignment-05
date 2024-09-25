document.getElementById('history-donate-menu').addEventListener('click', function(){
    console.log('history button clicked')
    document.getElementById('history-container').classList.remove('hidden');
        document.getElementById('main-container').classList.add('hidden');

   

});
document.getElementById('donate-menu').addEventListener('click', function(){
    document.getElementById('main-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');


})