
// 1.add and event listener on the form
// 2.fetch the api with the name
// 3.get back the name, email, bio, location
// 4.append/insert it in the DOM.

const authorization = "Bearer sk_5e549e301643d63388fb7ff50253f6e8";
const form = document.getElementById('clearbitForm');
const userInput = document.querySelector("#clearbitEmail");

const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userBio = document.querySelector('#userBio');
const userLocation = document.querySelector('#userLocation');

// function that sets the user info
const setUserInfo = (data) => {

  const person = data.person;

  const email = person.email;
  userEmail.innerText = email;

  const name = person.name.fullName;
  userName.innerText = name;

  const bio = person.bio;
  userBio.innerText = bio;

  const city = person.geo.city;
  userLocation.innerText = city;
}

// APICALL FUNCTION WITH GET AJAX REQUEST
const apiCallClearBit = (userInput, authorization) => {
  fetch (`https://person-stream.clearbit.com/v2/combined/find?email=${userInput.value}`, { headers: { Authorization: authorization } } )
  .then(response => response.json())
  .then(data => {
      setUserInfo(data);
  });
}

// EVENT LISTENER ON THE FORM
// EVENT TYPE IS SUBMIT
// CALLBACK FUNCTION IS MY APICALL WITH AJAX REQUEST

form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent the default behaviour of refresh from a form.
  apiCallClearBit(userInput, authorization)
});



