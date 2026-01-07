const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dafanation999@gmail.com',
            pass: 'epmy xhuy dawe soqf'
        }
    });

    // Template Email Modern - Tema Hijau
    const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #27ae60; padding: 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Pesan Baru</h1>
            </div>
            <div style="padding: 30px;">
                <p style="font-size: 16px; color: #7f8c8d;">Anda menerima pesan baru melalui sistem:</p>
                <div style="background-color: #f1f8f4; padding: 20px; border-left: 4px solid #27ae60; margin: 20px 0;">
                    <p style="margin: 0; font-style: italic; color: #2c3e50; line-height: 1.6;">"${message}"</p>
                </div>
                <p style="font-size: 14px; color: #95a5a6; margin-top: 30px;">
                    Balas email ini secara manual jika diperlukan.
                </p>
            </div>
            <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #bdc3c7;">
                &copy; 2024 Dafanation Email System
            </div>
        </div>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: '"Dafanation System" <dafanation999@gmail.com>',
            to: email,
            subject: `[PESAN] ${subject}`,
            html: htmlContent // Menggunakan HTML
        });
        res.status(200).json({ status: 'Success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
