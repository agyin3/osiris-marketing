import { google } from "googleapis";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async (req, res) => {
  if (req.method === "POST") {
    delete req.body.bot_test;
    let r = await postData(req.body);
    res.json({ r });
  }
};

// Utility Functions
// Need to create validation utility

async function postData(data) {
  try {
    const scopes = [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
    ];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      valueInputOption: "RAW",
      resource: {
        values: [Object.values(data)],
      },
      insertDataOption: "INSERT_ROWS",
      range: "Sheet1",
    });
    await sendEmail(data.email, data.name);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }

  return [];
}

async function sendEmail(email, name) {
  const msg = {
    from: "osirismarketinggroup@gmail.com", // Change to your verified sender
    personalizations: [
      {
        to: [
          {
            email,
          },
        ],
        dynamic_template_data: {
          first_name: name,
        },
      },
    ],
    template_id: process.env.SENDGRID_TEMPLATE_ID,
  };

  try {
    let res = await sgMail.send(msg);
    console.log(res);
    return;
  } catch (e) {
    console.log(e.response.body.errors);
    return e;
  }
}
