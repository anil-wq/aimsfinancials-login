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
      // Retirement planning guidance
      retirement: [
        'Maximize contributions to 401(k) and IRA accounts.',
        'Take advantage of employer matching contributions.',
        'Diversify your portfolio across asset classes.',
        'Consider Roth conversions in low‑income years.',
        'Plan for healthcare costs and long‑term care.'
      ],
      // General tax strategies
      tax: [
        'Harvest capital gains and losses to minimize taxes.',
        'Optimize timing of income and deductions.',
        'Use tax‑advantaged accounts such as HSAs and 529 plans.',
        'Coordinate charitable giving through donor‑advised funds.',
        'Consider state and local tax impacts when relocating.'
      ],
      // Detailed overview of major financial vehicles
      financialVehicles: [
        // Stocks: equity ownership with growth potential but higher volatility【980636252535781†L28-L35】
        'Stocks represent ownership in individual companies. They offer the potential for significant appreciation as the business grows but are subject to market volatility and can experience large swings in value【980636252535781†L28-L35】.',
        // Bonds: debt instruments that pay interest and return principal【980636252535781†L28-L35】【980636252535781†L56-L61】
        'Bonds are debt securities issued by corporations, municipalities or governments. They pay regular interest and return the principal at maturity, making them generally less volatile than stocks while providing steady income【980636252535781†L28-L35】【980636252535781†L56-L61】.',
        // Mutual funds: pooled investments with professional management【980636252535781†L28-L35】【980636252535781†L65-L70】
        'Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds or other assets. They are managed by professionals and offer built‑in diversification, which can help reduce individual stock or bond risk【980636252535781†L28-L35】【980636252535781†L65-L70】.',
        // Exchange‑traded funds (ETFs): trade like stocks but hold baskets of assets
        'Exchange‑traded funds (ETFs) are similar to mutual funds but trade on an exchange like individual stocks. They typically have lower management fees than mutual funds and provide intraday liquidity while offering exposure to a basket of securities.',
        // Real Estate Investment Trusts (REITs): indirect real estate ownership
        'Real estate investment trusts (REITs) allow investors to own a share of income‑producing real estate such as apartment buildings, office space and hotels. REITs must distribute most of their income as dividends and can provide diversification and high yields.',
        // Annuities: insurance contracts that provide income
        'Annuities are insurance contracts in which you pay a lump sum or series of payments to an insurer in exchange for a guaranteed stream of income in the future. They can offer fixed or variable returns and may provide tax‑deferred growth, but they often carry higher fees and surrender charges.',
        // Cash and cash equivalents: safety and liquidity
        'Cash and cash equivalents—such as money market funds, Treasury bills and bank savings accounts—provide safety and liquidity but generally earn modest returns that may not keep up with inflation.',
        // Certificates of deposit (CDs): time deposits
        'Certificates of deposit (CDs) are time deposits offered by banks that pay a fixed interest rate over a specified term. They are federally insured up to certain limits and offer higher yields than savings accounts but impose penalties for early withdrawal.',
        // Alternative investments: diversification beyond traditional assets
        'Alternative investments include private equity, hedge funds, commodities and collectibles. These investments often have low correlation with stocks and bonds and may enhance portfolio diversification, but they can carry higher fees, limited liquidity and greater risk.'
      ],
      // Wills and basic trusts for estate planning
      willsTrusts: [
        // Wills vs. trusts
        'Wills direct how your assets are distributed after death but must go through probate, which can be lengthy and public.',
        // Revocable living trust features【881872402105417†L124-L148】
        'A living revocable trust lets you retitle assets into the trust during your lifetime while maintaining control. It avoids probate, becomes irrevocable at death, and allows you to set conditions for when beneficiaries receive distributions【881872402105417†L124-L148】.',
        // Testamentary trust features【881872402105417†L155-L175】
        'Testamentary trusts are created under your will and spring to life only after you die. They are irrevocable at that point and can hold life insurance proceeds or other property for minor beneficiaries until they reach specified ages or milestones【881872402105417†L155-L175】.',
        // Special needs trust features【881872402105417†L177-L184】
        'Special needs trusts help disabled beneficiaries by providing funds for supplemental expenses without jeopardizing their eligibility for government benefits such as Medicaid and Supplemental Security Income【881872402105417†L177-L184】.',
        // Irrevocable vs. revocable trusts
        'Irrevocable trusts remove assets from your taxable estate and protect them from creditors but cannot easily be changed or revoked. Revocable trusts offer flexibility during your lifetime but do not provide the same level of asset protection.',
        // Importance of updating estate documents
        'Estate documents should be reviewed and updated periodically to reflect changes in your family situation, assets, and tax laws.'
      ],
      // Advanced trusts used in complex estate and philanthropic planning
      advancedTrusts: [
        // Charitable remainder trust (CRT)【881872402105417†L284-L305】
        'A charitable remainder trust (CRT) lets you transfer appreciated assets to the trust, avoid immediate capital gains tax on their sale, receive a stream of income for life or for a set term, and benefit from a charitable tax deduction. At the end of the term, the remaining assets go to the charity you choose【881872402105417†L284-L305】.',
        // Charitable lead trust (CLT)【881872402105417†L284-L305】
        'A charitable lead trust (CLT) provides an income stream to a designated charity for a period of time. When the term ends, the remaining assets revert to you or your heirs, potentially reducing estate taxes【881872402105417†L284-L305】.',
        // Irrevocable life insurance trust (ILIT)【881872402105417†L193-L219】
        'An irrevocable life insurance trust (ILIT) owns a life insurance policy outside your estate. Premiums you contribute are considered gifts, and the death benefit passes to beneficiaries estate‑tax free while shielding the proceeds from creditors【881872402105417†L193-L219】.',
        // Asset protection trust【881872402105417†L221-L231】
        'Asset protection trusts are irrevocable arrangements that shield assets from future creditors. They are permitted in a limited number of jurisdictions and typically require professional administration【881872402105417†L221-L231】.',
        // Lifetime access trust【881872402105417†L238-L253】
        'A lifetime access trust (also known as a spousal lifetime access trust) allows your spouse limited access to trust assets during his or her lifetime. This structure preserves wealth for children while giving your spouse flexibility【881872402105417†L238-L253】.',
        // A-B trust (marital and credit shelter trust)【881872402105417†L255-L260】
        'An A‑B trust divides property into two trusts after the first spouse dies—a marital trust for the surviving spouse and a credit shelter trust for heirs. This arrangement can maximize estate tax exemptions and protect beneficiaries【881872402105417†L255-L260】.'
      ],
      // Charitable giving vehicles and donor‑advised funds
      charitableGiving: [
        // Donor‑advised fund (DAF) definition【230157262629390†L79-L90】
        'A donor‑advised fund (DAF) is a giving account established at a public charity. You make contributions of cash or appreciated assets, receive an immediate tax deduction, and then recommend grants to your favorite charities over time【230157262629390†L79-L90】.',
        // How a DAF works【230157262629390†L140-L156】
        'Contributions to a DAF are irrevocable but may be invested and grow tax‑free. Donors can suggest grants whenever they like, allowing them to bunch deductions in one year while distributing gifts over future years【230157262629390†L140-L156】.',
        // Benefits of a DAF【230157262629390†L189-L208】
        'DAFs offer an immediate income tax deduction, potential to avoid capital gains tax when you donate appreciated assets, tax‑free growth of invested contributions, simplified administration, the option for anonymity, and the ability to leave a charitable legacy by naming successors or charitable beneficiaries【230157262629390†L189-L208】.',
        // Charitable trusts vs. DAFs
        'Charitable trusts such as CRTs and CLTs can provide income streams and tax benefits but require legal setup and administration. DAFs offer a simpler, more flexible way to support multiple charities over time.'
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