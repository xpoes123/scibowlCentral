function toggleDropdown(dropdownId) {
    // Close all dropdowns first
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    var targetDropdown = document.getElementById(dropdownId);
    targetDropdown.style.display = (targetDropdown.style.display === 'none' || !targetDropdown.style.display) ? 'block' : 'none';
}

function toggleDropdown2(dropdownId) {
    var targetDropdown = document.getElementById(dropdownId);
    targetDropdown.style.display = (targetDropdown.style.display === 'none' || !targetDropdown.style.display) ? 'block' : 'none';
}

// This function toggles the dropdown and handles outside clicks
function toggleDropdownContent(dropdownId) {
    var dropdowns = document.querySelectorAll('.dropdown-content2');
    var isOpened = false;

    // Toggle the clicked dropdown and determine if it should remain open
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

    // Add or remove event listeners based on the dropdown state
    if (isOpened) {
        // This function will handle the outside click
        function handleClickOutside(event) {
            // Check if the click is outside and not on a dropdown button or link within the dropdown
            if (!event.target.closest('.dropdown-content2') && !event.target.matches('.btn')) {
                dropdowns.forEach(function(dropdown) {
                    dropdown.style.display = 'none';
                });
                document.removeEventListener('click', handleClickOutside);
            }
        }

        // Add event listener for clicks outside the dropdown
        document.addEventListener('click', handleClickOutside);
    }
}

function toggleButton(event, dropdownId) {
    event.stopPropagation(); // Stop propagation to avoid immediate triggering of document click
    toggleDropdownContent(dropdownId);
}

// Object to hold the selected parameters
var selectionParameters = {
    difficulty: '',
    category: ''
};

function setDifficulty(difficulty) {
    selectionParameters.difficulty = difficulty;
    console.log('Selected Difficulty:', difficulty);  // Optional: for debugging
}

function setCategory(category) {
    selectionParameters.category = category;
    console.log('Selected Category:', category);  // Optional: for debugging
}