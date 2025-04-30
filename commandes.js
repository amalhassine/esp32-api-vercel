let state = {
  pompe: "OFF",
  buzzer: "OFF"
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(state);
  }

  if (req.method === 'POST') {
    const data = await req.json();
    if ('pompe' in data) state.pompe = data.pompe;
    if ('buzzer' in data) state.buzzer = data.buzzer;
    return res.status(200).json({ message: "Commande mise à jour", state });
  }

  return res.status(405).send('Méthode non autorisée');
}
