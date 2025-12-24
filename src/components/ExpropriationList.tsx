import { use, useEffect, useState } from 'react';
import { lotLayer } from '../layers';
import Query from '@arcgis/core/rest/support/Query';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-chip';
import '@esri/calcite-components/dist/components/calcite-avatar';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteList,
  CalciteListItem,
  CalciteChip,
  CalciteAvatar,
} from '@esri/calcite-components-react';

import { ArcgisMap } from '@arcgis/map-components/dist/components/arcgis-map';
import { MyContext } from '../contexts/MyContext';

let highlightSelect: any;
function resultClickHandler(event: any) {
  const arcgisMap = document.querySelector('arcgis-map') as ArcgisMap;
  const queryExtent = new Query({
    objectIds: [event.target.value],
  });

  lotLayer.queryExtent(queryExtent).then((result: any) => {
    result.extent &&
      arcgisMap?.goTo({
        target: result.extent,
        speedFactor: 2,
        zoom: 17,
      });
  });

  arcgisMap?.whenLayerView(lotLayer).then((layerview: any) => {
    highlightSelect && highlightSelect.remove();
    highlightSelect = layerview.highlight([event.target.value]);

    arcgisMap?.view.on('click', () => {
      layerview.filter = null;
      highlightSelect.remove();
    });
  });
}

export default function ExpropriationList() {
  const { municipals, barangays } = use(MyContext);

  const [exproItem, setExproItem] = useState<any>();
  const queryMunicipality = `"Municipality" = '` + municipals + "'";
  const queryBarangay = `"Barangay" = '` + barangays + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryExpro = `"StatusLA" = 7`;

  useEffect(() => {
    const query = lotLayer.createQuery();

    if (!municipals) {
      query.where = queryExpro;
    } else if (municipals && !barangays) {
      query.where = queryMunicipality + ' AND ' + queryExpro;
    } else if (barangays) {
      query.where = queryMunicipalBarangay + ' AND ' + queryExpro;
    }

    lotLayer.queryFeatures(query).then((result: any) => {
      result.features.map((feature: any, index: any) => {
        const attributes = feature.attributes;
        const lotid = attributes['LotID'];
        const cp = attributes['CP'];
        const municipal = attributes['Municipality'];
        const landowner = attributes['LandOwner'];
        const objectid = attributes.OBJECTID;
        const id = index;
        setExproItem([]);
        setExproItem((prev: any) => [
          ...prev,
          {
            id: id,
            lotid: lotid,
            landowner: landowner,
            municipality: municipal,
            cp: cp,
            objectid: objectid,
          },
        ]);
      });
    });
  }, [municipals, barangays]);

  return (
    <>
      <CalciteList
        id="result-list"
        label="exproListLabel"
        displayMode="nested"
        style={{ width: '26vw' }}
      >
        {exproItem && // Extract unique objects from the array
          exproItem
            .filter(
              (ele: any, ind: any) =>
                ind === exproItem.findIndex((elem: any) => elem.objectid === ele.objectid),
            )
            .map((result: any) => {
              return (
                // need 'key' to upper div and inside CalciteListItem
                <CalciteListItem
                  key={result.id}
                  expanded
                  label={result.lotid}
                  description={result.landowner}
                  value={result.objectid}
                  selected={undefined}
                  onCalciteListItemSelect={(event: any) => resultClickHandler(event)}
                >
                  <CalciteChip value={result.cp} slot="content-end" scale="s" id="exproListChip">
                    <CalciteAvatar full-name={result.municipality} scale="s"></CalciteAvatar>
                    {result.cp}
                  </CalciteChip>
                </CalciteListItem>
              );
            })}
      </CalciteList>
    </>
  );
}
