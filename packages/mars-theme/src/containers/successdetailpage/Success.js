import React from "react";
import { styled } from "frontity";
import Laopera from "../../assets/images/Laopera.png";
import opera from "../../assets/images/opera.png";
import triangle from "../../assets/images/triangle.png";
import plusicon from "../../assets/images/PLUS.svg";
import comma from "../../assets/images/comma.png";
import back2 from "../../assets/images/back2.png";
import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.png";
import java from "../../assets/images/java.png";
import Arrow from "../../assets/images/Arrow.svg";
import Left from "../../assets/images/Left.png";
import Right from "../../assets/images/Right.png";
const Success = () => {
  return (
    <>
      <Container>
        <ContentText>
          <LeftContent>
            <Heading>
              LA opera brings <br />
              <span>interactive and user-friendly</span> digital educational
              content to
              <span>
                {" "}
                inspire and <br /> teach the community
              </span>
            </Heading>
          </LeftContent>
          <RightContent>
            <img src={Laopera} alt="Image"></img>
          </RightContent>
        </ContentText>
        <InnerDesription>
          <LeftCol>
            <h4>About </h4>
            <p>
              Los Angeles is a city of enormous diversity and creativity, and LA
              Opera is dedicated to reflecting that vibrancy by redefining what
              opera can be with thrilling performances, thought-provoking
              productions and innovative programming.
            </p>
            <h4>Mission</h4>
            <p>
              LA Opera’s extensive engagement efforts and virtual learning
              programs are focused on reaching people of all ages throughout
              every corner of Los Angeles County. For many, an introduction to
              opera has an impact that's powerful, unexpected, and immediate. LA
              Opera Connects, the education and community engagement department
              of Los Angeles Opera, currently offers 29 different programs that
              reach more than 200,000 people each season.
            </p>
          </LeftCol>

          <RightCol>
            <h4>Journey to digital learning</h4>
            <p>
              While the cancellation of LA Opera’s stage activities due to the
              pandemic was devastating, the loss was exacerbated by the
              inability to have in-person learning and engagement programs.
            </p>
            <h5>This is their journey:</h5>
            <p>
              LA Opera actively began producing digital content for remote
              learning, including full-length youth operas and sing-alongs
              available for streaming, art workshops, professional development
              training for teachers, and more.
            </p>
            <p>
              As part of the growth of its digital programs, LA Opera set out to
              find the best ways to create interactive and user-friendly
              educational content, particularly lesson plans.
            </p>
            <p>
              Without the typical classroom setting, teachers needed self-guided
              lessons that students could complete on their own.
            </p>
          </RightCol>
        </InnerDesription>
        <InnerText>
          <h4>The biggest challenge</h4>
          <p>
            The LA Opera team faced was finding a platform that met the needs of
            students learning from home while being intuitive for us as non-web
            developers.
          </p>
          <img src={opera} alt="Image"></img>
          <Paragraph>
            <p>
              <img src={comma} alt="image"></img>
              CurrikiStudio has given LA Opera an opportunity to translate not
              only our educational materials into an interactive language, but
              its user-friendly platform has also inspired the organization to
              think creatively about how we design other virtual programs. Never
              before has LA Opera had interactive lessons available, online or
              on its website.
              <img src={comma} alt="image"></img>
            </p>
          </Paragraph>
          <InnerContent>
            <h5>Stacy Brightman</h5>
            <p>VP of LA Opera Connects</p>
          </InnerContent>
        </InnerText>
        <DescriptionText>
          <h4>A few ways currikiStudio helped LA opera:</h4>
          <InnerDiv>
            <img src={plusicon} alt="" />
            <p>
              CurrikiStudio made it possible to introduce and recreate lesson
              plans from the ground up while directly addressing the needs and
              challenges of students learning from home. Never before has LA
              Opera had interactive lessons available, online or on its website.
            </p>
          </InnerDiv>

          <InnerDiv>
            <img src={plusicon} alt="" />
            <p>
              CurrikiStudio worked seamlessly on a computer, phone, or tablet,
              which provided flexibility and easy access for students learning
              from home. It keeps students within the lessons enabling them to
              stay focused, and the built-in tools provide options for various
              learner types.
            </p>
          </InnerDiv>

          <InnerDiv>
            <img src={plusicon} alt="" />
            <p>
              It did not require previous experience in web development and
              coding, making it the ideal option for the immediate pivot to
              online educational content.
            </p>
          </InnerDiv>

          <InnerDiv>
            <img src={plusicon} alt="" />
            <p>
              Allowed LA Opera to redesign lesson plans with built-in tools such
              as quizzes, slides, interactive videos, sound clips, and more
              while ensuring that its students and teachers never have to leave
              the activity on their website.
            </p>
          </InnerDiv>

          <InnerDiv>
            <img src={plusicon} alt="" />
            <p>
              Increased the depth of content by multimedia elements to lessons
              and made them more engaging to students. Now, students can hear
              the musical instruments of the orchestra, watch videos about stage
              lighting, and complete fun drag-and-drop activities, all within
              the lessons.
            </p>
          </InnerDiv>
          <h4>impact of currikiStudio on the LA opera</h4>
          <p>
            LA Opera has more than doubled the amount of students participating
            since we began using CurrikiStudio.
            <br />
            LA Opera fundamentally believes in the direct link between
            accessible art and student success. The interactive lesson plans
            built on CurrikiStudio are free to all users and easily accessible.
            The lessons can be completed on a variety of devices, and they make
            use of multimedia elements for several learning styles. Without the
            traditional classroom environment, they felt it was important to be
            mindful of the challenges that students and teachers face and
            provide content that gives them a sense of normalcy and hope and
            accomplishment.
          </p>
        </DescriptionText>
      </Container>
      <CardContent>
        <Container>
          <h4>
            Explore some of the Interactive Videos and 360-degree tours that
            will add a higher degree of engagement to its Social Studies Alive!
            curriculum.
          </h4>
          <CardDescription>
            <Card>
              <img src={frontend} alt="rectangle-image"></img>
              <Cardbody>
                <p>
                  embedded with fun drag and drop activities and image-based
                  activities.
                </p>
                <Cardlink>
                  <p>Watch Interactive Video</p>
                  <img src={Arrow} alt="image"></img>
                </Cardlink>
              </Cardbody>
            </Card>
            <Card>
              <img src={backend} alt="rectangle-image"></img>
              <Cardbody>
                <p>
                  immerses learners in the history and geography of the region
                  with high-quality images, video, and audio clips.
                </p>
                <Cardlink>
                  <p>Watch 360-degree Tour</p>
                  <img src={Arrow} alt="image"></img>
                </Cardlink>
              </Cardbody>
            </Card>
            <Card>
              <img src={java} alt="rectangle-image"></img>
              <Cardbody>
                <p>
                  still under construction, will give learners a visual and
                  audio tour of the American West.
                </p>
                <Cardlink>
                  <p>Watch 360-degree Tour</p>
                  <img src={Arrow} alt="image"></img>
                </Cardlink>
              </Cardbody>
            </Card>
          </CardDescription>
        </Container>
      </CardContent>
      <Container>
        <InnerButton>
          <Button1>
            <button>
              {" "}
              <img src={Left} alt="image"></img> previous story
            </button>
          </Button1>
          <Button2>
            <button>
              next story <img src={Right} alt="image"></img>{" "}
            </button>
          </Button2>
        </InnerButton>
      </Container>
    </>
  );
};

