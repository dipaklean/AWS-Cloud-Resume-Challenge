var apiUrl = "https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod/put";
  fetch(apiUrl)
    .then(() => fetch("https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod/get"))
    .then(response => response.json())
    .then(data => {
      document.querySelector(".vistor-counter").innerHTML = data;
      console.log(data);
    });