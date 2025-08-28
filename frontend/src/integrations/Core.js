// Core integration for sending emails
// You can wire this to Resend, EmailJS, AWS SES, etc.

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT; 
// Example: "https://your-api.com/send-email"

async function sendViaEndpoint(payload) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Email endpoint failed: ${res.status} ${text}`);
  }
  return true;
}

async function simulate(payload) {
  await new Promise((r) => setTimeout(r, 800));
  if (import.meta.env.DEV) {
    console.info('[SendEmail:DEV simulation]', payload);
  }
  return true;
}

export async function SendEmail({ to, subject, body }) {
  if (!to || !subject || !body) {
    throw new Error('SendEmail requires { to, subject, body }');
  }
  if (endpoint) {
    return sendViaEndpoint({ to, subject, body });
  }
  return simulate({ to, subject, body });
}