export default Success;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
`;
const ContentText = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  align-items: center;
`;
const LeftContent = styled.div`
  max-width: 629px;
`;
const RightContent = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const Heading = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  text-transform: capitalize;
  span {
    color: #ffb124;
  }
`;
const InnerDesription = styled.div`
display:flex;
justify-content:space-between;
color:#084892;
margin-bottom:70px;
h4 {
  font-size:25px
  line-height:30px;
  margin:10px 0;
}
p {
  font-size:16px;
  line-height:22px;
  color:#515151;
}
@media screen and (max-width: 991px) {
  flex-direction:column;
 }
`;
const LeftCol = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightCol = styled.div`
  max-width: 500px;
`;
const InnerText = styled.div`
  h4 {
    color: #084892;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
  }
  p {
    color: #515151;
    font-size: 16px;
    line-height: 22px;
  }
  img {
    max-width: 1064px;
  }
`;
const Paragraph = styled.p`
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 958px;
  margin: 22px 0px 0px 30px;
  border-radius: 50px;
  img {
    width: 32px;
    height: 24px;
    margin: 0px 12px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #515151;
    margin: 0px;
    padding: 90px 51px;
    font-style: normal;
  }
`;
const InnerContent = styled.div`
  color: #084892;
  text-align: center;
  margin-top: 31px;
  h5 {
    font-weight: bold;
    margin: 0;
    font-size: large;
  }
  p {
    color: #084892;
    font-size: 18px;
  }
`;
const DescriptionText = styled.div`
  margin-top: 75px;
  h4 {
    margin-bottom: 22px;
    color: #084892;
    font-size: 25px;
    line-height: 30px;
    text-transform: capitalize;
  }
  p {
    color: #515151;
    font-size: 16px;
    line-height: 22px;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    width: 10px;
    height: 20px;
    margin-right: 5px;
  }
`;
const CardContent = styled.div`
  background-image: url(${back2});
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  margin: 100px 0;
  h4 {
    max-width: 1148px;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    padding: 100px 0 50px 0;
  }
`;
const CardDescription = styled.div`
  max-width: 1148px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 100px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Cardbody = styled.div`
  p {
    max-width: 330px;
    font-size: 18px;
    height: 75px;
    line-height: 25px;
    font-style: normal;
    margin-top: 22px;
  }
`;
const Cardlink = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-size: 18px;
    line-height: 22px;
    font-style: normal;
    font-weight: 700;
  }
  img {
    padding-top: 16px;
  }
`;
const InnerButton = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1148px;
`;
const Button1 = styled.div`
  button {
    width: 267px;
    height: 45px;
    border-radius: 25px;
    border: none;
    margin-bottom: 101px;
    background: #084892;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    background: #084892;

    box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
  }
  img {
    margin-right: 22px;
  }
`;
const Button2 = styled.div`
  button {
    width: 267px;
    height: 45px;
    border-radius: 25px;
    border: none;
    margin-bottom: 101px;
    background: #084892;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    background: #084892;
    box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
  }
  img {
    margin-left: 22px;
  }
`;
