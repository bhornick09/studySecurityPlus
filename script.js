// Tab functionality
function openTab(tabIndex) {

    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.add('hidden'));

    // Remove active styles from all tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('bg-blue-600', 'text-white'));

    // Show the selected tab content
    document.getElementById('tab' + tabIndex).classList.remove('hidden');

    // Highlight the selected tab
    tabButtons[tabIndex - 1].classList.add('bg-blue-600', 'text-white');
}

// Open mobile menu
function toggleMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}


// Flash card functions
function flipCard(){
    // State of card, currently question or answer?
    let currentSide = document.getElementById("currentSide").innerHTML;

    // Get current card DOM and parse to int for calculation
    let currentCardDOM = document.getElementById("currentCard");
    let currentCard = parseInt(currentCardDOM.innerHTML);
    console.log(currentSide);

    cardText(currentSide, currentCard);
}

function switchCard(direction){
    // Get current card DOM and parse to int for calculation
    let currentCardDOM = document.getElementById("currentCard");
    let currentCard = parseInt(currentCardDOM.innerHTML);

    // Forward
    if (direction){
        // Check for end of flashcards and loop to one
        if (currentCard == 10){
            currentCard = 1;
        }
        else{
            currentCard++;
        }
    }
    // Backward
    else{
        if (currentCard == 1){
            currentCard = 10;
        }
        else{
            currentCard--;
        }
    }

    document.getElementById("currentCard").innerHTML=currentCard
    cardText("A", currentCard); // pass A as the side so the card is flipped to Q when switched
    console.log(currentCard); //debugging
}

function cardText(currentSide, currentCard){
    switch (currentCard){
        case 1:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "Confidentiality, Integrity, and Availability.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What are the three main components of the CIA triad?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 2:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "To create a secure, encrypted tunnel for data transmission over an untrusted network.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is the primary purpose of a VPN?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 3:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "Symmetric encryption uses a single key for encryption and decryption, while asymmetric encryption uses a public key for encryption and a private key for decryption.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is the difference between symmetric and asymmetric encryption?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 4:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "Port 443.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What port does HTTPS use by default?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 5:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "To verify the authenticity and integrity of a message or document.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is the purpose of a digital signature?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 6:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "A vulnerability is a weakness, a threat is a potential danger exploiting that weakness, and a risk is the likelihood of a threat exploiting a vulnerability.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is the difference between a vulnerability, a threat, and a risk?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 7:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "Man-in-the-Middle (MITM) attack.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What type of attack involves intercepting and altering communication between two parties?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 8:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "Access control.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What security concept ensures that only authorized users can access certain data or resources?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 9:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "To increase security by requiring two or more forms of verification, such as something you know (password), something you have (smart card), or something you are (biometric).";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is the purpose of multifactor authentication (MFA)?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

        case 10:
            if (currentSide == "Q"){
                document.getElementById("flashHeading").innerHTML= "A: ";
                document.getElementById("flashBody").innerHTML= "An attack that targets a previously unknown vulnerability before a fix or patch is available.";
                document.getElementById("currentSide").innerHTML= "A";
            }
            else{
                document.getElementById("flashHeading").innerHTML= "Q: ";
                document.getElementById("flashBody").innerHTML= "What is a zero-day exploit?";
                document.getElementById("currentSide").innerHTML= "Q";
            }
            break;

    }
}

