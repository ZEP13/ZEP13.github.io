///animation section 1
window.addEventListener("scroll", function () {
  var insta = document.querySelector(".imginsta");
  var whatapp = document.querySelector(".imgwhatapp");
  var github = document.querySelector(".imggithub");
  var position = insta.getBoundingClientRect();
  var position = whatapp.getBoundingClientRect();
  var position = github.getBoundingClientRect();

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    insta.classList.add("visible");
    whatapp.classList.add("visible");
    github.classList.add("visible");
  } else {
    insta.classList.remove("visible");
    whatapp.classList.remove("visible");
    github.classList.remove("visible");
  }
});

window.addEventListener("scroll", function () {
  var profilimf = document.querySelector(".profilimg");
  var profiltext = document.querySelector(".textpro");
  var position = profilimf.getBoundingClientRect();
  var position = profiltext.getBoundingClientRect();
  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    profilimf.classList.add("visible");
    profiltext.classList.add("visible1");
  } else {
    profilimf.classList.remove("visible");
    profiltext.classList.remove("visible1");
  }
});
///animation box etude
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 400,
});
ScrollReveal().reveal(".maintitle", { delay: 300, origin: "top" });
ScrollReveal().reveal(".container2 .box", {
  delay: 300,
  origin: "right",
  interval: 200,
  easing: " ease",
});

const mail = document.querySelector("#mail");
const mailerror = document.querySelector(".mailspan");
mail.addEventListener("keyup", () => {
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.value.match(pattern)) {
    mailerror.innerHTML = "Adresse mail correct";
  } else {
    mailerror.innerHTML = "Veuillez saisir une adresse mail correct";
  }
});

const labelmail = document.querySelector(".labelmail");
function typemail() {
  labelmail.style.bottom = "75px";
}
const labelnom = document.querySelector(".labelnom");
function typenom() {
  labelnom.style.bottom = "50px";
}
const labeltel = document.querySelector(".labelnum");
function typetel() {
  labeltel.style.bottom = "75px";
}

const tel = document.querySelector("#tel");
const telspan = document.querySelector(".telspan");
tel.addEventListener("keyup", () => {
  let paterntel = /^\+32[1-9][0-9]{7,8}$/;
  if (tel.value.match(paterntel)) {
    telspan.innerHTML = "N° correct";
  } else {
    telspan.innerHTML =
      "Veuillez saisir le format suivant (+32 suivi de 8 chiffres)";
  }
});
const submit = document.querySelector("#send");
submit.addEventListener("click", () => {
  Swal.fire({
    title: "Good job!",
    text: "Message envoyé !",
    icon: "success",
  });
});
