function Services() {
    return <div>
        <div className="container">
            <h1 className="service-header">Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 card-group">
                {/* first card  */}
                <div className="col">
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header">DevOps/Cloud Computing</div>
                          <div className="card-body">
                           <h5 className="card-title">AWS, Azure, and GCP</h5>
                            <p className="card-text">Our company specializes in providing cloud solutions to help public and private organizations meet their technological needs.</p>
                          </div>
                    </div>
                </div>
                {/* Second card  */}
                <div className="col">
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header">Software Development</div>
                          <div className="card-body">
                           <h5 className="card-title">Web and Mobile Applications</h5>
                            <p className="card-text">We help our customers design and develop applcations that allow them to increase their overall production and meet their immediate goals.</p>
                          </div>
                        </div>
                    </div>
                {/* Third card  */}
                <div className="col">
                    <div className="card text-dark bg-light mb-3 max-width: 5rem;">
                        <div className="card-header">Training and Certifications</div>
                          <div className="card-body">
                           <h5 className="card-title">CompTIA, AWS, and Azure</h5>
                            <p className="card-text">The training side of organization focuses on helping 
                            individuals and corporations increase their knowledge, 
                            skills and performance by participating in our unique training curriculum.</p>
                          </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>        
}
export default Services;