// Multiple Choice functions
function switchMultipleChoice(direction){
    // Get question number and parse to int
    let currentQuestionDOM = document.getElementById("currentMultipleChoice");
    let currentQuestion = parseInt(currentQuestionDOM.innerHTML);

    // Question parts
    let question = document.getElementById("multipleChoiceQuestion");
    let choiceOne = document.getElementById("choiceOne");
    let choiceTwo = document.getElementById("choiceTwo");
    let correctAnswer = document.getElementById("correctAnswer");

    //true = forward
    if (direction){
        // Check for last question
        if (currentQuestion == 10){
            currentQuestion = 1;
        }
        else{
            currentQuestion++;
        }
    }
    //false = backward
    else{
        // Check for first question
        if (currentQuestion == 1){
            currentQuestion = 10;
        }
        else{
            currentQuestion--;
        }
    }
    // reset state of attributes
    choiceOne.classList.remove("bg-green-300");
    choiceTwo.classList.remove("bg-green-300")
    choiceOne.classList.remove("bg-red-300");
    choiceTwo.classList.remove("bg-red-300")
    answerPrompt.classList.add("hidden");

    // update question number
    document.getElementById("currentMultipleChoice").innerHTML= currentQuestion;
    switch (currentQuestion){
        case 1:
            question.innerHTML= "What are the three main components of the CIA triad?";
            choiceOne.innerHTML="Confidentiality, Integrity, and Availability.";
            choiceTwo.innerHTML="Control, Identification, and Authorization.";
            correctAnswer.innerHTML="1"; // Update correct answer choice
            break;

        case 2:
            question.innerHTML="What is the primary purpose of a VPN?";
            choiceOne.innerHTML= "To create a secure, encrypted tunnel for data transmission over an untrusted network.";
            break;

        case 3:
            question.innerHTML="What is the difference between symmetric and asymmetric encryption?";
            choiceTwo.innerHTML= "Symmetric encryption uses a single key for encryption and decryption, while asymmetric encryption uses a public key for encryption and a private key for decryption.";
            correctAnswer.innerHTML="2";
            break;

        case 4:
            question.innerHTML="What port does HTTPS use by default?"
            choiceTwo.innerHTML= "Port 443.";
            correctAnswer.innerHTML="2";
            break;

        case 5:
            question.innerHTML="What is the purpose of a digital signature?";
            choiceTwo.innerHTML= "To verify the authenticity and integrity of a message or document.";
            correctAnswer.innerHTML="2";
            break;

        case 6:
            choiceOne.innerHTML= "A vulnerability is a weakness, a threat is a potential danger exploiting that weakness, and a risk is the likelihood of a threat exploiting a vulnerability.";
            question.innerHTML= "What is the difference between a vulnerability, a threat, and a risk?";
            correctAnswer.innerHTML="1";
            break;

        case 7:
            choiceTwo.innerHTML= "Man-in-the-Middle (MITM) attack.";
            question.innerHTML= "What type of attack involves intercepting and altering communication between two parties?";
            correctAnswer.innerHTML="2";
            break;

        case 8:
            choiceOne.innerHTML= "Access control.";
            question.innerHTML= "What security concept ensures that only authorized users can access certain data or resources?";
            correctAnswer.innerHTML="1";
            break;

        case 9:
            choiceOne.innerHTML= "To increase security by requiring two or more forms of verification, such as something you know (password), something you have (smart card), or something you are (biometric).";
            question.innerHTML= "What is the purpose of multifactor authentication (MFA)?";
            correctAnswer.innerHTML="1";
            break;

        case 10:
            choiceOne.innerHTML= "An attack that targets a previously unknown vulnerability before a fix or patch is available.";
            question.innerHTML= "What is a zero-day exploit?";
            correctAnswer.innerHTML="1";
            break;

    }
}
function checkAnswer(selection){
    // correct answer DOM and parse to int
    let correctAnswerDOM = document.getElementById("correctAnswer");
    let correctAnswer = parseInt(correctAnswerDOM.innerHTML);

    // question parts
    let choiceOne = document.getElementById("choiceOne");
    let choiceTwo = document.getElementById("choiceTwo");
    let answerPrompt = document.getElementById("answerPrompt");

    // If 1 is the correct option
    if (correctAnswer == 1){
        // If user selected 1 (correct)
        if (selection == "one"){
            choiceOne.classList.add("bg-green-300", "pointer-events-none");
            choiceTwo.classList.add("pointer-events-none");
            answerPrompt.classList.remove("hidden");
            answerPrompt.innerHTML="Correct!"
            setTimeout(function () {
                choiceOne.classList.remove("bg-green-300", "pointer-events-none");
                answerPrompt.classList.add("hidden");
                choiceTwo.classList.remove("pointer-events-none");
                switchMultipleChoice(true); // on to the next question
            }, 3000);
            
        }
        // If user selected 2 (incorrect)
        else{
            choiceTwo.classList.add("bg-red-300", "pointer-events-none");
            choiceOne.classList.add("pointer-events-none");
            answerPrompt.classList.remove("hidden");
            answerPrompt.innerHTML="Incorrect!"
            setTimeout(function () {
                choiceTwo.classList.remove("bg-red-300", "pointer-events-none");
                choiceOne.classList.remove("pointer-events-none");
                answerPrompt.classList.add("hidden");
            }, 3000);
        }
    }

    // If two is the correct option
    else{
        // If user selected 1 (incorrect)
        if (selection == "one"){
            choiceOne.classList.add("bg-red-300", "pointer-events-none");
            choiceTwo.classList.add("pointer-events-none");
            answerPrompt.classList.remove("hidden");
            answerPrompt.innerHTML="Incorrect!"
            setTimeout(function () {
                choiceOne.classList.remove("bg-red-300", "pointer-events-none");
                answerPrompt.classList.add("hidden");
                choiceTwo.classList.remove("pointer-events-none");
            }, 3000);
        }
        // if user selected 2 (correct)
        else{
            choiceTwo.classList.add("bg-green-300", "pointer-events-none");
            choiceOne.classList.add("pointer-events-none");
            answerPrompt.classList.remove("hidden");
            answerPrompt.innerHTML="Correct!"
            setTimeout(function () {
                choiceTwo.classList.remove("bg-green-300", "pointer-events-none");
                answerPrompt.classList.add("hidden");
                choiceOne.classList.remove("pointer-events-none");
                switchMultipleChoice(true); // on to the next question
            }, 3000);
        }
    }

}

// Question list page functions
function toggleAnswer(id) {
    let answer = document.getElementById(id);
    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

// Initialize first tab as active
openTab(1);