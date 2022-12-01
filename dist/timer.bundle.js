(() => {
  var e = {
      418: (e, t, o) => {
        o(453);
        let n = 6048e5;
        function r() {
          let e = Math.floor(n / 1e3 / 60 / 60 / 24),
            t = Math.floor(n / 1e3 / 60 / 60) % 24,
            o = Math.floor(n / 1e3 / 60) % 60,
            s = Math.floor(n / 1e3) % 60;
          console.log(e),
            console.log(t),
            console.log(o),
            console.log(s),
            0 === e &&
              0 === t &&
              0 === o &&
              0 === s &&
              (clearInterval(l),
              setTimeout(() => {
                (n = 6048e5), (l = setInterval(r, 1e3));
              }, 5e3)),
            (n -= 1e3),
            console.log(n),
            (document.getElementById('d').innerText = e),
            (document.getElementById('h').innerText = t),
            (document.getElementById('m').innerText = o),
            (document.getElementById('s').innerText = s);
        }
        let l = setInterval(r, 1e3);
        e.exports = r;
      },
      453: (e, t, o) => {
        'use strict';
        o.r(t);
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var l = (t[n] = { exports: {} });
    return e[n](l, l.exports, o), l.exports;
  }
  (o.r = (e) => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  }),
    (() => {
      o(418);
      timer();
    })();
})();
