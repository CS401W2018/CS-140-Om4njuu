document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const preferredname = document.getElementById('preferredname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;
    const passwordConfirm = document.getElementById('passconfirm').value;
    const firstweapon = document.getElementById('firstweapon').value;
    const secondweapon = document.getElementById('secondweapon').value;
    const platform = document.querySelector('input[name="platform"]:checked')?.value;
    const playtime = document.getElementById('playtime').value;
    const region = document.getElementById('region').value;
    const bio = document.getElementById('bio').value;
    const agree = document.getElementById('agree').checked;

    if (!fullname) {
        alert('Please enter your full name');
        return;
    }

    if (!playtime) {
        alert('Please enter your playtime');
        return;
    }

    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }

    const formData = {
        fullname: fullname,
        preferredname: preferredname,
        email: email,
        phone: phone,
        dob: dob,
        username: username,
        password: password,
        firstweapon: firstweapon,
        secondweapon: secondweapon,
        playtime: playtime,
        platform: platform,
        region: region,
        bio: bio,
        agree: agree,
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerText = response.message;

            document.getElementById('message').innerText =
                'Form submitted successfully! You will be redirected to the login page in 5 seconds.';
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 5000);
        } else if (xhr.readyState === 4) {
            alert('Error submitting form. Please try again.');
        }
    };
    xhr.send(JSON.stringify(formData));
});