(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(93),a(95),a(97),a(99),a(16)),c=a(17),m=a(19),i=a(18),u=a(20),d=a(2),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h="http://localhost:3001/",f=a(24),p={height:"20rem",minHeight:"20rem",maxHeight:"20rem"},g={height:"15rem",minHeight:"15rem",maxHeight:"15rem"};function b(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{style:p,src:h+t.image,alt:t.name}),r.a.createElement(d.e,{style:g},r.a.createElement(d.k,null,t.name),t.designation?r.a.createElement(d.i,null,t.designation):null,r.a.createElement(d.j,null,t.description))))}var N=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(b,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(b,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(b,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},v=a(117),y={height:"20rem",minHeight:"20rem",maxHeight:"20rem",borderRadius:0};function w(e){var t=e.dish;e.onClick;return r.a.createElement(d.d,{style:{margin:"1rem"}},r.a.createElement(v.a,{to:"/menu/".concat(t.id)},r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name)),r.a.createElement(d.g,{style:y,width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(d.h,null,r.a.createElement(d.k,null,t.name))))}var O=function(e){var t=e.dishes.dishes.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(w,{dish:e}))});return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(v.a,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},M=a(11),k=a(7),L=function(e){return e&&e.length},j=function(e){return function(t){return!t||t.length<=e}},S=function(e){return function(t){return t&&t.length>=e}},C=function(e){return!isNaN(Number(e))},x=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(M.a)(Object(M.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(v.a,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",null,"Location Information"),r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",null,"Send us your Feedback"),r.a.createElement(k.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"firstname",md:4},"First Name"),r.a.createElement(d.l,{md:8},r.a.createElement(k.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:L,minLength:S(3),maxLength:j(15)}}),r.a.createElement(k.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"lastname",md:4},"Last Name"),r.a.createElement(d.l,{md:8},r.a.createElement(k.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:L,minLength:S(3),maxLength:j(15)}}),r.a.createElement(k.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"telnum",md:4},"Contact Tel."),r.a.createElement(d.l,{md:8},r.a.createElement(k.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:L,minLength:S(3),maxLength:j(15),isNumber:C}}),r.a.createElement(k.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers ",maxLength:"Must be 15 numbers or less ",isNumber:"Must be a number"}}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"email",md:4},"Email"),r.a.createElement(d.l,{md:8},r.a.createElement(k.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:L,validEmail:x}}),r.a.createElement(k.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address"}}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.l,{md:{size:4}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.q,{check:!0},r.a.createElement(k.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(d.l,{md:{size:8}},r.a.createElement(k.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"message",md:4},"Your Feedback"),r.a.createElement(d.l,{md:8},r.a.createElement(k.Control.textarea,{model:".message",id:"message",name:"message",rows:"4",className:"form-control"}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),D={height:"105px",width:"105px",minHeight:"105px",maxHeight:"105px",minWidth:"105px",maxWidth:"105px"};function A(e){var t=e.leader;return r.a.createElement(f.Stagger,{in:!0},r.a.createElement(f.Fade,{in:!0},r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(d.r,{tag:"li"},r.a.createElement(d.r,{left:!0,middle:!0},r.a.createElement(d.r,{style:D,object:!0,src:h+t.image,alt:t.name})),r.a.createElement(d.r,{body:!0,className:"ml-5"},r.a.createElement(d.r,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))))}var I=function(e){var t=e.leaders.leaders.map(function(e){return r.a.createElement(A,{leader:e,key:e.id})});return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.leaders.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(v.a,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.d,null,r.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.r,{list:!0},t))))},T=function(e){return e&&e.length},q=function(e){return function(t){return!t||t.length<=e}},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(M.a)(Object(M.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(M.a)(Object(M.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(d.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.u,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(d.t,null,r.a.createElement(k.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"rating",md:2},"Rating"),r.a.createElement(d.l,{md:10},r.a.createElement(k.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"author",md:2},"Your Name"),r.a.createElement(d.l,{md:10},r.a.createElement(k.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:T,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:q(15)}}),r.a.createElement(k.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.q,{htmlFor:"Comment",md:2},"Comment"),r.a.createElement(d.l,{md:10},r.a.createElement(k.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(d.A,{className:"form-group"},r.a.createElement(d.l,{md:{size:1,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component);function H(e){var t=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{top:!0,src:h+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),r.a.createElement(d.j,null,t.description)))))}function _(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(f.Stagger,{in:!0},t.map(function(e){return r.a.createElement(f.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}))),r.a.createElement(R,{dishId:n,postComment:a})," "):r.a.createElement("div",null)}var P=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(v.a,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(H,{dish:e.dish}),r.a.createElement(_,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},W=a(163),G={backgroundSize:"100%",backgroundImage:"url(assets/images/banner.png)",height:"30rem",color:"azure",paddingTop:"1rem"},Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(M.a)(Object(M.a)(a))),a.toggleModal=a.toggleModal.bind(Object(M.a)(Object(M.a)(a))),a.handleLogin=a.handleLogin.bind(Object(M.a)(Object(M.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.x,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(d.z,{onClick:this.toggleNav}),r.a.createElement(d.y,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.v,{navbar:!0},r.a.createElement(d.w,null,r.a.createElement(W.a,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(d.w,null,r.a.createElement(W.a,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(d.w,null,r.a.createElement(W.a,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(d.w,null,r.a.createElement(W.a,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(d.v,{className:"ml-auto",navbar:!0},r.a.createElement(d.w,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement("div",{style:G},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!"))))),r.a.createElement(d.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.u,null,"Login"),r.a.createElement(d.t,null,r.a.createElement(d.n,{onSubmit:this.handleLogin},r.a.createElement(d.o,null,r.a.createElement(d.q,{htmlFor:"username"},"Username"),r.a.createElement(d.p,{type:"test",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.o,null,r.a.createElement(d.q,{htmlFor:"password"},"Password"),r.a.createElement(d.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.o,{check:!0},r.a.createElement(d.q,{check:!0},r.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var z=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(v.a,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},B=a(166),U=a(156),K=a(164),J=a(167),Z=a(22),$=function(){return{type:"DISHES_LOADING"}},Q=function(e){return{type:"DISHES_FAILED",payload:e}},V=function(e){return{type:"ADD_DISHES",payload:e}},X=function(e){return{type:"COMMENTS_FAILED",payload:e}},ee=function(e){return console.log("addComments",e),{type:"ADD_COMMENTS",payload:e}},te=function(){return{type:"PROMOS_LOADING"}},ae=function(e){return{type:"PROMOS_FAILED",payload:e}},ne=function(e){return{type:"ADD_PROMOS",payload:e}},re=function(){return{type:"LEADERS_LOADING"}},le=function(e){return{type:"ADD_LEADERS",payload:e}},se=a(49),oe=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(se.TransitionGroup,null,r.a.createElement(se.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(B.a,null,r.a.createElement(U.a,{path:"/home",component:function(){return r.a.createElement(N,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(U.a,{exact:!0,path:"/aboutus",render:function(){return r.a.createElement(I,{leaders:e.props.leaders})}}),r.a.createElement(U.a,{exact:!0,path:"/menu",render:function(){return r.a.createElement(O,{dishes:e.props.dishes})}}),r.a.createElement(U.a,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(U.a,{exact:!0,path:"/contactus",render:function(){return r.a.createElement(F,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedbackForm:e.props.postFeedback})}}),r.a.createElement(K.a,{to:"/home"})))),r.a.createElement(z,null))}}]),t}(n.Component),ce=Object(J.a)(Object(Z.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),console.log("newComment",l),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return console.log(e),r({type:"ADD_COMMENT",payload:e})}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r))},fetchDishes:function(){return e(function(e){return e($(!0)),fetch(h+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(V(t))}).catch(function(t){return e(Q(t.message))})})},resetFeedbackForm:function(){return e(k.actions.reset("feedback"))},fetchComments:function(){return e(function(e){return fetch(h+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(ee(t))}).catch(function(t){return e(X(t.message))})})},fetchPromos:function(){return e(function(e){return e(te()),fetch(h+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(ne(t))}).catch(function(t){return e(ae(t.message))})})},fetchLeaders:function(){return e(function(e){return e(re()),fetch(h+"leaders").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(le(t))}).catch(function(t){return e(ae(t.message))})})},postFeedback:function(t){return e(function(e){return function(t){return console.log("feedback",e),fetch(h+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.res=e,t},function(e){throw e}).then(function(e){return e.json()}).then(function(e){return alert("Thank you for your feedback! "+JSON.stringify(e)),console.log(e)}).catch(function(e){console.log("post feedbacks",e.message),alert("Your feedback could not be posted\nError: "+e.message)})}}(t))}}})(oe)),me=(a(160),a(165)),ie=a(9),ue=a(23),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(ie.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(ie.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ie.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(ie.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(ie.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object(ie.a)({},e,{comments:e.comments.concat(a)});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(ie.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(ie.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ie.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(ie.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(ie.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(ie.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},pe=a(86),ge=a.n(pe),be=a(87),Ne=a.n(be),ve={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ye=Object(ue.createStore)(Object(ue.combineReducers)(Object(ie.a)({dishes:de,comments:Ee,promotions:he,leaders:fe},Object(k.createForms)({feedback:ve}))),Object(ue.applyMiddleware)(ge.a,Ne.a)),we=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Z.Provider,{store:ye},r.a.createElement(me.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ce,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a(162)},99:function(e,t,a){}},[[88,2,1]]]);
//# sourceMappingURL=main.4b5c36b7.chunk.js.map