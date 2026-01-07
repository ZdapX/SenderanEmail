
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'braynofficial66@gmail.com',
            pass: 'yuqb nfuh duvg wxwu'
        }
    });

    const reportHtml = `
    <div style="padding: 40px; font-family: sans-serif; background-color: #ffffff;">
        <div style="border-left: 4px solid #22c55e; padding-left: 20px;">
            <h2 style="color: #1a202c; margin: 0; font-size: 18px;">Automated Status Report</h2>
            <p style="color: #718096; font-size: 14px; margin-top: 5px;">${new Date().toLocaleString()}</p>
        </div>
        <div style="margin-top: 30px;">
            <div style="background: #f0fff4; padding: 15px; border-radius: 8px; color: #276749; font-size: 14px; display: inline-block;">
                ● System Status: Online
            </div>
        </div>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: '"System" <braynofficial66@gmail.com>',
            to: 'braynofficial66@gmail.com',
            subject: 'System Status Report',
            html: reportHtml
        });
        res.status(200).send('OK');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
