(this.webpackJsonpmultistep2 = this.webpackJsonpmultistep2 || []).push([
  [0],
  {
    188: function (e, t, n) {},
    189: function (e, t, n) {},
    382: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(10),
        c = n(0),
        i = n(13),
        r = n.n(i),
        s = (n(188), n(189), n(65)),
        l = n(34),
        j = n(182),
        u = n(12),
        o = { button: { margin: 15 } },
        b = function (e) {
          var t = e.nextStep,
            n = e.values,
            c = e.handleChange;
          return Object(a.jsx)(u.d, {
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(u.a, { title: "Enter User Details" }),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  hintText: "Enter Your First Name",
                  floatingLabelText: "First Name",
                  onChange: c("firstName"),
                  defaultValue: n.firstName,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  hintText: "Enter Your Last Name",
                  floatingLabelText: "Last Name",
                  onChange: c("lastName"),
                  defaultValue: n.lastName,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  fullWidth: !0,
                  hintText: "Enter Your Email",
                  floatingLabelText: "Email",
                  onChange: c("email"),
                  defaultValue: n.email,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.e, {
                  label: "Continue",
                  primary: !0,
                  style: o.button,
                  onClick: function (e) {
                    e.preventDefault(), t();
                  },
                }),
              ],
            }),
          });
        },
        x = { button: { margin: 15 } },
        O = function (e) {
          var t = e.nextStep,
            n = e.values,
            c = e.handleChange,
            i = e.prevStep;
          return Object(a.jsx)(u.d, {
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(u.a, { title: "Enter User Details" }),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  hintText: "Enter Your Occupation",
                  floatingLabelText: "Occupation",
                  onChange: c("occupation"),
                  defaultValue: n.occupation,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  hintText: "Enter Your City",
                  floatingLabelText: "City",
                  onChange: c("city"),
                  defaultValue: n.city,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.f, {
                  style: { width: "90%" },
                  fullWidth: !0,
                  hintText: "Enter Your Bio",
                  floatingLabelText: "Bio",
                  onChange: c("bio"),
                  defaultValue: n.bio,
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.e, {
                  label: "Back",
                  primary: !1,
                  style: x.button,
                  onClick: function (e) {
                    e.preventDefault(), i();
                  },
                }),
                Object(a.jsx)(u.e, {
                  label: "Continue",
                  primary: !0,
                  style: x.button,
                  onClick: function (e) {
                    e.preventDefault(), t();
                  },
                }),
              ],
            }),
          });
        },
        f = { button: { margin: 15 } },
        p = function (e) {
          var t = e.nextStep,
            n = e.values,
            c = (e.handleChange, e.prevStep);
          return Object(a.jsx)(u.d, {
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(u.a, { title: "Confirm User Data" }),
                Object(a.jsxs)(u.b, {
                  children: [
                    Object(a.jsx)(u.c, {
                      primaryText: "First Name",
                      secondaryText: n.firstName,
                    }),
                    Object(a.jsx)(u.c, {
                      primaryText: "Last Name",
                      secondaryText: n.lastName,
                    }),
                    Object(a.jsx)(u.c, {
                      primaryText: "Email",
                      secondaryText: n.email,
                    }),
                    Object(a.jsx)(u.c, {
                      primaryText: "Occupation",
                      secondaryText: n.occupation,
                    }),
                    Object(a.jsx)(u.c, {
                      primaryText: "City",
                      secondaryText: n.city,
                    }),
                    Object(a.jsx)(u.c, {
                      primaryText: "Bio",
                      secondaryText: n.bio,
                    }),
                  ],
                }),
                Object(a.jsx)("br", {}),
                Object(a.jsx)(u.e, {
                  label: "Back",
                  primary: !1,
                  style: f.button,
                  onClick: function (e) {
                    e.preventDefault(), c();
                  },
                }),
                Object(a.jsx)(u.e, {
                  label: "Confirm & Continue",
                  primary: !0,
                  style: f.button,
                  onClick: function (e) {
                    e.preventDefault(), t();
                  },
                }),
              ],
            }),
          });
        },
        h = function () {
          return Object(a.jsx)(u.d, {
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(u.a, { title: "Success" }),
                Object(a.jsx)("h1", {
                  children: "Thank you for you submission",
                }),
                Object(a.jsx)("p", {
                  children: "You will get email with further instructions",
                }),
              ],
            }),
          });
        },
        d = function () {
          var e = Object(c.useState)({
              step: 1,
              fistName: "",
              lastName: "",
              emailName: "",
              occupation: "",
              city: "",
              bio: "",
            }),
            t = Object(j.a)(e, 2),
            n = t[0],
            i = t[1],
            r = function () {
              i(function (e) {
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { step: (e.step += 1) }
                );
              });
            },
            u = function () {
              i(function (e) {
                return Object(l.a)(
                  Object(l.a)({}, e),
                  {},
                  { step: (e.step -= 1) }
                );
              });
            },
            o = function (e) {
              return function (t) {
                i(function (n) {
                  return Object(l.a)(
                    Object(l.a)({}, n),
                    {},
                    Object(s.a)({}, e, t.target.value)
                  );
                });
              };
            };
          switch (n.step) {
            case 1:
              return Object(a.jsx)(b, {
                nextStep: r,
                handleChange: o,
                values: n,
              });
            case 2:
              return Object(a.jsx)(O, {
                nextStep: r,
                handleChange: o,
                values: n,
                prevStep: u,
              });
            case 3:
              return Object(a.jsx)(p, { nextStep: r, values: n, prevStep: u });
            case 4:
              return Object(a.jsx)(h, {});
            default:
              return Object(a.jsx)("div", {
                children: "You should not see this step",
              });
          }
        };
      var m = function () {
        return Object(a.jsx)("div", {
          className: "App",
          children: Object(a.jsx)(d, {}),
        });
      };
      r.a.render(Object(a.jsx)(m, {}), document.getElementById("root"));
    },
  },
  [[382, 1, 2]],
]);
//# sourceMappingURL=main.22b58dd9.chunk.js.map
