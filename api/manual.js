
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'braynofficial66@gmail.com',
            pass: 'yuqb nfuh duvg wxwu'
        }
    });

    const htmlContent = `
    <div style="background-color: #f4f7f6; padding: 50px 20px; font-family: sans-serif;">
        <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0;">
            <div style="background-color: #22c55e; padding: 25px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">Pesan Baru</h2>
            </div>
            <div style="padding: 40px;">
                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0;">
                    ${message.replace(/\n/g, '<br>')}
                </p>
            </div>
        </div>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: '"sistem" <braynofficial66@gmail.com>',
            to: email,
            subject: subject || 'No Subject',
            html: htmlContent
        });
        res.status(200).json({ status: 'Success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
