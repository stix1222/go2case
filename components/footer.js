import React from 'react'

function Footer() {
    return  <div className="footer">
    <div className="container container-fluid">
      <div className="spacer2"></div>
    <div className="row align-items-start">
      <div className="col">
        Social Media
      </div>
      <div className="col">
        Link
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col instagram">
        Instagram
      </div>
      <div className="col">
        <div className="link-it" href="/">Home</div>
      </div>
    </div>
    <div className="row align-items-end">
      <div className="col twitter">
        Twitter
      </div>
      <div className="col">
        <div className="link-it" href="/about">About</div>
      </div>
    </div>
    <div className="row align-items-end">
      <div className="col youtube">
        YouTube
      </div>
      <div className="col">
        <div className="link-it" href="/contact">Contact</div>
      </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <div className="spacer"></div>
    <div className="sub-footer container container-fluid">
    <hr />
      &copy;2021 Case Technologies, LLC
    </div>
    </div>
  </div>
}

export default Footer