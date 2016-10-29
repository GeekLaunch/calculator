let interfaceItems = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '×',
        value: '*',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '.',
        value: '.',
    },
    {
        text: '=',
        value: '=',
    },
    {
        text: '+',
        value: '+',
    },
];

let currentExpression = '';

let calculatorElement = document.getElementById('calculator');
let display = document.createElement('div');
display.classList.add('calculator-display');
let clearButton = createButton('CE');

clearButton.addEventListener('click', function () {
    currentExpression = '';
    updateDisplay();
});

calculatorElement.appendChild(display);
calculatorElement.appendChild(clearButton);

interfaceItems.forEach(function (item) {
    let b = createButton(item.text);

    if (item.value === '=') {
        b.classList.add('equals');

        b.addEventListener('click', function () {
            try {
                currentExpression = '' + eval(currentExpression);
            } catch (e) {
                console.log('Malformed expression');
                currentExpression = '';
            }
            updateDisplay();
        });
    } else {
        if (typeof item.value === 'number') {
            b.classList.add('number');
        } else if (item.value === '.') {
            b.classList.add('decimal');
        } else {
            b.classList.add('operation');
        }

        b.addEventListener('click', function () {
            if (currentExpression.length >= 9)
                return;

            currentExpression += '' + item.value;
            updateDisplay();
        });
    }

    calculatorElement.appendChild(b);
});

function updateDisplay () {
    display.textContent = currentExpression.substring(0, 9);
}

function createButton (text) {
    let b = document.createElement('button');
    b.textContent = text;
    b.classList.add('calculator-button');
    return b;
}
