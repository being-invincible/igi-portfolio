// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  console.log(body)

  const message = `
  Name:${body.name}\r\n
  Email:${body.email}\r\n
  Phone:${body.phone}\r\n
  Title:${body.subject}\r\n
  Message:${body.message}
  `;

  const data = {
    to: 'hcrock007@gmail.com',
    from: 'hello@igi.sa.com',
    subject: 'New Form Submission from Website',
    text: message,
    html: message.replace(/\r\n/g,'<br>')
  }
  
  mail.send(data);

  res.status(200).json({ status: 'Ok' })
}
