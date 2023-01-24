import { Component } from "react";
import styled from "styled-components";

export class SearchJob extends Component {

  render(){
  return (
    <>
      <SearchJobContainer>
        <section>
          <header id="header1">
            <div className="container search_job_header">
              <div className="row">
                <div className="col job_search">
                  <br></br>
                  <h6 className="lead">
                    We have 850,000 great job offers you deserve!
                  </h6>
                  <h1 className="display1 mt-5">
                    You can Search Job
                    <br />
                    of your choice Below
                  </h1>
                </div>
              </div>
              <form action="/employeejob">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label" />{" "}
                    <input
                      name="title"
                      className="form-control"
                      type="text"
                      placeholder="Job Title"
                      
                    />
                  </div>
                  <div className="col-md-3"></div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="searchjob" className="col-2 m-auto">
                      <button type="submit" class="btn btn-success mt-5">
                        search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <br></br>
              <br></br>
              <br></br>
              <div className="empContent">
                <div className="emp1">
                  <div className="emp1-1">
                  <p>
                  With Digirojgar, you can work at home and tap into a global
                    network of businesses and projects across a huge range of
                    industries - the ultimate opportunity in job flexibility!
                    Work on what you want, when you want and where you want to!
                    The lifestyle of a freelancer is taking off. By working as a
                    Freelancer online, you can greatly increase your client base
                    and job throughput. To start, all you need to do is sign up
                    and start bidding. It's FREE!
                  </p>
                  </div>
                  <div className="emp1-2">
                  <p>
                  Digirojgar opens the global job market to freelancers in all
                    trades and professions. Our unique platform eliminates the
                    need for expensive advertising and lets you offer your
                    talents and skills to the world without ever leaving your
                    home or office. All you need to do is sign up, complete your
                    profile, browse projects based on your skills, and place
                    your bid to get the job.
                  </p>
                  </div>
                </div>
                <div className="row">
                      <div className="col">
                        <div id="postJob" className="col-4 m-auto">
                          <button
                            type="submit"
                            className="btn btn-danger mt-5"
                          ><a href= "/employeelogin">
                             LOG OUT
                          </a>
                          </button>
                        </div>
                    
                      </div>
                </div>
              </div>
            </div>
          </header>
        </section>
      </SearchJobContainer>
    </>
  );
  }
}

const SearchJobContainer = styled.section`
  section {
    padding-top: 56px;
  }

  #header1 {
    background: url("/img/home/banner.jpg") no-repeat 0 0;
    background-size: cover;
    color: #fff;
    min-height: 110vh;
  }

  .emp1 p{

    color : color;
    font-size: 20px;
    font-weight: 700;
  }

  .btn {
    margin-left: 40%;
  }
`;
