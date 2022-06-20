import '../styling/features.css';

function Features() {
  return (
    <>
      <div className='appFeatures'>
        <div className='device1'>
          <img className='image1' src='/images/devices1.png' alt='The Relab map feature' />
            <div className='descriptions'>
              <div className='number'>
                <p><p className='numberTitle'>Features</p>01.</p>
              </div>
              <div className='featureDesc'>
                <p><p className='featureTitle'>Advanced Mapping</p>Combine rich mapping layers to deliver a more detailed picture of potential opportunities with our industry leading topography and world class mapping features.</p>
              </div>
          </div>
        </div>
        <div className='device2'>
          <img className='image2' src='/images/devices2.png' alt='The Relab search insights feature' />
            <div className='descriptions'>
              <div className='number'>
                <p><p className='numberTitle'>Features</p>02.</p>
              </div>
              <div className='featureDesc'>
              <p><p className='featureTitle'>Advanced Search Insights -Lead Gen/Prospecting</p>Narrow down your property leads by filtering for specific opportunities unique especially to you. Create prospecting lists fast, and stay a step ahead of your competition.</p>
              </div>
          </div>
        </div>
        <div className='device3'>
          <img className='image3' src='/images/devices3.png' alt='The Relab BCRC feature' />
            <div className='descriptions'>
              <div className='number'>
                <p><p className='numberTitle'>Features</p>03.</p>
              </div>
              <div className='featureDesc'>
              <p><p className='featureTitle'>BCRC</p>Gain the competitive advantage over your competitors with in depth and up to the minute data points on beyond the boundary consents.</p>
              </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Features