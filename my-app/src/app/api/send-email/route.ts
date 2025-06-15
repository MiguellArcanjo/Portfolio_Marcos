import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_TO}, ${email}`,
      subject: `Contato do site: ${name}`,
      text: message,
      html: `
        <div>
          <p><strong>Telefone:</strong> ${message.match(/Telefone: (.*)\n/)? message.match(/Telefone: (.*)\n/)[1] : ''}</p>
          <p><strong>Tipo:</strong> ${message.match(/Tipo: (.*)\n/)? message.match(/Tipo: (.*)\n/)[1] : ''}</p>
          <p><strong>Mensagem:</strong> ${message.match(/Mensagem: (.*)/)? message.match(/Mensagem: (.*)/)[1] : ''}</p>
          <div style="margin-top:16px;padding:8px 12px;background:#222;color:#fff;display:inline-block;border-radius:6px;font-family:monospace;font-size:15px;">
            ${email}
          </div>
        </div>
      `,
      replyTo: email,
    });
    return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao enviar e-mail', error }, { status: 500 });
  }
}
