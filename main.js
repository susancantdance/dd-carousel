(() => {
  "use strict";
  var n = {
      208: (n, e, t) => {
        t.d(e, { A: () => s });
        var r = t(354),
          o = t.n(r),
          i = t(314),
          a = t.n(i)()(o());
        a.push([
          n.id,
          ".container {\n  background-color: blue;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  background-color: aqua;\n  width: 100%;\n  font-size: 80px;\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.menubar {\n  background-color: brown;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  width: 50%;\n}\n\n/* .cats-dd {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  background-color: green;\n  width: 200px;\n  justify-self: center;\n} */\n\n.cats,\n.links {\n  background-color: pink;\n  font-size: 20px;\n  margin: 0px;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  justify-self: center;\n  grid-row: 1;\n}\n\n.cats {\n  grid-column: 1;\n  align-self: end;\n}\n\n.links {\n  grid-column: 2;\n  align-self: end;\n}\n\n.cats-ul,\n.links-ul {\n  justify-self: center;\n  width: 100px;\n  background-color: pink;\n  grid-row: 2;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px 0px 0px 0px;\n}\n\n.cats-ul {\n  grid-column: 1;\n}\n.links-ul {\n  grid-column: 2;\n}\n\n.cats-option,\n.links-option {\n  list-style: none;\n  margin-left: 20px;\n  justify-self: start;\n  align-self: center;\n}\n\n.invisible {\n  display: none;\n  justify-self: center;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;;;;;;;GAOG;;AAEH;;EAEE,sBAAsB;EACtB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;;EAEE,oBAAoB;EACpB,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB",
            sourcesContent: [
              ".container {\n  background-color: blue;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  background-color: aqua;\n  width: 100%;\n  font-size: 80px;\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.menubar {\n  background-color: brown;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  width: 50%;\n}\n\n/* .cats-dd {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  background-color: green;\n  width: 200px;\n  justify-self: center;\n} */\n\n.cats,\n.links {\n  background-color: pink;\n  font-size: 20px;\n  margin: 0px;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  justify-self: center;\n  grid-row: 1;\n}\n\n.cats {\n  grid-column: 1;\n  align-self: end;\n}\n\n.links {\n  grid-column: 2;\n  align-self: end;\n}\n\n.cats-ul,\n.links-ul {\n  justify-self: center;\n  width: 100px;\n  background-color: pink;\n  grid-row: 2;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px 0px 0px 0px;\n}\n\n.cats-ul {\n  grid-column: 1;\n}\n.links-ul {\n  grid-column: 2;\n}\n\n.cats-option,\n.links-option {\n  list-style: none;\n  margin-left: 20px;\n  justify-self: start;\n  align-self: center;\n}\n\n.invisible {\n  display: none;\n  justify-self: center;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var A = 0; A < n.length; A++) {
                var l = [].concat(n[A]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              i = "/*# ".concat(o, " */");
            return [e].concat([i]).join("\n");
          }
          return [e].join("\n");
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              A = r.base ? c[0] + r.base : c[0],
              l = i[A] || 0,
              u = "".concat(A, " ").concat(l);
            i[A] = l + 1;
            var d = t(u),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(p);
            else {
              var f = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = r(n, o), A = 0; A < i.length; A++) {
              var l = t(i[A]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        r = t(825),
        o = t.n(r),
        i = t(659),
        a = t.n(i),
        s = t(56),
        c = t.n(s),
        A = t(540),
        l = t.n(A),
        u = t(113),
        d = t.n(u),
        p = t(208),
        f = {};
      function m(n, e) {
        const t = document.querySelector(n),
          r = document.querySelectorAll(e);
        t.addEventListener("mouseover", () => {
          r.forEach((n) => {
            n.classList.remove("invisible");
          }),
            t.addEventListener("mouseout", () => {
              r.forEach((n) => {
                n.classList.add("invisible");
              });
            });
        });
      }
      (f.styleTagTransform = d()),
        (f.setAttributes = c()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = l()),
        e()(p.A, f),
        p.A && p.A.locals && p.A.locals,
        m(".cats", ".cats-ul"),
        m(".links", ".links-ul");
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxJQUUxRSxFQ05EVixFQUFvQlcsRUFBSSxDQUFDL0QsRUFBS29FLElBQVVKLE9BQU9LLFVBQVVDLGVBQWVDLEtBQUt2RSxFQUFLb0UsR0NBbEZoQixFQUFvQm9CLFFBQUtoRyxFLDZIQ1dyQmtCLEVBQVUsQ0FBQyxFQ1hmLFNBQVMrRSxFQUFhQyxFQUFnQkMsR0FDcEMsTUFBTUMsRUFBT3BELFNBQVNDLGNBQWNpRCxHQUM5QkcsRUFBY3JELFNBQVNzRCxpQkFBaUJILEdBRTlDQyxFQUFLRyxpQkFBaUIsYUFBYSxLQUNqQ0YsRUFBWUcsU0FBU2xCLElBQ25CQSxFQUFJbUIsVUFBVXJFLE9BQU8sWUFBWSxJQUVuQ2dFLEVBQUtHLGlCQUFpQixZQUFZLEtBQ2hDRixFQUFZRyxTQUFTbEIsSUFDbkJBLEVBQUltQixVQUFVQyxJQUFJLFlBQVksR0FDOUIsR0FDRixHQUVOLENEREF4RixFQUFRZ0Qsa0JBQW9CLElBQzVCaEQsRUFBUTBDLGNBQWdCLElBQ3hCMUMsRUFBUTBCLE9BQVMsU0FBYyxLQUFNLFFBQ3JDMUIsRUFBUWUsT0FBUyxJQUNqQmYsRUFBUStDLG1CQUFxQixJQUVoQixJQUFJLElBQVMvQyxHQUtKLEtBQVcsSUFBUXlGLFFBQVMsSUFBUUEsT0VyQjFEVixFQUFhLFFBQVMsWUFDdEJBLEVBQWEsU0FBVSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGQtY2Fyb3VzZWwvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZC1jYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZC1jYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kZC1jYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZC1jYXJvdXNlbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGQtY2Fyb3VzZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGQtY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGQtY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RkLWNhcm91c2VsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGQtY2Fyb3VzZWwvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RkLWNhcm91c2VsLy4vc3JjL3Nob3dIaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9kZC1jYXJvdXNlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogLmNhdHMtZGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMjAwcHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufSAqL1xuXG4uY2F0cyxcbi5saW5rcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBncmlkLXJvdzogMTtcbn1cblxuLmNhdHMge1xuICBncmlkLWNvbHVtbjogMTtcbiAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4ubGlua3Mge1xuICBncmlkLWNvbHVtbjogMjtcbiAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4uY2F0cy11bCxcbi5saW5rcy11bCB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jYXRzLXVsIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG4ubGlua3MtdWwge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLmNhdHMtb3B0aW9uLFxuLmxpbmtzLW9wdGlvbiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7Ozs7Ozs7R0FPRzs7QUFFSDs7RUFFRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51YmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIC5jYXRzLWRkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICB3aWR0aDogMjAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59ICovXFxuXFxuLmNhdHMsXFxuLmxpbmtzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5jYXRzIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5jYXRzLXVsLFxcbi5saW5rcy11bCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICBncmlkLXJvdzogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xcbn1cXG5cXG4uY2F0cy11bCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuLmxpbmtzLXVsIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uY2F0cy1vcHRpb24sXFxuLmxpbmtzLW9wdGlvbiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJmdW5jdGlvbiBzaG93SGlkZU1lbnUobWVudVRpdGxlQ2xhc3MsIG9wdGlvbnNDbGFzcykge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51VGl0bGVDbGFzcyk7XG4gIGNvbnN0IHNob3dPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zQ2xhc3MpO1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgc2hvd09wdGlvbnMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICB9KTtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBzaG93T3B0aW9ucy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHNob3dIaWRlTWVudSB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNob3dIaWRlTWVudSB9IGZyb20gXCIuL3Nob3dIaWRlTWVudVwiO1xuXG5zaG93SGlkZU1lbnUoXCIuY2F0c1wiLCBcIi5jYXRzLXVsXCIpO1xuc2hvd0hpZGVNZW51KFwiLmxpbmtzXCIsIFwiLmxpbmtzLXVsXCIpO1xuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuYyIsInNob3dIaWRlTWVudSIsIm1lbnVUaXRsZUNsYXNzIiwib3B0aW9uc0NsYXNzIiwibGluayIsInNob3dPcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwibG9jYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==
