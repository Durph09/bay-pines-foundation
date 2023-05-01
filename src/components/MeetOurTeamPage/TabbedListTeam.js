import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function TabbedListTeam() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className="g-4">
        <Col sm={4}>
          <ListGroup className="mx-3">
            <ListGroup.Item action href="#link1">
              Board of Directors
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Leadership
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Foundation
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={7}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <ul className="list-unstyled">
                {[
                  {
                    name: "Javier A. Centonzio, JD, LLM",
                    title: "Community Representative",
                  },
                  {
                    name: "Elamin (Amin) M. Elamin, MD",
                    title: "Chief of Staff, BPVAHCS",
                  },
                  {
                    name: "Julius Kehinde, PhD, RN",
                    title:
                      "Chief Nurse Research and Evidence Based Practice, BPVAHCS",
                  },
                  {
                    name: "Paul Russo, MHSA, FACHE, RD",
                    title: "Director/CEO, BPVAHCS",
                  },
                  {
                    name: "Richard J. Spayde, Jr., CRPC",
                    title: "Community Representative",
                    additionalTitle: "Board Treasurer",
                  },
                  {
                    name: "Kimberly Cao MD",
                    title: "Associate Chief of Staff/Education, BPVAHCS",
                  },
                  {
                    name: "Jennifer Webb",
                    title: "Community Representative",
                    additionalTitle: "Board Secretary",
                  },
                  {
                    name: "Allison E. Williams, ND, PhD, RN",
                    title:
                      "Associate Chief of Staff/Research and Development, BPVAHCS",
                    additionalTitle: "Board Chairperson",
                  },
                ].map(({ name, title, additionalTitle }) => (
                  <li key={name}>
                    <strong>{name}</strong>, {title}
                    {additionalTitle && (
                      <span className="text-danger ms-2">
                        <em>
                          <strong>{additionalTitle}</strong>
                        </em>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <ul className="list-unstyled">
                <li>
                  <strong>Caitlin Mahaney</strong>, Executive Director
                </li>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <ul className="list-unstyled">
                {[
                  {
                    name: "Mariah Alexis",
                    title: "Clinical Research Coordinator 1",
                  },
                  { name: "James Blankenship", title: "IRB Administrator" },
                  {
                    name: "Camille Compton",
                    title: "Clinical Research Coordinator 1",
                  },
                  {
                    name: "Sarah Crim",
                    title: "Clinical Research Coordinator 1",
                  },
                  {
                    name: "Chayla Lee",
                    title: "Clinical Research Coordinator 1",
                  },
                  {
                    name: "Catherine Maffei",
                    title: "Research Accountant Specialist",
                  },
                  {
                    name: "Hayley Maither",
                    title: "Clinical Research Coordinator 2",
                  },
                  {
                    name: "Anna Rosenblatt",
                    title: "Clinical Research Coordinator 3",
                  },
                  {
                    name: "Kameron Wheelock",
                    title: "Clinical Research Coordinator 1",
                  },
                  {
                    name: "Cortny Withee",
                    title: "Clinical Research Coordinator 2",
                  },
                ].map(({ name, title }) => (
                  <li key={name}>
                    <strong>{name}</strong>, {title}
                  </li>
                ))}
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabbedListTeam;
