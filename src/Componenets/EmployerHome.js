import { useEffect, useState } from "react";
import { Alert, Button, Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { getInfoFromDatabase } from "../Service/controller";

export function EmployerHome() {
  const [user, setUser] = useState([]);
  const [selectId, setSelectId] = useState('');

  async function getInfo() {
    const response = await getInfoFromDatabase(selectId);
    setUser(response.data);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <EmployerContainer>
        <section>
          <div className="header_emp">
            <div className="navbar_emp container-fluid">
              <div className="navigation_bar_emp">
                
                    <div className="headtag">
                    <p>Welcome</p>
                    </div>
                  
                <br></br>
                <div className="headcontent">
                  <p>
                Digirojgar is an online outsourcing platform that puts
                    clients and businesses in contact with a global network of
                    freelancers. Any member can post a project, whether a short-
                    or long-term job, and choose from skilled freelancers who
                    offer bid proposals with rate quotes and time estimates for
                    completing the work. It's a mutually beneficial arrangement.
                    Clients can have their pick of thousands of freelancers who
                    have the exact skills needed to get the job done, without
                    undertaking the expense and commitment of hiring full-time
                    employees in person. Freelancers can tap into a readily
                    available source of constant part-time and full-time work
                    opportunities from clients who are specifically seeking them
                    out. 
                      
                    </p>
                </div>
                <br></br>
                <div className="headcontent">
                <p>
                You can gain a competitive advantage over your competition
                    by tapping into a skilled global workforce on demand. If you
                    are a small business and can't afford to hire a full-time
                    staff, don't fret! The power of Digirojgar is available for
                    small to medium businesses! Whether it's a website that
                    needs building, business cards or stationery that needs
                    designing, a product that needs to be designed or
                    manufactured, or research that needs to be done, this is the
                    place for you! Thousands of skilled workers are ready to
                    start working right now! All you need to do is post a
                    project!
                    </p>
                </div>
                
                <br></br>
                <br></br>
                <div className="nav_menu_emp buttons">
                  <div>
                    <a href="postjob" className="btn btn-success">
                      Post Job
                    </a>
                  </div>
                  <div>
                    <a
                      href="/updateprofile"
                      className="btn btn-info"
                    >
                      Update Profile
                    </a>
                  </div>
                  <div>
                    <a href="/employerjob" className="btn btn-info">
                      Posted Jobs
                    </a>
                  </div>
                  <div>
                    <a href="/payment" className="btn btn-info">
                      Payment
                    </a>
                  </div>
                  <div>
                    <a href="login" className="btn btn-danger">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EmployerContainer>
    </>
  );
}

const EmployerContainer = styled.section`
  section {
    padding-top: 70px;
    height: 80vh;
    background: url("/img/home/banner1.jpg");
  }

  .headtag p{

    margin-left: 45%;
    font-size : 50px;
    font-weight : 600;
    color : white;
  }

  .headcontent p{

    color : white;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
