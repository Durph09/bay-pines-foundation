import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



function TabbedListTeam() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
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
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
            <ul>
<li><strong>Javier A. Centonzio, JD, LLM</strong>, Community Representative</li>
<li><strong>Elamin (Amin) M. Elamin, MD</strong>, Chief of Staff, BPVAHCS</li>
<li><strong>Julius Kehinde, PhD, RN</strong>, Chief Nurse Research and Evidence Based Practice, BPVAHCS</li>
<li><strong>Paul Russo, MHSA, FACHE, RD</strong>, Director/CEO, BPVAHCS</li>
<li><strong>Richard J. Spayde, Jr., CRPC</strong>, Community Representative
<ul>
<li><span style={{color: "#ff0000"}}><em><strong>Board Treasurer </strong></em></span></li>
</ul>
</li>
<li><strong>Kimberly Cao MD</strong>, Associate Chief of Staff/Education, BPVAHCS</li>
<li><strong>Jennifer Webb</strong>, Community Representative
<ul>
<li><span style={{color: "#ff0000"}}><em><strong>Board Secretary</strong></em></span></li>
</ul>
</li>
<li>, Associate Chief of Staff/Research and Development, BPVAHCS
<strong>Allison E. Williams, ND, PhD, RN</strong><ul>
<li><span style={{color: "#ff0000"}}><em><strong>Board Chairperson</strong></em></span></li>
</ul>
</li>
</ul>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            <ul>
<li><strong>Caitlin Mahaney</strong>, Executive Director</li>
</ul>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
            <ul>
<li><strong>Mariah Alexis,&nbsp;</strong>Clinical Research Coordinator 1</li>
<li><strong>James Blankenship</strong>, IRB Administrator</li>
<li><strong>Camille Compton</strong>, Clinical Research Coordinator 1</li>
<li><strong>Sarah Crim,&nbsp;</strong>Clinical Research Coordinator 1</li>
<li><strong>Chayla Lee</strong>, Clinical Research Coordinator 1</li>
<li><strong>Catherine Maffei</strong>, Research Accountant Specialist</li>
<li><strong>Hayley Maither</strong>, Clinical Research Coordinator 2</li>
<li><strong>Anna Rosenblatt</strong>, Clinical Research Coordinator 3</li>
<li><strong>Kameron Wheelock,&nbsp;</strong>Clinical Research Coordinator 1</li>
<li><strong>Cortny Withee</strong>, Clinical Research Coordinator 2</li>
</ul>
              </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabbedListTeam;