import * as THREE from "three";
import WebGL from "./WebGL";

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.body.appendChild( warning );

}