import ReactGA from 'react-ga';

const trackingId = "UA-163319780-1"; // Replace with your Google Analytics tracking ID

export const analitics = () => {
  ReactGA.initialize(trackingId);

  ReactGA.pageview('/')
}