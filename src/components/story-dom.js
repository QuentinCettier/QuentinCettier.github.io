import "../../data/timeline.json";

const flightDetails = document.querySelector('.flight_details')

const fetchJSON = (url, index) => {
    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data[index])
        // flightDetails.innerText = `${data[index].details}`
    }).catch((err) => console.log('Data not found'))
}

fetchJSON('../../data/timeline.json', 0)