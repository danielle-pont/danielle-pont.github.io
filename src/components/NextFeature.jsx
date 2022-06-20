import '../styling/nextFeatures.css';

function NextFeature() {
  return (
    <>
      <div className='features'>
        <div className='featuresRight'>
        <div className='rightSide'>
          <img className='conduct' src='/images/conduct.png' alt='Conduct Due Diligence' />
          <img className='close' src='/images/close.png' alt='Close the deal' />
        </div>
        </div>
        {/* <div className='bottom'>
          <img src='/images/conduct.png' alt='Conduct Due Diligence' />
        </div> */}
      </div>
    </>
  );
}

export default NextFeature