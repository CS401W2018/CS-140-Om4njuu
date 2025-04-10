document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('input-message').value;

    document.getElementById('message').innerText = 'Form submitted successfully!';
    document.getElementById('message').style.color = 'greenyellow';

    setTimeout(() => {
        document.getElementById('myForm').reset();
        document.getElementById('message').innerText = '';
    }, 5000);
    
    /*
    const formData = {
        fullname: fullname,
        email: email,
        subject: subject,
        message: message
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('message').innerText = 'Form submitted successfully!';
            document.getElementById('message').style.color = 'greenyellow';

            setTimeout(() => {
                document.getElementById('myForm').reset();
                document.getElementById('message').innerText = '';
            }, 5000);
        } else if (xhr.readyState === 4) {
            document.getElementById('message').innerText = 'Error submitting form. Please try again.';
            document.getElementById('message').style.color = 'red';
        }
    };
    xhr.send(JSON.stringify(formData));
    */
});