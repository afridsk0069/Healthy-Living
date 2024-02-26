document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bmiValue = document.getElementById('bmi-value');
    bmiValue.textContent = 'BMI: ' + bmi.toFixed(2);

    let dietSuggestion = '';
    if (bmi < 18.5) {
        dietSuggestion = 'You are underweight. Consider increasing your caloric intake and eating more protein-rich foods.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        dietSuggestion = 'You have a normal weight. Keep up the good work!';
    } else if (bmi >= 25 && bmi < 29.9) {
        dietSuggestion = 'You are overweight. Consider reducing your caloric intake and incorporating more physical activity into your routine.';
    } else {
        dietSuggestion = 'You are obese. Please consult with a healthcare professional for personalized diet and exercise recommendations.';
    }

    const dietSuggestionElement = document.getElementById('diet-suggestion');
    dietSuggestionElement.textContent = dietSuggestion;

    document.getElementById('result').style.display = 'block';
});
