document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('showinput');

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            const newItem = document.createElement('div');
            newItem.classList.add('list-item');

            const deleteIcon = document.createElement('img');
            deleteIcon.src = 'https://cdn-icons-png.freepik.com/512/5890/5890620.png' 
            
            deleteIcon.addEventListener('click', function(){
                list.removeChild(newItem);
            });


            const textelement = document.createElement('span');
            textelement.textContent = input.value;
            
            textelement.addEventListener('click', function(){
                textelement.classList.toggle('completed');
            });

            newItem.appendChild(deleteIcon);
            newItem.appendChild(textelement);
    
            newItem.style.padding = '10px';
            newItem.style.borderBottom = '1px solid #ccc';
            newItem.style.width = '170px';
            newItem.style.backgroundColor = '#fff';

            if (list.firstChild) {
                list.insertBefore(newItem, list.firstChild);
            } else {
                list.appendChild(newItem);
            }

            input.value = ''; // Clear input field after adding
        }
    });
});
