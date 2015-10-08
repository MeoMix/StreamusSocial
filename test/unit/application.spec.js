﻿import Application from 'src/application/application';

describe('Application', () => {
  let application;
  // This needs to be kept sync'ed with the 'main' element in src/index.html
  document.body.appendChild(document.createElement('main'));

  beforeEach(() => {
    application = new Application();
  });

  it('should start', () => {
    const spy = sinon.spy();
    application.on('start', spy);
    application.start();
    expect(spy.calledOnce).to.equal(true);
  });
});