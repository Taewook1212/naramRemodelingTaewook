import { StyledContent, StyledBar } from '@/styles/components/PageSubTitle/PageSubTitle';

type PageSubTitle = {
  firstTitle: string;
  firstSubTitle?: string;
  secondTitle: string;
  thirdTitle: string;
  thirdSubTitle?: string;
};

function PageSubTitle({ firstTitle, firstSubTitle, secondTitle, thirdTitle, thirdSubTitle }: PageSubTitle) {
  return (
    <StyledContent>
      <div>
        <p className="firstTitle">{firstTitle ? firstTitle : 'COMPANY'}</p>
        {firstSubTitle ? <p className="firstTitle">{firstSubTitle}</p> : ''}
      </div>
      <div className="flex-column">
        <p className="secondTitle">{secondTitle ? secondTitle : '회사소개'}</p>
        <StyledBar />
        <p className="thirdTitle">
          {thirdTitle ? thirdTitle : '고객의 만족은 우리의 기쁨'} {thirdSubTitle ? <span>{thirdSubTitle}</span> : ''}
        </p>
      </div>
    </StyledContent>
  );
}

export default PageSubTitle;
