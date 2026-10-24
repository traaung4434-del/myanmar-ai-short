export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return res.status(500).json({ error: 'Vercel Environment Variables ထဲမှာ REPLICATE_API_TOKEN မထည့်ရသေးပါ။' });
  try {
    const { prompt, duration = 5, aspect_ratio = '9:16' } = req.body || {};
    if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'Prompt လိုအပ်သည်။' });
    // Default model supports text-to-video. Input schema can change; check the model page if it reports an input error.
    const response = await fetch('https://api.replicate.com/v1/models/prunaai/p-video-2-pro/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait=5'
      },
      body: JSON.stringify({ input: { prompt, duration: Number(duration), aspect_ratio } })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.detail || data.title || data.error || JSON.stringify(data) });
    return res.status(200).json({ id: data.id, status: data.status, output: data.output || null, error: data.error || null });
  } catch (e) {
    return res.status(500).json({ error: 'Video API ချိတ်ဆက်မှု အမှား: ' + e.message });
  }
}