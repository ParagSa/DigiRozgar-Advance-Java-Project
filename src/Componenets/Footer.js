import styled from "styled-components";

export function Footer() {
  return (
    <>
    <FooterContainer>
    <section>
    <footer id="footer">
      <div className="container-fluid footer bg-dark">
        <div className="row">
          <div className="col-md-3 col-sm-6 about">
            <h3>About</h3>
            <p>
              We aim to provide job for a day for every individual who is
              looking out for an Job!
            </p>
            <ul>
              <li>
                <a href="#facebook">facebook</a>
              </li>
              <li>
                <a href="#Twitter">Twitter</a>
              </li>
              <li>
                <a href="#Instagram">Instagram</a>
              </li>
              <li>
                <a href="#Yotube">YouTube</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Employers</h5>
            <ul>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Post a Job</a>
              </li>
              <li>
                <a href="">Advance Skill Search</a>
              </li>
              <li>
                <a href="">Recruiting Service</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Workers</h5>
            <ul>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Post Your Skills</a>
              </li>
              <li>
                <a href="">Job Search</a>
              </li>
              <li>
                <a href="">Emploer Search</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 about">
            <h5>Have a question?</h5>
            <ul>
              <li>
                <a href=""> 203, Ramsan Road, BKC Complex, Mumbai, India</a>
              </li>
              <li>
                <a href="">+91 02292 3929 210</a>
              </li>
              <li>
                <a href="">info@digirozgar.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </section>
    </FooterContainer>
    </>
  );
}

const FooterContainer = styled.section`

    .about{

      margin-top: 10px;
      color:white;

    }


    
`;
