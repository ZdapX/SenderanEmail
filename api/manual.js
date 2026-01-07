const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { email, subject, message } = req.body;

    // LANGSUNG INPUT DISINI
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dafanation999@gmail.com', 
            pass: 'epmy xhuy dawe soqf' 
        }
    });

    try {
        await transporter.sendMail({
            from: 'EMAIL_KAMU@gmail.com',
            to: email,
            subject: subject,
            text: message
        });
        res.status(200).json({ status: 'Success' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
