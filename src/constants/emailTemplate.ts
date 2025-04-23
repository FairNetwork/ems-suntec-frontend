export const EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
        padding: 20px;
        margin: 0;
      }

      .email-container {
        background-color: #ffffff;
        padding: 24px;
        border-radius: 8px;
        max-width: 600px;
        margin: auto;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      }

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .info {
        margin-bottom: 12px;
        font-size: 14px;
      }

      .label {
        font-weight: bold;
        display: inline-block;
        width: 100px;
      }

      .message {
        background-color: #f1f1f1;
        padding: 16px;
        border-radius: 6px;
        white-space: pre-line;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">Neue Nachricht über das Kontaktformular</div>

      <div class="info">
        <span class="label">Vorname:</span> {{firstName}}<br />
        <span class="label">Nachname:</span> {{lastName}}<br />
        <span class="label">E-Mail:</span> {{email}}
      </div>

      <div class="message">
        {{message}}
      </div>
    </div>
  </body>
</html>
`
