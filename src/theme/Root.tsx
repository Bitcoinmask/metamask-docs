import React, { ReactChild } from "react";
import { MetaMaskProvider } from '@metamask/sdk-react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({ children }: { children: ReactChild}) {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {
        () => {
          return (
            <MetaMaskProvider debug={false} sdkOptions={{
              logging:{
                  developerMode: false,
                },
                checkInstallationImmediately: false,
                dappMetadata: {
                  name: "Test app",
                  url: window.location.host,
                },
                preferDesktop: true
            }}>
              {children}
            </MetaMaskProvider>
          )
        }
      }
    </BrowserOnly>
    
  );
}