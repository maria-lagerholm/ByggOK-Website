document.addEventListener('DOMContentLoaded', (event) => {
    // Create chatbot icon container
    var chatbotIconContainer = document.createElement('div');
    chatbotIconContainer.id = 'chatbot-icon';
    chatbotIconContainer.style.position = 'fixed';
    chatbotIconContainer.style.bottom = '10px';
    chatbotIconContainer.style.right = '10px';
    chatbotIconContainer.style.cursor = 'pointer';
    chatbotIconContainer.style.zIndex = '10000';
    chatbotIconContainer.innerHTML = '<img src="./images/bot.png" alt="Chatbot Icon" style="width:100px; height:auto;" />';
    
    
    
    
    // Create chatbot iframe container
    var chatbotIframeContainer = document.createElement('div');
    chatbotIframeContainer.classList.add('html-embed-7', 'w-embed', 'w-iframe');
    chatbotIframeContainer.style.display = 'none';
    chatbotIframeContainer.style.position = 'fixed';
    chatbotIframeContainer.style.top = '10px';  // Adjusted to 10px
    chatbotIframeContainer.style.left = '10px';  // Adjusted to 10px
    chatbotIframeContainer.style.right = '10px';  // Adjusted to 10px
    chatbotIframeContainer.style.bottom = '10px';  // Adjusted to 10px
    chatbotIframeContainer.style.zIndex = '10000';
    chatbotIframeContainer.style.backgroundColor = 'white';
    chatbotIframeContainer.style.border = '1px solid #ccc';
    chatbotIframeContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    chatbotIframeContainer.style.overflow = 'auto';
    chatbotIframeContainer.innerHTML = '<button id="minimize-button" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none;"><img src="./images/minimize.png" alt="Minimize Icon" style="width: 20px; height:auto;" /></button><iframe id="chatbot-iframe" src="" style="width:100%; height:calc(100% - 40px); border:none; position: absolute; bottom: 0;"></iframe>';

    // Append both containers to the body
    document.body.appendChild(chatbotIconContainer);
    document.body.appendChild(chatbotIframeContainer);

    // Add event listener to chatbot icon to toggle iframe visibility and set src attribute
    chatbotIconContainer.addEventListener('click', function() {
        if (chatbotIframeContainer.style.display === 'none') {
            chatbotIframeContainer.style.display = 'block';
            document.getElementById('chatbot-iframe').src = "https://chatbot-web.streamlit.app/?embed=true";
            chatbotIconContainer.style.display = 'none';
        }
    });

    // Add event listener to minimize button to minimize the chat window
    document.getElementById('minimize-button').addEventListener('click', function() {
        chatbotIframeContainer.style.display = 'none';
        document.getElementById('chatbot-iframe').src = "";
        chatbotIconContainer.style.display = 'block';
    });
});
