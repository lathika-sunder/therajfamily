import { useState } from "react";
import ReactFlow, { MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import greatgrandpa1 from "../../assets/great-grandpa1.jpeg";
import greatgrandma1 from "../../assets/great-grandma1.jpeg";
import man1 from "../../assets/man1.jpg";
import woman1 from "../../assets/woman1.jpeg";
import boy1 from "../../assets/boy1.jpg";
import girl1 from "../../assets/girl1.jpg";

import "./FamilyTreeComp.css";

const initialNodes = [
  {
    id: "1",

    type: "male",
    data: {
      label: (
        <div className="card">
          Muthukrishnan Pillai<img src={greatgrandpa1} style={{width:'20vh',height:'27vh'}}></img>
        </div>
      ),
    },
    position: { x: 1100, y: 0 },
    style: { backgroundColor: "#161977", color: "white" ,height:"34vh",width:'28vh'},
  },
  {
    id: "2",
    type: "female",
    data: {
      label: (
        <div className="card">
          Rajalakshmi Ammal<img src={greatgrandma1}></img>
          <p>1st Wife</p>
        </div>
      ),
    },
    position: { x: 950, y: 30 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "3",
    type: "female",
    data: {
      label: (
        <div className="card">
          Ammani Ammal<img src={greatgrandma1}></img>
          <p>2nd Wife</p>
        </div>
      ),
    },
    position: { x: 1300, y: 30 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },

  {
    id: "4",
    type: "female",
    data: { label: "daughter" },
    position: { x: 750, y: 300 },
  },

  //
  {
    id: "5",
    type: "male",
    data: {
      label: (
        <div className="card">
          T M Raj<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 450, y: 300 },
  },
  {
    id: "6",
    type: "female",
    data: {
      label: (
        <div className="card">
          Pushpam<img src={woman1}></img>
          <p>(Wife)</p>
        </div>
      ),
    },
    position: { x: 300, y: 300 },
  },

  //
  {
    id: "7",
    type: "male",
    data: {
      label: (
        <div className="card">
          M. Dhamodhara Raj<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 750, y: 300 },
  },
  {
    id: "12",
    type: "female",
    data: {
      label: (
        <div className="card">
          ThulasiBai Ammal<img src={woman1}></img>
          <p>(Wife)</p>
        </div>
      ),
    },
    position: { x: 900, y: 300 },
  },

  //
  {
    id: "8",
    type: "male",
    data: {
      label: (
        <div className="card">
          M. Rajagopal<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1150, y: 300 },
  },
  {
    id: "13",
    type: "female",
    data: {
      label: (
        <div className="card">
          Sarswathi<img src={woman1}></img>
          <p>(Wife)</p>
        </div>
      ),
    },
    position: { x: 1300, y: 300 },
  },

  //
  {
    id: "9",
    type: "male",
    data: {
      label: (
        <div className="card">
          Balaraman Raj<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1550, y: 300 },
  },
  {
    id: "14",
    type: "female",
    data: {
      label: (
        <div className="card">
          Manoranjitham<img src={woman1}></img>
          <p>(Wife)</p>
        </div>
      ),
    },
    position: { x: 1700, y: 300 },
  },

  //
  {
    id: "10",
    type: "female",
    data: {
      label: (
        <div className="card">
          Babna <img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 1950, y: 300 },
  },
  {
    id: "15",
    type: "male",
    data: {
      label: (
        <div className="card">
          Balaraman Raj<img src={man1}></img>
          <p>(Husband)</p>
        </div>
      ),
    },
    position: { x: 2100, y: 300 },
  },
  //
  {
    id: "11",
    type: "female",
    data: {
      label: (
        <div className="card">
          Ashtalakshmi<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 2350, y: 300 },
  },
  {
    id: "16",
    type: "male",
    data: {
      label: (
        <div className="card">
          Manikandan<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2500, y: 300 },
  },

  //Grandhildren of first wife
  {
    id: "17",
    type: "male",
    data: {
      label: (
        <div className="card">
          Chandran<img src={man1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 300, y: 600 },
  },
  {
    id: "18",
    type: "female",
    data: {
      label: (
        <div className="card">
          Jamuna<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 50, y: 600 },
  },
  {
    id: "19",
    type: "female",
    data: {
      label: (
        <div className="card">
          Susila<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: -200, y: 600 },
  },
  {
    id: "20",
    type: "female",
    data: {
      label: (
        <div className="card">
          Padmini<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: -450, y: 600 },
  },
  {
    id: "21",
    type: "female",
    data: {
      label: (
        <div className="card">
          Vimala<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: -700, y: 600 },
  },
  {
    id: "22",
    type: "female",
    data: {
      label: (
        <div className="card">
          Kasthuri<img src={woman1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: -950, y: 600 },
  },

  //Children of Dhamodharaj & ThulasiBai Ammal
  {
    id: "22",
    type: "male",
    data: {
      label: (
        <div className="card">
          Muthukrishnan<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 200, y: 1800 },
  },
  {
    id: "23",
    type: "male",
    data: {
      label: (
        <div className="card">
          Kannan<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 450, y: 1800 },
  },
  {
    id: "24",
    type: "male",
    data: {
      label: (
        <div className="card">
          Balakrishnan<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 700, y: 1800 },
  },
  {
    id: "25",
    type: "male",
    data: {
      label: (
        <div className="card">
          Vittal<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 950, y: 1800 },
  },
  {
    id: "26",
    type: "female",
    data: {
      label: (
        <div className="card">
          Sulochana<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 1200, y: 1800 },
  },
  {
    id: "27",
    type: "female",
    data: {
      label: (
        <div className="card">
          Bama<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 1450, y: 1800 },
  },
  {
    id: "28",
    type: "female",
    data: {
      label: (
        <div className="card">
          Juna<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 1700, y: 1800 },
  },
  //Children of Rajagopal saraswathi
  {
    id: "29",
    type: "female",
    data: {
      label: (
        <div className="card">
          Sarojini<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 1100, y: 1200 },
  },
  {
    id: "30",
    type: "male",
    data: {
      label: (
        <div className="card">
          Madhavan<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1350, y: 1200 },
  },

  //Children of balaraman & Manoranjitham
  {
    id: "31",
    type: "male",
    data: {
      label: (
        <div className="card">
          Janarthanam<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1700, y: 1200 },
  },
  {
    id: "32",
    type: "male",
    data: {
      label: (
        <div className="card">
          Sridar<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1950, y: 1200 },
  },
  {
    id: "33",
    type: "female",
    data: {
      label: (
        <div className="card">
          Vinoba<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 2200, y: 1200 },
  },
  {
    id: "34",
    type: "male",
    data: {
      label: (
        <div className="card">
          HemaKumar<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2450, y: 1200 },
  },
  {
    id: "35",
    type: "male",
    data: {
      label: (
        <div className="card">
          Bakthavatcolam<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2700, y: 1200 },
  },

  {
    id: "36",
    type: "female",
    data: {
      label: (
        <div className="card">
          Nirmala<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 2950, y: 1200 },
  },
  {
    id: "37",
    type: "female",
    data: {
      label: (
        <div className="card">
          Neela<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 3200, y: 1200 },
  },

  {
    id: "38",
    type: "female",
    data: {
      label: (
        <div className="card">
          Ravina<img src={girl1}></img>
          <p>Daughter</p>
        </div>
      ),
    },
    position: { x: 3200, y: 1200 },
  },

  //Children of Baburaj Babna

  {
    id: "39",
    type: "male",
    data: {
      label: (
        <div className="card">
          Selvadurai<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 1950, y: 600 },
  },
  {
    id: "40",
    type: "male",
    data: {
      label: (
        <div className="card">
          Nagaraj<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2200, y: 600 },
  },

  ///Child of Ashtalakshmo
  {
    id: "41",
    type: "male",
    data: {
      label: (
        <div className="card">
          Ramani<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2700, y: 600 },
  },

  //children of ramani
  {
    id: "42",
    type: "male",
    data: {
      label: (
        <div className="card">
          Sekhar<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2700, y: 900 },
  },
  {
    id: "43",
    type: "male",
    data: {
      label: (
        <div className="card">
          Bhaskar<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 2950, y: 900 },
  },
  {
    id: "44",
    type: "male",
    data: {
      label: (
        <div className="card">
          Raja<img src={boy1}></img>
          <p>Son</p>
        </div>
      ),
    },
    position: { x: 3200, y: 900 },
  },
];

const initialEdges = [
  { id: "e2-3", source: "2", target: "5", animated: true },
  { id: "e2-3", source: "3", target: "7", animated: true },
  { id: "e2-3", source: "3", target: "8", animated: true },
  { id: "e2-3", source: "3", target: "9", animated: true },
  { id: "e2-3", source: "3", target: "10", animated: true },
  { id: "e2-3", source: "3", target: "11", animated: true },
  { id: "e2-3", source: "3", target: "11", animated: true },
  { id: "e2-3", source: "6", target: "17", animated: false },
  { id: "e2-3", source: "6", target: "18", animated: true },
  { id: "e2-3", source: "6", target: "19", animated: true },
  { id: "e2-3", source: "6", target: "20", animated: true },
  { id: "e2-3", source: "6", target: "21", animated: true },
  { id: "e2-3", source: "12", target: "22", animated: true },
  { id: "e2-3", source: "12", target: "22", animated: true },
  { id: "e2-3", source: "12", target: "23", animated: true },
  { id: "e2-3", source: "12", target: "24", animated: true },
  { id: "e2-3", source: "12", target: "25", animated: true },
  { id: "e2-3", source: "12", target: "26", animated: true },
  { id: "e2-3", source: "12", target: "27", animated: true },
  { id: "e2-3", source: "12", target: "28", animated: true },
  { id: "e2-3", source: "13", target: "29", animated: true },
  { id: "e2-3", source: "13", target: "30", animated: true },
  { id: "e2-3", source: "14", target: "31", animated: true },
  { id: "e2-3", source: "14", target: "32", animated: true },
  { id: "e2-3", source: "14", target: "33", animated: true },
  { id: "e2-3", source: "14", target: "34", animated: true },
  { id: "e2-3", source: "14", target: "35", animated: true },
  { id: "e2-3", source: "14", target: "36", animated: true },
  { id: "e2-3", source: "14", target: "37", animated: true },
  { id: "e2-3", source: "14", target: "38", animated: true },
  { id: "e2-3", source: "10", target: "39", animated: true },
  { id: "e2-3", source: "10", target: "40", animated: true },
  { id: "e2-3", source: "11", target: "41", animated: true },
  { id: "e2-3", source: "41", target: "42", animated: true },
  { id: "e2-3", source: "41", target: "43", animated: true },
  { id: "e2-3", source: "41", target: "44", animated: true },
];

function FamilyTreeComp() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="family-tree-comp">
      <div className="sticky-nodes">
        <h1>Our Family</h1>
      </div>
      <div
        className="react-flow-container"
        style={{ height: 1500, width: 1500 }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          zoomOnDoubleClick='true'
          zoomOnPinch='true'
          zoomOnScroll='false'
          // panOnScroll='false'
          panOnDrag="false"
          preventScrolling="true"  
          style={{position:'static'}}
          fitView
        >
          <MiniMap zoomable pannable style={{position:'absolute'}}></MiniMap>
        </ReactFlow>
      </div>
    </div>
  );
}

export default FamilyTreeComp;
