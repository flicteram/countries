(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(15),a=n.n(s),r=(n(22),n(9)),i=n(0),j=Object(c.createContext)();function o(e){var t=e.children,n=Object(c.useState)([]),s=Object(r.a)(n,2),a=s[0],o=s[1],l=Object(c.useState)(""),u=Object(r.a)(l,2),A=u[0],h=u[1],d=Object(c.useState)(""),O=Object(r.a)(d,2),b=O[0],x=O[1],g=Object(c.useState)(!0),p=Object(r.a)(g,2),m=p[0],f=p[1],v=Object(c.useState)(!1),C=Object(r.a)(v,2),F=C[0],B=C[1];console.log(a);return Object(c.useEffect)((function(){0===b.length?fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){return f(!1),o(e)})):a.map((function(e){return e.name.toLowerCase()})).includes(b.toLowerCase())&&fetch("https://restcountries.com/v2/name/".concat(b)).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[b]),Object(c.useEffect)((function(){fetch("https://restcountries.com/v2/continent/".concat(A)).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[A]),Object(i.jsx)(j.Provider,{value:{country:a,isDark:F,search:b,handleSelect:function(e){h(e.target.value)},handleSearch:function(e){x(e.target.value)},handleDark:function(){B(!F)},isLoading:m},children:t})}var l=function(){var e=Object(c.useContext)(j),t=e.handleDark,n=e.isDark;return Object(i.jsxs)("nav",{className:n?"navDark":"navLight",children:[Object(i.jsx)("h1",{children:"Where is the world?"}),n?Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJOSURBVFiF7dfPi01hGAfwjx/FZkwsx8xFsiAUWRJ27KekYUOThZCSssFCZM1GqfnlfxhJmYys2GCj/Iqp2cn40dzLmGvxvqd7u9573XPujY1vnd7O+57n+zzvc877fJ9DZ5jG4w45OsJPVLG0KEFhw25heYf2n7BMyMI/CWB3HAsHsKSAzSocxFb0x7kZvMBdzBUN5k9YhwlUhB2nrgruYH27pPUZ2IRePEk8N4wbWIEFPMQUPsT1fuzDXuG1VnAGtxJcO/ENLxsXXsdd3MOuuvmrcX4RoxhosaEBjMRnq7je4Hgyzr9LGZ8UvuoqvgpHdDjelzHUwnEjDmM+2p4QMv053s/hVDPD1biIc8I7L0ejIzmcZxgUMlHBRpzFJaxpl2AsOh8r4DzDaOSYyGvYI+z+h5CJohjAdyELvXkMB4XIH3TgPMP9yHUotdhMC7bFcaoLAWQc2/ME0BfHmS4EkHH0pRabBZDV9iKluhEZR1IvmgUwG8e1XQgg45hNLTYL4Hkc93chgIzjWR6j7BguyCEsCZSEo1wRVDQXRhQsInUYjxzj7RpkpfiCUESyen60gPOhaDsvFLPzuKxFKU6J0TE1McoTxJBa8MN+F6PTKaNX0nJ8Ra3hmNC6NJfU0l7Ftbq1ejl+m03Wn/MNQnqeJoiP4yZWCq34tFDh3kfCktCQ7BEakrIgubcTXDuELLxpsZEkSoK6ZRKdusqCepbaJS1S6XpwQGhKs+4oa0on8aUAZ2Fsxpa/6bARH4WT0w3NKIT//4aPhH/DxaIEvwCBa5ppNlRrnwAAAABJRU5ErkJggg==",className:"toggle",onClick:t}):Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANASURBVFiFvddbiFVlFAfw3+RIM44jc4QmQx+UcZDKGh8yghASpOj+UFHUU2UmVPSWUVFYD4GYLwlONQWRT1FYmUF0oRuUltANgtLu0yROGIKRWdbD+raz2+2zzz5nhv5v32Vd9rfW+q+1u9THPFyOCzCCxehLZ0fwLT7Bm9iFw23orsQyPIlJ7MDNWI7B3J1BnJXOXkh3xzA8HcO92IwDuAtz2pDtw4Ykuwk97Rpfis+wDY12hfFEkmtgVIRmqK7wCvyAWzownGEEs/FaWq9LOle0ElyaLq6ZhvE88jmwJulu+hI9+Bi3zpDxMtwoQttbdrhZxLwuturspUZFYv4Ly0TGViXc81iQWz+FiztwoJFsDcOstLkJO/FGheASnIe30/otfIm/cne6koGjFXp+RzeuwEsEwx3Uus67RQKN4Wd8g59ETB8UGf8r9uMQXhGsWYa+ZLMfbhDsVWbwaZyT1ieJr74tE0x7O/AhLhQvkMlempx7qIkTL+JagjRuanLpSpE0Z2JLzkCG+5Oik5vIz8U7yitrLR6DPYLHq7Ar8zaH0zCOgRayC0X9zy3sj+ADIhanVCiYjx/Fc+dxOx5pYTzDdlxT2BvEgW5BCpOFw17ciQmR6Z/ieOHO6Xi/pgN7cUZh7yDmZF9VjG0ex/3369tFF/4u2f8j86TTEGyp6cB2XF2idx/sxtktFOzEdYW9BSIJW7XrRcqTcDneg8fFJFOGfBl+J+Kex33JuaoyfFd5a18vveD16hHRRfged5gqvS5BRB+l8yxMs3EZPsfGJs49h0toj4oXC/KYSM5MiArZiFcFFX8tqPhlrGqiqyFoPBtqjYkZrgob8EBu3S++NI+sGVVVFdwr2v8JDPv/2vGASMqFTMXsKxHvhysErxJdMMNvONaBA4+K/jNePOgR0+u6DpTWxbmi7LubXRgys0NpHquwUiT9CcwqXDokfq2eFb9be2fI+Mpk608xyLTEkAjHqKDMTjGAZ8Szzyu70KzJ7Bfz32F8gbvlarYGGrhHTET7cL5p/KwOC56YFNPPWtE7TjVV7/MFXa8XDDcu6nxRK+WtCCOPfkGdq8Uv1hLxKsfwiyjRPXhdTM5H6ij9B2F8rToQ1ZBzAAAAAElFTkSuQmCC",className:"toggle",onClick:t})]})},u=n(2);var A=function(e){var t=Object(u.f)(),n=Object(c.useContext)(j),s=n.country,a=n.isDark,r=Object(u.g)().countryId,o=s.find((function(e){return e.numericCode===r}));return Object(i.jsxs)("div",{className:"singleCountry",children:[Object(i.jsxs)("div",{className:"flag",children:[Object(i.jsx)("button",{className:a?"buttonDark":"buttonLight",onClick:function(){return t.push("/countries")},children:"Back"}),Object(i.jsx)("img",{src:o.flag,alt:o.name})]}),Object(i.jsxs)("div",{className:"detailsFull",children:[Object(i.jsxs)("div",{className:"details1",children:[Object(i.jsx)("h2",{children:o.name}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Native Name"}),": ",o.nativeName]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Population"}),": ",o.population.toLocaleString("en-US")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Region"}),": ",o.region]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Capital"}),": ",o.capital]})]}),Object(i.jsxs)("div",{className:"details2",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Top Level Domain"}),": ",o.topLevelDomain]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Currencies"}),": ",o.currencies.map((function(e){return e.name}))]}),1===o.languages.length?Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Language"}),": ",o.languages.map((function(e){return e.name})).join(",")]}):Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"Languages"}),": ",o.languages.map((function(e){return e.name})).join(", ")]})]})]}),Object(i.jsxs)("div",{className:"borderCountry",children:[Object(i.jsx)("h4",{children:"Border Countries:"}),Object.keys(o).includes("borders")?o.borders.map((function(e,t){return Object(i.jsx)("p",{children:e},t)})):Object(i.jsx)("p",{children:"None"})]})]})};var h=function(e){var t=e.flag,n=e.name,s=e.population,a=e.region,r=e.capital,o=e.alt,l=Object(c.useContext)(j).isDark;return Object(i.jsxs)("div",{className:l?"countriesDark":"countries",children:[Object(i.jsx)("img",{src:t,alt:o}),Object(i.jsxs)("div",{className:l?"countriesInfoDark":"countriesInfo",children:[Object(i.jsx)("h3",{children:n}),Object(i.jsxs)("p",{children:["Population: ",s]}),Object(i.jsxs)("p",{children:["Region: ",a]}),Object(i.jsxs)("p",{children:["Capital: ",r]})]})]})};var d=function(){var e=Object(c.useContext)(j).handleSelect;return Object(i.jsxs)("select",{onChange:function(t){return e(t)},children:[Object(i.jsx)("option",{value:"",hidden:!0,children:"Filter by Region"}),Object(i.jsx)("option",{value:"asia",children:"Asia"}),Object(i.jsx)("option",{value:"africa",children:"Africa"}),Object(i.jsx)("option",{value:"europe",children:"Europe"}),Object(i.jsx)("option",{value:"americas",children:"America"}),Object(i.jsx)("option",{value:"oceania",children:"Oceania"})]})};var O=function(){var e=Object(c.useContext)(j),t=e.handleSearch,n=e.isDark,s=e.search;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{className:n?"inputDark":"inputLight",type:"text",placeholder:"e.g. Romania",onChange:function(e){return t(e)},value:s}),Object(i.jsx)("img",{className:"loop",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAiQAAAIkBOZtwtgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEzSURBVDiNlZK7SkNREEXXnjxACCJKQirt7HylESxErLWx8RP8AxFLMbVVqhRBsPCBD/wGf0CwFWwsxNbCIjljc2843BxJsmGaNTObc2ZG7k4uqbJrhAOglqF+QC8wuPS4MFbGa4Z1wE6BWXfPeRVKh0J3wFLO48DdMawLbKYKMqOG0CNQTeRKe2DH/zVHhduGnY1ww3pAeZxB9tKrUQbm7v3kgEb1JWkhBgakp5tQgG+gWTSwSQ0M1oD3osGHpNa4ZklzwMDdf4u5mtATiRUVBtiF0n7yDoAtw66BxcT6ZgzrCD0L3QMbcV75hUpqGNYGFOAN9GN4C5gPWE8Mjhw/Mew8ENru/gqQOpgKsA7lHaAZ8brQA7Bs2C2wOvzCpFEwuQFWpjJImQxnMI0k1Q27AD7/AM3NXCmZN1w+AAAAAElFTkSuQmCC"})]})},b=n(8);var x=function(){var e=Object(c.useContext)(j),t=e.country,n=e.isLoading,s="";return t.length>0&&(s=Object.values(t).map((function(e,t){return Object(i.jsx)(b.b,{to:"/countries/".concat(e.numericCode),children:Object(i.jsx)(h,{flag:e.flag,population:e.population.toLocaleString("en-US"),region:e.region,capital:e.capital,name:e.name,alt:"".concat(e.name," flag")})},t)}))),Object(i.jsxs)("div",{className:"firstPageContainer",children:[Object(i.jsxs)("div",{className:"searchSelect",children:[Object(i.jsx)(O,{}),Object(i.jsx)(d,{})]}),Object(i.jsx)("div",{className:"countriesFlex",children:!0===n?Object(i.jsx)("h1",{children:"Loading..."}):s})]})};var g=function(){var e=Object(c.useContext)(j).isDark;return Object(i.jsxs)("div",{className:e?"containerDark":"container",children:[Object(i.jsx)(l,{}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/countries",children:Object(i.jsx)(x,{})}),Object(i.jsx)(u.a,{path:"/countries/:countryId",children:Object(i.jsx)(A,{})})]})]})};a.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(o,{children:Object(i.jsx)(g,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.021b6c5b.chunk.js.map