  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-list');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

   document.getElementById('profile-btn').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}

const tabs = document.querySelectorAll('.tab a');
const formSections = document.querySelectorAll('.form-section');

tabs.forEach(tab => {
    tab.onclick = function(e) {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        formSections.forEach(section => section.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(tab.getAttribute('href')).classList.add('active');
    }
});



