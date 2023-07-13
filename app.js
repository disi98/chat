document.addEventListener('DOMContentLoaded', () => {
  const chatMessages = document.getElementById('chat-messages');
  const messageInput = document.getElementById('message-input');
  const sendMessageBtn = document.getElementById('send-message');
  const fileInput = document.getElementById('file-input');
  const sendFileBtn = document.getElementById('send-file');

  // Event listener for sending messages
  sendMessageBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
      displayMessage('You', message);
      messageInput.value = '';
    }
  });

  // Event listener for sending files
  sendFileBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      displayMessage('You', `Sent file: ${file.name}`);
      fileInput.value = '';
    }
  });

  // Function to display messages in the chat UI
  function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('mb-2');
    messageElement.innerHTML = `
      <span class="font-bold">${sender}:</span>
      <span>${message}</span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
  }
});
