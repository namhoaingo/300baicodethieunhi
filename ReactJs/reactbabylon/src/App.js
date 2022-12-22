import logo from './logo.svg';
import * as BABYLON from 'babylonjs';
import './App.css';
import {
  useState, useRef, useEffect
} from 'react';

function App() {
  // set state
  const product = {
    url: "https://raw.githubusercontent.com/namhoaingo/grandnode2Forked/master/vue-balylon/b101/public/",
    objectName: "helmet.babylon",
    meshes: [
      {
        id: "mu",
        cameraSetting: {
          alpha: 3,
          beta: 1,
          radius: 55
        },
        availableMaterials: [
          {
            name: "sonnhung1",
            url: "https://raw.githubusercontent.com/namhoaingo/grandnode2Forked/master/vue-balylon/b101/public/sonnhung.jpg",
            price: 15,
            cost: 10
          },
          {
            name: "leather",
            url: "https://raw.githubusercontent.com/namhoaingo/grandnode2Forked/master/vue-balylon/b101/public/leather.jpg",
            price: 25,
            cost: 20
          },
        ]
      },
      {
        id: "lotngoai",
        cameraSetting: {
          alpha: 2.51,
          beta: 1.23,
          radius: 55
        },
        availableMaterials: []
      },
      {
        id: "lottrong",
        cameraSetting: {
          alpha: 2.51,
          beta: 1.23,
          radius: 55
        },
        availableMaterials: []
      },
      {
        id: "quai",
        cameraSetting: {
          alpha: 2.51,
          beta: 1.23,
          radius: 55
        },
        availableMaterials: []
      },

      {
        id: "quainum",
        cameraSetting: {
          alpha: 2.51,
          beta: 1.23,
          radius: 55
        },
        availableMaterials: []
      },

      {
        id: "quaisau",
        cameraSetting: {
          alpha: 2.51,
          beta: 1.23,
          radius: 55
        },
        availableMaterials: []
      },
    ],
  };

  const [material, setMaterial] = useState(0);
  
  const handleChangeMaterial = () =>{
    setMaterial(prev => prev + 1);
  }

  // useRef return the ref to canvas component
  const canvasContainer = useRef(null);
  console.log("render");

  // Babylon declaration 
  let canvas = useRef(canvasContainer.current);
  let engine = useRef(() => new BABYLON.Engine((canvas.current), true));
  let scene = useRef(() => new BABYLON.Scene(engine.current));
  // End Babylon declaration
  useEffect(() => {
    console.log(engine.current)
    // Create a camera and add it to the scene
    const camera = new BABYLON.ArcRotateCamera(
      'camera1',
      Math.PI / 2,
      Math.PI / 2,
      2,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);

    // Add objects to the scene, set up lights, etc.

    engine.current.runRenderLoop(() => {
      scene.current.render();
    });

    const light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 40, 0), scene.current);

    //background
    scene.current.autoClear = false;
    // load model

    const loader = new BABYLON.AssetsManager(scene.current);
    const meshes = product.meshes.map(mesh => mesh.id);
    const loadHelmetModel = loader.addMeshTask("loadTask"
        , meshes
        , product.url
        , "helmet.babylon");

    loadHelmetModel.onSuccess = (t) => {
                    engine.runRenderLoop(() => {
                        scene.current.render();
                    })
                }

    loader.load();

    return () => {
      engine.current.dispose();
    };
  }, []);

  useEffect(() => {
    console.log("update material");
    console.log(scene.current);
  }, [material])

  return ( 
  <>
    <canvas style={{width: '100%'}} ref={canvasContainer}></canvas>
    <button onClick={handleChangeMaterial}>Change material</button>
  </>
  );
}

export default App;