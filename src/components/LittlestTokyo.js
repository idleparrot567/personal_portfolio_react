import React from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import SceneInit from '/Users/lixiaodan/Desktop/personal_portfolio_react/src/lib/SceneInit.js';

export default function LittlestTokyo() {
    let mixer;
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
        //load model

        const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );
        
        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader( dracoLoader );
        gltfLoader.load('/scene.gltf', (gltfScene) => {
            const model = gltfScene.scene;
            model.position.set( 0, 1, 0 );
			model.scale.set( 0.01, 0.01, 0.01 );
            test.scene.add(gltfScene.scene);
        });
    })
  return (
      // you implement the whole three.js thing here
    <div>
    </div>
  )
}
