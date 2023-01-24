import styled from "styled-components";

export function AdminHome() {
  
  return (
    <>
      <AdminHomeContainer>
        <section>
          <div className="header_emp">
            <div className="navbar_emp container-fluid">
              <div className="navigation_bar_emp">
                
              <div className="headtag">
                    <p>Welcome</p>
                    </div>
                  
                <br></br>
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
                <div className="nav_menu_emp buttons">
                  <div>
                    <a href="/adminalluser" className="btn btn-success">
                      All users
                    </a>
                  </div>
                  <div>
                    <a href="/alladmins" className="btn btn-info">
                      All Admins
                    </a>
                  </div>
                  <div>
                    <a href="adminjob" className="btn btn-info">
                      Posted Job
                    </a>
                  </div>
                  <div>
                    <a href="/admincontact" className="btn btn-info">
                      Contact Info
                    </a>
                  </div>
                  <div>
                    <a href="/adminfeedback" className="btn btn-info">
                      Feedbacks
                    </a>
                  </div>
                  <div>
                    <a href="/adminlog" className="btn btn-danger">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminHomeContainer>
    </>
  );
}

const AdminHomeContainer = styled.section`
  section {
    padding-top: 70px;
    height: 80vh;
    background: url("/img/home/categories.jpg");
  }

  
  .headtag p{

    margin-left: 45%;
    font-size : 50px;
    font-weight : 600;
    color : white;
  }

  .headcontent p{

    color : white;
    font-size : 20px;
    font-weight : 600;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
