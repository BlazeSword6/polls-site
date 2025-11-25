/* =================================================================
   OVERLAY MANAGEMENT FUNCTIONS
   Functions to show and hide help overlay modals
   ================================================================= */

/**
 * Opens an overlay by adding the 'active' class
 * @param {string} overlayId - The ID of the overlay element to open
 */
function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.add('active');  // Add 'active' class to show overlay
    }
}

/**
 * Closes an overlay by removing the 'active' class
 * @param {string} overlayId - The ID of the overlay element to close
 */
function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.classList.remove('active');  // Remove 'active' class to hide overlay
    }
}


/* =================================================================
   INITIALIZATION
   Set up event listeners after DOM is fully loaded
   ================================================================= */

/**
 * Initialize all event listeners once the page is ready
 * This ensures all HTML elements exist before we try to access them
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== HELP BUTTON EVENT LISTENERS =====
    // These buttons open the help overlay modals when clicked
    
    // Help button 1 - Opens Engagement Information help (Step 1)
    const helpBtn1 = document.getElementById('help-btn-1');
    if (helpBtn1) {
        helpBtn1.addEventListener('click', function() {
            openOverlay('overlay1');
        });
    }

    // Help button 2 - Opens Key Business Risk help (Step 2)
    const helpBtn2 = document.getElementById('help-btn-2');
    if (helpBtn2) {
        helpBtn2.addEventListener('click', function() {
            openOverlay('overlay2');
        });
    }

    // Help button 3 - Opens Toolkit help (Step 3)
    const helpBtn3 = document.getElementById('help-btn-3');
    if (helpBtn3) {
        helpBtn3.addEventListener('click', function() {
            openOverlay('overlay3');
        });
    }

    
    // ===== CLOSE OVERLAY BY CLICKING OUTSIDE =====
    // Allow users to close overlays by clicking the dark background
    
    const overlays = document.querySelectorAll('.overlay');
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            // Only close if user clicked the overlay background itself
            // (not the content box inside it)
            if (e.target === overlay) {
                closeOverlay(overlay.id);
            }
        });
    });

    
    // ===== ADDITIONAL FUNCTIONALITY =====
    // You can add more event listeners here for buttons and form elements
    
    /**
     * Example: Submit button functionality
     * Uncomment and modify this section to handle form submission
     */
    /*
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            console.log('Submit button clicked');
            // Add your submit logic here
            // Example: collect form data, validate, send to server, etc.
        });
    }
    */

    /**
     * Example: Download button functionality
     * Uncomment and modify this section to handle file downloads
     */
    /*
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Download button clicked');
            // Add your download logic here
            // Example: generate CSV/PDF, trigger download, etc.
        });
    }
    */

    /**
     * Example: Clear button functionality
     * Uncomment and modify this section to clear risk panel
     */
    /*
    const clearBtn = document.querySelector('.clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            console.log('Clear button clicked');
            // Add your clear logic here
            // Example: reset form fields, clear risk items, etc.
        });
    }
    */

    /**
     * Example: Apply Settings button functionality
     * Uncomment and modify this section to apply toolkit settings
     */
    /*
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            console.log('Apply Settings button clicked');
            // Add your apply logic here
            // Example: collect toolkit settings, update analysis, etc.
        });
    }
    */

    /**
     * Example: Reset Toolkit button functionality
     * Uncomment and modify this section to reset all toolkit inputs
     */
    /*
    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            console.log('Reset Toolkit button clicked');
            // Add your reset logic here
            // Example: clear all toolkit form fields to defaults
        });
    }
    */

    /**
     * Example: Risk item double-click functionality
     * Uncomment and modify this section to generate controls on double-click
     */
    /*
    const riskItems = document.querySelectorAll('.risk-item');
    riskItems.forEach(item => {
        item.addEventListener('dblclick', function() {
            console.log('Risk item double-clicked');
            // Add your generation logic here
            // Example: call API to generate controls, update table, etc.
        });
    });
    */

    /**
     * Example: File upload handling
     * Uncomment and modify this section to handle file uploads
     */
    /*
    const fileInput = document.querySelector('.file-input');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            console.log('Files selected:', files);
            // Add your file handling logic here
            // Example: validate file types, upload to server, display preview, etc.
        });
    }
    */

});


/* =================================================================
   UTILITY FUNCTIONS
   Helper functions that can be used throughout the application
   ================================================================= */

/**
 * Example: Validate form inputs
 * Checks if required fields are filled
 * @returns {boolean} - True if valid, false otherwise
 */
/*
function validateForm() {
    const country = document.querySelector('.form-input[name="country"]');
    const auditTitle = document.querySelector('.form-input[placeholder*="audit title"]');
    const auditObjectives = document.querySelector('.form-textarea');
    
    if (!country.value || !auditTitle.value || !auditObjectives.value) {
        alert('Please fill in all required fields');
        return false;
    }
    return true;
}
*/

/**
 * Example: Collect form data
 * Gathers all form values into an object
 * @returns {object} - Object containing all form data
 */
/*
function collectFormData() {
    return {
        country: document.querySelector('.form-input[name="country"]').value,
        auditTitle: document.querySelector('.form-input[placeholder*="audit title"]').value,
        auditObjectives: document.querySelector('.form-textarea').value,
        // Add more fields as needed
    };
}
*/

/**
 * Example: Display error message
 * Shows an error message to the user
 * @param {string} message - The error message to display
 */
/*
function showError(message) {
    alert(message);  // Simple alert - replace with better UI element
}
*/

/**
 * Example: Display success message
 * Shows a success message to the user
 * @param {string} message - The success message to display
 */
/*
function showSuccess(message) {
    alert(message);  // Simple alert - replace with better UI element
}
*/
