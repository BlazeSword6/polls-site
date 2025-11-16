function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.add('active');
    }
}

function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Close overlay when clicking outside the content
document.addEventListener('DOMContentLoaded', function() {
    const overlays = document.querySelectorAll('.overlay');
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeOverlay(overlay.id);
            }
        });
    });
});
