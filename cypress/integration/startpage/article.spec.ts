import {articleDetailPage} from '@/pages/article-detail.page';
import {startpageClass} from '@/pages/startpage.page';

describe('Validate articles', () => {
  it('Title overview matches detail', () => {
    startpageClass.visit();
    startpageClass.articleHeadline.each(item => {
      startpageClass.articleHeadline.contains(item.text()).click();
      articleDetailPage.headline.invoke('text').should('eq', item.text());
      startpageClass.visit();
    });
  });
});
