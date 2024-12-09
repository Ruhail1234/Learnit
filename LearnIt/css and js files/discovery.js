
/*Function for the search bar. Code snippets can be found at W3Schools.*/
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Search-books");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mybooks");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/*Javascripts for chatbot conversatiion edited by Ruhail. Code snippets can be found at She Codes.*/
let messages = document.getElementById("messages");
let input = document.getElementById("input");
let sendButton = document.getElementById("send-button");
/*The event listener for the send message button*/
sendButton.addEventListener("click", sendMessage);

/*The send button is triggered when the "Enter key" is press*/
document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    document.getElementById("send-button").click();
  }
});

/* When the "send Button" is press, the message is send to the message function to get processed and dislayed on the screen*/
function sendMessage() {
  let message = input.value;
  input.value = "";
  let messageElement = document.getElementById("user");
  messageElement.innerText = message;
  messageElement.classList.add("user-message");
  messages.appendChild(messageElement);


  /* setting a function for the bot to response*/
  let botMessage = generateBotMessage(message);


  /* The ability to process the message and display it on the screen (response)*/
  setTimeout(function() {
    let botMessageElement = document.getElementById("bot");
    botMessageElement.innerText = botMessage;
    botMessageElement.classList.add("bot-message");
    messages.appendChild(botMessageElement);
  }, 1000);
}


