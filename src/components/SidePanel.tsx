import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/calcite/calcite.css";
import {
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
} from "@esri/calcite-components-react";
import LotChart from './LotChart';
import ExpropriationList from './ExpropriationList';



export default function SidePanel() {
   
  return (
    <>
      <CalciteTabs
        slot="panel-end"
        layout="center"
        scale="m"
        style={{
          borderStyle: "solid",
          borderRightWidth: 5,
          borderLeftWidth: 5,
          borderBottomWidth: 5,
          // borderTopWidth: 5,
          borderColor: "#555555",
          width: "30%",
        }}
      >
        <CalciteTabNav
          slot="title-group"
          id="thetabs"

        >
          <CalciteTabTitle class="Land">Land</CalciteTabTitle>
          <CalciteTabTitle class="Structure">ExproList</CalciteTabTitle>
        </CalciteTabNav>
        <CalciteTab>
            <LotChart />
        </CalciteTab>
        <CalciteTab>
          <ExpropriationList />
        </CalciteTab>
      </CalciteTabs>
    </>
  );
}
