import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { full_name, email, phone, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,

      auth: {
        user: process.env.PERSONAL_EMAIL as string,
        pass: process.env.PERSONAL_EMAIL_PASSWORD as string,
      },
    });

    // Create email data
    const mailData = {
      from: `${email}`,
      to: 'nyangejorris@gmail.com',
      subject: `New Message Received from your Contact Form from ${full_name}`,
      html: `
      <p><strong>Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailData);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Email sending failed' });
    }
  } else {
    res.status(405).end();
  }
};

export default Contact;
