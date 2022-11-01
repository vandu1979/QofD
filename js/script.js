let quotes = [
    "I knew you couldn't drive. I didn't think you couldn't read.",
    "Faster than fast. Quicker than quick. I am lightning!",
    "I'm a precision instrument of speed and aerodynamics.",
    "Float like a Cadillac, sting like a Beemer.",
    "Lightning McQueen: I'm a precision instrument of speed and aerodynamics.",
    "They're driving right by, they don't even know what they're missing."
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#Quote-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    }
   randomQuote();
   
  // Do all of your work inside the document.addEventListener 
  
  document.querySelector('#Quote-day').addEventListener('click', (evt) => {
    randomQuote()
  });
  
 
   });