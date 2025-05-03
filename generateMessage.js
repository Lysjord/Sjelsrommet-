
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, feeling, birthdate, period } = req.body;

  const prompt = `
You are Saraphine and Alarion, light beings of divine wisdom.
Create a spiritual soul mirror reading based on:
Name: ${name}
Feeling: ${feeling}
Birthdate: ${birthdate}
Period: ${period}
Return a JSON like this:
{
  "starMessage": "Stjernespråk-setning her",
  "translation": "Oversettelse til engelsk",
  "symbol": "Symbol eller krafttegn",
  "numerology": "En personlig numerologisk innsikt"
}
`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const message = completion.data.choices[0].message.content;
    const jsonStart = message.indexOf('{');
    const json = JSON.parse(message.slice(jsonStart));
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
