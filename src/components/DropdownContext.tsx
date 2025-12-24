import { useState, useEffect, use } from 'react';
import Select from 'react-select';
import { lotLayer } from '../layers';

import GenerateDropdownData from 'npm-dropdown-package';
import { MyContext } from '../contexts/MyContext';

export default function DropdownContext() {
  const { updateMunicipals, updateBarangays } = use(MyContext); // for data sharing
  const [municipal, setMunicipal] = useState<any>(); //initial list for when opening the smart map
  const [municipalSelected, setMunicipalSelected] = useState<any>(null);
  const [barangaySelected, setBarangaySelected] = useState(null);
  const [barangayList, setBarangayList] = useState<any>([]);

  useEffect(() => {
    const dropdownData = new GenerateDropdownData([lotLayer], ['Municipality', 'Barangay']);

    dropdownData.dropDownQuery().then((response: any) => {
      setMunicipal(response);
    });
  }, []);

  const handleMunicipalityChange = (obj: any) => {
    console.log(obj);
    setMunicipalSelected(obj);
    updateMunicipals(obj.field1);
    updateBarangays(undefined);
    setBarangayList(obj.field2);
    setBarangaySelected(null);
  };

  const handleBarangayChange = (obj: any) => {
    setBarangaySelected(obj);
    updateBarangays(obj.name);
  };

  const customstyles = {
    option: (styles: any, { isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      color: '#ffffff',
      touchUi: false,
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
      <span style={{ color: 'white', paddingRight: '5px', margin: 'auto' }}>Municipality</span>
      <Select
        value={municipalSelected}
        options={municipal}
        onChange={handleMunicipalityChange}
        getOptionLabel={(x) => x.field1}
        styles={customstyles}
      />
      <span
        style={{
          color: 'white',
          paddingLeft: '5px',
          paddingRight: '5px',
          margin: 'auto',
        }}
      >
        Barangay
      </span>

      <Select
        value={barangaySelected}
        options={barangayList}
        onChange={handleBarangayChange}
        getOptionLabel={(x: any) => x.name}
        styles={customstyles}
      />
    </div>
  );
}

// function
