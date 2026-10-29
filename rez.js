// Tailwind dibaca dari class "dark" di tag html, bukan dari setelan sistem
if (window.tailwind) tailwind.config = { darkMode: 'class' };

(function () {
  var root = document.documentElement;
  var simpan = localStorage.getItem('tema');
  var gelap = simpan === 'gelap' || (simpan === null && matchMedia('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', gelap);

  document.addEventListener('DOMContentLoaded', function () {
    var tombol = document.getElementById('tema');
    function tampil() {
      var g = root.classList.contains('dark');
      tombol.setAttribute('aria-pressed', g);
      tombol.textContent = g ? 'Mode terang' : 'Mode gelap';
    }
    tombol.addEventListener('click', function () {
      var g = root.classList.toggle('dark');
      localStorage.setItem('tema', g ? 'gelap' : 'terang');
      tampil();
    });
    tampil();
  });
})();