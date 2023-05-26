function convertMarkdownToHTML(filePath) {
    // Make an AJAX request to fetch the Markdown content
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var markdownContent = xhr.responseText;
        
        // Convert Markdown to HTML
        var converter = new showdown.Converter();
        var htmlContent = converter.makeHtml(markdownContent);
        
        // Embed the HTML into the content div
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = htmlContent;
      }
    };
    xhr.send();
  }
  

// Event listener for page load
window.addEventListener('load', function() {
    // Check if the current page is the home page (index.html)
    if (window.location.pathname === '/index.html') {
      // Convert the Markdown content to HTML
      convertMarkdownToHTML("index.md");
    } else if (this.window.location.pathname === "/modules.html") {
        convertMarkdownToHTML("modules.md");
    } else if (this.window.location.pathname === "/module1.html") {
        convertMarkdownToHTML("module1.md");
    } else if (this.window.location.pathname === "/assignments.html") {
        convertMarkdownToHTML("assignments.md");
    } else if (this.window.location.pathname === "/hw1.html") {
        convertMarkdownToHTML("hw1.md");
    }
  });
