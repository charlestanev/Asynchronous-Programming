// // First Way
async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;

    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;

    try {
        const ulElement = document.getElementById('buses');
        ulElement.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('stopName').textContent = data.name;

        Object.entries(data.buses).map((([bus, time]) => {
            const result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ulElement.appendChild(result);
        }))

        input.value = '';
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
}




// // Second Way
// function getInfo() {
//     let stopIdInput = document.getElementById('stopId');
//     let stopId = stopIdInput.value;

//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
//     .then(body => body.json())
//     .then(stopInfo => {
//         let stopNameDiv = document.getElementById('stopName');
//         stopNameDiv.textContent = stopInfo.name;

//         let busesUl = document.getElementById('buses');

//         Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());

//         Object.keys(stopInfo.buses).forEach( key => {
//             let busInfoLi = document.createElement('li');
//             busInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]}`;

//             busesUl.appendChild(busInfoLi);
//         })
//     })
//     .catch(err => {
//         let stopNameDiv = document.getElementById('stopName');
//         stopNameDiv.textContent = `Error`;
//         let busesUl = document.getElementById('buses');
//         Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
//     })
// }