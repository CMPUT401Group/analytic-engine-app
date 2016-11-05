import {url, Utility} from './utility';

describe('Threshold Marking @watch', function() {
  beforeEach(function() {
    Utility.i_login("admin", "admin");
  });

  it('Base case. Threshold Patterns page is shown as expected.', function () {
    browser.url(`${url}/plugins/analytic-engine-app/page/threshold`);

    let header = browser.element('.page-header');
    header.waitForVisible();

    expect(header.isExisting()).to.be(true);
    expect(header.getText()).to.be('Threshold Patterns');
  });
});
