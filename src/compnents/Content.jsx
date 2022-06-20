import '../styling/content.css';

function Content() {
  return (
    <>
      <div className='banner'>
        <div className='statement'>
          <h1 className='slogan'>Find <u className='boldText'><b>unique</b></u> opportunities, <u className='boldText'><b>faster</b></u></h1>
          <p className='blurb'>We cut the time spent on researching property deals by half by providing you all the data you need, all on one modern, easy to use platform.</p>
        </div>
        <img src="/images/header.png" alt='woman smiling at camera' />
      </div>
      <div className='content'>
        <h1>Benefits</h1>
        <ul className='benefits'>
          <li>Search all in one place
            <li>Skip jumping from site to site to find what you need. Access all your property info in one easy to navigate platform.</li>
          </li>
          <li>Find property opportunities faster
            <li>Find the best deals before anyone else. Save time on admin and outsmart your competition.</li>
          </li>
          <li>Uncover hidden gems
            <li>Search using your own unique parameters and exact specifications, delivering you bespoke results that will set you apart from your competitors.</li>
          </li> 
        </ul>
      </div>
    </>
  );
}

export default Content