import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Header, Footer } from './components/layout';
import { About, Education, Experiences, Contact, Skills, Keywords, Languages } from './components/cv';
import './App.css';

const App = ({data}) => {

  return (
    <div className="app">
      <div className="container app-header">
        <div className="row">
          <div className="col-12">
            <Header {...data} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-7 p-4">
            <About {...data} />
            <Experiences {...data} />
            <Education {...data} />
            {/*<Box title="Experience">
              <Accordion defaultActiveKey="0" className="experience">
              {data.experience && data.experience.map((exp,i) =>
                <div key={`experience-${i}`}>
                  <Experience work={exp} index={i} />
                </div>
              )}
              </Accordion>
            </Box>*/}
          </div>
          <div className="col-12 col-lg-5 p-4">
            <div className="sticky-top">
              <Accordion defaultActiveKey="0" className="right-col">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Contact</Accordion.Header>
                  <Accordion.Body>
                    <Contact {...data} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Programming languages</Accordion.Header>
                  <Accordion.Body>
                    <Skills skills={data.programmingLanguages} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Scripting languages</Accordion.Header>
                  <Accordion.Body>
                    <Skills skills={data.scriptingLanguages} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Databases</Accordion.Header>
                  <Accordion.Body>
                    <Keywords keywords={data.databases} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Competance keywords</Accordion.Header>
                  <Accordion.Body>
                    <Keywords keywords={data.competance} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Languages</Accordion.Header>
                  <Accordion.Body>
                    <Languages {...data} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Hobbies</Accordion.Header>
                  <Accordion.Body>
                    <Keywords keywords={data.hobbies} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <p>Disclaimer: My digital CV is not updated realtime, but when I remember and feel like it. There is a lot of tech I have not put on this list, simply because while updating I forgot about it. Need my help on a project with not mentioned tech, I might have the knowledge, ask me.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer /> 
      <style jsx="true">{`
        .sticky-top {
          top: 20px !important;
        }
        .app-header {
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default App;
