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

// 用 alphaMap 可以有效的模糊纹理边界，让纹理重复拼接的边界更自然
const material = new THREE.MeshBasicMaterial({
  transparent: true, // 开启透明度
  alphaMap: texture, // alpha 贴图是一张灰度纹理，用于控制整个表面的不透明度
  side: THREE.BackSide, // 材质反面可见
});

const tunnel = new THREE.Mesh(geometry, material);

export default tunnel;
