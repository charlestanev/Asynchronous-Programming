(async function solution() {
    const url = ('http://localhost:3030/jsonstore/advanced/articles/list');

    try {
        const response = await fetch(url);
        const dataTitle = await response.json();

        Object.values(dataTitle).map(revalContent).forEach(o => spanElement.textContent(o));

    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }

})();

function revalContent(data) {

    let divAccElement = document.createElement('div');
    divAccElement.classList.add('accordion');

    let divHeadElement = document.createElement('div');
    divHeadElement.classList.add('head');

    let spanElement = document.createElement('span');
    spanElement.textContent = data.title;

    let buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.setAttribute('id', data._id);
    buttonElement.textContent = ('More');
    buttonElement.addEventListener('click', buttonTest);

    divHeadElement.appendChild(spanElement);
    divHeadElement.appendChild(buttonElement);

    let divExtraElement = document.createElement('div');
    divExtraElement.classList.add('extra');

    divAccElement.appendChild(divHeadElement);
    divAccElement.appendChild(divExtraElement);

    let mainSection = document.querySelector('#main');
    mainSection.appendChild(divAccElement);

    return mainSection;
}

function buttonTest(e) {
    let addContent = e.target.parentElement.nextElementSibling;
    addContent.innerHTML = '';
    addContent = e.target.parentElement.nextElementSibling;

    let buttonId = e.target.id;

    let showMoreButton = e.target;
    showMoreButton.textContent = showMoreButton.textContent === 'More' ?
        'Less' :
        'More';

    let hideExtraClass = e.target.parentElement.nextElementSibling;

    if (showMoreButton.textContent == 'More') {
        hideExtraClass.setAttribute("style", "display: none;");
    } else {
        hideExtraClass.setAttribute("style", "display: block;");
    }

    (async function solution2() {
        const info = ('http://localhost:3030/jsonstore/advanced/articles/details/' + buttonId);

        try {
            const responseInfo = await fetch(info);
            const dataInfo = await responseInfo.json();

            let pElement = document.createElement('p');

            pElement.textContent = dataInfo.content;

            addContent.appendChild(pElement);

        } catch (e) {
            console.error(e.name + ': ' + e.message);
        }
    })();
}