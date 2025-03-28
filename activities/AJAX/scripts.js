document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // alert('Form submitted');

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const year = document.querySelector('input[name="year"]:checked').value;
    const comments = document.getElementById('comments').value;
    const agree = document.getElementById('agree').checked;

    if (!fullname) {
        alert('Please enter your full name');
        return;
    }

    if (!age || age < 18) {
        alert('You must be at least 18 years old to submit this form.');
        return;
    }

    // console.log('Full Name:', fullname);
    // console.log('Email:', email);
    // console.log('State:', state);
    // console.log('Year:', year);
    // console.log('Comments:', comments);

    const formData = {
        fullname: fullname,
        email: email,
        password: password,
        age: age,
        state: state,
        year: year,
        comments: comments,
        agree: agree
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerText = response.message;
            document.getElementById('response').innerText = "";
            // alert('Form submitted successfully!');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form. Please try again.');
        }
    };
    xhr.send(JSON.stringify(formData));
});