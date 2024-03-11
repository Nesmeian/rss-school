;(() => {
  'use strict'
  var e = {
      176: (e, t, r) => {
        r.d(t, {A: () => i})
        var n = r(601),
          a = r.n(n),
          s = r(314),
          o = r.n(s)()(a())
        o.push([
          e.id,
          '.log-out__button{border-radius:10px;border:.1px solid #fff;width:90px;color:#fff;background-color:#0e96ff}',
          '',
        ])
        const i = o
      },
      865: (e, t, r) => {
        r.d(t, {A: () => i})
        var n = r(601),
          a = r.n(n),
          s = r(314),
          o = r.n(s)()(a())
        o.push([
          e.id,
          '.register__form{position:relative;margin:auto;width:300px;display:flex;flex-direction:column;align-items:center;gap:10px;border:1px solid #000;padding:35px;border-radius:20px;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;color:#fff;background-color:#0e96ff;transition:all 2s ease}.label{width:150px}.input{border-radius:10px;border:.1px solid #fff;transition:all .5s ease}input:focus-visible{outline:none}.register__button{border-radius:10px;border:.1px solid #fff;width:70px;color:#fff;background-color:#0e96ff}.form__message{width:220px;transition:all .5s ease}.form--remove{transform:translateX(-4000px)}.input--active{border:1px solid green}.input--inactive{border:1px solid red}',
          '',
        ])
        const i = o
      },
      339: (e, t, r) => {
        r.d(t, {A: () => p})
        var n = r(601),
          a = r.n(n),
          s = r(314),
          o = r.n(s),
          i = r(417),
          c = r.n(i),
          l = new URL(r(603), r.b),
          u = o()(a()),
          d = c()(l)
        u.push([
          e.id,
          `.Header__container{display:flex;justify-content:space-between}.logo{height:50px;width:50px;background-image:url(${d});background-position:center;background-size:200%;background-repeat:no-repeat}`,
          '',
        ])
        const p = u
      },
      611: (e, t, r) => {
        r.d(t, {A: () => i})
        var n = r(601),
          a = r.n(n),
          s = r(314),
          o = r.n(s)()(a())
        o.push([
          e.id,
          'html,body{height:100%}.wrapper{height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 20px}.main{display:flex;flex-direction:column}',
          '',
        ])
        const i = o
      },
      314: (e) => {
        e.exports = function (e) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = '',
                  n = void 0 !== t[5]
                return (
                  t[4] && (r += '@supports ('.concat(t[4], ') {')),
                  t[2] && (r += '@media '.concat(t[2], ' {')),
                  n &&
                    (r += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (r += e(t)),
                  n && (r += '}'),
                  t[2] && (r += '}'),
                  t[4] && (r += '}'),
                  r
                )
              }).join('')
            }),
            (t.i = function (e, r, n, a, s) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var o = {}
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0]
                  null != c && (o[c] = !0)
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l])
                ;(n && o[u[0]]) ||
                  (void 0 !== s &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = s)),
                  r &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = r))
                      : (u[2] = r)),
                  a &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = a))
                      : (u[4] = ''.concat(a))),
                  t.push(u))
              }
            }),
            t
          )
        }
      },
      417: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : e)
              : e
          )
        }
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      72: (e) => {
        var t = []
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n
              break
            }
          return r
        }
        function n(e, n) {
          for (var s = {}, o = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = n.base ? c[0] + n.base : c[0],
              u = s[l] || 0,
              d = ''.concat(l, ' ').concat(u)
            s[l] = u + 1
            var p = r(d),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              }
            if (-1 !== p) t[p].references++, t[p].updater(m)
            else {
              var f = a(m, n)
              ;(n.byIndex = i),
                t.splice(i, 0, {identifier: d, updater: f, references: 1})
            }
            o.push(d)
          }
          return o
        }
        function a(e, t) {
          var r = t.domAPI(t)
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return
                r.update((e = t))
              } else r.remove()
            }
          )
        }
        e.exports = function (e, a) {
          var s = n((e = e || []), (a = a || {}))
          return function (e) {
            e = e || []
            for (var o = 0; o < s.length; o++) {
              var i = r(s[o])
              t[i].references--
            }
            for (var c = n(e, a), l = 0; l < s.length; l++) {
              var u = r(s[l])
              0 === t[u].references && (t[u].updater(), t.splice(u, 1))
            }
            s = c
          }
        }
      },
      659: (e) => {
        var t = {}
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e)
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head
                } catch (e) {
                  r = null
                }
              t[e] = r
            }
            return t[e]
          })(e)
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          n.appendChild(r)
        }
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      56: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc
          t && e.setAttribute('nonce', t)
        }
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return {update: function () {}, remove: function () {}}
          var t = e.insertStyleElement(e)
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = ''
                r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                  r.media && (n += '@media '.concat(r.media, ' {'))
                var a = void 0 !== r.layer
                a &&
                  (n += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (n += r.css),
                  a && (n += '}'),
                  r.media && (n += '}'),
                  r.supports && (n += '}')
                var s = r.sourceMap
                s &&
                  'undefined' != typeof btoa &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                      ' */'
                    )),
                  t.styleTagTransform(n, e, t.options)
              })(t, e, r)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(t)
            },
          }
        }
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(e))
          }
        }
      },
      603: (e, t, r) => {
        e.exports = r.p + 'images/672df65049a64956fb49.jpg'
      },
    },
    t = {}
  function r(n) {
    var a = t[n]
    if (void 0 !== a) return a.exports
    var s = (t[n] = {id: n, exports: {}})
    return e[n](s, s.exports, r), s.exports
  }
  ;(r.m = e),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return r.d(t, {a: t}), t
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e
      r.g.importScripts && (e = r.g.location + '')
      var t = r.g.document
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script')
        if (n.length)
          for (var a = n.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[a--].src
      }
      if (!e)
        throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e)
    })(),
    (r.b = document.baseURI || self.location.href),
    (r.nc = void 0),
    (() => {
      class e {
        constructor(e) {
          ;(this.element = this.createElement(e)), this.createElement(e)
        }
        getElement() {
          return this.element
        }
        createElement(e) {
          return (
            (this.element = document.createElement(e.tag || '')),
            this.setCssClasses(e.classes || ['']),
            this.setTextContent(e.text || ''),
            this.setCallback(e.callback),
            this.element
          )
        }
        setCssClasses(e) {
          e.forEach((e) => {
            var t
            return null === (t = this.element) || void 0 === t
              ? void 0
              : t.classList.add(e)
          })
        }
        setTextContent(e) {
          this.element && (this.element.textContent = e)
        }
        setCallback(e) {
          this.element &&
            e &&
            this.element.addEventListener('click', (t) => e(t))
        }
      }
      var t = r(72),
        n = r.n(t),
        a = r(825),
        s = r.n(a),
        o = r(659),
        i = r.n(o),
        c = r(56),
        l = r.n(c),
        u = r(540),
        d = r.n(u),
        p = r(113),
        m = r.n(p),
        f = r(611),
        g = {}
      ;(g.styleTagTransform = m()),
        (g.setAttributes = l()),
        (g.insert = i().bind(null, 'head')),
        (g.domAPI = s()),
        (g.insertStyleElement = d()),
        n()(f.A, g),
        f.A && f.A.locals && f.A.locals
      var h = r(865),
        v = {}
      ;(v.styleTagTransform = m()),
        (v.setAttributes = l()),
        (v.insert = i().bind(null, 'head')),
        (v.domAPI = s()),
        (v.insertStyleElement = d()),
        n()(h.A, v),
        h.A && h.A.locals && h.A.locals
      class b {
        constructor() {
          this.form = this.formCreate()
        }
        getHtmlElement() {
          return this.form
        }
        formCreate() {
          const e = this.createLoginForm(),
            t = this.createLoginNameLabel(),
            r = this.createLoginName()
          t.append(r)
          const n = this.createLoginSurnameLabel(),
            a = this.createLoginSurname()
          n.append(a)
          const s = this.createLoginButton()
          return (
            e.append(t),
            e.append(n),
            e.append(s),
            e.addEventListener('submit', (s) => {
              s.preventDefault(), this.removeMessage()
              const o = this.createValidationMessage(),
                i = this.createValidationMessage()
              let c, l
              r instanceof HTMLInputElement &&
                a instanceof HTMLInputElement &&
                (this.validation(r, 3, o) ? (c = r.value) : t.append(o),
                this.validation(a, 4, i) ? (l = a.value) : n.append(i)),
                l &&
                  c &&
                  (localStorage.setItem(
                    'Login',
                    JSON.stringify({name: c, surname: l})
                  ),
                  e.classList.add('form--remove'),
                  setInterval(() => {
                    e.remove()
                  }, 4e3))
            }),
            e
          )
        }
        createLoginForm() {
          const t = new e({
            tag: 'form',
            classes: ['register__form'],
            text: '',
          }).getElement()
          return t.setAttribute('action', ''), t
        }
        createLoginNameLabel() {
          return new e({
            tag: 'label',
            classes: ['label', 'register__name-label'],
            text: 'Name',
          }).getElement()
        }
        createLoginName() {
          const t = new e({
            tag: 'input',
            classes: ['input', 'register__name'],
            text: '',
          }).getElement()
          return t.setAttribute('type', 'text'), t
        }
        createLoginSurnameLabel() {
          return new e({
            tag: 'label',
            classes: ['label', 'register__surname-label'],
            text: 'Surname',
          }).getElement()
        }
        createLoginSurname() {
          const t = new e({
            tag: 'input',
            classes: ['input', 'register__surname'],
            text: '',
          }).getElement()
          return t.setAttribute('type', 'text'), t
        }
        createLoginButton() {
          const t = new e({
            tag: 'button',
            classes: ['register__button'],
            text: 'Enter',
          }).getElement()
          return t.setAttribute('type', 'submit'), t
        }
        createValidationMessage() {
          return new e({tag: 'div', classes: ['form__message']}).getElement()
        }
        validation(e, t, r) {
          let n = !1
          if (e instanceof HTMLInputElement) {
            let a = e.value.split(''),
              s = t
            a.length >= s
              ? a[0] === a[0].toUpperCase()
                ? a.forEach((t, r) => {
                    ;/^[A-Z][a-zA-Z-]*$/.test(t) &&
                      (e.classList.add('input--active'),
                      e.classList.remove('input--inactive'),
                      (n = !0))
                  })
                : (e.classList.add('input--inactive'),
                  e.classList.remove('input--active'),
                  (r.textContent =
                    'The input is not valid, the first letter must be capitalized '))
              : (e.classList.add('input--inactive'),
                e.classList.remove('input--active'),
                (r.textContent = `The input is not valid is too short, must be long then ${s} `))
          }
          return n
        }
        removeMessage() {
          document.querySelectorAll('.form__message').forEach((e) => {
            e.remove()
          })
        }
      }
      class x {
        constructor() {
          ;(this.mainCreate = this.createMainContainer()),
            (this.form = this.createForm())
        }
        getHtmlElement() {
          return this.mainCreate
        }
        createMainContainer() {
          const e = this.createMain(),
            t = localStorage.getItem('Login')
          let r = this.createForm()
          return t || e.append(r), e
        }
        createForm() {
          return new b().getHtmlElement()
        }
        createWrapper() {
          return new e({
            tag: 'div',
            classes: ['wrapper'],
            text: '',
          }).getElement()
        }
        createMain() {
          return new e({tag: 'main', classes: ['main'], text: ''}).getElement()
        }
      }
      var y = r(176),
        E = {}
      ;(E.styleTagTransform = m()),
        (E.setAttributes = l()),
        (E.insert = i().bind(null, 'head')),
        (E.domAPI = s()),
        (E.insertStyleElement = d()),
        n()(y.A, E),
        y.A && y.A.locals && y.A.locals
      class w {
        constructor() {
          this.createDeAuthorization()
        }
        createDeAuthorization() {
          return this.createDeAuthorizationBtn()
        }
        getHtmlElement() {
          return this.createDeAuthorization
        }
        createDeAuthorizationBtn() {
          return new e({
            tag: 'button',
            classes: ['log-out__button'],
            text: 'Log Out',
          }).getElement()
        }
      }
      var A = r(339),
        L = {}
      ;(L.styleTagTransform = m()),
        (L.setAttributes = l()),
        (L.insert = i().bind(null, 'head')),
        (L.domAPI = s()),
        (L.insertStyleElement = d()),
        n()(A.A, L),
        A.A && A.A.locals && A.A.locals
      class _ {
        constructor() {
          this.createHeader()
        }
        createHeader() {
          const t = new e({
              tag: 'header',
              classes: ['header'],
              text: '',
            }).getElement(),
            r = new w(),
            n = this.createWrapper(),
            a = this.createHeaderContainer()
          return (
            t.append(n),
            n.append(a),
            a.append(this.createLogo()),
            a.append(r.createDeAuthorization()),
            document.querySelector('main'),
            t
          )
        }
        createLogo() {
          return new e({tag: 'div', classes: ['logo'], text: ''}).getElement()
        }
        createWrapper() {
          return new e({
            tag: 'div',
            classes: ['wrapper'],
            text: '',
          }).getElement()
        }
        createHeaderContainer() {
          return new e({
            tag: 'div',
            classes: ['Header__container'],
            text: '',
          }).getElement()
        }
      }
      new (class {
        constructor() {
          this.createHeader(), this.createMain(), this.reCreateForm()
        }
        createHeader() {
          const e = new _().createHeader()
          document.body.append(e)
        }
        createMain() {
          const e = new x()
          let t = e.createForm()
          console.log(t)
          const r = e.getHtmlElement(),
            n = e.createWrapper()
          document.body.append(n), n.append(r)
        }
        reCreateForm() {
          const e = document.querySelector('log-out__button'),
            t = document.querySelector('logo'),
            r = document.querySelector('register__form')
          null == e ||
            e.addEventListener('click', () => {
              localStorage.removeItem('Login'),
                r instanceof HTMLElement && (null == t || t.append(r))
            })
        }
      })()
    })()
})()
