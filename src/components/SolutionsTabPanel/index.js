import React from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./style.css"
import SolutionsUxTeam from "../SolutionsUxTeam";

const SolutionsTabPanel = () => (
    <Tabs>
        <TabList>
            <Tab>
                <span className="f-light">UX TEAM</span><br />
                <span className="f-bold">IN A BOX</span>
            </Tab>
            <Tab disabled>
                <span className="f-light">LR IN</span><br />
                <span className="f-bold">A HOUSE</span>
            </Tab>
            <Tab disabled>
                <span className="f-light">SMART</span><br />
                <span className="f-bold">SOLUTIONS</span>
            </Tab>
            <Tab disabled>
                <span className="f-light">SPECIAL</span><br />
                <span className="f-bold">PROJECTS</span>
            </Tab>
        </TabList>
        <TabPanel>
            <SolutionsUxTeam />
        </TabPanel>
    </Tabs>
)

export default SolutionsTabPanel