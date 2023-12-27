import { useEffect, useState } from "react";
import ReactFlow, { MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import "./FamilyTreeComp.css";

function FamilyTreeComp() {
  const [nodesData, setNodesData] = useState([]);
  const [edgesData, setEdgesData] = useState([]);

  useEffect(() => {
    // Fetch nodes data
    axios
      .get(`http://localhost:4040/api/v1/nodes`)
      .then((response) => {
        setNodesData(response.data);
      })
      .catch((error) => console.log(error));

    // Fetch edges data
    axios
      .get(`http://localhost:4040/api/v1/edges`)
      .then((response) => {
        setEdgesData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const nodes = nodesData.map(({ id, type, data, position }) => ({
    id,
    type,
    data: {
      label: (
        <div className="card">
          <img src={data.label.image} alt={data.label.text} />
          <p>{data.label.text}</p>
        </div>
      ),
    },
    position,
  }));

  const edges = edgesData.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: edge.animated,
  }));

  return (
    <div className="family-tree-comp">
      <div className="sticky-nodes">
        <h1>Our Family</h1>
      </div>
      <div className="react-flow-container" style={{ height: 1500, width: 1500 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          zoomOnDoubleClick="true"
          zoomOnPinch="true"
          zoomOnScroll="false"
          panOnDrag="false"
          preventScrolling="true"
          style={{ position: "static" }}
          fitView
        >
          <MiniMap zoomable pannable style={{ position: "absolute" }} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default FamilyTreeComp;
