let firstName = prompt('Input your First Name');
let middleName = prompt('Input your Middle Name or Initial');
let lastName = prompt('Input your Last Name');
let age = prompt('Input your Age');
let address = prompt('Input your Address');
let skills = prompt('Input your major skill');
let education = prompt('Inpur your recent educational attaintment');
let work = prompt('Input your recent work history');

document.write(
  "<h1>Simple Resume</h1>" + "<br>" +

  "<div class =p1>" + "Name : " + firstName + " " + middleName + " " + lastName + "<br>"
  + "Age : " + age + "<br>" + "Address : " + address + "</div>"

  + "<br>" +

  "<div class =p2>"
  + "Major Skill : " + skills + "<br>" + "Recent Education : " + education
  + "<br>"
  + "Recent Work : " + work + "<br>" + "</div>"
)


