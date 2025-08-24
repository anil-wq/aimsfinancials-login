// This file aggregates all article modules for easy import.
// Each article file exports `meta` (title, slug, group) and `content` (React element).

import * as term from './term-life';
import * as whole from './whole-life';
import * as iul from './iul';
import * as vul from './vul';
import * as ppli from './ppli';
import * as survivorship from './survivorship';
import * as revocable from './revocable-trust';
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
  survivorship,
  revocable,
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
  flp,
  qprt,
  education
];

export const bySlug = Object.fromEntries(allArticles.map((a) => [a.meta.slug, a]));