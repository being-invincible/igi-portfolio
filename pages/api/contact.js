// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const {name, email, phone, subject, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 534,
    secure: true,
    auth: {
      user: "hcrock007@gmail.com",
      pass: "priyadharshini",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'hcrock007@gmail.com',
      subject: `Contact form Submission from ${name}`,
      html: `
        <p>You recieved a new contact form submission</p><br>
        <p><strong>Name: </strong>${name} </p><br>
        <p><strong>Phone: </strong>${phone} </p><br>
        <p><strong>Topic: </strong>${subject} </p><br>
        <p><strong>Message: </strong>${message} </p><br>
      `,
    });
    console.log('Message Sent', emailRes.messageID);

  } catch (err) {
    console.error(err)
  }

  res.status(200).json(req.body)
}
