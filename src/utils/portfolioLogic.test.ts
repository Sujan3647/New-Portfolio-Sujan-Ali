import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterTechStack,
  filterProjects,
  searchAllPortfolio,
  generateVCardString
} from './portfolioLogic';
import { PORTFOLIO_DATA } from '../data/portfolioData';

test('validateContactForm rejects empty submissions', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    message: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects invalid emails', () => {
  const result = validateContactForm({
    name: 'Sujan Ali',
    email: 'not-an-email',
    message: 'Hello, this is a test message to evaluate form validation.'
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
});

test('validateContactForm accepts valid submission', () => {
  const result = validateContactForm({
    name: 'Dr. Vikram Roy',
    email: 'vikram.roy@tri-ventures.in',
    message: 'We are organizing an enterprise technology initiative and would like to consult.'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterTechStack filters by category and search keyword', () => {
  const allBlockchain = filterTechStack(PORTFOLIO_DATA.techStack, 'Blockchain');
  assert.ok(allBlockchain.length > 0);
  assert.ok(allBlockchain.every((item) => item.category === 'Blockchain'));

  const dockerSearch = filterTechStack(PORTFOLIO_DATA.techStack, 'ALL', 'Docker');
  assert.equal(dockerSearch.length, 1);
  assert.equal(dockerSearch[0].name, 'Docker');
});

test('filterProjects correctly searches by title or keyword', () => {
  const carepulse = filterProjects(PORTFOLIO_DATA.projects, 'ALL', 'carepulse');
  assert.equal(carepulse.length, 1);
  assert.equal(carepulse[0].title, 'CAREPULSE');

  const solidityProjects = filterProjects(PORTFOLIO_DATA.projects, 'ALL', 'Solidity');
  assert.ok(solidityProjects.length >= 1);
  assert.equal(solidityProjects[0].id, 'smart-lottery');
});

test('searchAllPortfolio returns indexed results across domains', () => {
  const queryRes = searchAllPortfolio('Spring Boot');
  assert.ok(queryRes.length > 0);
  const foundTechOrProject = queryRes.some(
    (item) => item.title.includes('Spring Boot') || item.title.includes('ANTI-CHEATING') || item.title.includes('DATA ENCRYPTION')
  );
  assert.ok(foundTechOrProject);
});

test('generateVCardString produces valid vCard format', () => {
  const vcard = generateVCardString(PORTFOLIO_DATA.profile);
  assert.ok(vcard.startsWith('BEGIN:VCARD'));
  assert.ok(vcard.includes('FN:Sujan Ali'));
  assert.ok(vcard.includes('sujanali9812@gmail.com'));
  assert.ok(vcard.endsWith('END:VCARD'));
});
