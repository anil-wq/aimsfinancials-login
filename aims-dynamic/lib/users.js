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
        // Stocks: equity ownership with growth potential and volatility
        'Stocks represent ownership in individual companies. They offer the potential for significant appreciation but are subject to market volatility and can experience large swings in value, including the risk of losing principal.',
        // Bonds: debt instruments with income but credit and rate risk
        'Bonds are debt securities issued by corporations, municipalities or governments. They pay regular interest and return the principal at maturity, making them generally less volatile than stocks; however, they carry credit risk if the issuer defaults, interest‑rate risk if rates rise and inflation risk over time.',
        // Mutual funds: pooled investments with professional management
        'Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds or other assets. They offer built‑in diversification and professional management but still incur market risk, management fees and the potential to underperform simple index benchmarks.',
        // Exchange‑traded funds (ETFs): diversified funds that trade intraday
        'Exchange‑traded funds (ETFs) are similar to mutual funds but trade on an exchange like individual stocks. They typically have lower management fees and provide intraday liquidity while offering exposure to a basket of securities; nonetheless, their prices fluctuate with market movements and may trade at premiums or discounts to net asset value.',
        // Real Estate Investment Trusts (REITs): indirect real estate ownership
        'Real estate investment trusts (REITs) allow investors to own a share of income‑producing real estate such as apartment buildings, office space and hotels. REITs must distribute most of their income as dividends and can provide diversification and high yields, but they are sensitive to real estate market cycles, interest rates and the use of leverage.',
        // Annuities: insurance contracts that provide income
        'Annuities are insurance contracts in which you pay a lump sum or series of payments to an insurer in exchange for a guaranteed stream of income in the future. They can offer fixed or variable returns and may provide tax‑deferred growth, but they often carry higher fees, surrender charges and limited access to your capital.',
        // Cash and cash equivalents: safety and liquidity
        'Cash and cash equivalents—such as money market funds, Treasury bills and bank savings accounts—provide safety and liquidity but generally earn modest returns that may not keep up with inflation, resulting in a loss of purchasing power over time.',
        // Certificates of deposit (CDs): time deposits
        'Certificates of deposit (CDs) are time deposits offered by banks that pay a fixed interest rate over a specified term. They are federally insured up to certain limits and offer higher yields than savings accounts but impose penalties for early withdrawal and can expose you to inflation risk if rates rise.',
        // Alternative investments: diversification beyond traditional assets
        'Alternative investments include private equity, hedge funds, commodities and collectibles. These investments often have low correlation with stocks and bonds and may enhance portfolio diversification, but they can carry higher fees, limited liquidity, complex strategies and a greater risk of loss.'
      ],
      // Wills and basic trusts for estate planning
      willsTrusts: [
        // Wills vs. trusts
        'Wills direct how your assets are distributed after death but must go through probate, which can be lengthy, public and potentially expensive.',
        // Revocable living trust features and drawbacks
        'A living revocable trust lets you retitle assets into the trust during your lifetime while maintaining control. It avoids probate, becomes irrevocable at death and allows you to set conditions for beneficiary distributions; however, setting one up requires retitling assets and upfront legal costs, provides no direct tax benefits and does not protect against creditors.',
        // Testamentary trust features and limitations
        'Testamentary trusts are created under your will and spring to life only after you die. They are irrevocable at that point and can hold life insurance proceeds or other property for minor beneficiaries, but they require the will to go through probate and cannot be changed after your death.',
        // Special needs trust considerations
        'Special needs trusts help disabled beneficiaries by providing funds for supplemental expenses without jeopardizing eligibility for government benefits such as Medicaid and Supplemental Security Income, but they must be carefully drafted and administered to comply with strict rules.',
        // Irrevocable vs. revocable trusts trade‑offs
        'Irrevocable trusts remove assets from your taxable estate and protect them from creditors but cannot easily be changed or revoked, meaning you give up control over the assets. Revocable trusts offer flexibility during your lifetime but do not provide the same level of asset protection or tax benefits.',
        // Importance of funding and updating estate documents
        'Estate documents should be reviewed and updated periodically to reflect changes in your family, assets and tax laws; failing to properly fund or update a trust can result in assets passing through probate or unintended distributions.'
      ],
      // Advanced trusts used in complex estate and philanthropic planning
      advancedTrusts: [
        // Charitable remainder trust (CRT)
        'A charitable remainder trust (CRT) lets you transfer appreciated assets to the trust, avoid immediate capital gains tax on their sale, receive a stream of income for life or for a set term and benefit from a charitable tax deduction. At the end of the term, the remaining assets go to a charity of your choice; CRTs are irrevocable and involve legal and administrative costs, and you relinquish control of the assets.',
        // Charitable lead trust (CLT)
        'A charitable lead trust (CLT) provides an income stream to a designated charity for a period of time. When the term ends, the remaining assets revert to you or your heirs, potentially reducing estate taxes; CLTs are irrevocable, complex to administer and require careful funding.',
        // Irrevocable life insurance trust (ILIT)
        'An irrevocable life insurance trust (ILIT) owns a life insurance policy outside your estate. Premiums you contribute are considered gifts, and the death benefit passes to beneficiaries estate‑tax free while shielding the proceeds from creditors. ILITs are irrevocable, so you cannot change the policy or access its cash value once transferred.',
        // Asset protection trust
        'Asset protection trusts are irrevocable arrangements that shield assets from future creditors. They are permitted in a limited number of jurisdictions and typically require professional administration; challenges by creditors or courts can limit their effectiveness.',
        // Lifetime access trust (SLAT)
        'A lifetime access trust (also known as a spousal lifetime access trust) allows your spouse limited access to trust assets during his or her lifetime, preserving wealth for children while giving your spouse flexibility. Risks include reliance on trustee discretion and potential estate tax implications if not structured properly.',
        // A‑B trust (marital and credit shelter trust)
        'An A‑B trust divides property into two trusts after the first spouse dies—a marital trust for the surviving spouse and a credit shelter trust for heirs. This arrangement can maximize estate tax exemptions and protect beneficiaries but introduces complexity and requires careful funding and ongoing administration.'
      ],
      // Charitable giving vehicles and donor‑advised funds
      charitableGiving: [
        // Donor‑advised fund (DAF) basics
        'A donor‑advised fund (DAF) is a giving account established at a public charity. You make contributions of cash or appreciated assets, receive an immediate income tax deduction and then recommend grants to your favorite charities over time.',
        // How a DAF works
        'Contributions to a DAF are irrevocable but may be invested and grow tax‑free. Donors can suggest grants whenever they like, allowing them to bunch deductions in one year while distributing gifts over future years.',
        // Benefits of a DAF
        'DAFs offer the potential to avoid capital gains tax when you donate appreciated assets, tax‑free growth of invested contributions, simplified administration, the option for anonymity and the ability to leave a charitable legacy by naming successors or charitable beneficiaries.',
        // Drawbacks of DAFs and fees
        'DAFs come with disadvantages: donors give up legal control of contributions; the sponsoring organization has final say on grants; there is no requirement to distribute funds to charity, which can delay impact; and administrative and investment fees may erode the account value over time.',
        // Charitable trusts vs. DAFs
        'Charitable trusts such as CRTs and CLTs can provide income streams and tax benefits but require legal setup and administration, are irrevocable and reduce flexibility compared with DAFs.'
      ],
      // Life insurance strategies and considerations
      lifeInsurance: [
        // Term life insurance
        'Term life insurance provides affordable coverage for a specific period such as 10, 20 or 30 years. It pays an income‑tax‑free death benefit if you die during the term, making it ideal for covering temporary needs like mortgage payments or income replacement. There is no cash value, so the policy expires if you outlive the term and may require renewal at higher premiums.',
        // Whole life insurance
        'Whole life insurance is a type of permanent coverage that guarantees a level premium, a guaranteed death benefit and a cash value component that grows at a predetermined rate. You can borrow against the cash value tax‑free, and participating policies may pay dividends, but whole life premiums are much higher than term and returns may be lower compared with other investments.',
        // Universal, indexed and variable universal life
        'Universal life insurance provides lifelong protection with flexibility in premiums and death benefit amounts. Standard universal life policies credit a guaranteed interest rate; indexed universal life (IUL) ties cash value growth to a stock index with caps and floors; variable universal life (VUL) allows cash value to be invested in subaccounts like mutual funds. These policies can offer tax‑deferred growth and higher returns but involve higher fees, market risk and complexity, and the policy may lapse if the cash value is insufficient to cover charges.',
        // Survivorship policies
        'Survivorship or second‑to‑die policies insure two people (usually spouses) and pay the death benefit after both have passed. They are commonly used to cover estate taxes and provide liquidity for heirs. Premiums can be lower than purchasing two separate permanent policies, but the policy provides no benefits upon the first death.',
        // Estate planning and liquidity uses
        'Life insurance can be a powerful tool for high net worth individuals: it creates liquidity to pay estate taxes so heirs do not have to sell illiquid assets; it funds buy‑sell agreements or key person coverage for businesses; it equalizes inheritances among heirs; and it supports philanthropic goals when combined with trusts or donor‑advised funds.',
        // High net worth strategies and drawbacks
        'High net worth strategies often involve pairing permanent life insurance with an irrevocable life insurance trust (ILIT) to remove the policy from the taxable estate; using survivorship policies for estate tax planning; leveraging cash value to supplement retirement income; and financing premiums. Drawbacks include high premiums, ongoing funding requirements, the risk of underperformance in investment‑linked policies, and the reduction of the death benefit if loans are outstanding.',
        // Premium financing
        'Premium financing arrangements allow wealthy individuals to borrow money to pay large life insurance premiums while preserving capital for investments. These strategies can amplify leverage and estate planning benefits but carry interest rate risk, require adequate collateral and can cause the policy to lapse if the financing is not managed properly.',
        // Charitable planning with life insurance
        'Charitable planning with life insurance includes naming a charity as beneficiary, donating a policy to a charitable organization for an immediate income tax deduction and using a policy inside a charitable remainder trust to provide income while leaving a charitable gift. These strategies must comply with tax rules and may reduce benefits to heirs.'
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