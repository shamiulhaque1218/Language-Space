/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PopularClasses from './PopularClasses';

const ClassAndInstructor = () => {
    return (
        <div>
  <Tabs>
    <TabList className="border-0 gFont3 ml-10 flex gap-5">
      <Tab className="border-0"> <div className="text-lg bgBtn text-white rounded-md py-4 px-12">Popular Classes</div> </Tab>
      <Tab className="border-0"> <div className="text-lg bgBtn text-white rounded-md py-4 px-12">Popular Instructors</div> </Tab>
    </TabList>

    <TabPanel>
    <div className='pt-5'> <PopularClasses> </PopularClasses> </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ClassAndInstructor;