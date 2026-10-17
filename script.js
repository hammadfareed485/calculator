const display = document.getElementById('display');

// Display mein numbers aur operators add karna
function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

// Display ko mukammal clear karna (C)
function clearDisplay() {
    display.value = "";
}

// Aakhri character ko delete karna (DEL)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Simple calculations ke liye (=)
function calculateResult() {
    try {
        if (display.value === "") return;
        // Eval function string ko mathematics expression mein convert kar ke solve karta hai
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Scientific calculations ke liye
function calcScientific(operation) {
    if (display.value === "" || display.value === "Error") return;
    
    try {
        let currentValue = eval(display.value);
        let result = 0;

        switch(operation) {
            case 'sin':
                result = Math.sin(currentValue * Math.PI / 180); // Degrees me convert kar ke
                break;
            case 'cos':
                result = Math.cos(currentValue * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(currentValue * Math.PI / 180);
                break;
            case 'log':
                result = Math.log10(currentValue);
                break;
            case 'sqrt':
                result = Math.sqrt(currentValue);
                break;
            case 'square':
                result = Math.pow(currentValue, 2);
                break;
        }
        
        // 4 decimal places tak round off karna agar lambi value ho
        display.value = parseFloat(result.toFixed(4));
        
    } catch (error) {
        display.value = "Error";
    }
}