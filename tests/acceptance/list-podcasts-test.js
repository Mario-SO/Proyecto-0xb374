import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | list podcasts', function (hooks) {
  setupApplicationTest(hooks);

  test('should show podcasts as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/podcasts', 'should redirect automatically');
  });

  test('should link to information about the company', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
