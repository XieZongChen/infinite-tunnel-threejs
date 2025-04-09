import * as THREE from 'three';

const geometry = new THREE.CylinderGeometry(30, 50, 1000);

const material = new THREE.MeshBasicMaterial({
  color: 'orange',
});

const tunnel = new THREE.Mesh(geometry, material);

export default tunnel;
