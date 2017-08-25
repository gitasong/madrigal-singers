import { MadrigalSingersPage } from './app.po';

describe('madrigal-singers App', () => {
  let page: MadrigalSingersPage;

  beforeEach(() => {
    page = new MadrigalSingersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
