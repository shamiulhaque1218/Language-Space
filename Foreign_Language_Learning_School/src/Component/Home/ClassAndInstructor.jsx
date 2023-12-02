/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PopularClasses from './PopularClasses';
import PopularMyInstractor from '../User/PopularMyInstractor';

const ClassAndInstructor = () => {
    return (
        <div>
  <Tabs>
      <strong className='flex'>
      <p className='bg-blue-200 text-blue-700 w-32 py-1 ml-3 text-center rounded-3xl text-md font-semibold mb-5 lg:mb-0'>Course List</p>
      <p className='bg-blue-200 text-blue-700 w-32 py-1 ml-3 text-center rounded-3xl text-md font-semibold mb-5 lg:mb-0'>Instructor List</p>
      </strong>
    <TabList className="border-0 gFont3 lg:ml_6 md:ml-96 ml-3 flex gap-5">
     
      <Tab className="border-0"> <div className="text-md font-semibold hover:text-blue-950 text-blue-700 border-b-blue-400 border-b BGColor lg:py-2 py-1 px-1 lg:px-3">Popular Classes</div> </Tab>
      <Tab className="border-0"> <div className="text-md font-semibold border-b-blue-400 border-b text-blue-700 hover:text-blue-950 BGColor lg:py-2 py-1 px-1 lg:px-3">Popular Instructors</div> </Tab>
    </TabList>

    <TabPanel>
    <div className='pt-5'> <PopularClasses> </PopularClasses> </div>
    </TabPanel>
    <TabPanel>
     <div className='pt-5'> <PopularMyInstractor> </PopularMyInstractor> </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ClassAndInstructor;