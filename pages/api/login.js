import { findUser } from '../../lib/users';

/**
 * Login API route. Accepts POST requests with JSON body
 * containing a username and password. If the credentials match
 * a user defined in lib/users.js, a session cookie is set and
 * a success response is returned. Otherwise a 401 status is sent.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  try {
    const { username, password } = req.body;
    const user = findUser(username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // For simplicity we store the username in the cookie. A real
    // implementation would create a signed JWT or session identifier.
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    const cookie = `username=${encodeURIComponent(username)}; HttpOnly; Path=/; Expires=${expires.toUTCString()}`;
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ message: 'Logged in' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}