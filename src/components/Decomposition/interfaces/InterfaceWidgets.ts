export default interface WidgetsProps {
  children: React.ReactNode;
}

export interface WeatherItem {
  temperatureCurrent: string;
  isPrecipitationSrc: string;
  isPrecipitationAlt: string;
  temperatureMorning: string;
  temperatureAfternoon: string;
}

export interface WeatherProps {
  title: string;
  items: WeatherItem[];
}

export interface MapProps {
  title: string;
  items: { content: string }[];
}

export interface EtherProps {
  title: string;
  items: { name: string; TVСhannel: string }[];
}

export interface VisitedProps {
  title: string;
  items: { term: string; definition: string }[];
}

export interface TVProgramProps {
  title: string;
  items: { time: string; name: string; TVСhannel: string }[];
}
