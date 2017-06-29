import { Proj8Page } from './app.po';

describe('proj8 App', function() {
  let page: Proj8Page;

  beforeEach(() => {
    page = new Proj8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
