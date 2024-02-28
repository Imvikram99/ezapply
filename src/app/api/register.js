// app/api/register.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password, role } = req.body;
      // Implement registration logic here
      res.status(200).json({ message: 'User registered successfully', user: { username, role } });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  