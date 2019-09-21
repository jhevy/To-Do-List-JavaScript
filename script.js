var input = document.getElementById('userinput');
var button = document.getElementById('enter');
var ul = document.querySelector('ul');
var listItems = document.getElementsByTagName('li');



function createItem(){
	var li = document.createElement('li');
	li.innerHTML = input.value;
	ul.appendChild(li);
	input.value = "";
}

button.addEventListener("click", function(){
	
	
	if (input.value.length > 0){
		createItem();
		createDel();
	}
})
	




input.addEventListener("keypress", function(e){
	
	if (input.value.length > 0 && event.which == 13){
		createItem();
		createDel();
	}

})

ul.onclick = function(event){
	event.target.classList.toggle('done');

}
function createDel(){
	var delBtn = document.createElement('button'); 
	delBtn.innerHTML = "Delete"; 
	listItems[i].appendChild(delBtn);
	delBtn.onclick = delItem;
}

for (var i = 0; i < listItems.length; i++){
	createDel();
}

function delItem (evt){
	evt.target.parentNode.remove();
}