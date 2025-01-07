/**
 * Dynamically fetch and insert a header (or any HTML snippet)
 * into an element on the page.
 *
 * @param {string} containerSelector - The CSS selector of the container where the snippet should be injected
 * @param {string} snippetPath - The path/URL to the HTML snippet file
 */
function loadHeader(containerSelector, snippetPath) {
    fetch(snippetPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load ${snippetPath}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then((html) => {
            document.querySelector(containerSelector).innerHTML = html;
        })
        .catch((error) => {
            console.error(error);
        });
}

// Optional: If you want to use ES Modules, you could export it
// export { loadHeader };
