let formFields = new URLSearchParams(window.location.search)

document.querySelector("#yourName").innerHTML = `${formFields.get("name")}`
document.querySelector("#yourEmail").innerHTML = `${formFields.get("email")}`