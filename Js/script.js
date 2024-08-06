document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropbtn');
    dropdown.addEventListener('click', function() {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});
