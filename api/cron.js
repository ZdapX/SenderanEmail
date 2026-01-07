const nodemailer = require('nodemailer');

export default async function handler(req, res) {
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
            to: 'TUJUAN_LAPORAN@gmail.com',
            subject: 'Laporan Otomatis Sistem',
            text: 'Halo, ini laporan otomatis harian Anda yang dikirim dari Vercel.'
        });
        res.status(200).send('Cron Job Berhasil Terkirim');
    } catch (err) {
        res.status(500).send(err.message);
    }
}
