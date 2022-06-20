import '../styling/nextFeatures.css';

function Features() {
  return (
    <>
      <div className='appFeatures'>
        <div className='device1'>
          <img className='conduct' src='/images/devices1.png' alt='The Relab map feature' />
          <p className='featureNumber'><p className='featureTitle'>Features</p>01.</p>
          <p><p className='benefitTitle'>Advanced Mapping</p>Combine rich mapping layers to deliver a more detailed picture of potential opportunities with our industry leading topography and world class mapping features.</p>
        </div>
        <div className='device2'>
          <img className='conduct' src='/images/devices2.png' alt='The Relab search insights feature' />
          <p className='featureNumber'><p className='featureTitle'>Features</p>02.</p>
          <p><p className='benefitTitle'>Advanced Search Insights -Lead Gen/Prospecting</p>Narrow down your property leads by filtering for specific opportunities unique especially to you. Create prospecting lists fast, and stay a step ahead of your competition.</p>
        </div>
        <div className='device3'>
          <img className='conduct' src='/images/devices3.png' alt='The Relab BCRC feature' />
          <p className='featureNumber'><p className='featureTitle'>Features</p>03.</p>
          <p><p className='benefitTitle'>BCRC</p>Gain the competitive advantage over your competitors with in depth and up to the minute data points on beyond the boundary consents.</p>
        </div>

      </div>
    </>
  );
}

export default Features