// This simple module stores user credentials and basic profile data.
// In a production application, you would retrieve this information
// from a secure database and never store plain text passwords. For
// demonstration purposes we include a single client account here.

const users = [
  {
    username: 'client',
    password: 'password', // NOTE: replace with a more secure password in real use
    name: 'Valued Client',
    strategies: {
      retirement: [
        'Maximize contributions to 401(k) and IRA accounts.',
        'Take advantage of employer matching contributions.',
        'Diversify your portfolio across asset classes.',
        'Consider Roth conversions in low‑income years.',
        'Plan for healthcare costs and long‑term care.'
      ],
      tax: [
        'Harvest capital gains and losses to minimize taxes.',
        'Optimize timing of income and deductions.',
        'Use tax‑advantaged accounts such as HSAs and 529 plans.',
        'Coordinate charitable giving through donor‑advised funds.',
        'Consider state and local tax impacts when relocating.'
      ]
    }
  }
];

/**
 * Find a user by username. Returns the user object or undefined.
 * @param {string} username
 */
export function findUser(username) {
  return users.find(u => u.username === username);
}

export default users;