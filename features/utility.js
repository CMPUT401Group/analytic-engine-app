let url = "http://162.246.157.107:666";

class Utility {
  static i_login(username, password) {
    browser.url(`${url}/login`);

    let usernameInput = browser.element("input[name='username']");
    let passwordInput = browser.element("input[name='password']");

    usernameInput.waitForVisible();
    passwordInput.waitForVisible();

    usernameInput.setValue(username);
    passwordInput.setValue(password);

    browser.click("button[type='submit']");
  }

  static i_should_see(selector) {
    let elem = browser.element(selector);

    expect(elem.isVisible()).to.be(true);
  }
}

export {url, Utility};
