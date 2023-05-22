import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: any, res: any) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "sharayushendre7@gmail.com", // Your email where you'll receive emails
      from: "sharayushendre7@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      // email: `${req.body.subject}`,
      // content: `${req.body.message}`,

      html: `<div><h4> Name:  ${req.body.fullname}</h4>
      <h4>Email:  ${req.body.email}</h4>
      <br/>
      ${req.body.message}</div>`,
    });
  } catch (error: any) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
