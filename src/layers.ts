
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import CustomContent from "@arcgis/core/popup/content/CustomContent";
import PopupTemplate from "@arcgis/core/PopupTemplate";

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: "e09b9af286204939a32df019403ef438",
    portal: {
      url: "https://gis.railway-sector.com/portal",
    },
  },
  layerId: 2,
  title: "Chainage",
  elevationInfo: {
    mode: "relative-to-ground",
  },
});


const customContent = new CustomContent ({
  outFields: ["*"],
  creator: (event: any) => {
    const municipal = event?.graphic.attributes["Municipality"]
    // const statusLot = event.graphic.attributes["StatusLA"];
    return `
    <div style = 'color: #eaeaea'>
    ${municipal}
    <div>
    `;
  },
});

const customTemplate = new PopupTemplate ({
  title: "<div style='color: #eaeaea'>Lot No.: <b>{LotID}</b></div>",
  lastEditInfoEnabled: false,
  content: [customContent]
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: "17cbb2b9a0b94ee582c14ac588881eeb",
    portal: {
      url: "https://gis.railway-sector.com/portal",
    },
  },
  layerId: 1,
  title: "Land Acquisition",
  popupTemplate: customTemplate,
  elevationInfo: {
    mode: "on-the-ground",
  },
});



