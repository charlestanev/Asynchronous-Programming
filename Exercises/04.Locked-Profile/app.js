function lockedProfile() {
    (async() => {
        let profileRequest = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        let profiles = await profileRequest.json();
        console.log(profiles);
        let mainSection = document.getElementById('main');
        let templateProfile = document.querySelector('.profile');
        templateProfile.remove();

        Object.keys(profiles).forEach((key, i) => {
            let profile = profiles[key];
            let htmlProfile = createHtmlProfile(i + 1, profile.username, profile.email, profile.age);
            mainSection.appendChild(htmlProfile);
        })
    })();

    function createHtmlProfile(userIndex, username, email, age) {

        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        let profileImage = document.createElement('img');
        profileImage.src = './iconProfile2.png';
        profileImage.classList.add('userIcon');

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        let lockRadio = document.createElement('input');
        lockRadio.type = 'radio';
        lockRadio.name = `user${userIndex}Locked`;
        lockRadio.value = 'lock';
        lockRadio.checked = true;


        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        let unlockRadio = document.createElement('input');
        unlockRadio.type = 'radio';
        unlockRadio.name = `user${userIndex}Locked`;
        unlockRadio.value = 'unlock';

        let br = document.createElement('br');
        let hr = document.createElement('hr');

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let usernameInput = document.createElement('input');
        usernameInput.name = `user${userIndex}Username`;
        usernameInput.value = username;
        usernameInput.readOnly = true;
        usernameInput.disabled = true;

        let hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.id = `user${userIndex}HiddenFields`;

        let hiddenFieldsHr = document.createElement('hr');

        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';

        let emailInput = document.createElement('label');
        emailInput.type = 'email';
        emailInput.name = `user${userIndex}Email`;
        emailInput.value = email;
        emailInput.readOnly = true;
        emailInput.disabled = true;

        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';

        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${userIndex}Age`;
        ageInput.value = age;
        ageInput.readOnly = true;
        ageInput.disabled = true;

        hiddenFieldsDiv.appendChild(hiddenFieldsHr);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailInput);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageInput);

        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.addEventListener('click', showHiddenInfoHandler);

        profileDiv.appendChild(profileImage);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockRadio);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockRadio);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenFieldsDiv);
        profileDiv.appendChild(showMoreButton);

        return profileDiv;
    }

    function showHiddenInfoHandler(e) {
        let profile = e.target.parentElement;
        let showMoreButton = e.targer;
        let hiddenFieldsDiv = e.target.previousElementSibling;
        let radioButton = profile.querySelector('input[type="radio"]:checked');

        if (radioButton.value !== 'unlock') {
            return;
        }

        showMoreButton.textContent = showMoreButton.textContent === 'Show More' ?
            'Hide it' :
            'Show More';

        hiddenFieldsDiv.style.display = hiddenFieldsDiv.style.display === 'block' ?
            'none' :
            'block';
    }
}