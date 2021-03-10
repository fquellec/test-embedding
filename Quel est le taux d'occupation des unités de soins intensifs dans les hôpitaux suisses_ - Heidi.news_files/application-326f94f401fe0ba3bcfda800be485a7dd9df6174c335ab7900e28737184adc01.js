function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function attachToggleAngel(){var e=document.getElementById("lp__angel-deeper-toggle"),t=document.getElementById("lp__angel-content-toggle");e&&e.addEventListener("click",function(){t&&t.classList.toggle("lp__angel-content-toggle--active")})}function copyClipboard(){for(var e=document.getElementsByClassName("share-button__copy-clipboard"),t=0;t<e.length;t++)e[t].onclick=function(){for(var e=this.parentElement,t=0;t<e.childNodes.length;t++)"share-button__textarea"==e.childNodes[t].className&&(input=e.childNodes[t],input.select(),document.execCommand("copy"),FlashMessages.notice("Copi\xe9 !"))}}function attachFlashClosing(){for(var e=document.getElementsByClassName("flash__cross"),t=0;t<e.length;t++)e[t].onclick=function(){this.parentElement.parentElement.remove()}}function createInputValidator(e){return function(t){var n=function(){t.parentElement.setAttribute("data-validated",e(t.value))};t.addEventListener("input",n),n()}}function attachHideNavOnScroll(){var e=0,t=document.querySelector("header");window.addEventListener("scroll",function(){var n=window.pageYOffset||document.documentElement.scrollTop;n>e?t.classList.add("hidden"):t.classList.remove("hidden"),window.scrollY<250&&(t.className=""),e=n},!1)}function scrollToTop(){0!=document.body.scrollTop||0!=document.documentElement.scrollTop?(window.scrollBy(0,-50),timeOut=setTimeout("scrollToTop()",8)):clearTimeout(timeOut)}function attachMenuToggling(){var e=document.getElementsByClassName("toggle-menu");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){document.body.classList.toggle("menu-active"),document.body.classList.contains("menu-active")&&document.getElementById("profil-button--toggle").classList.remove("profil-menu--active")})}function attachProfilMenuToggling(){var e=document.getElementById("profil-button--toggle");e.addEventListener("click",function(){e.classList.toggle("profil-menu--active"),e.classList.contains("profil-menu--active")&&document.body.classList.remove("menu-active")})}function attachPanelToggling(){for(var e=document.getElementsByClassName("panel--toggle"),t=0;t<e.length;t++)e[t].onclick=function(){this.parentElement.classList.toggle("panel--open")}}function attachPlanToggling(){for(var e=document.getElementsByClassName("plan__toggle"),t=0;t<e.length;t++)e[t].onclick=function(){this.parentElement.parentElement.classList.toggle("plan--is-open")}}function shareAttachAll(){for(var e=document.getElementsByClassName("share-button"),t=0;t<e.length;t++)e[t].onclick=function(){for(var t=0;t<e.length;t++)this!=e[t]&&e[t].classList.contains("share-button--active")&&e[t].classList.remove("share-button--active");this.classList.toggle("share-button--active")}}var Mustache=this.Mustache,Barber=this.Barber={};Barber.launchWhenDomIsReady=function(){"loading"!=document.readyState?Barber.launch():document.addEventListener("DOMContentLoaded",function(){Barber.launch()})},Barber.launch=function(e,t){var n=(e||document).querySelectorAll("[data-barber]");Array.prototype.forEach.call(n,function(e){Barber.start(e,t)})},Barber.start=function(e,t){e.getAttribute("data-barber").split(" ").forEach(function(n){var r=Barber.stringToFunction(n);r instanceof Function?Barber.instanciate(r,e,t):console.warn("Controller "+n+" is not a function.")})},Barber.instanciate=function(e,t,n){try{controller=Object.create(e.prototype),controller.container=t,controller.parent=n,Barber.initialize(controller,t),e.call(controller,t)}catch(r){console.error(r)}},Barber.stringToFunction=function(e){for(var t=window,n=e.split("."),r=0;r<n.length;r++)if(!(t=t[n[r]]))return null;return t},Barber.initialize=function(e,t){Barber.listenEvents(t,e),Barber.assignRoles(t,e)},Barber.listenEvents=function(e,t){for(var n=e.querySelectorAll("[data-event]"),r=0;r<n.length;r++)n[r].getAttribute("data-event").split(" ").forEach(function(e){var o=e.split("->");Barber.listenEvent(t,n[r],o[0],o[1])})},Barber.listenEvent=function(e,t,n,r){e[r]instanceof Function&&t.addEventListener(n,e[r].bind(e))},Barber.findRoles=function(e){for(var t={},n=e.querySelectorAll("[data-role]"),r=0;r<n.length;r++){var o=n[r].getAttribute("data-role");t[o]?t[o].push(n[r]):t[o]=[n[r]]}return t},Barber.assignRoles=function(e,t){for(var n in t.roles=Barber.findRoles(e),t.roles)1==t.roles[n].length&&(t[n]=t.roles[n][0])},Barber.render=function(e,t,n,r){var o=Barber.partials();o[e]?(n.innerHTML=Mustache.render(o[e],t,o),Barber.initialize(r,n),Barber.launch(n,r)):console.error("Partial "+e+" does not exists.")},Barber.partials=function(){var e=document.querySelectorAll('[type="x-tmpl-mustache"][data-partial]');return Array.prototype.reduce.call(e,function(e,t){return e[t.getAttribute("data-partial")]=t.innerHTML,e},{})},UnobstrusiveLinks=function(e){var t=(e||document).querySelectorAll("a[data-method], a[data-confirm]");Array.prototype.forEach.call(t,function(e){e.addEventListener("click",UnobstrusiveLinks.click)})},UnobstrusiveLinks.click=function(e){UnobstrusiveLinks.confirm(e)&&UnobstrusiveLinks.method(e)},UnobstrusiveLinks.confirm=function(e){var t=e.currentTarget.getAttribute("data-confirm");return!(t&&!confirm(t))||(e.preventDefault(),!1)},UnobstrusiveLinks.method=function(e){if(e.currentTarget.getAttribute("data-method")){e.preventDefault();var t=document.createElement("form");t.setAttribute("action",e.currentTarget.getAttribute("href")),t.setAttribute("method","post");var n=document.createElement("input");n.setAttribute("name","_method"),n.setAttribute("type","hidden"),n.value=e.currentTarget.getAttribute("data-method"),t.appendChild(n);var r=document.createElement("input");r.setAttribute("name",document.querySelector("meta[name=csrf-param]").content),r.setAttribute("type","hidden"),r.value=document.querySelector("meta[name=csrf-token]").content,t.appendChild(r),document.body.appendChild(t),t.submit()}},function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";function e(e,t){if(t)if(t.length)for(var n,r=0;n=t[r];r+=1)y(e,n);else y(e,t)}var t="undefined"!=typeof window,n=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),r=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a={elements_selector:"img",container:n||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},i=function(e){return _extends({},a,e)},s="data-",c="was-processed",l="ll-timeout",d="true",u=function(e,t){return e.getAttribute(s+t)},m=function(e,t,n){var r=s+t;null!==n?e.setAttribute(r,n):e.removeAttribute(r)},f=function(e){return m(e,c,d)},v=function(e){return u(e,c)===d},p=function(e,t){return m(e,l,t)},g=function(e){return u(e,l)},h=function(e){return e.filter(function(e){return!v(e)})},b=function(e,t){return e.filter(function(e){return e!==t})},y=function(e,t){var n,r="LazyLoad::Initialized",o=new e(t);try{n=new CustomEvent(r,{detail:{instance:o}})}catch(a){(n=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,{instance:o})}window.dispatchEvent(n)},_=function(e,t){e&&e(t)},L=function(e,t){e._loadingCount+=t,0===e._elements.length&&0===e._loadingCount&&_(e._settings.callback_finish)},E=function(e){for(var t,n=[],r=0;t=e.children[r];r+=1)"SOURCE"===t.tagName&&n.push(t);return n},A=function(e,t,n){n&&e.setAttribute(t,n)},k=function(e,t){A(e,"sizes",u(e,t.data_sizes)),A(e,"srcset",u(e,t.data_srcset)),A(e,"src",u(e,t.data_src))},S=function(e,t){var n=u(e,t.data_src),r=u(e,t.data_bg);n&&(e.style.backgroundImage='url("'.concat(n,'")')),r&&(e.style.backgroundImage=r)},w={IMG:function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&E(n).forEach(function(e){k(e,t)});k(e,t)},IFRAME:function(e,t){A(e,"src",u(e,t.data_src))},VIDEO:function(e,t){E(e).forEach(function(e){A(e,"src",u(e,t.data_src))}),A(e,"src",u(e,t.data_src)),e.load()}},T=function(e,t){var n=t._settings,r=e.tagName,o=w[r];if(o)return o(e,n),L(t,1),void(t._elements=b(t._elements,e));S(e,n)},C=function(e,t){o?e.classList.add(t):e.className+=(e.className?" ":"")+t},M=function(e,t){o?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},q="load",B="loadeddata",I="error",F=function(e,t,n){e.addEventListener(t,n)},x=function(e,t,n){e.removeEventListener(t,n)},O=function(e,t,n){F(e,q,t),F(e,B,t),F(e,I,n)},N=function(e,t,n){x(e,q,t),x(e,B,t),x(e,I,n)},H=function(e,t,n){var r=n._settings,o=t?r.class_loaded:r.class_error,a=t?r.callback_loaded:r.callback_error,i=e.target;M(i,r.class_loading),C(i,o),_(a,i),L(n,-1)},R=function(e,t){var n=function o(n){H(n,!0,t),N(e,o,r)},r=function a(r){H(r,!1,t),N(e,n,a)};O(e,n,r)},P=["IMG","IFRAME","VIDEO"],D=function(e,t){var n=t._settings;_(n.callback_enter,e),n.load_delay?U(e,t):V(e,t)},V=function(e,t){var n=t._observer;X(e,t),n&&t._settings.auto_unobserve&&n.unobserve(e)},z=function(e,t){var n=t._settings;_(n.callback_exit,e),n.load_delay&&j(e)},j=function(e){var t=g(e);t&&(clearTimeout(t),p(e,null))},U=function(e,t){var n=t._settings.load_delay,r=g(e);r||(r=setTimeout(function(){V(e,t),j(e)},n),p(e,r))},X=function(e,t,n){var r=t._settings;!n&&v(e)||(P.indexOf(e.tagName)>-1&&(R(e,t),C(e,r.class_loading)),T(e,t),f(e),_(r.callback_reveal,e),_(r.callback_set,e))},G=function(e){return e.isIntersecting||e.intersectionRatio>0},J=function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}},$=function(e){return!!r&&(e._observer=new IntersectionObserver(function(t){t.forEach(function(t){return G(t)?D(t.target,e):z(t.target,e)})},J(e._settings)),!0)},W=["IMG","IFRAME"],Y=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},Q=function(e){e._elements.forEach(function(t){-1!==W.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),X(t,e))})},K=function(e){return Array.prototype.slice.call(e)},Z=function(e){return e.container.querySelectorAll(e.elements_selector)},ee=function(e,t){return h(K(e||Z(t)))},te=function(e,t){this._settings=i(e),this._loadingCount=0,$(this),this.update(t)};return te.prototype={update:function(e){var t=this,r=this._settings;this._elements=ee(e,r),!n&&this._observer?(Y(r)&&(Q(this),this._elements=ee(e,r)),this._elements.forEach(function(e){t._observer.observe(e)})):this.loadAll()},destroy:function(){var e=this;this._observer&&(this._elements.forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null},load:function(e,t){X(e,this,t)},loadAll:function(){var e=this;this._elements.forEach(function(t){V(t,e)})}},t&&e(te,window.lazyLoadOptions),te});var Addresses={attach:function(){for(var e=document.querySelectorAll('[data-widget="address-selector"]'),t=0;t<e.length;++t){var n=e[t];Addresses.loadAddressBook();var r=n.querySelector(".address");r.insertAdjacentHTML("afterbegin",'<a href="#" class="select-address">Modifier</a>');var o=r.querySelector(".select-address"),a={container:r,kind:n.getAttribute("data-kind"),button:o,currentId:r.getAttribute("data-id")};a.name="shipping"===a.kind?"adresse de livraison":"adresse de facturation",o.addEventListener("click",Addresses.changeAddress(a))}},changeAddress:function(e){return function(){e.modal=Modal.open({title:"Modifier mon "+e.name,loaded:Addresses.modalLoaded(e),exited:Addresses.modalExited(e)})}},modalLoaded:function(){return function(e){for(var t="",n=0;n<Addresses.addressBook.length;++n){var r=Addresses.addressBook[n];t+='<option value="'+r.id+'">'+r.recipient_name+" "+r.address_line1+" "+r.address_line2+" "+r.zip_code+" "+r.city+"</option>"}e.content.innerHTML='<form method="post" class="simple_form form_validation"><p>J\'utilise une de mes adresses :</p><div class="select-container"><div class="select-wrapper"><select name="address">'+t+"</select></div></div><p>J'ajoute une nouvelle adresse :</p>"+Addresses.template+"<button type='submit' class='btn btn--red'>Valider</button></form>"}},modalExited:function(){return function(){}},loadAddressBook:function(){Addresses.addressBook||Common.fetch("/account/addresses").then(function(e){return e.json()}).then(function(e){Addresses.addressBook=e.addresses,Addresses.template=e.template})["catch"](FlashMessages.reportError("Impossible de r\xe9cup\xe9rer le carnet d'adresses"))},getAddressInputs:function(e,t){var n=e+"["+t+"_address_attributes]";return{name:document.querySelector('[name="'+n+'[recipient_name]"'),line1:document.querySelector('[name="'+n+'[address_line1]"'),line2:document.querySelector('[name="'+n+'[address_line2]"'),zip_code:document.querySelector('[name="'+n+'[zip_code]"'),city:document.querySelector('[name="'+n+'[city]"'),country:document.querySelector('[name="'+n+'[country]"')}},isAddressIncomplete:function(e){return!(e.name.value.length&&e.line1.value.length&&e.zip_code.value.length&&e.city.value.length&&e.country.value.length)}};document.addEventListener("DOMContentLoaded",Addresses.attach),document.addEventListener("DOMContentLoaded",function(){attachToggleAngel()}),Article={},Article.Cover=function(){},Article.Cover.prototype.toggleCaption=function(){this.container.classList.toggle("post__image-cover--active")};var CartPrelaunch={form:function(e,t){var n=document.querySelector(e);n.addEventListener("submit",CartPrelaunch.submit(n,t))},clearErrors:function(){for(var e=document.querySelectorAll(".input, .form-group"),t=0;t<e.length;++t){var n=e[t].querySelector(".errors");n&&n.remove()}},submit:function(e,t){return function(n){CartPrelaunch.clearErrors();var r=e.querySelectorAll("input"),o={};for(r=0;i<r.length;++i){if((s=r[i]).getAttribute("novalidate"))return;s.required&&("checkbox"!==s.type||s.checked?""==s.value.length&&(o[s.name]={item:s,errors:[{code:"required"}]}):o[s.name]={item:s,errors:[{code:"terms_of_service"}]})}for(var a=Object.keys(o),i=0;i<a.length;++i){var s=o[l=a[i]].item,c=o[l].errors,l=s.placeholder;if(!c)return;var d=CartPrelaunch.errorMessage[c[0].code](s.placeholder),u=s.parentNode.querySelector(".errors");u&&u.remove(),s.parentNode.insertAdjacentHTML("beforeend",'<div class="errors"><p class="input-error">'+d+"</p></div>")}Object.keys(o).length?n.preventDefault():t.onValid&&t.onValid(n)}},errorMessage:{required:function(e){return"Le champ "+e.toLowerCase()+" est obligatoire."},terms_of_service:function(){return"Veuillez valider les conditions g\xe9n\xe9rales d'utilisation."}}};document.addEventListener("DOMContentLoaded",function(){copyClipboard()});var Common={fetch:function(e,t){return(t=t||{}).credentials="same-origin",fetch(e,t)},Scroll:{currentScrollTop:function(){return Common.Scroll.html.scrollTop||Common.Scroll.body.scrollTop}},Animations:{scrollTo:function(e,t){TinyAnimate.animate(Common.Scroll.currentScrollTop(),e,t,function(e){window.scrollTo(0,e)},"easeInOutQuart")},height:function(e,t,n,r,o){TinyAnimate.animateCSS(e,"height","px",t,n,r,"easeInOutQuart",o)}}};document.addEventListener("DOMContentLoaded",function(){Common.Scroll.html=document.querySelector("html"),Common.Scroll.body=document.querySelector("body")});var Donations={fillAmount:function(){for(var e=document.querySelectorAll(".btn-amount-donation"),t=document.querySelector("#cart_prelaunch_donation_amount"),n=0;n<e.length;++n){e[n].addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-value");n?t.value=n:t.focus()})}}};FacebookPixel=function(){},FacebookPixel.prototype.trackLead=function(){fbq("track","Lead")},FacebookPixel.prototype.trackSubscribe=function(){fbq("track","Subscribe")},document.addEventListener("DOMContentLoaded",function(){attachFlashClosing()});var FlashMessages={add:function(e,t,n){var r=n||document.body;FlashMessages.clear(),r.insertAdjacentHTML("beforeend",'<div class="flash flash-'+t+'"><div class="flash__content"><p class="flash__p">'+e+'</p><div class="flash__cross"></div></div></div>')},notice:function(e,t){FlashMessages.add(e,"notice",t)},error:function(e,t){FlashMessages.add(e,"error",t)},clear:function(){for(var e=document.querySelectorAll(".flash"),t=0;t<e.length;++t)e[t].remove()},reportError:function(e){return function(){FlashMessages.error(e)}}},FormValidation={attachAll:function(){for(var e=document.querySelectorAll(".simple_form.form_validation"),t=0;t<e.length;++t)FormValidation.attachValidationTo(e[t])},attachValidationTo:function(e){for(var t=e.querySelectorAll("input"),n=0;n<t.length;++n){var r=t[n];r.classList.contains("input__email")?FormValidation.emailField(r,e):"password"===r.getAttribute("type")?FormValidation.passwordField(r,e):r.required&&FormValidation.requiredField(r,e)}},emailField:createInputValidator(function(e){return e&&/(^\w.*@\w+\.\w)/.test(e)}),passwordField:createInputValidator(function(e){return e.length>5}),requiredField:createInputValidator(function(e){return e.length>2}),updateSubmitStatus:function(e){for(var t=e.querySelectorAll("[required]"),n=!0,r=0;r<t.length;++r){var o=t[r];"checkbox"===o.type?n&=o.checked:n&="true"===o.parentElement.getAttribute("data-validated")}e.querySelector("[type=submit]").disabled=!n}};document.addEventListener("DOMContentLoaded",FormValidation.attachAll),Heidi=function(){UnobstrusiveLinks(document.documentElement)},document.addEventListener("DOMContentLoaded",function(){});var Loader={start:function(e,t){var n=t.variant||"",r=document.createElement("div");r.id=e,r.className="loader-container "+n;var o=t.text?"<p>"+t.text+"</p>":"";r.innerHTML=o+'<div class="loader"></div>',(t.container||document.body).appendChild(r)},stop:function(e){document.getElementById(e).remove()}},PostLoader={start:function(e,t){t.variant;var n=document.createElement("div");n.id=e,n.className="post-loader",n.innerHTML='<div class="post-loader__header"><div class="post-loader__categories loader-back-anim"></div><div class="post-loader__bookmark loader-back-anim"></div></div><div class="post-loader__title-1 loader-back-anim"></div><div class="post-loader__title-2 loader-back-anim"></div><div class="post-loader__author loader-back-anim"></div>',(t.container||document.body).appendChild(n)},stop:function(e){document.getElementById(e).remove()}};document.addEventListener("DOMContentLoaded",function(){null!=document.getElementById("profil-button--toggle")&&attachProfilMenuToggling(),attachMenuToggling()});var Modal={id:0,open:function(e){var t="modal-"+ ++Modal.id;document.body.insertAdjacentHTML("beforeend",'<div class="modal" id="'+t+'"><div class="modal-header"><h3>'+e.title+'</h3></div><div class="modal-content"></div></div>'),e.modal=document.querySelector("#"+t),e.content=e.modal.querySelector(".modal-content"),e.loaded&&e.loaded(e)}};Heidi.Newsletter=function(){},Heidi.Newsletter.prototype.subscribeEmail=function(e){var t=this.newsletterEmail.value;if(!t||!/\S+@\S+\.\S+/.test(t))return this.newsletterEmail.classList.add("invalid"),this.newsletterEmail.focus(),void window.scrollBy(0,this.newsletterEmail.getBoundingClientRect().y-128);this.newsletterEmail.classList.remove("invalid");var n=new XMLHttpRequest,r=e.currentTarget.getAttribute("data-newsletter-id");n.open("POST","/newsletters",!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("X-CSRF-Token",document.querySelector("meta[name=csrf-token]").content),n.send(JSON.stringify({newsletter_subscription:{email:t,newsletter_id:r}})),n.onload=function(){n.status>=200&&n.status<400&&(this.container.querySelector("#newsletter-form-"+r).outerHTML=n.response)}.bind(this)},document.addEventListener("DOMContentLoaded",function(){attachPanelToggling()}),Payment={},Payment.BillingEmail=function(){},Payment.BillingEmail.prototype.saveAddress=function(e){e.preventDefault();var t=new XMLHttpRequest;t.open("PUT",e.currentTarget.getAttribute("action"),!0),t.setRequestHeader("X-CSRF-Token",document.querySelector("meta[name=csrf-token]").content),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.onload=function(){this.step1.style.display="none",this.step2.style.display="block"}.bind(this),t.send(new FormData(e.currentTarget))},Payment.BillingEmail.prototype.confirmInvoice=function(){this.hiddenDonationInput.value=parseInt(this.donationAmount.value)},Payment.Form=function(){},Payment.Form.prototype.showCardForm=function(){this.cardForm.style.display="block",this.billForm.style.display="none",this.cardMenu.classList.toggle("active"),this.billMenu.classList.toggle("active")},Payment.Form.prototype.showBillForm=function(){this.cardForm.style.display="none",this.billForm.style.display="block",this.cardMenu.classList.toggle("active"),this.billMenu.classList.toggle("active")},document.addEventListener("DOMContentLoaded",function(){attachPlanToggling()}),Riddle=function(){this.selectGuess()},Riddle.prototype.selectGuess=function(){this.answerInput&&(this.answerLabel.innerText=Math.round(this.answerInput.value)+" %")},Riddle.prototype.submitGuess=function(e){var t=e.currentTarget.getAttribute("data-url"),n={guess:{answer:this.answerInput.value}},r=new XMLHttpRequest;r.open("POST",t,!0),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("X-CSRF-Token",document.querySelector("meta[name=csrf-token]").content),r.onload=function(){r.status>=200&&r.status<400&&(this.container.innerHTML=r.response)}.bind(this),r.send(JSON.stringify(n))},document.addEventListener("DOMContentLoaded",function(){shareAttachAll()});var HeidiStripe={createCardInput:function(e,t,n){function r(e){var t=document.getElementById(n);e.error?t.textContent=e.error.message:t.textContent=""}var o={base:{fontSize:"14px",color:"black"}},a=e.create("cardNumber",{style:o}),i=e.create("cardExpiry",{style:o}),s=e.create("cardCvc",{style:o});return a.mount(t.number),i.mount(t.expiry),s.mount(t.cvc),a.addEventListener("change",r),i.addEventListener("change",r),s.addEventListener("change",r),a.on("change",function(e){e.complete&&i.focus()}),i.on("change",function(e){e.complete&&s.focus()}),{number:a,expiry:i,cvc:s}},attachSubmitEvent:function(e,t,n,r){document.getElementById(n).addEventListener("submit",HeidiStripe.onSubmit(e,t,r))},onSubmit:function(e,t,n,r){return function(o){o.preventDefault(),Loader.start("payment",{text:"Autorisation de paiement en cours",variant:"fixed"}),e.createToken(t.number).then(function(e){e.error?(document.getElementById(r).textContent=e.error.message,Loader.stop("payment")):HeidiStripe.tokenHandler(e.token,n)})}},tokenHandler:function(e,t){var n=document.getElementById(t),r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name","stripe_token"),r.setAttribute("value",e.id),n.appendChild(r);var o=document.getElementById("cart_prelaunch_donation_amount"),a=document.getElementById("donation");a&&(a.value=o.value),n.submit()}};Video={},Video.List=function(){},Video.List.prototype.changeVideo=function(e){var t=JSON.parse(e.currentTarget.getAttribute("data-json")).link+"?autoplay=1";this.roles.videoList.forEach(e=>{e.classList.remove("video-list__item--active")}),e.currentTarget.classList.add("video-list__item--active"),this.container.querySelector("#embed_player").src=t},Barber.launchWhenDomIsReady();var lazyLoadInstance=new LazyLoad({elements_selector:".lazy"});!function(e,t){"use strict";var n=".main-nav",r="main-nav--hidden",o=500,a=e.querySelector(n);if(!a)return!0;var i=0,s=0,c=0,l=0,d=0,u=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},m=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},f=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},v=function(e,t){var n,r;return function(){var o=this,a=arguments,i=+new Date;n&&i<n+e?(clearTimeout(r),r=setTimeout(function(){n=i,t.apply(o,a)},e)):(n=i,t.apply(o,a))}};t.addEventListener("scroll",v(o,function(){i=e.body.offsetHeight,s=t.innerHeight,c=t.pageYOffset,d=l-c,c<=96?f(a,r):d>0&&u(a,r)?f(a,r):d<0&&(c+s>=i&&u(a,r)?f(a,r):m(a,r)),l=c}))}(document,window);