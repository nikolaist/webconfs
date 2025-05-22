async function sendRequest() {
  const body = {
    clientId: document.getElementById('clientId').value,
    clientSecret: document.getElementById('clientSecret').value,
    scopes: document.getElementById('scopes').value.split(',').map(s => s.trim())
  };

  const res = await fetch('/authorize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const text = await res.text();
  document.getElementById('output').textContent = text;
}

document.getElementById('send').addEventListener('click', sendRequest);
