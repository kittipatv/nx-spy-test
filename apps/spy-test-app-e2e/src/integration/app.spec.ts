import { getGreeting } from '../support/app.po';

import * as lib from '@spy-test/ui-lib';
//import * as lib from '../../../../libs/ui';

import * as _ from 'lodash';

describe('spy-test-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    cy.spy(_, 'add');
    expect(lib.foo()).to.be.eq('bar');
    cy.spy(lib, 'foo');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to spy-test-app!');
  });
});
