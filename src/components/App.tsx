import React from "react";
import { RecoilRoot } from "recoil";

import Layout from "./Layout";
import Theme from "./Theme";
import Charts from "./Charts";

export default function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Theme>
          <Layout>
            <Charts />
          </Layout>
        </Theme>
      </RecoilRoot>
    </React.StrictMode>
  );
}
