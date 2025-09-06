export const EMAIL_PLANNER_TEMPLATE = `<!DOCTYPE html>
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
        max-width: 700px;
        margin: auto;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      }

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .section {
        margin-bottom: 20px;
      }

      .section-title {
        font-weight: bold;
        margin-bottom: 8px;
        font-size: 16px;
        border-bottom: 1px solid #eee;
        padding-bottom: 4px;
      }

      .info {
        margin-bottom: 8px;
        font-size: 14px;
      }

      .label {
        font-weight: bold;
        display: inline-block;
        width: 160px;
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
      <div class="header">Neue Anfrage über den Solarplanner</div>

      <div class="section">
        <div class="section-title">Angaben zum Gebäude</div>
        <div class="info"><span class="label">Gebäudetyp:</span> {{buildingType}}</div>
        <div class="info"><span class="label">Baujahr:</span> {{buildingYear}}</div>
        <div class="info"><span class="label">Dachform:</span> {{roofType}}</div>
        <div class="info"><span class="label">Dachneigung:</span> {{roofAngle}}°</div>
        <div class="info"><span class="label">Dachausrichtung:</span> {{roofDirection}}</div>
        <div class="info"><span class="label">Dachfläche:</span> {{roofArea}} m²</div>
        <div class="info"><span class="label">Dachmaterial:</span> {{roofMaterial}}</div>
      </div>

      <div class="section">
        <div class="section-title">Aktuelle Energieversorgung</div>
        <div class="info"><span class="label">Stromverbrauch:</span> {{currentConsumption}} kWh/Jahr</div>
        <div class="info"><span class="label">Bestehende PV-Anlage:</span> {{existingPV}}</div>
      </div>

      <div class="section">
        <div class="section-title">Wünsche & Optionen</div>
        <div class="info"><span class="label">Zusatzkomponenten:</span> {{additionalComponents}}</div>
        <div class="info"><span class="label">Stromspeicher:</span> {{storage}}</div>
        <div class="info"><span class="label">Wallbox:</span> {{wallbox}}</div>
        <div class="info"><span class="label">Notstromfunktion:</span> {{emergencyPower}}</div>
        <div class="info"><span class="label">Geplanter Starttermin:</span> {{startDate}}</div>
        <div class="info"><span class="label">Budgetrahmen:</span> {{budget}}</div>
        <div class="info"><span class="label">Sonstige Wünsche:</span></div>
        <div class="message">{{additionalWishes}}</div>
      </div>

      <div class="section">
        <div class="section-title">Projektadresse</div>
        <div class="info"><span class="label">Straße & Hausnummer:</span> {{street}}</div>
        <div class="info"><span class="label">Postleitzahl:</span> {{zipCode}}</div>
        <div class="info"><span class="label">Ort:</span> {{city}}</div>
      </div>

      <div class="section">
        <div class="section-title">Persönliche Daten</div>
        <div class="info"><span class="label">Vorname:</span> {{firstName}}</div>
        <div class="info"><span class="label">Nachname:</span> {{lastName}}</div>
        <div class="info"><span class="label">Telefonnummer:</span> {{phone}}</div>
        <div class="info"><span class="label">E-Mail:</span> {{email}}</div>
      </div>

      <div class="section">
        <div class="section-title">Datenschutz & Einverständnis</div>
        <div class="info"><span class="label">Datenschutz akzeptiert:</span> {{privacyAccepted}}</div>
        <div class="info"><span class="label">Kontaktaufnahme zugestimmt:</span> {{contactConsent}}</div>
      </div>
    </div>
  </body>
</html>
`

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
        <span class="label">Name:</span> {{name}}<br />
        <span class="label">E-Mail:</span> {{email}}
        <span class="label">Telefon:</span> {{phone}}
      </div>

      <div class="message">
        {{message}}
      </div>
    </div>
  </body>
</html>
`
