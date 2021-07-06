function getInfo() {
    let stopIdInput = document.getElementById('stopId');
    let stopId = stopIdInput.value;

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
    .then(body => body.json())
    .then(stopInfo => {
        let stopNameDiv = document.getElementById('stopName');
        stopNameDiv.textContent = stopInfo.name;
        
        let busesUl = document.getElementById('buses');

        Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());

        Object.keys(stopInfo.buses).forEach( key => {
            let busInfoLi = document.createElement('li');
            busInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]}`;

            busesUl.appendChild(busInfoLi);
        })
    })
    .catch(err => {
        let stopNameDiv = document.getElementById('stopName');
        stopNameDiv.textContent = `Error`;
        let busesUl = document.getElementById('buses');
        Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
    })
}