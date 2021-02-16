(function () {
  let scene, camera, renderer;
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(0, 400, 1000);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector("#canvas"),
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    let urls = [
      "./assets/images/fields/posx.jpg",
      "./assets/images/fields/negx.jpg",
      "./assets/images/fields/posy.jpg",
      "./assets/images/fields/negy.jpg",
      "./assets/images/fields/posz.jpg",
      "./assets/images/fields/negz.jpg",
    ];
    let loader = new THREE.CubeTextureLoader();
    scene.background = loader.load(urls);

    sphereCamera = new THREE.CubeCamera(1, 1000, 500);
    sphereCamera.position.set(0, 100, 0);
    scene.add(sphereCamera);

    let sphereMaterial = new THREE.MeshBasicMaterial({
      envMap: sphereCamera.renderTarget,
    });
    let sphereGeo = new THREE.SphereGeometry(200, 50, 50);
    let sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
    sphere.position.set(0, 100, 0);
    scene.add(sphere);

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    render();
  }
  function render() {
    renderer.render(scene, camera);
    sphereCamera.updateCubeMap(renderer, scene);
    requestAnimationFrame(render);
  }
  init();
})();
