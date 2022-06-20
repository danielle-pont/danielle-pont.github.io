import NextFeature from './NextFeature'
import Features from './Features'

import '../styling/content.css';

function Content() {
  return (
    <>
    <div className='Content'>
      <div className='banner'>
        <div className='statement'>
          <h1 className='slogan'>Find <u className='boldText'><b>unique</b></u> opportunities, <u className='boldText'><b>faster</b></u></h1>
          <p className='blurb'>We cut the time spent on researching property deals by half by providing you all the data you need, all on one modern, easy to use platform.</p>
        </div>
        <img src="/images/header.png" alt='woman smiling at camera' />
      </div>
        <div className='title'>
            <p>Benefits</p>
        </div>
        <div className='content'>
          <div className='benefitsList'>
            <div className='benefit'>
              <p className='benefitNumber'><p className='numberTitle'>Benefits</p>01.</p>
                <p><p className='benefitTitle'><b>Search all in one place</b></p>Skip jumping from site to site to find what you need. Access all your property info in one easy to navigate platform.</p>
            </div>
            <div className='benefit'>
              <p className='benefitNumber'><p className='numberTitle'>Benefits</p>02.</p>
                <p><p className='benefitTitle'><b>Find property opportunities faster</b></p>Find the best deals before anyone else. Save time on admin and outsmart your competition.</p>
            </div>
            <div className='benefit'>
              <p className='benefitNumber'><p className='numberTitle'>Benefits</p>03.</p>
                <p><p className='benefitTitle'><b>Uncover hidden gems</b></p>Search using your own unique parameters and exact specifications, delivering you bespoke results that will set you apart from your competitors.</p>
            </div>
          </div>
          <div className='featureComponent'>
            <NextFeature />
          </div>
        </div>
        <div className='deviceDisplays'>
          <Features />
        </div>
      </div>
    </>
  );
}

export default Content