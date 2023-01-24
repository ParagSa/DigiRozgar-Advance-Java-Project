import React from "react";
import styled from "styled-components";

export function Home() {
  return (
    <>
      <HomeContainer>
        <section>
          <header id="header1">
            <div className="container search_job_header">
              <div className="row">
                <div className="col job_search">
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
              <form action="/">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label" />{" "}
                    <input
                      name="jobtitle"
                      className="form-control"
                      type="text"
                      placeholder="Job Title"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label" />{" "}
                    <input name="date" className="form-control" type="date" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label" />{" "}
                    <input
                      name="location"
                      className="form-control"
                      type="text"
                      placeholder="location"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="searchjob" className="col-2 m-auto">
                      <button type='submit' class='btn btn-success mt-5'>search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </header>
          <div className="main">
            {/* ==================== Features ================== */}
            <div className="container features">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-search" aria-hidden="true" />
                    <h5>Search Millions of Jobs</h5>
                    <p>Jobs are available from every single field 24*7</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-users" aria-hidden="true" />
                    <h5>Easy To Manage Jobs</h5>
                    <p>
                      We have made it so simple that you can find out the job of
                      your skill so easily
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-briefcase" aria-hidden="true" />
                    <h5>Top Careers</h5>
                    <p>
                      Build connections and grab the job opportunities every
                      single day
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-user" aria-hidden="true" />
                    <h5>Search Expert Candidates</h5>
                    <p>
                      find the helpers based on thier ratings which is real time
                      rating provide to them
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ==================== Popular Categories ================== */}
            <div id="category">
              <div className="container">
                <div className="row">
                  <div className="col heading">
                    <h3 className="category_heading m-auto">
                      Popular Categories
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/plumber.jpg" width="100%" alt="" />
                    <h5>Plumber</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/driver.jpg" width="100%" alt="" />
                    <h5>Driver</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/mason.jpg" width="100%" alt="" />
                    <h5>Mason</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/cleaner.jpg" width="100%" alt="" />
                    <h5>cleaner</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/pet walker.jpg" width="100%" alt="" />
                    <h5>pet walker</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/photgrapher.jpeg" width="100%" alt="" />
                    <h5>photgrapher</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/mechanic.jpeg" width="100%" alt="" />
                    <h5>Mechanic</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/maid.jpg" width="100%" alt="" />
                    <h5>maid</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* ========== Blogs ============== */}
            <div id="blogs">
              <div className="container">
                <div className="row">
                  <div className="col heading">
                    <h3>Recent Blog</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/img1webp.webp" alt="" width="100%" />
                    </div>
                    <p className="lead">JUNE 16, 2022</p>
                    <h5 className="news_heading">
                      <a href="">
                        e-Shram generates hope for unorganised sector workers,
                        but hardships won't disappear overnight
                      </a>
                    </h5>
                    <p className="lead">
                      “I faced salary cuts, then worked without pay for a few
                      months, and was finally forced to resign. I could not bear
                      the costs of my daughter’s education and family's
                      expenses,” says Atanu Sarkar, a driver at a private firm
                      who quit his job in June.
                    </p>
                  </div>
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/img2.webp" alt="" width="100%" />
                    </div>
                    <p className="lead">JUNE 16, 2022</p>
                    <h5 className="news_heading">
                      <a href="">
                        Centre rolls out new survey to map job creation in the
                        informal sector
                      </a>
                    </h5>
                    <p className="lead">
                      NEW DELHI : The Union government on Sunday rolled out a
                      nationwide survey to map employment generation in the
                      unorganized sector and establishments deploying less than
                      10 workers.
                    </p>
                  </div>
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/im3.webp" alt="" width="100%" />
                    </div>
                    <p className="lead">JUNE 16, 2022</p>
                    <h5 className="news_heading">
                      <a href="">
                        Govt committed to welfare of unorganised workforce says
                        PM Narendra Modi
                      </a>
                    </h5>
                    <p className="lead">
                      Prime Minister Narendra Modi on Saturday said that the
                      Government of India was committed to the welfare of
                      unorganised workforce. Prime Minister Modi further said
                      that the participation of the unorganised labour was very
                      important in the development of the country. In a tweet,
                      the Prime Minister said, "The participation of our
                      unorganized labour brothers and sisters is very important
                      in the development of the country. Our government is
                      always striving to make the lives of crores of such
                      workers easier. While these schemes have ensured their
                      social security, many more steps were taken to help during
                      the pandemic as well."
                    </p>
                  </div>
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/img4.jpg" alt="" width="100%" />
                    </div>
                    <p className="lead">JUNE 16, 2022</p>
                    <h5 className="news_heading">
                      <a href="">
                        Modi govt on employment: Agnipath scheme, 10 lakh jobs
                        in 18 months | All you need to know about big jobs push
                      </a>
                    </h5>
                    <p className="lead">
                      Various departments and ministries were asked to prepare
                      the details of vacancies following PM Modi's direction to
                      this effect and the decision to recruit 10 lakh people was
                      taken following an overall review. The government also
                      unveiled a radical Agnipath scheme, short-term employment
                      for youngsters as soldiers in the armed forces, under
                      which over 46,000 people are likely to be inducted in the
                      first go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.section`
  
  /* ============ Header ============= */

  section{

    padding-top: 56px;
  }
  #header1 {
    background: url("/img/home/banner1.jpg") no-repeat 0 0;
    opacity: 0.9;
    background-size: cover;
    color: #fff;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  /* ================= Main ================= */

  /* =============== features ================= */

  .feature {
    text-align: center;
  }
  .fa {
    color: rgb(70, 125, 125);
    margin: 25px 0;
    transform: scale(3);
  }
  .fa:hover {
    color: rgb(43, 173, 173);
  }
  /* ============ Categories ============== */
  #category {
    background: url(/img/home/categories.jpg) no-repeat 0 0;
    background-size: cover;
  }
  .heading h3 {
    padding: 20px;
    text-align: center;
  }

  #category .col-md-3 {
    min-height: 200px;
    gap: 20px;
    transform: scale(0.8);
    transition: 0.5s;
  }
  #category .col-md-3 img {
    border-radius: 10px;
  }
  #category .col-md-3 > h5 {
    text-align: center;
    color: #fff;
  }
  #category .col-md-3:hover {
    transform: scale(1);
    border-radius: 10px;
  }
  
  /*  =========== login page ===========  */

  #login-page .row .col-md-4 {
    background-color: rgba(240, 238, 238, 0.2);
  }

  #old_user_login,
  #reg_new_user {
    background: rgba(42, 39, 39, 0.5);
  }

  #login-page .lead {
    text-align: center;
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
  }
  #login-page .lead:hover {
    color: rgb(10, 91, 145);
  }
  #login-page #login-bar {
    color: aqua;
  }

  #login_page .col-md-4,
  .col-6,
  .col-12 {
    border-radius: 5px;
    border: 2px ridge rgb(154, 131, 99);
  }
  #login-page-toggle {
    overflow: hidden;
  }

  #login-page input {
    background-color: rgba(229, 216, 216, 0.5);
  }
  #login-page input:focus {
    background-color: rgb(194, 181, 181);
  }
  #login-page-toggle input[type="submit"] {
    padding: 5px 10px;
    border-radius: 5px;
  }
  #login-page-toggle input[type="submit"]:hover {
    background-color: aqua;
    outline: none;
  }

  #login-page input::placeholder {
    color: #fff;
  }

  /* =========== Footer ============== */
  #footer {
    background-color: rgb(34, 40, 49);
    color: #fff;
  }

  /* ========= common properties ============= */
  .search_job_header {
    padding-top: 100px;
  }
  .breakcrum_row {
    font: 900;
    font-size: 2rem;
    /* border: 1px solid red; */
  }
  /* ========= about ============= */
  .about_row {
    background-color: rgba(183, 215, 215, 0.6);
    color: rgb(35, 31, 31);
    border-radius: 5px;
  }
  .about_img {
    margin-top: 15px;
  }
  .about_img img {
    border-radius: 30px;
  }
  .test_img {
    margin: auto;
    height: 100px;
    width: 100px;
  }
  .test_heading + .col-md-4 h2 strong {
    color: rgb(60, 53, 53);
    font: lighter;
  }
  .test_cols {
    color: rgb(40, 51, 61);
  }
  .test_img img {
    border-radius: 25px;
  }
  .test_Desc {
    text-align: center;
  }
  .test_name {
    text-align: center;
  }

  #straticstics {
    padding: 50px;
    background: url("/img/home/statistics.jpg");
    color: rgb(37, 44, 44);
  }
  #newsletter {
    background-color: rgb(100, 223, 182);
    padding: 40px;
  }
  .news_letter input {
    position: relative;
  }
  .news_letter input:after {
    content: "Subscribe";
    position: absolute;
    right: 20;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: rgb(153, 18, 133);
  }

  /* ================ blog =============== */
  .blog_cols {
    height: 400px;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(216, 210, 210, 0.5);
  }
  .blog_cols img {
    border-radius: 15px;
  }
  .blog_cols a {
    color: rgb(15, 100, 160);
  }
  #blogs {
    padding-bottom: 20px;
  }

  /* ============== media queries ======== */
  /* Media query */
  @media (max-width: 576px) {

    .fa {
      transform: scale(1.5);
    }
    .title-bar {
      align-items: center;
      margin-top: -15px;
    }
    #close_menu {
      margin-right: 10px;
    }

    .search_job_header {
      padding-top: 30px;
    }
    .breakcrum_row {
      font: 500;
      font-size: 1rem;
      /* border: 1px solid red; */
    }
    footer {
      padding-bottom: 50px;
    }

    /* ======== about ====== */
    .about_row {
      margin: 10px;
      padding: 30px;
    }

    /* ====== blogs == */
    .blog_cols {
      padding: 15px;
      margin-bottom: 10px;
    }
  }
`;
