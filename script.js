try { var t = localStorage.getItem('gr-theme'); if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t) } catch (e) { }

(function () {
    var root = document.documentElement, btn = document.getElementById('themeBtn'), mq = window.matchMedia('(prefers-color-scheme: dark)');
    function isDark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : mq.matches }
    function sync() { var d = isDark(); btn.setAttribute('aria-label', d ? 'Switch to light theme' : 'Switch to dark theme'); btn.setAttribute('aria-pressed', d) }
    btn.addEventListener('click', function () { var n = isDark() ? 'light' : 'dark'; root.setAttribute('data-theme', n); try { localStorage.setItem('gr-theme', n) } catch (e) { } sync() });
    if (mq.addEventListener) mq.addEventListener('change', sync);
    sync();

    var mb = document.getElementById('menuBtn'), menu = document.getElementById('menu');
    function closeMenu() { menu.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.setAttribute('aria-label', 'Open menu') }
    mb.addEventListener('click', function () { var o = menu.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.setAttribute('aria-label', o ? 'Close menu' : 'Open menu') });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu() });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu() });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) closeMenu() });

    document.getElementById('f').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('msg').textContent = 'Thanks! We will call you within one working day.'; this.reset() });
})();