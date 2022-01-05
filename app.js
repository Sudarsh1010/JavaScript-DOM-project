const list = document.querySelector('#anime-list ul');
const addAnime = document.forms['add-anime'];
const hideBox = document.querySelector('#hide');
const searchBar = document.forms['search-anime'].querySelector('input');
const tabs = document.querySelector('#tabs');
const panels = document.querySelectorAll('.panel');

// Delete Anime

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        e.target.parentElement.remove();
    }
});

// Add Anime

addAnime.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addAnime.querySelector('input[type="text"]').value;

    // creating element
    const li = document.createElement('li');
    const addSauce = document.createElement('span');
    const delBtn = document.createElement('span');

    // Adding Content
    addSauce.textContent = value;
    delBtn.textContent = 'delete';

    // Adding Attributes
    addSauce.classList.add('name');
    delBtn.classList.add('delete');

    // Appending elements to DOM
    li.appendChild(addSauce);
    li.appendChild(delBtn);
    list.appendChild(li); 
});

// Hiding Anime Tab

hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
});

// Search Tab

searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const anime = list.getElementsByTagName('li');

    Array.from(anime).forEach(function(sauce){
        const title = sauce.firstElementChild.textContent;
        
        if(title.toLowerCase().indexOf(term) != -1){
            sauce.style.display = "block";
        } else {
            sauce.style.display = "none";
        }
    });
});

// Tabbed Content

tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);

        panels.forEach(function(panel){
            if(panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});