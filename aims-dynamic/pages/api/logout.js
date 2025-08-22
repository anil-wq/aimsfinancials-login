/**
 * Logout API route. Clears the username cookie by
 * setting its expiration date in the past.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  // Set a cookie with an expired date to remove it
  res.setHeader('Set-Cookie', 'username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
  return res.status(200).json({ message: 'Logged out' });
}