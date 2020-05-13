const size = {
  mobile: "770px",
  tabletS: "1023px",
  tabletM: "1220px",
  tabletL: "1280px",
  laptop: "1460px",
  desktop: "1700px",
};

const theme = {
  gdacColor: "#0a4297",
  subColor: "#0086ec",
  plusColor: "#e21b36",
  minusColor: "#174ca2",
  noChangeColor: "#022553",
  backgroundColor: "#f7fbff",
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
