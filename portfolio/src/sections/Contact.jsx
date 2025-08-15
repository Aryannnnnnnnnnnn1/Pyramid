import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Section } from '../components/Section'

export function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [status, setStatus] = useState('idle')

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			setStatus('loading')
			await axios.post('/api/contact', form)
			setStatus('success')
			setForm({ name: '', email: '', message: '' })
		} catch (e) {
			setStatus('error')
		}
	}

	return (
		<Section id="contact" title="Contact">
			<motion.form
				onSubmit={onSubmit}
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, margin: '-100px' }}
				transition={{ duration: 0.5 }}
				className="mx-auto max-w-xl rounded-xl border border-white/10 bg-card p-6 shadow-soft"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<label className="flex flex-col gap-2 text-sm">
						<span className="text-white/70">Name</span>
						<input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-accent/60" />
					</label>
					<label className="flex flex-col gap-2 text-sm">
						<span className="text-white/70">Email</span>
						<input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-accent/60" />
					</label>
				</div>
				<label className="mt-4 flex flex-col gap-2 text-sm">
					<span className="text-white/70">Message</span>
					<textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." required rows="5" className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-accent/60" />
				</label>
				<div className="mt-6 flex items-center gap-3">
					<button type="submit" disabled={status==='loading'} className="ripple inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-muted disabled:opacity-60">
						{status === 'loading' ? 'Sending…' : 'Send message'}
					</button>
					{status === 'success' && <span className="text-xs text-emerald-600 dark:text-emerald-400">Message sent! I will reply soon.</span>}
					{status === 'error' && <span className="text-xs text-red-600 dark:text-red-400">Something went wrong. Please try again.</span>}
				</div>
			</motion.form>
			<p className="mt-6 text-center text-xs text-white/50">This form sends to huihui3060@gmail.com.</p>
		</Section>
	)
}