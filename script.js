

const roles = ["Data Scientist","Power BI Analyst","Python Developer","UI/UX Designer","Game Developer"];
let i = 0, j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = currentRole.substring(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = currentRole.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// MOBILE HAMBURGER MENU
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // close menu when a link is tapped
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}



const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.onclick = () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
  };
}

// load saved theme
if(localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        if (status) status.innerText = " Message sent!";
        form.reset();
      }, (error) => {
        if (status) status.innerText = "TRY AGAIN";
        console.error(error);
      });
  });
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));
// CERT VIEWER
function openCert(src) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certImage").src = src;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}



const cards = document.querySelectorAll(".skill-card");

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 150); // delay
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', x + "px");
    card.style.setProperty('--y', y + "px");

    card.style.setProperty('--glowX', x + "px");
    card.style.setProperty('--glowY', y + "px");

    card.style.setProperty('--mouse-x', x + "px");
    card.style.setProperty('--mouse-y', y + "px");

    card.style.setProperty('--light-x', x + "px");
    card.style.setProperty('--light-y', y + "px");

    card.querySelector("::before");
    card.style.setProperty('--before-x', x + "px");
    card.style.setProperty('--before-y', y + "px");

    card.style.setProperty('--posX', x + "px");
    card.style.setProperty('--posY', y + "px");

    card.style.setProperty('--moveX', x + "px");
    card.style.setProperty('--moveY', y + "px");

    card.style.setProperty('--cursorX', x + "px");
    card.style.setProperty('--cursorY', y + "px");

    card.style.setProperty('--gx', x + "px");
    card.style.setProperty('--gy', y + "px");

    card.style.setProperty('--px', x + "px");
    card.style.setProperty('--py', y + "px");

    card.style.setProperty('--tx', x + "px");
    card.style.setProperty('--ty', y + "px");

    card.style.setProperty('--lx', x + "px");
    card.style.setProperty('--ly', y + "px");

    card.style.setProperty('--cx', x + "px");
    card.style.setProperty('--cy', y + "px");

    card.style.setProperty('--bx', x + "px");
    card.style.setProperty('--by', y + "px");

    card.style.setProperty('--ux', x + "px");
    card.style.setProperty('--uy', y + "px");

    card.style.setProperty('--rx', x + "px");
    card.style.setProperty('--ry', y + "px");

    card.style.setProperty('--vx', x + "px");
    card.style.setProperty('--vy', y + "px");

    card.style.setProperty('--sx', x + "px");
    card.style.setProperty('--sy', y + "px");

    card.style.setProperty('--zx', x + "px");
    card.style.setProperty('--zy', y + "px");

    card.style.setProperty('--gx', x + "px");
    card.style.setProperty('--gy', y + "px");

    card.style.setProperty('--fx', x + "px");
    card.style.setProperty('--fy', y + "px");

    card.style.setProperty('--hx', x + "px");
    card.style.setProperty('--hy', y + "px");

    card.style.setProperty('--jx', x + "px");
    card.style.setProperty('--jy', y + "px");

    card.style.setProperty('--kx', x + "px");
    card.style.setProperty('--ky', y + "px");

    card.style.setProperty('--mx', x + "px");
    card.style.setProperty('--my', y + "px");

    card.style.setProperty('--nx', x + "px");
    card.style.setProperty('--ny', y + "px");

    card.style.setProperty('--ox', x + "px");
    card.style.setProperty('--oy', y + "px");

    card.style.setProperty('--qx', x + "px");
    card.style.setProperty('--qy', y + "px");

    card.style.setProperty('--wx', x + "px");
    card.style.setProperty('--wy', y + "px");

    card.style.setProperty('--yx', x + "px");
    card.style.setProperty('--yy', y + "px");

    card.style.setProperty('--zx', x + "px");
    card.style.setProperty('--zy', y + "px");

    card.style.setProperty('--gx', x + "px");
    card.style.setProperty('--gy', y + "px");

    card.style.setProperty('--px', x + "px");
    card.style.setProperty('--py', y + "px");
  });
});
document.querySelectorAll(".skill-fill").forEach(bar => {
  const width = bar.style.width;
  bar.style.width = "0";
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});
const skills = document.querySelectorAll('.progress');

const showSkills = () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      skill.style.width = skill.getAttribute('data-width');
    }
  });
};

window.addEventListener('scroll', showSkills);

// ================= COUNTER ANIMATION =================

let counter = document.querySelectorAll(".counter");

let interval = 3000;

counter.forEach((value) => {

    let startValue = 0;

    let endValue = parseInt(value.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);

    let counterSet = setInterval(function () {

        startValue += 1;

        value.textContent = startValue;

        if (startValue == endValue) {

            clearInterval(counterSet);
        }
    }, duration);

});
