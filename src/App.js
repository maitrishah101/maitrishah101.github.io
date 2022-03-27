import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/section'
import Project from './components/Project/project'
import { SHORTBIO } from './constants'
import Fade from 'react-reveal/Fade';
import profile from './img/maitri.png'
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 

const history = createBrowserHistory()

class App extends Component {
  render() {
  return (
    <HashRouter history={history}>
      <Switch>
         <Route path='/'>
            <div class="container">
               <Fade top>
                  <Section sectionStyle="heading-style" emojiSymbol="👋" heading="Hi, I'm Maitri."/>
               </Fade>
               <div class="flex-container">
                  <Fade top>
                     <div class="profilepicwrapper">
                        <img class="profilepic" src={profile}/>
                     </div>
                     <Section sectionStyle="bio-style" heading={SHORTBIO}/>
                  </Fade>
               </div>
               <div>
                  <Fade bottom>
                     <Section sectionStyle="subheading-style" emojiSymbol="☁️" heading="Currently"/>
                     <Project textFront="Building the core product on the Create team at  " link= "https://loom.com/" linkText="Loom" textBack="."></Project>
                     <Project textFront="Making gradients, lots of them. Fun fact I went viral on " link= "https://twitter.com/maitrishahhhh/status/1488183307422474242" linkText="Twitter" textBack="!"></Project>
                     <Project textFront="Creating content on how to live more conscious and sustainable lifestyles at " link= "https://doonebetter.substack.com/" linkText="Do One Better" textBack="."></Project>
                     <Project textFront="Building a database of clean and sustainable alternatives " link="https://www.notion.so/61-Sustainable-Ethical-Brands-to-Shop-From-22b14974060f432797f3ce83dc5651c1" linkText="here."></Project>
                     <Project textFront="On weekends I host a " link="https://twitter.com/maitrishahhhh/status/1264320035469721600" linkText="book club" textBack=", cook, read, and go on long walks."></Project>
                     
                     <Section sectionStyle="subheading-style" emojiSymbol="⏮" heading="Previously"/>
                     <Project textFront="Engineered solutions on the Partner Integrations team at " link= "https://nerdwallet.com/" linkText="NerdWallet" textBack="."></Project>
                     <Project textFront="Designed and PM'd projects for SITELAB Urban Studio and Samsara at " link="https://www.berkeleyinnovation.org/" linkText="Berkeley Innovation" textBack="."></Project>
                     <Project textFront="Founded " link="https://www.google.com/search?q=sweplusplus.herokuapp&oq=sweplusplu&aqs=chrome.1.69i57j35i39j0i10i457.2731j0j1&sourceid=chrome&ie=UTF-8" linkText="SWE++" textBack=", a free program at 6+ universities which provides CS education to middle schoolers."></Project>
                     <Project textFront="Won 1st place with a team in the 2020 USA " link="https://brandstorm.loreal.com/en" linkText="L'Oreal Brandstorm Challenge" textBack="."></Project>
                     <Project textFront="Designed marketing materials and posters for " link="https://berkeleyforum.org/" linkText="The Berkeley Forum" textBack="."></Project>
                     <Project textFront="Co-founded " link="https://quarantine4kids.org/" linkText="Quarantine4Kids" textBack=", a free digital summer program for K-12 students."></Project>
                     <Project textFront="Co-created a " link="https://tinyurl.com/ghc-learnings" linkText="presentation" textBack=" on how to be a more effective for womxn in tech."></Project>
                     <Project textFront="Invited Silicon Valley changemakers to come speak at Berkeley's " link="http://thefuture.build/" linkText="How to Build the Future" textBack=" student run class."></Project>
                  </Fade>
               </div>
               <div style={{marginBottom:"15%"}}/>
            </div>
         </Route>
      </Switch>
   </HashRouter>
  );
}
}
export default App;
