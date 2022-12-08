import React from 'react';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import SceneInit from './SceneInit.js';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';

export default function LittlestTokyo() {
    let mixer;
    const refContainer = useRef();
    useEffect(() => {
        const test = new SceneInit('canvas'); //'myThreeJsCanvas'
        test.initialize();
        test.animate();
        //container
        const {current: container} = refContainer
        if(container){
            const scW = container.clientWidth
            const scH = container.clientHeight
        }

        //load model
        const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );
        
        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader( dracoLoader );
        gltfLoader.load(process.env.PUBLIC_URL + '/scene.gltf', (gltfScene) => {
            const model = gltfScene.scene;
            model.position.set( 0, 1, 0 );
			model.scale.set( 0.01, 0.01, 0.01 );
            test.scene.add(gltfScene.scene);
            //mixer
            mixer = new THREE.AnimationMixer(gltfScene.scene);
            mixer.clipAction(gltfScene.animations[0]).play();

            animate();
        });

        window.onresize = function () {
            test.camera.aspect = window.innerWidth / window.innerHeight;
            test.camera.updateProjectionMatrix();
            test.renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            const delta = test.clock.getDelta();
            mixer.update(delta);
            test.controls.update();
            test.stats.update();
            test.renderer.render(test.scene, test.camera);
        }
    })
  return (
      // you implement the whole three.js thing here
    <div>
    </div>
  )
}
