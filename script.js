function convertMarkdownToHTML(filePath) {
  // Make an AJAX request to fetch the Markdown content
  var xhr = new XMLHttpRequest();
  xhr.open("GET", filePath, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var markdownContent = xhr.responseText;
      
      // Convert Markdown to HTML
      var converter = new showdown.Converter({
          tasklists: true  // Enable task list support
      });
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

var questions = [
  "We are not actually going to provide a definition of a programming language at this point, but you'll have a chance to explore this question more over the course of the semester, in fact, even starting at HW1!",
  "Another answer..."
  // Add more answers here...
];

function displayMessage(button) {
  var questionDiv = button.parentNode.parentNode;
  var answerTextarea = questionDiv.querySelector('.answer');
  var messageContainer = questionDiv.querySelector('.message');

  // Hide the submit button
  button.style.display = 'none';

  // Get the response message based on the question
  var responseMessage = getResponseMessage(questionDiv);

  // Display the message
  messageContainer.textContent = responseMessage;
  messageContainer.style.display = 'block';

  // Disable the answer textarea
  answerTextarea.disabled = true;
}

function getResponseMessage(questionDiv) {
  var question = questionDiv.querySelector('p').textContent;

  // Generate the response message based on the question
  var responseMessage = '';

  if (question.includes('What is a programming language')) {
    responseMessage = "We are not actually going to provide a definition of a programming language at this point, but you'll have a chance to explore this question more over the course of the semester, in fact, even starting at HW1!";
  }

  return responseMessage;
}
