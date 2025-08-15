import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Resend } from 'resend'

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(morgan('tiny'))
app.use(cors({ origin: true }))
app.use(bodyParser.json())

app.get('/api/health', (req, res) => {
	res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
	try {
		const { name, email, message } = req.body || {}
		if (!name || !email || !message) {
			return res.status(400).json({ error: 'Missing fields' })
		}
		await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: ['huihui3060@gmail.com'],
			subject: `New message from ${name}`,
			html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/</g, '&lt;')}</p>`
		})
		res.json({ ok: true })
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Failed to send' })
	}
})

const port = process.env.PORT || 5174
app.listen(port, () => console.log(`API listening on :${port}`))