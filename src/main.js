import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import mesh from './mesh.js';

const scene = new THREE.Scene();

scene.add(mesh);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(0.9, -520, 6.5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const clock = new THREE.Clock(); // 创建时钟对象
function render() {
  // 获取每次渲染的时间间隔
  const delta = clock.getDelta();

  // 修改纹理贴图的偏移量，实现 uv 动画
  mesh.material.map.offset.y += delta * 0.5; // 纹理贴图在 Y 轴方向偏移
  mesh.rotation.y += delta * 0.5; // 圆柱体绕 Y 轴旋转

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener('change', () => {
//   console.log(camera.position);
// });
