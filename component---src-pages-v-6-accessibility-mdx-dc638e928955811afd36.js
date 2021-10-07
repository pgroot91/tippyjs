(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{llaE:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t("k1TG"),s=t("aXB2"),c=(t("q1tI"),t("7ljp")),b=t("7oih");t("qKvR");const p={},m={_frontmatter:p},r=b.a;function l(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(c.b)(r,Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Tooltip and popovers are usually not mouse-only UI elements. If vital\nfunctionality or information is contained within them, they should be accessible\nto keyboard and touch inputs so that users who navigate interfaces without using\na mouse are not locked out. This is especially true for people with disabilities\nsuch as low vision who rely on screen reader technology to assist them with\nusing an application."),Object(c.b)("p",null,"To ensure these users get the best possible experience, Tippy already employs\nbaked-in defaults to ensure accessibility. However, some special consideration\nshould be taken into account when using the library so you can be aware of\npotential accessibility problems that may arise."),Object(c.b)("h3",null,"Use natively focusable elements"),Object(c.b)("p",null,"Tooltips should only be applied to natively focusable elements like ",Object(c.b)("inlineCode",{parentName:"p"},"<button>"),"\nor ",Object(c.b)("inlineCode",{parentName:"p"},"<input>"),". If you are using a ",Object(c.b)("inlineCode",{parentName:"p"},"<div>")," or ",Object(c.b)("inlineCode",{parentName:"p"},"<span>")," element, ensure you add\n",Object(c.b)("inlineCode",{parentName:"p"},'tabindex="0"')," so that it can receive focus."),Object(c.b)("h3",null,"Mouse, keyboard, and touch input"),Object(c.b)("p",null,"The default trigger for tooltips is ",Object(c.b)("inlineCode",{parentName:"p"},'"mouseenter focus"')," This means both a hover\nvia mouse and focus via keyboard navigation will trigger a tooltip. Both of\nthese events also cover touch devices via a tap, with some mobile browsers\nfiring ",Object(c.b)("inlineCode",{parentName:"p"},"mouseenter")," and others ",Object(c.b)("inlineCode",{parentName:"p"},"focus")," (or both)."),Object(c.b)("h3",null,"Announcing tooltip content"),Object(c.b)("p",null,"Non-interactive tooltips give the reference element an ",Object(c.b)("inlineCode",{parentName:"p"},"aria-describedby"),"\nattribute once they show:"),Object(c.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"0"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"grvsc-code"}),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"aria-describedby"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"tippy-1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'">'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"Text"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"id"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"tippy-1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'"'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"})," "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"data-tippy-root"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"  "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk3"}),"\x3c!-- inner elements --\x3e")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")))),Object(c.b)("p",null,"This allows screen reader software to announce the tooltip content describing\nthe reference element once it's in focus."),Object(c.b)("h3",null,"Interactivity"),Object(c.b)("p",null,"Tippy uses two techniques to ensure interactive popovers are accessible:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"aria-expanded")," attribute"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'appendTo: "parent"'))),Object(c.b)("p",null,"This means once the reference element has focus, the assistive technology will\nlet the user know it has an expandable popover attached to it."),Object(c.b)("p",null,"Once they open it, elements within the tippy can be tabbed to immediately once\nfocus has left the reference element. This relies on there being no more\nfocusable sibling elements after the reference element itself."),Object(c.b)("p",null,"Before opening the popover:"),Object(c.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"1"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"grvsc-code"}),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"id"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"parent"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'">')),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"  "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"aria-expanded"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"false"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'">'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"Text"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")))),Object(c.b)("p",null,"After opening the popover:"),Object(c.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"2"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"grvsc-code"}),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"id"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"parent"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'">')),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"  "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"aria-expanded"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"true"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'">'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"Text"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"button"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"  "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"<"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"id"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'="'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk11"}),"tippy-1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),'"'),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"})," "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk8"}),"data-tippy-root"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"    "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk3"}),"\x3c!-- inner elements, with focusable content --\x3e")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk1"}),"  "),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"grvsc-line"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),"</"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk14"}),"div"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mtk5"}),">")))),Object(c.b)("p",null,"You should wrap the reference element in its own parent element (",Object(c.b)("inlineCode",{parentName:"p"},"<div>")," or\n",Object(c.b)("inlineCode",{parentName:"p"},"<span>"),") if it's not the only focusable sibling element."),Object(c.b)("h4",null,"Clipping issues"),Object(c.b)("p",null,"Sometimes, this behavior won't work for your app due to clipping issues. In this\ncase, you need to specify a custom ",Object(c.b)("inlineCode",{parentName:"p"},"appendTo")," element outside of the parent node\ncontext and use a focus management solution to handle keyboard navigation.\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../faq/#my-tooltip-appears-cut-off-or-is-not-showing-at-all"}),"More details here"),"."),Object(c.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n  .moonlight-ii {\n    background-color: #222436;\n    color: #c8d3f5;\n  }\n  .moonlight-ii .mtk5 { color: #86E1FC; }\n  .moonlight-ii .mtk14 { color: #FF757F; }\n  .moonlight-ii .mtk8 { color: #C099FF; }\n  .moonlight-ii .mtk11 { color: #C3E88D; }\n  .moonlight-ii .mtk1 { color: #C8D3F5; }\n  .moonlight-ii .mtk3 { color: #7A88CF; }\n"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-accessibility-mdx-dc638e928955811afd36.js.map