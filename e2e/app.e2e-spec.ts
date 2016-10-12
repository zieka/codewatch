import { CodewatchPage } from './app.po';

describe('codewatch App', function() {
  let page: CodewatchPage;

  beforeEach(() => {
    page = new CodewatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
