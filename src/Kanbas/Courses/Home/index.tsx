import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <ModuleList />
      </div>
      <div
        className="flex-grow-0 me-2 d-none d-lg-block"
        style={{ marginLeft: "20px", width: "250px" }}
      >
        <h3>Course Status</h3>
        <button className="btn wd-btn-primary">
          <i className="fa fa-times-circle"></i>Unpublish
        </button>
        <button className="btn wd-btn-success">
          <i className="fa fa-check-circle"></i>Published
        </button>

        <div className="d-block wd-status-buttons">
          <button className="btn wd-btn-primary">
            <i className="fa fa-file"></i>Import Existing Content
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-sign-out"></i>Import From Commons
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-bullseye"></i>Choose Home Page
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-bar-chart"></i>View Course Stream
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-bullhorn"></i>New Announcement
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-bar-chart"></i>New Analytics
          </button>
          <button className="btn wd-btn-primary">
            <i className="fa fa-bell"></i>View Course Notifications
          </button>
        </div>
        <div className="wd-course-status-block">
          To Do
          <hr />
          <div className="d-flex">
            <i className="fa fa-exclamation-circle text-danger"></i>
            <div className="d-block">
              <a className="text-danger" href="">
                Grade A1 - ENV + HTML
              </a>
              <p>100 points - Sep 10 at 11:59pm</p>
            </div>
            <i className="fa fa-times"></i>
          </div>
        </div>

        <div className="wd-course-status-block">
          Coming Up
          <div className="float-end">
            <i className="fa fa-calendar"></i>
            <a className="text-danger" href="">
              View Calendar
            </a>
          </div>
          <hr />
          <div className="d-block">
            <div className="wd-coming-up-block">
              <i className="fa fa-calendar"></i>
              <div className="wd-coming-up-text">
                <div className="wd-coming-up-title text-danger">Lecture</div>
                <div className="wd-coming-up-subtitle">CS4550.12631.202410</div>
                <div className="wd-coming-up-subtitle">Sep 7 at 11:45am</div>
              </div>
            </div>

            <div className="wd-coming-up-block">
              <i className="fa fa-calendar"></i>
              <div className="wd-coming-up-text">
                <div className="wd-coming-up-title text-danger">
                  CS5610 06 SP23 Lecture
                </div>
                <div className="wd-coming-up-subtitle">CS4550.12631.202410</div>
                <div className="wd-coming-up-subtitle">Sep 11 at 6pm</div>
              </div>
            </div>

            <div className="wd-coming-up-block">
              <i className="fa fa-calendar"></i>
              <div className="wd-coming-up-text">
                <div className="wd-coming-up-title text-danger">
                  CS5610 Web Development Summer 1 2023 - LECTURE
                </div>
                <div className="wd-coming-up-subtitle">CS4550.12631.202410</div>
                <div className="wd-coming-up-subtitle">Sep 11 at 7pm</div>
              </div>
            </div>

            <div className="wd-coming-up-block">
              <div className="wd-coming-up-text">
                <div className="wd-coming-up-subtitle text-danger">
                  12 more in the next week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
