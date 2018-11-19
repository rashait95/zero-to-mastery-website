const dataFetch1 = () => {
    fetch('https://cors.io/?http://91.121.210.171:42550/solutions/all').then(response => {
        return response.json();
    }).then(data => {
        data.forEach(sol => {
            console.log(sol)
            document.getElementById('solutions').insertAdjacentHTML('beforeend', 
            `
            <div class="card coursecard">
            <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" class="langIcon">
            <img src="https://power2save.org/wp-content/uploads/2016/07/icon-day1.png" class="dayIcon">
            <img class="card-img-top" src=${sol.avatarUrl}
                alt="Card image cap">
            <div class="card-body text-center">
                <h5 class="card-title">${sol.userName}</h5>
                <a href=${sol.url} class="btn btn-outline-primary mt-3 mb-0">View Solution</a>
            </div>
        </div>
            `);

        });
    }).catch(err => {
        throw err;
    });
}

dataFetch1();

let date = new Date();
let day = date.getDate()
console.log(day)

while (day > 0) {
    document.getElementById('calBtn').insertAdjacentHTML('beforeend', 
    `
    <a href="#">Day ${day}</a>

    `);
    day = day - 1
    console.log(day)
}
