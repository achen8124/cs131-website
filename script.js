// Ensure the DOM has loaded before executing script
document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('index.md')
      .then((response) => response.text())
      .then((text) => {
          // Convert markdown to HTML
          let converter = new showdown.Converter(),
          html = converter.makeHtml(text);
          
          // Embed into your content div
          document.getElementById('content').innerHTML = html;
      });
  });

// document.getElementById("modules-link").addEventListener("click", function(event) {
//     fetch('module.md')
//       .then((response) => response.text())
//       .then((text) => {
//           // Convert markdown to HTML
//           let converter = new showdown.Converter(),
//           html = converter.makeHtml(text);
          
//           // Embed into your content div
//           document.getElementById('module-content').innerHTML = html;
//       });
// }); 

  // Ensure the DOM has loaded before executing script
document.addEventListener("DOMContentLoaded", function(event) { 
    fetch('module.md')
      .then((response) => response.text())
      .then((text) => {
          // Convert markdown to HTML
          let converter = new showdown.Converter(),
          html = converter.makeHtml(text);
          
          // Embed into your content div
          document.getElementById('module-content').innerHTML = html;
      });
  });
  