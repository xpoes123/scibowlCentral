function toggleDropdown(dropdownId) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = 'none';
        }
    });
    var targetDropdown = document.getElementById(dropdownId);
    targetDropdown.style.display = (targetDropdown.style.display === 'none' || !targetDropdown.style.display) ? 'block' : 'none';
}

function toggleDropdown2(dropdownId) {
    var targetDropdown = document.getElementById(dropdownId);
    targetDropdown.style.display = (targetDropdown.style.display === 'none' || !targetDropdown.style.display) ? 'block' : 'none';
}

function toggleDropdownContent(dropdownId) {
    var dropdowns = document.querySelectorAll('.dropdown-content2');
    var isOpened = false;

    dropdowns.forEach(function(dropdown) {
        if (dropdown.id === dropdownId) {
            if (dropdown.style.display === 'none' || !dropdown.style.display) {
                dropdown.style.display = 'block';
                isOpened = true;
            } else {
                dropdown.style.display = 'none';
            }
        } else {
            dropdown.style.display = 'none';
        }
    });

    if (isOpened) {
        function handleClickOutside(event) {
            if (!event.target.closest('.dropdown-content2') && !event.target.matches('.btn')) {
                dropdowns.forEach(function(dropdown) {
                    dropdown.style.display = 'none';
                });
                document.removeEventListener('click', handleClickOutside);
            }
        }
        document.addEventListener('click', handleClickOutside);
    }
}

function toggleButton(event, dropdownId) {
    event.stopPropagation();
    toggleDropdownContent(dropdownId);
}

var selectionParameters = {
    difficulty: '',
    category: ''
};

function setDifficulty(difficulty, element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectionParameters.difficulty = '';
    } else {
        element.classList.add('selected');
        selectionParameters.difficulty = difficulty;
    }
    console.log('Selected Difficulty:', selectionParameters.difficulty);
}

function setCategory(category, element) {
    const allCategoriesElement = document.querySelector('#category-buttons a[href="#A"]');
    const categoryLinks = document.querySelectorAll('#category-buttons a');

    if (category === 'A') {
        if (element.classList.contains('selected')) {
            categoryLinks.forEach(link => link.classList.remove('selected'));
            selectionParameters.category = '';
        } else {
            categoryLinks.forEach(link => link.classList.add('selected'));
            selectionParameters.category = 'All';
        }
    } else {
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            if (allCategoriesElement.classList.contains('selected')) {
                allCategoriesElement.classList.remove('selected');
                selectionParameters.category = '';
            }
        } else {
            element.classList.add('selected');
            if (Array.from(categoryLinks).every(link => link.classList.contains('selected') || link.getAttribute('href') === '#A')) {
                allCategoriesElement.classList.add('selected');
                selectionParameters.category = 'All';
            }
        }
        console.log('Selected Category:', category);
    }
}
