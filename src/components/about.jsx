import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {id: "JavaScript_skill",content: "JavaScript",porcentage: "90%", value: "90" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {  id: "ReactJS_skill", content: "ReactJS",porcentage: "80%",value: "80"},
        {  id: "JAVA_skill", content: "JAVA",    porcentage: "75%", value: "75"},
        {id: "SQL_skill", content: "SQL",porcentage: "85%",value: "85"},
        {id: "Wordpress_skill",content: "Wordpress",porcentage: "80%", value: "80"},
        {id: "Kotlin_skill",content: "Kotlin",porcentage: "40%", value: "40"},
        {id: "UIUX_skill",content: "UIUX",porcentage: "30%", value: "30"}
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "“I am a young & passionate software developer & tech evangelist fascinated by new technology trends.giving her best to play his part in bringing digital change and tech awareness in my community"},
                    {
          id: "second-p-about",
          content:
            "I enjoy coding for web development and creating beautiful-looking web apps while being aware of UX as well! I love to create a difference in my community I have been part of many organizations like I am GDSC LEAD and worked for community service in my surrounding. I love to connect with techies to enhance my knowledge and explore more about the current stats of tech.For me, the sky is not the limit to achieving aims."},
        {
          id: "third-p-about",
          content:
            "I have done 2 months internship in a well known company callled Syanisbiz.com where I learned the core concepts of wordpress development."
        }]};}
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
   <div className="container">
     <div className="row">
        <div className="col-sm-12">
         <div className="box-shadow-full">
              <div className="row">
            <div className="col-md-6">
          <div className="row">
                      <div    className="col-sm-6 col-md-5"
               style={{ margin: "0 auto" }}        >
                        <div  className="about-img"
                          style={{ textAlign: "center" }}>
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>


                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress progress-striped">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>     </div></div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
