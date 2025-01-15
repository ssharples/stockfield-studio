import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  
  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${formData.get('name')}" <${formData.get('email')}>`,
      to: 'oscillationrecordz@gmail.com',
      subject: 'New Message from Website Contact Form',
      text: formData.get('message')?.toString(),
      html: `<p>${formData.get('message')?.toString()}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
