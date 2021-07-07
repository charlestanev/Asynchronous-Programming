function solve() {

    function depart() {
        let nextStopId = 'depot';
        let stopInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');

        if (stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
            nextStopId = stopInfoSpan.getAttribute('data-next-stop-id');
        }

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
        .then(body => body.json())
        .then(stopInfo => {
            console.log(stopInfo);
            stopInfoSpan.setAttribute('data-stop-name', stopInfo.name);
            stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);
            stopInfoSpan.textContent = `Next stop ${stopInfo.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        })
        .catch( err => {
            stopInfoSpan.textContent = `Error`;
            departButton.disabled = true;
            arriveButton.disabled = true;
        })
    }

    function arrive() {
        let stopInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');
        let stopName = stopInfoSpan.getAttribute('data-stop-name');
        stopInfoSpan.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();