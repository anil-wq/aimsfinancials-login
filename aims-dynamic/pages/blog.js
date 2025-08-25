import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Blog page
 *
 * This page surfaces thought‑leadership inspired by the founder’s public
 * LinkedIn posts. Each article summarises a real concept Anil has
 * discussed online – from optimising equity compensation to
 * protecting family wealth. Visitors can expand posts to read
 * full details without leaving the site. Additional posts can be
 * added by extending the `posts` array below or by connecting to a
 * CMS in the future.
 */
export default function Blog() {
  // Sample LinkedIn‑style posts. In a production version these
  // could be fetched from a headless CMS or API. Each entry
  // contains a title, date, summary and full content. Feel free
  // to add more objects to this array as new posts are published.
  const posts = [
    {
      id: 'tax-perks-vs-tax-strategy',
      title: 'Tax Perks vs. Tax Strategy: Do You Know the Difference?',
      date: 'August 22, 2025',
      summary:
        'A recent LinkedIn post explains why tax “perks” and true tax strategies are not the same thing. Perks are deductions and credits everyone knows, while strategies are incentives built into the code that reward building, giving and investing.',
      content: (
        <div>
          <p>
            Most people are familiar with tax perks such as deductions, credits and pre‑tax accounts. They
            offset income and can lower your bill at the end of the year, but they’re only the tip of the
            iceberg. Fewer people understand tax <em>strategies</em> — the intentional incentives built into
            the law to encourage investment, entrepreneurship and generosity. These strategies aren’t
            loopholes; they’re legal pathways to build wealth.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Strategies reward those who invest, build or give in specific ways and can produce real
              benefits beyond basic savings.</li>
            <li style={{ marginBottom: '0.5rem' }}>Every opportunity comes with risk; weighing those risks against your comfort level is
              critical.</li>
            <li style={{ marginBottom: '0.5rem' }}>A financial quarterback helps demystify the rules and tailor strategies to your unique
              situation.</li>
            <li>The difference between a perk and a strategy isn’t semantics — it’s the difference between
              saving a little and building generational wealth.</li>
          </ul>
          <p>
            Ask yourself: are you satisfied with a few tax perks, or are you ready to play the long game
            with a comprehensive tax strategy?
          </p>
        </div>
      )
    },
    {
      id: 'fair-share-taxes',
      title: 'Why “Fair Share” Doesn’t Exist in the Tax Code',
      date: 'August 17, 2025',
      summary:
        'In this post, Anil challenges the idea of paying your “fair share” of taxes and points out that the U.S. tax code is designed to incentivise growth and generosity, not just collect revenue.',
      content: (
        <div>
          <p>
            The IRS tax code isn’t merely a collection tool — it’s designed to build the country by
            offering options for business owners, givers and even W‑2 professionals. Those who
            understand and use the rules can lower taxes and redirect dollars into growth; those who
            ignore them often pay more than they should.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>There’s no such thing as a one‑size‑fits‑all “fair share” — the code provides
              opportunities to engineer wealth legally and strategically.</li>
            <li style={{ marginBottom: '0.5rem' }}>Taxes depend on the rules you know and the strategies you follow; smart professionals
              don’t just pay taxes, they use the code to build wealth.</li>
            <li style={{ marginBottom: '0.5rem' }}>The real question isn’t whether you’re paying enough — it’s whether you’re using the tax
              code to both contribute to society and grow your own wealth.</li>
            <li>Having the right conversations with a knowledgeable advisor is essential to unlock the
              tax code’s full potential.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'silent-risks-7-figure-incomes',
      title: 'The Silent Risks Hiding in 7‑Figure Incomes',
      date: 'June 19, 2025',
      summary:
        'Seven‑figure earners have achieved a major milestone, but hidden pitfalls can erode their success. This long‑form article highlights overlooked risks and the planning needed to stay ahead.',
      content: (
        <div>
          <p>
            Crossing the million‑dollar income threshold is an achievement, but it comes with
            unexpected challenges. High earners often still overpay in taxes, fall victim to
            lifestyle inflation and carry concentrated risks in a single company or asset class. To
            turn seven figures into lasting wealth, you must tackle those blind spots head‑on.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Many million‑dollar earners pay more tax than necessary because they lack a strategy
              to optimise deductions, credits and entity structures.</li>
            <li style={{ marginBottom: '0.5rem' }}>Lifestyle creep — spending more as you earn more — quietly reduces investable cash
              and slows progress toward independence.</li>
            <li style={{ marginBottom: '0.5rem' }}>Undiversified portfolios (such as heavy exposure to employer stock or a single asset
              class) amplify downside risk.</li>
            <li>A robust plan integrates tax optimisation, disciplined spending, diversified investing and
              estate planning to safeguard and grow high incomes.</li>
          </ul>
          <p>
            Making seven figures is just the beginning. The key is to transform income into
            sustainable wealth through proactive, holistic planning.
          </p>
        </div>
      )
    },
    {
      id: 'you-need-a-will',
      title: 'Have a Family? You Need a Will — Not Just a Paycheck',
      date: 'May 2025',
      summary:
        'In this quick read, Anil reminds high‑earning professionals that a steady paycheck and even life insurance aren’t enough. A will and comprehensive estate plan are critical to protecting loved ones and passing on wealth effectively.',
      content: (
        <div>
          <p>
            Providing for your family goes beyond bringing home a paycheck. Without a will and an
            estate plan, your assets could be tied up in probate, subject to unnecessary taxes or
            distributed contrary to your wishes. Life insurance is important, but it’s only one piece
            of the puzzle.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>A will ensures your assets go where you intend and can expedite the transfer of
              property to your heirs.</li>
            <li style={{ marginBottom: '0.5rem' }}>An estate plan reduces tax friction and protects your family if you become
              incapacitated.</li>
            <li style={{ marginBottom: '0.5rem' }}>Relying solely on a paycheck or even life insurance can leave gaps — holistic planning
              includes trusts, guardianship designations and beneficiary reviews.</li>
            <li>Starting early and reviewing your plan regularly gives your family confidence and
              clarity no matter what happens.</li>
          </ul>
          <p>
            Don’t wait until it’s too late. Building a solid will and estate plan is an act of love
            that ensures your wealth truly benefits those you care about most.
          </p>
        </div>
      )
    },
    {
      id: 'tax-biggest-expense',
      title: 'Is Tax Your Biggest Expense?',
      date: 'July 2025',
      summary:
        'Anil reminds high‑earning professionals that taxes are often their single largest expense — bigger than housing or travel. Without proactive planning, this cost erodes wealth faster than you think.',
      content: (
        <div>
          <p>
            Taxes aren’t just a line item on your pay stub — for many engineering executives,
            federal, state and payroll taxes together consume more money than any other
            expense. Yet most people spend more time shopping for flights than they do
            planning their tax strategy.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Your tax bill often exceeds your mortgage, car payments or vacation spend.</li>
            <li style={{ marginBottom: '0.5rem' }}>Treat tax planning like any other major purchase — research, negotiate and leverage
              incentives to minimise what you owe.</li>
            <li style={{ marginBottom: '0.5rem' }}>Choosing the right entity, retirement vehicles and charitable strategies can
              dramatically reduce your overall effective rate.</li>
            <li>Tax efficiency is key to accelerating wealth — don’t overlook the expense that
              matters most.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'portfolio-risk-assets',
      title: 'How Much of Your Portfolio Is in Risk Assets?',
      date: 'July 2025',
      summary:
        'This post challenges readers to examine their investment mix. Concentrated bets in volatile assets can jeopardise long‑term goals; diversification and hedging are essential.',
      content: (
        <div>
          <p>
            In a bull market, it’s easy to let stock or crypto holdings swell far beyond a
            comfortable risk level. But concentrated positions and high volatility leave your
            wealth exposed to sudden downturns. A balanced portfolio protects your lifestyle
            and legacy.
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Review how much of your net worth is tied up in employer stock or speculative assets.</li>
            <li style={{ marginBottom: '0.5rem' }}>Diversification across asset classes — equities, fixed income, real estate and
              alternatives — reduces downside risk.</li>
            <li style={{ marginBottom: '0.5rem' }}>Use hedging strategies and defensive allocations to keep portfolio volatility within
              your comfort zone.</li>
            <li>Working with an advisor ensures your investment mix aligns with your goals,
              timelines and risk tolerance.</li>
          </ul>
        </div>
      )
    }
  ];

  // Track which post is currently expanded to show full content
  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <div>
      <Head>
        <title>Blog – AIMS Financials</title>
      </Head>
      {/* Top navigation replicates the site‑wide menu */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/strategies">Strategies</Link></li>
            <li><Link href="/vault">Vault</Link></li>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Insights &amp; Articles</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Our latest thinking on tax‑smart planning, equity compensation and legacy building. Expand
            an article to read more.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {posts.map((post) => (
              <div key={post.id} style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
                <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>{post.title}</h2>
                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.75rem' }}>{post.date}</p>
                <p style={{ color: '#555', marginBottom: '1rem' }}>{post.summary}</p>
                {expandedPost === post.id ? (
                  <div>
                    {post.content}
                    <button
                      onClick={() => setExpandedPost(null)}
                      className="btn-secondary"
                      style={{ marginTop: '1rem' }}
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedPost(post.id)}
                    className="btn-primary"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}