/*The appropriate prompts and their responses*/
function generateBotMessage(message) {
  let responses = {
    "hello": "Hi there! Ready to learn something new today?",
    "hi": "Hello, nice to meet you. What can I help you with?",
    "thank you": "You're welcome! Happy to help.",
    "how are you": "I'm doing great, thank you! How can I assist you today?",
    "what are you": "I'm Learnbot, your friendly AI assistant. I'm here to help you with your studies!",
    "what is learnit": "Learnit is an educational app designed to make learning fun and engaging for all students. Whether you need help with lessons, quizzes, or finding educational videos, I'm here to guide you.",
    "goodbye": "Goodbye! See you next time, and keep up the great work!",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what subjects do you cover": "I can help with a variety of subjects like Math, Science, English, and History. What would you like to learn more about?",
    "how can i improve": "Practice makes perfect! Keep reviewing the material, and don't hesitate to ask for help when needed.",
    
    "what is an alligator": "An alligator is a large reptile that lives in freshwater environments like rivers, lakes, and swamps. They are known for their powerful jaws and long tails.",
    "what is the capital of australia": "The capital of Australia is Canberra.",
    "who was the first president of the united states": "The first president of the United States was George Washington.",
    "which year was george bush born": "George W. Bush, the 43rd President of the United States, was born on July 6, 1946.",
    "when did world war ii end": "World War II ended in 1945, with the official surrender of Japan on September 2nd.",
    "what is 8+2": "8 + 2 equals 10.",
    "how do you solve 3x = 12": "To solve 3x = 12, divide both sides by 3, so x = 4.",
    "what is the square root of 16": "The square root of 16 is 4.",
    "what is photosynthesis": "Photosynthesis is the process by which green plants use sunlight to convert water and carbon dioxide into oxygen and glucose, a type of sugar.",
    "what are the states of matter": "The three main states of matter are solid, liquid, and gas. There are also others like plasma and Bose-Einstein condensates.",
    "what is the boiling point of water": "The boiling point of water at sea level is 100 degrees Celsius or 212 degrees Fahrenheit.",
    "what is the longest river in the world": "The Nile River is often considered the longest river in the world, stretching about 6,650 kilometers (4,130 miles).",
    "where is the great wall of china located": "The Great Wall of China is located in northern China and stretches across several provinces, including Hebei, Beijing, and Tianjin.",
    "what is the tallest mountain in the world": "The tallest mountain in the world is Mount Everest, which is about 8,848 meters (29,029 feet) tall.",
    "who wrote 'romeo and juliet'": "'Romeo and Juliet' was written by William Shakespeare.",
    "what is a haiku": "A haiku is a traditional Japanese poem with three lines. The first and last lines have 5 syllables, and the middle line has 7 syllables.",
    "what is the speed of light": "The speed of light in a vacuum is approximately 299,792 kilometers per second or about 186,282 miles per second.",
    "who discovered gravity": "Gravity was famously described by Sir Isaac Newton after he observed an apple falling from a tree.",
    "what is the periodic table": "The periodic table is a chart that organizes all known chemical elements by their atomic number, electron configuration, and recurring chemical properties.",
    "what is pi": "Pi (π) is a mathematical constant representing the ratio of a circle's circumference to its diameter. It's approximately equal to 3.14159.",
    "how many continents are there": "There are seven continents on Earth: Africa, Antarctica, Asia, Europe, North America, Australia, and South America.",
    "what is the largest ocean": "The largest ocean on Earth is the Pacific Ocean, covering more than 63 million square miles.",
    "what causes seasons": "Seasons are caused by the tilt of Earth's axis as it orbits around the Sun, leading to varying angles of sunlight during the year.",
    "who wrote 'to kill a mockingbird'": "'To Kill a Mockingbird' was written by Harper Lee and published in 1960.",
    "what is the formula for water": "The chemical formula for water is H₂O, meaning it is composed of two hydrogen atoms and one oxygen atom.",
    "what is photosynthesis": "Photosynthesis is the process by which green plants use sunlight to convert water and carbon dioxide into oxygen and glucose, a type of sugar.",
    "who invented the telephone": "The telephone was invented by Alexander Graham Bell in 1876.",
    "what is the largest planet in our solar system": "The largest planet in our solar system is Jupiter, known for its massive size and iconic Great Red Spot.",
    "what is a black hole": "A black hole is a region of space where the gravitational pull is so strong that not even light can escape from it.",
    "who painted the Mona Lisa": "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century.",
    "what is an atom": "An atom is the basic unit of matter, consisting of a nucleus made of protons and neutrons, surrounded by electrons.",
    "what is the pythagorean theorem": "The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides (a² + b² = c²).",
    "who wrote 'the odyssey'": "'The Odyssey' is an ancient Greek epic poem attributed to the poet Homer.",
    "what is the smallest bone in the human body": "The smallest bone in the human body is the stapes, located in the middle ear.",
    "how many bones are in the human body": "An adult human has 206 bones in their body.",
    "what is the chemical symbol for gold": "The chemical symbol for gold is Au, which comes from its Latin name 'Aurum'.",
    "how many planets are in the solar system": "There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    "what is the capital of france": "The capital of France is Paris.",
    "who is the author of 'harry potter'": "'Harry Potter' was written by J.K. Rowling.",
    "what is a democracy": "A democracy is a system of government where the citizens exercise power by voting. It is based on the principles of majority rule and individual rights.",
    "what are newton's three laws of motion": "Newton's three laws of motion are: 1) An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force. 2) The force acting on an object is equal to the mass of that object times its acceleration (F = ma). 3) For every action, there is an equal and opposite reaction.",
    "what is a synonym": "A synonym is a word that has the same or nearly the same meaning as another word, such as 'happy' and 'joyful'.",
    "what is the freezing point of water": "The freezing point of water is 0 degrees Celsius or 32 degrees Fahrenheit.",
    "what is the largest desert in the world": "The largest desert in the world is the Sahara Desert in Africa.",
    "who was albert einstein": "Albert Einstein was a theoretical physicist known for developing the theory of relativity and the famous equation E=mc².",
    "what is an ecosystem": "An ecosystem is a community of living organisms interacting with their physical environment, including plants, animals, and microorganisms.",
    "what is 12 x 9": "12 x 9 equals 108.",
    "how do you find the area of a circle": "The area of a circle can be found using the formula A = πr², where 'r' is the radius of the circle.",
    "what is the formula for the circumference of a circle": "The circumference of a circle is calculated using the formula C = 2πr, where 'r' is the radius.",
    "what is 15% of 200": "15% of 200 is 30.",
    "how do you solve for x in the equation 2x + 3 = 11": "To solve for x, first subtract 3 from both sides to get 2x = 8, then divide by 2, so x = 4.",
    "what is the quadratic formula": "The quadratic formula is used to solve quadratic equations and is given by x = (-b ± √(b² - 4ac)) / 2a.",
    "what is 7 squared": "7 squared, or 7², equals 49.",
    "how do you find the volume of a cylinder": "The volume of a cylinder is found using the formula V = πr²h, where 'r' is the radius of the base and 'h' is the height.",
    "what is an acute angle": "An acute angle is an angle that measures less than 90 degrees.",
    "how do you calculate the slope of a line": "The slope of a line is calculated by dividing the change in y (rise) by the change in x (run), often written as m = (y2 - y1) / (x2 - x1).",
    "what is the greatest common divisor": "The greatest common divisor (GCD) of two numbers is the largest number that divides both of them without leaving a remainder.",
    "what is the difference between mean and median": "The mean is the average of a set of numbers, while the median is the middle number in a sorted list of those numbers.",
    "how do you factorize x² - 9": "To factorize x² - 9, recognize it as a difference of squares: (x + 3)(x - 3).",
    "what is the pythagorean theorem": "The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (a² + b² = c²).",
    "what is 2 to the power of 5": "2 to the power of 5, or 2⁵, equals 32.",
    
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "make me laugh": "Why did the student eat his homework? Because his teacher told him it was a piece of cake!",
    "give me a joke": "Why did the computer go to the doctor? Because it had a virus!",
    "i need a joke": "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else.",
    "say something funny": "Why did the math book look sad? Because it had too many problems!",
    "can you tell me a joke": "Why do plants hate math? It gives them square roots!",
    "another joke": "Why did the student sit on his multiplication table? To keep from going over it again!",
    "tell me a math joke": "Parallel lines have so much in common... it's a shame they'll never meet!",
    "joke please": "Why did the triangle feel sorry for the circle? Because it’s pointless!",
    "i want to hear a joke": "Why was the geometry book so emotional? Because it had too many angles!",
    "do you know a joke": "Why was the obtuse angle always so sad? Because it was never right!",
    "what is the law of conservation of energy": "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another.",
    "what is the difference between a chemical change and a physical change": "A chemical change results in the formation of a new substance with different properties, while a physical change affects the form of a substance but not its chemical composition.",
    "what is the theory of evolution": "The theory of evolution, proposed by Charles Darwin, explains how species change over time through natural selection, where the fittest individuals are more likely to survive and reproduce.",
    "how does a rainbow form": "A rainbow forms when sunlight is refracted, reflected, and dispersed in water droplets, creating a spectrum of light in the sky.",
    "what are the planets in our solar system": "The planets in our solar system, in order from the Sun, are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    "what is the difference between a plant cell and an animal cell": "Plant cells have a cell wall, chloroplasts, and large central vacuoles, which animal cells do not. Both types of cells have a nucleus, cytoplasm, and cell membrane.",
    "what is dna": "DNA, or deoxyribonucleic acid, is the molecule that carries the genetic instructions for life. It is made up of two strands forming a double helix.",
    "what is the greenhouse effect": "The greenhouse effect is the process by which gases in Earth's atmosphere trap heat, keeping the planet warm enough to support life.",
    "what is the water cycle": "The water cycle is the continuous movement of water on, above, and below the surface of the Earth, involving processes like evaporation, condensation, precipitation, and runoff.",
    "how do volcanoes form": "Volcanoes form when molten rock, called magma, rises from beneath the Earth's crust, often at tectonic plate boundaries, and erupts onto the surface as lava.",
    "what is the difference between a star and a planet": "A star is a massive ball of hot gas that generates light and heat through nuclear fusion, while a planet is a celestial body that orbits a star and does not produce its own light.",
    "how do magnets work": "Magnets work by generating a magnetic field, which attracts or repels other magnetic materials like iron, depending on the orientation of their poles.",
    "how do plants make food": "Plants make food through photosynthesis, where they use sunlight, carbon dioxide, and water to produce glucose and oxygen.",
    "what is the difference between mass and weight": "Mass is the amount of matter in an object, measured in kilograms, while weight is the force exerted by gravity on that mass, measured in newtons.",
    "what is harry potter and the philospher's stone about": "Harry Potter and the Philosopher's Stone is a tale of a young boy named Harry who discovers he is a wizard on his eleventh birthday. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he learns about the magical world and the legacy of his parents. Alongside his new friends Ron and Hermione, Harry embarks on a journey to unravel the mystery of the Philosopher's Stone, a powerful object that grants immortality. Throughout the story, Harry faces challenges, makes discoveries about his past, and ultimately confronts the dark wizard Voldemort. Themes of friendship, courage, and the battle between good and evil are expertly woven into this enchanting narrative, captivating readers with its magical world and relatable characters. J.K. Rowling's debut novel introduces readers to a compelling universe filled with wonder, danger, and the power of love and bravery."
  };

  /*error message incase the user typed the wrong prompt*/
  let response = "I'm sorry, I don't understand. It might be a problem with your prompt, please check the about section 1.23 for prompts that are active. tips: Pay attention at your spelling, or grammar.";


/*Function to call off how the prompts should look like when they are typed*/
  for(let key in responses) {
    if(message.toLowerCase().includes(key)) {
      response = responses[key];
    }
  }
/*Returning response to user*/
  return response;
}

/*Function for the chatbot toggler, edited by Ruhail. Code Snippets found on W3SChools*/
function openForm() {
  var x = document.getElementById("chat");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Function to hide and display when the hamburger icon is clicked for the top nav. Code Snippets found on W3SChools*/
function openMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}