const form = document.getElementById('chat-form');
const question = document.getElementById('question');
const messages = document.getElementById('messages');
const history = [];
let sessionToken = '';

window.addEventListener('message', (event) => {
  if (event.data?.type === 'advisor-token' && typeof event.data.token === 'string') {
    sessionToken = event.data.token;
  }
});

function addMessage(content, role, meta = '') {
  const node = document.createElement('article');
  node.className = `message ${role}`;
  node.textContent = content;
  if (meta) {
    const detail = document.createElement('div');
    detail.className = 'meta';
    detail.textContent = meta;
    node.appendChild(detail);
  }
  messages.appendChild(node);
  node.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const text = question.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  question.value = '';
  const button = form.querySelector('button');
  button.disabled = true;
  try {
    const response = await fetch('/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(sessionToken ? { 'Authorization': `Bearer ${sessionToken}` } : {})
      },
      body: JSON.stringify({ question: text, history: history.slice(-6) })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'No fue posible obtener respuesta');
    const sourceNames = data.citations.map(item => `[${item.label}] ${item.title}`).join(' | ');
    addMessage(data.answer, 'assistant', `Certeza: ${data.confidence}. ${sourceNames}`);
    history.push({ role: 'user', content: text }, { role: 'assistant', content: data.answer });
  } catch (error) {
    addMessage(`Error: ${error.message}`, 'assistant');
  } finally {
    button.disabled = false;
    question.focus();
  }
});
