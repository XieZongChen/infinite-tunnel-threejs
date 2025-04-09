import * as THREE from 'three';

/**
 * 创建模型为圆柱体
 * 参数为：上底面半径 30、下底面半径 50、高度 1000、圆周分段数 32、纵向分段数 32、是否封闭 true
 */
const geometry = new THREE.CylinderGeometry(30, 50, 1000, 32, 32, true);

// 创建纹理贴图
const loader = new THREE.TextureLoader();
const texture = loader.load('./storm.png');
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping; // 纹理在 Y 轴方向重复
texture.repeat.set(1, 2); // 纹理在 Y 轴方向重复两次

const material = new THREE.MeshBasicMaterial({
  map: texture, // 纹理贴图
  side: THREE.BackSide, // 材质反面可见
});

const tunnel = new THREE.Mesh(geometry, material);

export default tunnel;
