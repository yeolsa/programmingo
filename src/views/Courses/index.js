import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import "./courselist.css";

class Courses extends Component {
  render() {
    console.log(this.props.match.params.id);
    return <div className="wrapper">
        <Nav />
        <div className="mobile_course">
          <Card>
            <CardBody>
              <CardTitle>기초1</CardTitle>
              <Button>
                <Link className="link" to={process.env.PUBLIC_URL + "/questionare/_c1_"}>
                  <span className="btn_start">과정 시작</span>
                </Link>
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>기초2</CardTitle>
              <Button>
              <Link className="link" to={process.env.PUBLIC_URL + "/questionare/_c2_"}>
                <span className="btn_start">과정 시작</span>
              </Link>
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>기초3</CardTitle>
              <Button>
              <Link className="link" to={process.env.PUBLIC_URL + "/questionare/_c3_"}>
                <span className="btn_start">과정 시작</span>
              </Link>
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className="course_wrapper course">
          <div className="courselist">
            <div className="courselist_header">
              <div className="header_column">
                <i className="fas fa-plug fa-3x" />
              </div>
              <div className="header_column">
                <h1>기초1</h1>
                <span>1/3 레슨 시작</span>
              </div>
              <div className="header_column">시험보고 건너뛰기</div>
            </div>
            <div className="courselist_body">
              <div className="body_column">
                <div className="body_column_title">
                  <h3>1/3 레슨</h3>
                </div>
                <div className="body_column_middle">
                  <span>blah balh</span>
                </div>
                <div className="body_column_bottom">
                  <div className="body_column_btn">시 작</div>
                </div>
              </div>
              <div className="body_column">
                <div className="body_column_title">
                  <h3>2/3 레슨</h3>
                </div>
                <div className="body_column_middle">
                  <span>blah balh</span>
                </div>
                <div className="body_column_bottom">
                  <div className="body_column_btn">잠 김</div>
                </div>
              </div>
              <div className="body_column">
                <div className="body_column_title">
                  <h3>3/3 레슨</h3>
                </div>
                <div className="body_column_middle">
                  <span>blah balh</span>
                </div>
                <div className="body_column_bottom">
                  <div className="body_column_btn">잠 김</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
}

export default Courses;
