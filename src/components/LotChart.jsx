import { use, useEffect, useRef, useState } from "react";

import {
  generateLotData,
  lotStatusQuery,
  totalNumberOfLots,
  zoomToLayer,
} from "../Query";
import { lotLayer } from "../layers";
import "@arcgis/map-components/dist/components/arcgis-map";
import Query from "@arcgis/core/rest/support/Query";

import { CalcitePanel } from "@esri/calcite-components-react";
import "@esri/calcite-components/dist/components/calcite-panel";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";

import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import { MyContext } from '../contexts/MyContext';

/// Dispose function
function maybeDisposeRoot(divId) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

export default function LotChart() {
  const chartID = "lotPiechart";

  const arcgisMap = document.querySelector("arcgis-map");
  const { municipals, barangays } = use(MyContext);
  const [totalNumber, setTotalNumber] = useState();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    totalNumberOfLots().then((response) => {
      setTotalNumber(response);
    });

    generateLotData().then((response) => {
      setChartData(response[1]);
    });
  }, []);

  const queryMunicipality = `Municipality = '${municipals}'`;
  const queryBarangay = `Barangay = '${barangays}'`;

  if (!municipals) {
    lotLayer.definitionExpression = "1=1";
  } else if (municipals && !barangays) {
    lotLayer.definitionExpression = queryMunicipality;
  } else if (municipals && barangays) {
    lotLayer.definitionExpression = queryMunicipality + " AND " + queryBarangay;
  }

  useEffect(() => {
    zoomToLayer(lotLayer, arcgisMap);

    totalNumberOfLots(municipals, barangays).then((response) => {
      setTotalNumber(response);
    });

    generateLotData(municipals, barangays).then((response) => {
      setChartData(response[1]);
    });
  }, [municipals, barangays]);

  useEffect(() => {
    // Disposing or reset ChartID
    maybeDisposeRoot(chartID);

    // Define root
    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo.dispose();

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Responsive.new(root),
    ]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    //Define pie chart series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: "category",
        valueField: "value",
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 1.8,
      })
    );

    pieSeries.slices.template.events.on("click", (ev) => {
      var Category = ev.target.dataItem?.dataContext.category;
      const selectedValue = lotStatusQuery.find(
        (emp) => emp.category === Category
      )?.value;
      console.log(Category, ": ", selectedValue);

      var highlightSelect;

      const query = lotLayer.createQuery();

      arcgisMap?.whenLayerView(lotLayer).then((layerView) => {
        lotLayer.queryFeatures(query).then((results) => {
          const result_length = results.features;
          const row_n = result_length.length;

          let objID = [];

          for (var i = 0; i < row_n; i++) {
            var obj = results.features[i].attributes.OBJECTID;
            objID.push(obj);
          };

          var queryExt = new Query ({
            objectIds: objID
          });

          lotLayer.queryExtent(queryExt).then((result) => {
            if(result.extent) {
                arcgisMap?.goTo(result.extent)

            }
          });

          if(highlightSelect){
            highlightSelect.remove();
          }
          highlightSelect = layerView.highlight(objID);

          arcgisMap?.view.on("click", function(){
            layerView.filter = new FeatureFilter({
                where: undefined,
            });
            highlightSelect.remove();
          });
        });

        layerView.filter = new FeatureFilter({
            where: "StatusLA" + " = " + selectedValue,
        });
      });
    });

    // Push this data to the chart container

    chart.series.push(pieSeries);
    pieSeries.data.setAll(chartData);

    // Properties: color, stoke, ool
    pieSeries.slices.template.setAll({
      toggleKey: "none",
      fillOpacity: 0.9,
      stroke: am5.color("#ffffff"),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: "sliceSettings",
      tooltipText: '{category}: {valuePercentTotal.formatNumber("#.")}%',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set("visible", false);
    pieSeries.ticks.template.set("visible", false);

    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        scale: 0.9,
      })
    );
    // legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    legend.labels.template.setAll({
      oversizedBehavior: "truncate",
      fill: am5.color("#ffffff"),
      width: 250,
      maxWidth: 270,
    });

    legend.valueLabels.template.setAll({
      textAlign: "right",
      fill: am5.color("#ffffff"),
    });

    legend.itemContainers.template.setAll({
      paddingTop: 3,
      paddingBottom: 1,
    });

    return () => {
      root.dispose();
    };
  }, [chartID, chartData]);

  return (
    <>
      
        <div style={{ fontSize: "50px", color: "white" }}>{totalNumber}</div>
        <div
          id={chartID}
          style={{
            // width: chart_width,
            height: "60vh",
            backgroundColor: "rgb(0,0,0,0)",
            color: "white",
            // marginTop: "8%",
            // marginBottom: "7px",
          }}
        ></div>
      
    </>
  );
}
