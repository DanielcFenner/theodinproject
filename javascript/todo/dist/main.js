(()=>{"use strict";class e{constructor(){this.listArray=[]}add(e){this.listArray.push(e)}return(){return this.listArray}}class t{constructor(e,t,r){this.title=e,this.due=t,this.highPriority=r}}class r{constructor(e){}static resetTodoInput(){document.querySelector('input[name="todo-input"]').value=""}static renderTodo(e){const t=document.querySelector(".todo-container"),r=document.createElement("div");r.classList.add("todo-element");const o=document.createElement("p");o.textContent=e.title,r.appendChild(o),t.appendChild(r)}static todoInputValue(){return document.querySelector('input[name="todo-input"]').value}static renderClearTodos(){const e=document.querySelector(".todo-container").childNodes;for(let t=e.length-1;t>=0;t--)e[t].remove()}static renderList(e){for(let t=0;t<e.length;t++){const r=e[t];this.renderTodo(r)}}static renderSidebarLists(e){for(let t=0;t<e.length;t++){const r=e[t];console.log(r)}}}const o={groceries:new e,chores:new e};o.groceries.add(new t("Broccoli","1996",!0)),o.groceries.add(new t("Beans","1996",!0)),o.groceries.add(new t("Tortilla Wraps","1996",!0)),r.renderList(o.groceries.return()),r.renderSidebarLists(o),document.querySelector(".add-todo").addEventListener("click",(()=>{let e=new t(r.todoInputValue(),"hello",!0);o.groceries.add(e),r.renderTodo(e),r.resetTodoInput()}))})();