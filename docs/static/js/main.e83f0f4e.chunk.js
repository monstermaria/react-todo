(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{32:function(t,e,o){t.exports=o(61)},37:function(t,e,o){},43:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(28),l=o.n(r),c=(o(37),o(31)),i=o(7),d=o(8),u=o(10),s=o(9),p=o(13),m=o(1);var h={background:"lightblue",padding:"10px",textAlign:"center"},f=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"Todo-list"),a.a.createElement(p.b,{to:"/"},"Home")," | ",a.a.createElement(p.b,{to:"/about"},"About"))},b=o(30),y=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add a new task",style:{flexGrow:1},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit"}))}}]),o}(n.Component),v=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"getStyle",value:function(){return{backgroundColor:"pink",textDecoration:this.props.todoProp.completed?"line-through":"none",padding:"10px",borderBottom:"1px dotted #555"}}},{key:"render",value:function(){var t=this.props.todoProp,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(null,e)}),o,a.a.createElement("button",{onClick:this.props.deleteTodo.bind(this,e),style:g},"x"))}}]),o}(n.Component),g={backgroundColor:"#0000ff",color:"#fff",border:"none",borderRadius:"50%",padding:"5px 9px",cursor:"pointer",float:"right"},E=v,k=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var t=this,e=this.props.todos;return a.a.createElement("div",null,e.map((function(e){return a.a.createElement(E,{key:e.id,todoProp:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo})})))}}]),o}(n.Component);function j(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This an example of how to use React for a simple todo-list"))}o(43);var O=o(14),C=o.n(O),x=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e,o){console.log(o),console.log(o.props),t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})}))},t.addTodo=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(c.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{addTodo:t.addTodo}),a.a.createElement(k,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo}))}}),a.a.createElement(m.a,{path:"/about",component:j})))}}]),o}(n.Component);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e83f0f4e.chunk.js.map