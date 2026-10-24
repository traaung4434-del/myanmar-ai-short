export default async function handler(req, res) {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return res.status(500).json({ error: 'REPLICATE_API_TOKEN မထည့်ရသေးပါ။' });
  const id = req.query?.id;
  if (!id || !/^[a-zA-Z0-9-]+$/.test(id)) return res.status(400).json({ error: 'Prediction ID မမှန်ပါ။' });
  try {
    const response = await fetch(`https://api.replicate.com/v1/predictions/${encodeURIComponent(id)}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.detail || data.title || JSON.stringify(data) });
    return res.status(200).json({ id: data.id, status: data.status, output: data.output || null, error: data.error || null });
  } catch (e) {
    return res.status(500).json({ error: 'Status စစ်ဆေးရာတွင် အမှား: ' + e.message });
  }
}