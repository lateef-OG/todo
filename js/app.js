function get_todos(){
	var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	if (todos_str !== null){
		todos = JSON.parse(todos_str);
	}
	return todos;
}


function add(){
	var input = document.getElementById('myInput').value;
	var todos = get_todos();
	todos.push(input);
	localStorage.setItem('todo', JSON.stringify(todos));
	
	show();
	
	return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function show(){
	var todos = get_todos();
	var html = '<ul>';
	for (var i = 0; i < todos.length; i++){
		html += '<li class="list-item '+ (todos[i].check ? "checked" : "") +'" id="' + i + '">' + todos[i] + '<button class = "remove" id="' + i + '">X</button></li>';
	};
	html += '</ul>';
	
	document.getElementById('comp').innerHTML = html;
	var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
var check;

function comp_task(){	
	var todo = document.querySelector('ul');
	var todos = get_todos();
	todo.addEventListener('click', function(ev) {
	  if (ev.target.tagName === 'LI') {
		var id = ev.target.getAttribute('id');		
		todos[id].check = document.getElementById(id).classList.toggle('checked');
		localStorage.setItem('todo', JSON.stringify(todos));
	  }
	}, false);
}

document.getElementById('add').addEventListener('click',add);
show();
comp_task();