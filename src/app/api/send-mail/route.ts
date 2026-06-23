import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAIL_USER = process.env.MAIL_USER ?? "";
const MAIL_APP_PASSWORD = process.env.MAIL_APP_PASSWORD ?? "";
const MAIL_TO = process.env.MAIL_TO ?? "animeshjha.dev@gmail.com";
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME ?? "Animesh Portfolio";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

function isValidEmail(email: string) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeField(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function buildTextContent({
  name,
  email,
  subject,
  content,
}: ContactPayload) {
  return [
    "New portfolio contact request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    content,
  ].join("\n");
}

function buildHtmlContent({
  name,
  email,
  subject,
  content,
}: ContactPayload) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2 style="margin-bottom:16px;">New portfolio contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <div style="margin-top:20px;">
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${escapeHtml(content)}</p>
      </div>
    </div>
  `;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    if (!MAIL_USER || !MAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          status: false,
          message: "Mail service is not configured.",
        },
        { status: 500 }
      );
    }

    const requestObj = (await req.json()) as ContactPayload;
    const name = normalizeField(requestObj.name ?? "");
    const email = normalizeField(requestObj.email ?? "");
    const subject = normalizeField(requestObj.subject ?? "");
    const content = (requestObj.content ?? "").trim();

    if (!name || !email || !subject || !content) {
      return NextResponse.json(
        {
          status: false,
          message: "Please provide all necessary data.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid Email ID",
        },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${MAIL_USER}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: `Portfolio Contact | ${subject}`,
      text: buildTextContent({ name, email, subject, content }),
      html: buildHtmlContent({ name, email, subject, content }),
      headers: {
        "X-Portfolio-Source": "animesh-portfolio",
      },
    });

    return NextResponse.json({
      status: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending portfolio email", error);
    return NextResponse.json(
      {
        status: false,
        message: "Error sending Email",
      },
      { status: 500 }
    );
  }
}
