import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import bodyParser from 'body-parser'
import { Resend } from 'resend'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())

const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set. Emails will not be sent until this is configured.')
}

const resend = resendApiKey ? new Resend(resendApiKey) : null

// Root health route
app.get('/', (req, res) => {
  return res.json({
    status: 'ok',
    resendConfigured: !!resendApiKey,
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, budget, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    if (!resend) {
      console.warn('Resend client not configured. Skipping email send.')
      return res.status(503).json({ error: 'Email service not configured' })
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@olamilekanportfolio.com',
      to: process.env.EMAIL_TO || 'amujosafeolamilekan@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.json({ success: true })
  } catch (err) {
    console.error('Failed to send email', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

// For Vercel serverless
export default app

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Contact API server running on http://localhost:${PORT}`)
  })
}
