const userInput = document.getElementById('user-input');
const result = document.getElementById('result-div');
const clearBtn = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', () => {
    const inputValue = userInput.value;
    if (inputValue === '') {
        result.innerHTML = `<h3 class="text-danger">Please enter a phone number</h3>`;
    } else {
        const regex = /^(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
        const isValid = regex.test(inputValue);
        if (isValid) {
            result.innerHTML = `<h3 class="text-success">Valid US number: ${userInput.value}</h3>`;
        } else {
            result.innerHTML = `<h3 class="text-danger">Your phone number is not valid</h3>`;
        }
    }
});

clearBtn.addEventListener('click', () => {
    userInput.value = '';
    result.innerHTML = '';
});
