import "./App.css";
import { Row, Col } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [{}];

function App() {
  return (
    <div className="App">
      <section className="section section-top">
        <Row>
          <Col
            xs={{ order: 2, span: 24 }}
            md={{ span: 9, order: 1 }}
            lg={{ span: 12, order: 1 }}
          >
            <div className="footballer">
              <picture>
                <source
                  media="(max-width: 766px)"
                  srcSet="./footballer.png 766w"
                  sizes="766px"
                />
                <source
                  media="(max-width: 991px)"
                  srcSet="./footballer-2.png 991w"
                  sizes="991px"
                />
                <img src="./footballer.png" alt="footballer" />
              </picture>
            </div>
          </Col>
          <Col xs={{ order: 1, span: 24 }} md={15} lg={12}>
            <div className="section-body">
              <div className="header">ATHLETS</div>
            </div>
          </Col>
        </Row>
      </section>
      <div className="onlyDesktop">
        <section className="section section-first">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">01</span>
                  <span className="title">CONNECTION</span>
                </div>
                <div className="desc">
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-second">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">02</span>
                  <span className="title">COLLABORATION</span>
                </div>
                <div className="desc">
                  Work with other student athletes to  increase visability. When
                  you share and like other players videos it will increase your
                  visability as a player. This is the team work aspect to
                  Surface 1.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-third">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">03</span>
                  <span className="title">GROWTH</span>
                </div>
                <div className="desc">
                  Resources and tools for you to get better as a student
                  Athelte. Access to training classes, tutor sessions, etc 
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Carousel
        className="onlyMobile"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <section className="section section-first">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">01</span>
                  <span className="title">CONNECTION</span>
                </div>
                <div className="desc">
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-second">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">02</span>
                  <span className="title">COLLABORATION</span>
                </div>
                <div className="desc">
                  Work with other student athletes to  increase visability. When
                  you share and like other players videos it will increase your
                  visability as a player. This is the team work aspect to
                  Surface 1.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-third">
          <Row>
            <Col
              xs={24}
              md={{ span: 15, offset: 9 }}
              lg={{ span: 12, offset: 12 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">03</span>
                  <span className="title">GROWTH</span>
                </div>
                <div className="desc">
                  Resources and tools for you to get better as a student
                  Athelte. Access to training classes, tutor sessions, etc 
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Carousel>
      <section className=" section section-top-invert">
        <Row>
          <Col
            xs={{ order: 1, span: 24 }}
            md={{ span: 14, offset: 1 }}
            lg={{ span: 8, offset: 4 }}
          >
            <div className="section-body">
              <div className="header">PLAYERS</div>
            </div>
          </Col>
          <Col xs={{ order: 2, span: 24 }} md={9} lg={12}>
            <div className="basketball">
              <picture>
                <source
                  media="(max-width: 766px)"
                  srcSet="./basketball.png 766w"
                  sizes="766px"
                />
                <source
                  media="(max-width: 991px)"
                  srcSet="./basketball-2.png 991w"
                  sizes="991px"
                />
                <img src="./basketball.png" alt="basketball" />
              </picture>
            </div>
          </Col>
        </Row>
      </section>
      <div className="onlyDesktop">
        <section className="section section-fourth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">01</span>
                  <span className="title">CONNECTION</span>
                </div>
                <div className="desc">
                  Connect with talented athlete directly, you can watch their
                  skills through video showreels directly from Surface 1.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-fifth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">02</span>
                  <span className="title">COLLABORATION</span>
                </div>
                <div className="desc">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-sixth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">03</span>
                  <span className="title">GROWTH</span>
                </div>
                <div className="desc">
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Carousel
        className="onlyMobile"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <section className="section section-fourth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">01</span>
                  <span className="title">CONNECTION</span>
                </div>
                <div className="desc">
                  Connect with talented athlete directly, you can watch their
                  skills through video showreels directly from Surface 1.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-fifth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">02</span>
                  <span className="title">COLLABORATION</span>
                </div>
                <div className="desc">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section section-sixth">
          <Row>
            <Col
              xs={24}
              md={{ span: 23, offset: 1 }}
              lg={{ span: 12, offset: 4 }}
            >
              <div className="section-body">
                <div className="main-title">
                  <span className="idx">03</span>
                  <span className="title">GROWTH</span>
                </div>
                <div className="desc">
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Carousel>
    </div>
  );
}

export default App;
