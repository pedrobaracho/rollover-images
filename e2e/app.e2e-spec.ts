import { RolloverImagesPage } from './app.po';

describe('rollover-images App', function() {
  let page: RolloverImagesPage;

  beforeEach(() => {
    page = new RolloverImagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
