import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import AppBar from '../layout/appBar';
import Banner from '../components/home/banner';
import ImgPrgraph from '../components/home/img-pargraph-section/index';
import UspDifferentiation from '../components/home/USP Section';
import OnlinePayment from '../components/home/onlinePayment';
import Footer from '../layout/footer.js'

import Icon1 from '../images/icons/binary-code.svg';
import Icon2 from '../images/icons/chair.svg';
import Icon3 from '../images/icons/booking.svg';
import Icon4 from '../images/icons/order-food.svg';
import Icon5 from '../images/icons/Page-1.svg';
import Icon6 from '../images/icons/ok.svg';
import ImageSection3 from '../images/cwa.svg';
import ImageSection4 from '../images/Bkgsec4.svg';
import ReserveTable from '../images/resrerve_table.svg';
import SideImage from '../images/ros.svg';
import TrackerImage from '../images/tracker.PNG'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(() => ({
  section4: {
    background: '#4f4f4f',
    color: "#FFF"
  },
  section3: {
    background: '#f0f0f0',
    color: "#000",
  },
  heightVeiw: {
    // minHeight: "100vh",
    // height: "100vh"
  },
  heightAuto: {
    height: "auto"
  },
  sectionPos:{
    paddingTop: 130
  }
}));



const App = () => {
  const classes = useStyles();
  const matcheSmall = useMediaQuery('(max-width:1000px)');
  const matcheHeight = useMediaQuery('(max-height:500px)');
  const matcheSmallScreen = useMediaQuery('(max-width:960px)');
  const matchesMDScreen = useMediaQuery('(max-width:1200px)');


  // content of paragraph in section 2
  const content1 = [
    {
      "brief": <p>Maximises the number of covers a restaurant takes in each sitting by autonomously assessing the occupancy status of individual tables and updating the online booking system(with in OrderGO or 3rd party integrated... using API)</p>,
      "icon" : Icon2,
    },
    {
      "brief": <p>Solution uses machine learning algorithms to make decisions.<br/> Caters timely for late cancellations, no shows, or consumers that leave their sitting early.<br/> Over time can have asignificant impact on the retailer’s performance and profitability.<br/> Requires no intervention by staff.</p>,
      "icon" : Icon1,
    },
    {
      "brief": <p>Allows consumers to add their details on waiting list(only mobile number...no sensitive information or GDPR concern)against preferred time and to be notified by push notification if a table becomes available</p>,
      "icon" : Icon3,
    }
  ]
 // content of paragraph in section 3
  const content2 = [
    {
      "brief": <p>At the point an order is placed by the consumer, front of house staff will have had no involvement; no interface with the consumers, and no reentering the order into the retailer’s POS before processing can begi</p>,
      "icon" : Icon4,
    },
    {
      "brief": <p>From then on front of house staff will be kept updated real-time on the order status via a staff app called Table Status Tracker (TST) which uses push notification to alert of any changes to the order.<br/> The app will notify and display the various stages the order goes through before being ready to being serve to the consumer.</p>,
      "icon" : Icon5,
    },
    {
      "brief": <p>No more bells, no more shouting, no communication between staff necessary, only structure in managing the order and more time to focus on improving the customer experience. <br/>As such OrderGO focuses and improves the relationship between retailers and their customers (consumers).</p>,
      "icon" : Icon6,
    }
  ]

  return (
  <>
        <AppBar />
        <Banner/>
      <div>
        <UspDifferentiation/>
      </div>
      <div className={`section ${classes.section3}`}>
      <ImgPrgraph
        heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
        imgLast={matchesMDScreen ? false : true}
        classes={classes.section3}
        title="Reserve aTable"
        // subTitle=""
        data={content1}
        image={<img src={ReserveTable} width="90%" height="100%"/>}
        delay={2000}
      />
      </div>
      <div className={classes.section4}>
        <ImgPrgraph
          heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
          imgLast={false}
          classes={classes.section4}
          title="(CWA) Consumer Web App"
          // subTitle=""
          data={content2}
          image={<img src={ImageSection3} width="90%"  height="100%"/>}
          delay={4000}
        />
      </div>
      <div className={classes.section3}>
        <ImgPrgraph
          heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
          imgLast={matchesMDScreen ? false : true}
          classes={classes.section3}
          title="Hardware not Required / Free"
          // subTitle=""
          data={content1}
          image={<img src={ImageSection4} width="90%" height="90%"/>}
          delay={2000}
        />
      </div>
      <OnlinePayment/>
      <div className={classes.section3}>
        <ImgPrgraph
          heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
          imgLast={matchesMDScreen ? false : true}
          classes={classes.section3}
          title="(ROS) Receive Order Station"
          // subTitle=""
          data={content1}
          image={<img src={SideImage} width="90%" height="90%"/>}
          delay={2000}
        />
      </div>
      <div className={classes.section4}>
        <ImgPrgraph
          heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
          imgLast={false}
          classes={classes.section4}
          title="(TST) Table Status Tracker"
          // subTitle=""
          data={content2}
          image={<img src={TrackerImage} width="90%" height="90%"/>}
          delay={4000}
        />
      </div>
      {/* <div className={`section ${classes.section4}`}>
        <ImgPrgraph
          heightClass={matcheSmall || matcheHeight ? classes.heightAuto : classes.heightVeiw}
          imgLast={true}
          classes={classes.section3}
          title="Local Database Server"
          // subTitle=""
          data={content1}
          // image={<img src={TrackerImage} width="90%" height="90%"/>}
          delay={4000}
        />
      </div> */}
    {/* </ReactFullpage.Wrapper> */}
    <Footer />
  </>
  );
}

export default App;
