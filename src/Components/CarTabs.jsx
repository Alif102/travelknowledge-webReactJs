import React from 'react'
import { Tabs,Tab, TabContent } from 'react-bootstrap'
import CarTabEco from './CarTabEco'

const CarTabs = () => {
  return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Economy">
                <CarTabEco/>
            </Tab>
            <Tab eventKey="profile" title="Standard">
            
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                <TabContent>
                    <h1>Hi i am alif</h1>
                </TabContent>
            </Tab>
            </Tabs>
    </div>
  )
}

export default CarTabs