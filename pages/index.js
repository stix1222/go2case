import city_image from '../public/city_view.jpg';

function HomePage() {
  return (
  <div className=''>
    <div className="bg-image"></div>
    <div className="intro">
      <div className="spacer"></div>
      <h1 className="">Welcome to Case Technologies</h1>
      <hr className="container"/>
      <h3 className="start-career">Where your success is our only objective</h3>
    </div>
    <div className="homeStatement">
      <h1>WHAT WE DO</h1>
    </div>
    <div className="Group1">
      <div className="leftSideTop">
        <h1 className="leftSideInfo">Automate outdated job functions</h1>
      </div>
      <div className="rightSideTop">
        <h1 className="rightSideInfo">Innovation and cutting edge Technologies</h1>
      </div>
    </div>
    <div className="Group2">
    <div className="bottomLeftLeft">
        <h1 className="">Custom Software Applications</h1>
      </div>
      <div className="bottomLeftRight">
        <h1 className="rightSideInfo">Serverless Technologies</h1>
      </div>
      <div className="bottomRightLeft">
        <h1 className="leftSideInfo">Cloud Computing</h1>
      </div>
      <div className="bottomRightRight">
        <h1 className="rightSideInfo">Containerization and microservices</h1>
      </div>
    </div>
    <div>
    </div>
  </div>
  );
}

export default HomePage