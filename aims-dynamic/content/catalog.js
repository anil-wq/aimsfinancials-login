// Catalog of topics grouped by category
// Each group contains an array of items with a title, slug and summary.
// When adding new articles be sure to also create a matching file in content/articles

export const catalog = [
  {
    group: "Insurance",
    items: [
      { title: "Term Life Insurance", slug: "term-life", summary: "Pure protection for a fixed term; lowest cost per dollar of coverage." },
      { title: "Whole Life Insurance", slug: "whole-life", summary: "Permanent coverage with guaranteed premiums and cash value." },
      { title: "Indexed Universal Life (IUL)", slug: "iul", summary: "Flexible premiums with index-linked crediting and downside floors." },
      { title: "Variable Universal Life (VUL)", slug: "vul", summary: "Permanent policy with subaccounts for market-driven growth." },
      { title: "Private Placement Life Insurance (PPLI)", slug: "ppli", summary: "Institutional pricing and custom investments for accredited investors." },
      { title: "Survivorship Life", slug: "survivorship", summary: "Second-to-die coverage for estate tax liquidity and wealth transfer." }
    ]
  },
  {
    group: "Trusts (Core)",
    items: [
      { title: "Revocable Living Trust", slug: "revocable-trust", summary: "Avoids probate and provides continuity during incapacity." },
      { title: "Testamentary Trust", slug: "testamentary-trust", summary: "Created by will to control distributions after death." },
      { title: "Special Needs Trust", slug: "special-needs-trust", summary: "Protects benefits while supplementing quality of life." }
    ]
  },
  {
    group: "Trusts (Advanced / Estate)",
    items: [
      { title: "Irrevocable Life Insurance Trust (ILIT)", slug: "ilit", summary: "Holds life insurance outside the estate for tax efficiency." },
      { title: "Grantor Retained Annuity Trust (GRAT)", slug: "grat", summary: "Freeze the value of rapidly growing assets for heirs." },
      { title: "Intentionally Defective Grantor Trust (IDGT)", slug: "idgt", summary: "Estate-freeze strategy where the grantor pays income tax." },
      { title: "Charitable Remainder Trust (CRT)", slug: "crt", summary: "Provides income now and charitable gift later with tax benefits." },
      { title: "Charitable Lead Trust (CLT)", slug: "clt", summary: "Gives income to charity first and returns the remainder to heirs." },
      { title: "Domestic Asset Protection Trust (DAPT)", slug: "dapt", summary: "Protects assets from creditors while retaining limited access." }
    ]
  },
  {
    group: "Charitable",
    items: [
      { title: "Donor‑Advised Funds (DAFs)", slug: "daf", summary: "Simplifies giving with immediate deduction and long-term grants." },
      { title: "Private Foundations", slug: "private-foundation", summary: "Controlled charitable entity with substantial administrative work." }
    ]
  },
  {
    group: "Investment Vehicles",
    items: [
      { title: "ETFs & Mutual Funds", slug: "funds", summary: "Diversified baskets of securities; ETFs trade intraday." },
      { title: "Municipal Bonds", slug: "munis", summary: "Tax-advantaged income issued by state and local governments." },
      { title: "REITs", slug: "reits", summary: "Real estate exposure with liquidity and dividend income." },
      { title: "Private Equity / Venture Capital", slug: "private-equity", summary: "Illiquid ownership stakes with high return potential and risk." },
      { title: "Annuities", slug: "annuities", summary: "Insurance contracts providing guaranteed income with various structures." }
    ]
  },
  {
    group: "Planning Structures",
    items: [
      { title: "Family Limited Partnership (FLP)", slug: "flp", summary: "Centralized control and discounting for family wealth transfer." },
      { title: "Qualified Personal Residence Trust (QPRT)", slug: "qprt", summary: "Transfers a home at discounted value while retaining occupancy." },
      { title: "529 Plans & Education Trusts", slug: "529-education", summary: "Tax-advantaged education funding vehicles and trusts." }
    ]
  }
];