# Website Refactoring

I have refactored the website to be fully static, responsive, and fast.

## Changes Made

1.  **Modern CSS**: Created `media/css/modern.css` using CSS Variables, Flexbox, and Grid for a responsive layout.
2.  **Lightweight JavaScript**: Created `media/js/modern.js` for the mobile menu toggle, replacing heavy jQuery plugins.
3.  **Updated Pages**:
    *   `index.html`: The homepage has been completely rebuilt.
    *   `nl/logopedie.html`: The Logopedie page has been updated to the new design.
    *   `nl/contact.html`: The Contact page has been updated, including a simplified, working contact form and a direct link to Google Maps.

## How to Update Remaining Pages

To update the other pages (e.g., `nl/-psycho-motoriek.html`, `nl/psychologie-18.html`, etc.), follow these steps:

1.  **Backup**: Rename the existing file (e.g., `mv nl/page.html nl/page_old.html`).
2.  **Create New File**: Create a new file with the same name (e.g., `nl/page.html`).
3.  **Copy Template**: Copy the structure from `nl/logopedie.html`.
4.  **Update Content**:
    *   Update the `<title>` and `<meta name="description">`.
    *   Update the active menu item in the `<nav>` section (add `class="active"` to the current page link).
    *   Replace the content inside `<main class="container main-content">` with the specific content for that page.
    *   Ensure image paths are correct (usually `../media/images/...`).

## Key Features

*   **Responsive**: Works on mobile, tablet, and desktop.
*   **Fast**: No heavy libraries or external render-blocking resources (except Google Fonts).
*   **Clean Code**: Semantic HTML5 and modern CSS.
