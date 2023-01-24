import { Component } from "react";
import styled from "styled-components";

export class About extends Component {
  render() {
    return (
      <>
        <AboutContainer>
          <section className="aboutc">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <>
                    <div classname="title">
                      <h1 text-color="darkblack">About Us</h1>
                    </div>
                    <div classname="content">
                      <h3>Company Overview!!!!</h3>
                      <p>
                        Digirojgar.com is the world's largest freelancing and
                        crowdsourcing marketplace by number of users and
                        projects. We connect over 10,000 employers and
                        freelancers globally from India. Through our
                        marketplace, employers can hire freelancers to do work
                        in areas such as software development, writing, data
                        entry and design right through to engineering, the
                        sciences, sales and marketing, accounting and legal
                        services.
                      </p>
                      <div classname="button">
                        <a href="" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </>
                </div>
                <div className="col-sm-3">
                  <div classname="image-section">
                    <img src="/img/logo.jpg" />
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/img/a1.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">User-1</h5>
                      <p className="card-text">
                        The payment system of Digirojgar is truly awesome and
                        safe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/img/a2.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">User-2</h5>
                      <p className="card-text">
                        Digirojgar helps me to find projects easily and work
                        with different projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/img/a3.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">User-3</h5>
                      <p className="card-text">
                        Digirojgar helps me to find peoples who are truly
                        talented and hardworking which saves my time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AboutContainer>
      </>
    );
  }
}

const AboutContainer = styled.section`
    .aboutc{

        margin-top: 100px;

    }
`;
