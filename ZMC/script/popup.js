document.addEventListener("DOMContentLoaded", function () {
    var zmcElement = document.getElementById("zmc");
    var generateButton = document.getElementById("generate");
  
    console.log(zmcApi.length)

    generateButton.addEventListener("click", function () {
      var randomIndex = Math.floor(Math.random() * zmcApi.length);
      var randomZmc = zmcApi[randomIndex];
      zmcElement.textContent = randomZmc;



    });

    

    var connnectId = document.getElementById('connnectId');
    connnectId.addEventListener('click', function(event) {
    event.preventDefault();
    chrome.tabs.create({ url: connnectId.href });
    });

    var contributeId = document.getElementById('contributeId');
    contributeId.addEventListener('click',function(event){
      event.preventDefault()
      chrome.tabs.create({ url: contributeId.href});
    });
    
});
