// MINIMAL TEST COMPONENT - NO DATA, NO LOGIC
// Agar ye kaam kare, to original component me issue hai
// Agar ye bhi nahi kaam kare, to GeoJSON file issue hai

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl = "/maps/india_states.geojson";

export default function IndiaMapTest() {
  return (
    <div style={{ 
      height: "600px", 
      width: "100%",
      background: "#020617",
      padding: "20px"
    }}>
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>Test Map - Should Show Red India</h2>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1200,
          center: [82.8, 22.5]
        }}
        width={800}
        height={600}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            console.log('TEST: Geographies count:', geographies?.length);
            
            if (!geographies || geographies.length === 0) {
              return (
                <text x="400" y="300" textAnchor="middle" fill="#fff" fontSize="20">
                  No data loaded!
                </text>
              );
            }
            
            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="red"
                stroke="white"
                strokeWidth={1}
              />
            ));
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
}

