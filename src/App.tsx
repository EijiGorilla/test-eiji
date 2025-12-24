import { useState, useEffect } from 'react';
import './App.css';
import OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import Portal from '@arcgis/core/portal/Portal';

import MapDisplay from './components/MapDisplay';
import Header from './components/Header';
import { CalciteShell } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-shell';
import SidePanel from './components/SidePanel';
import { MyContext } from './contexts/MyContext';

function App() {
  const [loggedInState, setLoggedInState] = useState<boolean>(false);
  useEffect(() => {
    const info = new OAuthInfo({
      appId: 'YlAakIC8jtNDONG4',
      popup: false,
      portalUrl: 'https://gis.railway-sector.com/portal',
    });

    IdentityManager.registerOAuthInfos([info]);
    async function loginAndLoadPortal() {
      try {
        await IdentityManager.checkSignInStatus(info.portalUrl + '/sharing');
        const portal: any = new Portal({
          // access: "public",
          url: info.portalUrl,
          authMode: 'no-prompt',
        });
        portal.load().then(() => {
          setLoggedInState(true);
          console.log('Logged in as: ', portal.user.username);
        });
      } catch (error) {
        console.error('Authentication error:', error);
        IdentityManager.getCredential(info.portalUrl);
      }
    }
    loginAndLoadPortal();
  }, []);

  const [municipals, setMunicipals] = useState<any>();
  const updateMunicipals = (newMunicipal: any) => {
    setMunicipals(newMunicipal);
  };

  const [barangays, setBarangays] = useState<any>();
  const updateBarangays = (newBarangay: any) => {
    setBarangays(newBarangay);
  };

  return (
    <>
      {loggedInState === true ? (
        <CalciteShell>
          {
            <MyContext value={{ municipals, updateMunicipals, barangays, updateBarangays }}>
              <MapDisplay />
              <SidePanel />
              <Header />
            </MyContext>
          }
        </CalciteShell>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
