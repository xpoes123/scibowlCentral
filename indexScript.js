function toggleDropdown(dropdownId) {
    var dropdowns = document.querySelectorAll('.header-dropdown-content');
    dropdowns.forEach(function(dropdown) {
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = 'none';
        }
    });
    var targetDropdown = document.getElementById(dropdownId);
    targetDropdown.style.display = (targetDropdown.style.display === 'none' || !targetDropdown.style.display) ? 'block' : 'none';
}