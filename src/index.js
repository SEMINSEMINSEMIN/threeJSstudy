import * as THREE from "three";
import scene from "./Scene";
import camera from "./Camera";
import renderer from "./Renderer";
import WebGL from "./WebGL";
import makeInstance from "./MakeInstance";
import light from "./Light";

if ( WebGL.isWebGLAvailable() ) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    scene.background = new THREE.Color(0x004fff);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 2;
    light.position.set(-1, 2, 4); // (-1, 2, 4) => (0, 0, 0)
    scene.add(light);

    const cubes = [
        makeInstance(geometry, 0x44aa88,  0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844,  2),
      ];
    
    function animate(time) {
        time *= 0.001;

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .5;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.body.appendChild( warning );

}