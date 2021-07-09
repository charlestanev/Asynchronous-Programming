(async function solution() {
    const url = ('http://localhost:3030/jsonstore/advanced/articles/list');

    try {
        const response = await fetch(url);
        const dataTitle = await response.json();

        console.log(dataTitle[0]);

    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
})();

(function revalContent(){

    let divHeadElement = document.createElement('div').classList.add('head');
    // divHeadElement.addClass
    
    let mainSection = document.querySelector('#main');
    mainSection.appendChild(divHeadElement);

    return mainSection;

})();