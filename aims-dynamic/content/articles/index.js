// This file aggregates all article modules for easy import.
// Each article file exports `meta` (title, slug, group) and `content` (React element).

import * as term from './term-life';
import * as whole from './whole-life';
import * as iul from './iul';
import * as vul from './vul';
import * as ppli from './ppli';
// import removed Survivorship Life article; no longer exported
import * as revocable from './revocable-trust';
import * as irrevocableTrust from './irrevocable-trust';
import * as basicsOfTrusts from './basics-of-trusts';
import * as testamentary from './testamentary-trust';
import * as specialNeeds from './special-needs-trust';
import * as ilit from './ilit';
import * as grat from './grat';
import * as idgt from './idgt';
import * as crt from './crt';
import * as clt from './clt';
import * as dapt from './dapt';
import * as daf from './daf';
import * as privateFoundation from './private-foundation';
import * as funds from './funds';
import * as munis from './munis';
import * as reits from './reits';
import * as privateEquity from './private-equity';
import * as annuities from './annuities';
import * as ira from './ira';
import * as rothIra from './roth-ira';
import * as roth401k from './roth-401k';
import * as lirps from './lirps';
import * as socialSecurity from './social-security';
import * as longTermCare from './long-term-care';
import * as cashValueInsurance from './cash-value-insurance';
import * as flp from './flp';
import * as qprt from './qprt';
import * as education from './529-education';

// Add new imports here as you create more article files.

export const allArticles = [
  term,
  whole,
  iul,
  vul,
  ppli,
  revocable,
  irrevocableTrust,
  basicsOfTrusts,
  testamentary,
  specialNeeds,
  ilit,
  grat,
  idgt,
  crt,
  clt,
  dapt,
  daf,
  privateFoundation,
  funds,
  munis,
  reits,
  privateEquity,
  annuities,
  ira,
  rothIra,
  roth401k,
  lirps,
  socialSecurity,
  longTermCare,
  cashValueInsurance,
  flp,
  qprt,
  education
];

export const bySlug = Object.fromEntries(allArticles.map((a) => [a.meta.slug, a]));