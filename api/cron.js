const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dafanation999@gmail.com',
            pass: 'epmy xhuy dawe soqf'
        }
    });

    const reportHtml = `
    <div style="font-family: sans-serif; background-color: #f0f0f0; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; border-top: 8px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="padding: 20px; border-bottom: 1px solid #eee;">
                <h2 style="color: #27ae60; margin: 0;">Laporan Otomatis Harian</h2>
                <small style="color: #999;">ID Laporan: ${new Date().getTime()}</small>
            </div>
            <div style="padding: 25px;">
                <p>Halo Admin, sistem berjalan dengan normal.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <td style="padding: 10px; border: 1px solid #eee; background: #fafafa;">Status Server</td>
                        <td style="padding: 10px; border: 1px solid #eee; color: #27ae60; font-weight: bold;">ONLINE</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #eee; background: #fafafa;">Waktu Laporan</td>
                        <td style="padding: 10px; border: 1px solid #eee;">${new Date().toLocaleString()}</td>
                    </tr>
                </table>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="#" style="background: #27ae60; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">Cek Dashboard</a>
                </div>
            </div>
            <div style="padding: 15px; background: #fdfdfd; text-align: center; border-radius: 0 0 12px 12px;">
                <p style="font-size: 11px; color: #bbb; margin: 0;">Email ini dikirim otomatis oleh Vercel Cron Job.</p>
            </div>
        </div>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: '"System Report" <dafanation999@gmail.com>',
            to: 'dafanation999@gmail.com', // Kirim ke diri sendiri/admin
            subject: '🟢 System Status: Normal',
            html: reportHtml
        });
        res.status(200).send('Laporan Terkirim');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
