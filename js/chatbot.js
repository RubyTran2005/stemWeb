const API_KEY = 'AIzaSyC-T4IzqOAz5WwgQFFoUoKByCWldExHzqQ';

// Default context to be included in every prompt
const defaultContext = "You are a knowledgeable STEM bot for a website for Vietnamese children to learn STEM through practical projects. Answer simple, interesting, less than 150 words";

document.getElementById('prompt-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const userPrompt = document.getElementById('prompt-input').value.trim();
  if (!userPrompt) {
    alert('Please enter a prompt.');
    return;
  }

  // Combine the default context with the user's prompt
  const prompt = `${defaultContext}\n\n${userPrompt}`;

  const payload = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
        maxOutputTokens: 150 // Limit the maximum number of tokens in the response
      } 
    };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    const modelResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply from bot.';

    // Use Marked.js to convert Markdown to HTML
    const htmlContent = marked.parse(modelResponse);
    document.getElementById('response-text').innerHTML = htmlContent;
  } catch (error) {
    console.error('Error generating content:', error);
    document.getElementById('response-text').textContent = 'Error generating content. Please try again.';
  }
});