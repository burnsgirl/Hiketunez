// Button Variables
var searchPlacesBtn = document.querySelector('#searchPlacesBtn');
var searchParksBtn = document.querySelector('#searchParksBtn');
var userInput = document.querySelector('#userInput');
// Modal Variables
var cards = document.querySelector('#cards');
var modalTitle = document.querySelector('.card-title');
var cardInfo = document.querySelector('.card-info');
var modalAddress = document.querySelector('.modal-address');
var search = userInput.value;


// Location search
// if you want to use the forms value in the nps function.  You need to pass it in to the nps like this nps(elementname.value.trim()).
// The nps function should have a parameter like this nps(search).  You can call the parameter whatever you want.  Just know that the parameter will take on the value of the argument that gets passed in.
// elementname.value.trim() becomes search



// Event listener for search for location
searchParksBtn.addEventListener('click', parks);
searchPlacesBtn.addEventListener('click', places);


// function clearSearch() {
//     clearInterval();
//     console.log('hello');
// }


function places() {
    // clearSearch;

    console.log('places is workings');
    fetch('https://developer.nps.gov/api/v1/places?stateCode=nc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz')
    .then(response => response.json())
    .then(res => { 
        for (i=0; i<res.data.length; i++) {
            console.log(res.data[i]);
            console.log(res.data[i].title);
            console.log(res.data[i].listingDescription);


            //Building Card
            var infoCard = document.createElement('div');
            infoCard.setAttribute("id", `card${i}`);
            infoCard.setAttribute("class", "modal-card")
            cards.appendChild(infoCard);

            var title = document.createElement('h1');
            title.textContent = res.data[i].title;
            infoCard.appendChild(title);
            
            var listingDescription = document.createElement('p');
            listingDescription.textContent = res.data[i].listingDescription;
            infoCard.appendChild(listingDescription);
            title.classList.add("modal-title");
            listingDescription.classList.add("modal-description");

            //Buttons
            var playMusicBtn = document.createElement('button');
            playMusicBtn.innerHTML = 'Soundtrack';
            playMusicBtn.classList.add("playMusicBtn");
            cards.appendChild(playMusicBtn);

            var saveHikeBtn = document.createElement('button');
            saveHikeBtn.innerHTML = 'Save Hike';
            saveHikeBtn.classList.add("saveHikeBtn");
            cards.appendChild(saveHikeBtn);
            
            var addressBtn = document.createElement('button');
            addressBtn.innerHTML = 'Address';
            addressBtn.classList.add("addressBtn");
            cards.appendChild(addressBtn);
      
        } 
        
       
    });
    //  (res.data[i].listingDescription === null) {
    //     cards.style.display = "none";
}


//This function pulls parks across the U.S.
//The address pulling is not working. Returning object
function parks() {
    // clearSearch;

    console.log('hello');
    fetch('https://developer.nps.gov/api/v1/parks?stateCode=nc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz')
    .then(response => response.json())
    .then(res => {
        for (i=0; i<res.data.length; i++) {
            console.log(res.data[i]);
            console.log(res.data[i].fullName);
            console.log(res.data[i].description);
            console.log(res.data[i].addresses[0].line1+res.data[i].addresses[0].city);
    
            //Building Card
            var fullName = document.createElement('h1');
            fullName.textContent = res.data[i].fullName;
            fullName.classList.add("modal-title");

            var description = document.createElement('p');
            description.textContent = res.data[i].description;
            description.classList.add("modal-description");

            var addresses = document.createElement('p');
            addresses.textContent = res.data[i].addresses[0];
            addresses.classList.add("modal-address");
            
            var infoCard = document.createElement('div');
            infoCard.setAttribute("id", `card${i}`);
            infoCard.setAttribute("class", "modal-card")
            cards.appendChild(infoCard);


            //Buttons
            var playMusicBtn = document.createElement('button');
            playMusicBtn.innerHTML = 'Soundtrack';
            playMusicBtn.classList.add("playMusicBtn");
            cards.appendChild(playMusicBtn);

            var saveHikeBtn = document.createElement('button');
            saveHikeBtn.innerHTML = 'Save Hike';
            saveHikeBtn.classList.add("saveHikeBtn");
            cards.appendChild(saveHikeBtn);
            
            var addressBtn = document.createElement('button');
            addressBtn.innerHTML = 'Address';
            addressBtn.classList.add("addressBtn");
            cards.appendChild(addressBtn);
            

            infoCard.appendChild(fullName);
            infoCard.appendChild(description);
            // modalCard.appendChild(addresses);
            // infoCard.appendChild(saveHikeBtn);
            // infoCard.appendChild(playMusicBtn);

            var line1 = res.data[i].addresses[0].line1;
            var city = res.data[i].addresses[0].city;
            var state = res.data[i].addresses[0].stateCode;
            var postal = res.data[i].addresses[0].postalCode;
            console.log(line1 + ", " + city + ", " + state + ", " + postal);

            line1 = document.createElement('p');
            line1.classList.add("modal-address");
            city = document.createElement('p');
            city.classList.add("modal-address");
            state = document.createElement('p');
            state.classList.add("modal-address");
            postal = document.createElement('p');
            postal.classList.add("modal-address");

            modalAddress.appendChild(line1);
            modalAddress.appendChild(city);
            modalAddress.appendChild(state);
            modalAddress.appendChild(postal);
        }
    });
}

// Link hiking info to song data

// Modal for hike information when clicked on

// Event listener for start hike button that prompts music to play

// Local storage favorite hikes

// Event listener for favorite hikes button

// Page for favorite hikes

