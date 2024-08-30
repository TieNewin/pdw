// script.js

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close-btn')[0];
    var modalImage = document.getElementById('modalImage');

    // Open the modal and set image source
    document.querySelectorAll('.openModalBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            var imageUrl = this.getAttribute('data-content');
            modalImage.src = imageUrl; // Update modal image source
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Close the modal when the user clicks on the close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
