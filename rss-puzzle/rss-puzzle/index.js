;(() => {
  'use strict'
  var e = {
      865: (e, t, n) => {
        n.d(t, {A: () => o})
        var r = n(601),
          a = n.n(r),
          s = n(314),
          i = n.n(s)()(a())
        i.push([
          e.id,
          '.register__form{margin:auto;width:300px;display:flex;flex-direction:column;align-items:center;gap:10px;border:1px solid #000;padding:35px;border-radius:20px;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;color:#fff;background-color:#0e96ff}.label{width:150px}.input{border-radius:10px;border:.1px solid #fff;transition:all .5s ease}input:focus-visible{outline:none}.register__button{border-radius:10px;border:.1px solid #fff;width:70px;color:#fff;background-color:#0e96ff}.form__message{width:220px;transition:all .5s ease}.input--active{border:1px solid green}.input--inactive{border:1px solid red}',
          '',
        ])
        const o = i
      },
      611: (e, t, n) => {
        n.d(t, {A: () => o})
        var r = n(601),
          a = n.n(r),
          s = n(314),
          i = n.n(s)()(a())
        i.push([
          e.id,
          'html,body{height:100%}.wrapper{height:100%;display:flex;flex-direction:column;justify-content:center}.main{display:flex;flex-direction:column}',
          '',
        ])
        const o = i
      },
      314: (e) => {
        e.exports = function (e) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5]
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                )
              }).join('')
            }),
            (t.i = function (e, n, r, a, s) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var i = {}
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var l = this[o][0]
                  null != l && (i[l] = !0)
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c])
                ;(r && i[u[0]]) ||
                  (void 0 !== s &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = s)),
                  n &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = n))
                      : (u[2] = n)),
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
      601: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      72: (e) => {
        var t = []
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r
              break
            }
          return n
        }
        function r(e, r) {
          for (var s = {}, i = [], o = 0; o < e.length; o++) {
            var l = e[o],
              c = r.base ? l[0] + r.base : l[0],
              u = s[c] || 0,
              p = ''.concat(c, ' ').concat(u)
            s[c] = u + 1
            var d = n(p),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              }
            if (-1 !== d) t[d].references++, t[d].updater(m)
            else {
              var f = a(m, r)
              ;(r.byIndex = o),
                t.splice(o, 0, {identifier: p, updater: f, references: 1})
            }
            i.push(p)
          }
          return i
        }
        function a(e, t) {
          var n = t.domAPI(t)
          return (
            n.update(e),
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
                n.update((e = t))
              } else n.remove()
            }
          )
        }
        e.exports = function (e, a) {
          var s = r((e = e || []), (a = a || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < s.length; i++) {
              var o = n(s[i])
              t[o].references--
            }
            for (var l = r(e, a), c = 0; c < s.length; c++) {
              var u = n(s[c])
              0 === t[u].references && (t[u].updater(), t.splice(u, 1))
            }
            s = l
          }
        }
      },
      659: (e) => {
        var t = {}
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e)
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head
                } catch (e) {
                  n = null
                }
              t[e] = n
            }
            return t[e]
          })(e)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          r.appendChild(n)
        }
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc
          t && e.setAttribute('nonce', t)
        }
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return {update: function () {}, remove: function () {}}
          var t = e.insertStyleElement(e)
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = ''
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'))
                var a = void 0 !== n.layer
                a &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  a && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}')
                var s = n.sourceMap
                s &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, e, t.options)
              })(t, e, n)
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
    },
    t = {}
  function n(r) {
    var a = t[r]
    if (void 0 !== a) return a.exports
    var s = (t[r] = {id: r, exports: {}})
    return e[r](s, s.exports, n), s.exports
  }
  ;(n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return n.d(t, {a: t}), t
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
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
      var t = n(72),
        r = n.n(t),
        a = n(825),
        s = n.n(a),
        i = n(659),
        o = n.n(i),
        l = n(56),
        c = n.n(l),
        u = n(540),
        p = n.n(u),
        d = n(113),
        m = n.n(d),
        f = n(611),
        h = {}
      ;(h.styleTagTransform = m()),
        (h.setAttributes = c()),
        (h.insert = o().bind(null, 'head')),
        (h.domAPI = s()),
        (h.insertStyleElement = p()),
        r()(f.A, h),
        f.A && f.A.locals && f.A.locals
      var g = n(865),
        v = {}
      ;(v.styleTagTransform = m()),
        (v.setAttributes = c()),
        (v.insert = o().bind(null, 'head')),
        (v.domAPI = s()),
        (v.insertStyleElement = p()),
        r()(g.A, v),
        g.A && g.A.locals && g.A.locals
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
            n = this.createLoginName()
          t.append(n)
          const r = this.createLoginSurnameLabel(),
            a = this.createLoginSurname()
          r.append(a)
          const s = this.createLoginButton()
          return (
            e.append(t),
            e.append(r),
            e.append(s),
            e.addEventListener('submit', (e) => {
              e.preventDefault(), this.removeMessage()
              const s = this.createValidationMessage(),
                i = this.createValidationMessage()
              let o, l
              n instanceof HTMLInputElement &&
                a instanceof HTMLInputElement &&
                (this.validation(n, 3, s) ? (o = n.value) : t.append(s),
                this.validation(a, 4, i) ? (l = a.value) : r.append(i)),
                l &&
                  o &&
                  localStorage.setItem(
                    'Login',
                    JSON.stringify({name: o, surname: l})
                  )
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
        validation(e, t, n) {
          let r = !1
          if (e instanceof HTMLInputElement) {
            let a = e.value.split(''),
              s = t
            a.length >= s
              ? a[0] === a[0].toUpperCase()
                ? a.forEach((t, n) => {
                    ;/^[A-Z][a-zA-Z-]*$/.test(t) &&
                      (e.classList.add('input--active'),
                      e.classList.remove('input--inactive'),
                      (r = !0))
                  })
                : (e.classList.add('input--inactive'),
                  e.classList.remove('input--active'),
                  (n.textContent =
                    'The input is not valid, the first letter must be capitalized '))
              : (e.classList.add('input--inactive'),
                e.classList.remove('input--active'),
                (n.textContent = `The input is not valid is too short, must be long then ${s} `))
          }
          return r
        }
        removeMessage() {
          document.querySelectorAll('.form__message').forEach((e) => {
            e.remove()
          })
        }
      }
      class x {
        constructor() {
          this.mainCreate = this.createMainContainer()
        }
        getHtmlElement() {
          return this.mainCreate
        }
        createMainContainer() {
          const e = this.createMain().getElement(),
            t = new b()
          return e.append(t.getHtmlElement()), e
        }
        createWrapper() {
          return new e({tag: 'div', classes: ['wrapper'], text: ''})
        }
        createMain() {
          return new e({tag: 'main', classes: ['main'], text: ''})
        }
      }
      new (class {
        constructor() {
          this.createMain()
        }
        createMain() {
          const e = new x(),
            t = e.getHtmlElement(),
            n = e.createWrapper().getElement()
          document.body.append(n), n.append(t)
        }
      })()
    })()
})()
