function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || weight > 5000) {
        alert('Please enter valid weight and height.');
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    document.getElementById('bmiResult').innerText = 'Your BMI is ' + bmi.toFixed(2);
}

function sendMessage() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    alert('Message sent from: ' + email + "\nMessage: " + message);
}
