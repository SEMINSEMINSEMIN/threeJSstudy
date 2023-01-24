import * as THREE from "three";

// WebGLRenderer는 3D를 캔버스에 렌더링하기 위해 WebGL을 사용한다.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

export default renderer;