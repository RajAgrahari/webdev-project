const search = document.getElementById('search');
const searchbar = document.getElementById('searchbar');
const cardtitle = document.getElementById('card-title');
const cardtext1 = document.getElementById('card-text1');
const cardtext2 = document.getElementById('card-text2');

const getinfo = async (event) => {
    event.preventDefault();
    const city = searchbar.value;
    if (city == "") {
        cardtitle.innerText = `Please write the name before searching`;
        cardtext1.innerHTML = "";
        cardtext2.innerHTML = "";
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=638293041a22f99b2a4b996bf4caf491`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            cardtext1.innerText = `${arrdata[0].main.temp}`;
            // cardtitle.innerText = "";
            cardtitle.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            cardtext2.innerText = arrdata[0].weather[0].main;
            if (cardtext2.innerText == "Clear") {
                cardtext2.innerHTML = "<sup>o</sup>C <i class='fas fa-sun' style='color:yellow'>";
            }
            else if (cardtext2.innerText == "Clouds") {
                cardtext2.innerHTML = "<sup>o</sup>C <i class='fas fa-cloud' style='color:white'>";
            }
            else if (cardtext2.innerText == "Rainy") {
                cardtext2.innerHTML = "<sup>o</sup>C <i class='fas fa-cloud-rain' style='color:white'>";
            }
            else {
                cardtext2.innerHTML = "<sup>o</sup>C <i class='fas fa-sun' style='color:yellow'>";
            }

        } catch {
            cardtitle.innerText = `Please write the correct city name 🙃`;
            cardtext2.innerText = ``;
            cardtext1.innerText = ``;
        }
    }

    // alert('raj');
}
search.addEventListener('click', getinfo);
