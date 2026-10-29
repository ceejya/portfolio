const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Use POST to send a message." });
  };

  const { RESEND_API_KEY, CONTACT_EMAIL, RESEND_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !RESEND_FROM) {
    return response.status(503).json({
      message: "The contact form is not configured yet. Please email me directly instead.",
    });
  }

  const body = request.body && typeof request.body === "object" ? request.body : {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) {
    return response.status(400).json({ message: "Please enter your name (up to 100 characters)." });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return response.status(400).json({ message: "Please enter a valid email address." });
  }
  if (!message || message.length > 4000) {
    return response.status(400).json({ message: "Please enter a message (up to 4,000 characters)." });
  }

  const safeName = name.replace(/[\r\n]/g, " ");
  let resendResponse;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Portfolio message from ${safeName}`,
        text: `From: ${safeName}\nReply to: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Could not reach Resend for a portfolio contact message.", error);
    return response.status(502).json({
      message: "Your note couldn’t be delivered right now. Please try again or email me directly.",
    });
  }

  if (!resendResponse.ok) {
    console.error("Resend rejected a portfolio contact message.", {
      status: resendResponse.status,
    });
    return response.status(502).json({
      message: "Your note couldn’t be delivered right now. Please try again or email me directly.",
    });
  }

  return response.status(200).json({ message: "Message sent." });
}
