// JULIAN MATEO BOSA MOLANO, CODIGO:6000350, PARCIAL 2, Computacion Grafica, OCT 11/2021-2
// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();
var dim = x,y, z;

// MATERIALES DEL CUBO
function cubo(lado, color, material, alambrado) {
    var cubeGeometry = new THREE.BoxGeometry(dim);
    var cubeMaterial;
    switch (material) {
         // MATERIAL BASIC
        case 'Basic':
            cubeMaterial = new THREE.MeshBasicMaterial({
                color: color,
                wireframe: alambrado
            });
            break;

          // MATERIAL STANDARD
        case 'Standard':
            cubeMaterial = new THREE.MeshStandardMaterial({
                color: color,
                wireframe: alambrado
            });
            break;
          // MATERIAL PHYSICAL
        case 'Physical':
            cubeMaterial = new THREE.MeshPhysicalMaterial({
                color: color,
                wireframe: alambrado
            });
            break;
          // MATERIAL PHONG
        case 'Phong':
            cubeMaterial = new THREE.MeshPhongMaterial({
                color: color,
                wireframe: alambrado
            });
            break;
         // MATERIAL LAMBERT
        case 'Lambert':
            cubeMaterial = new THREE.MeshLambertMaterial({
                color: color,
                wireframe: alambrado
            });
            break;
    }

    

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // adicionar cubo
    scene.add(cube);
    return (cube);
}

function init() {

    dim=1;

    lado = 1; // VARIABLE LADO

    // SE CREA LA CAMARA, DONDE VA A ESTAR UBICADA create 
    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

    // crea un render y establece el tamaño
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(100);
    scene.add(axes);

    // CREACION DE LOS CUBOS
    Cubo = []; // Definir un array unidimensional
    // PRIMER CUBO
    Cubo.push(cubo(lado, 0xE2FE00, 'Standart', false));
    Cubo[0].position.set(0, 0, 0);
    scene.add(Cubo[0]);
    Cubo[0].translateZ(1.5); // movimiento  en el eje z
    Cubo[0].translateY(2.5); // movimiento  en el eje Y
    Cubo[0].translateX(1.0); // movimiento  en el eje X
    Cubo[0].scale.set(0.25, 0.25, 0.25);
    scene.add(Cubo[0]);

    // SEGUNDO CUBO
    Cubo.push(cubo(lado, 0xEA00FE, 'Standart', false));
    Cubo[1].position.set(0, 0, 0);
    scene.add(Cubo[1]);
    Cubo[1].translateZ(1.5); // movimiento e en el eje Z
    Cubo[1].translateY(2.0); // movimiento e en el eje Y
    Cubo[1].translateX(1.0); // movimiento e en el eje X
    Cubo[1].scale.set(0.5, 0.5, 0.5);
    scene.add(Cubo[1]);

    // TERCER CUBO

    Cubo.push(cubo(lado, 0x00FEE1, 'Standart', false));
    Cubo[2].position.set(0, 0, 0);
    scene.add(Cubo[2]);
    Cubo[2].translateZ(1.5); // movimiento  en el eje Z
    Cubo[2].translateY(1.0); // movimiento  en el eje Y
    Cubo[2].translateX(1.0); // movimiento  en el eje X

    scene.add(Cubo[2]); // se añade el cubo a la escena 

   

    // SE AGREGA LA POSICION DE LA CAMARA 
    camera.position.set(15, 15, 30);
    camera.lookAt(scene.position);

    // SE HACE LA SALIDA DEL RENDER PARA QUE FUNCIONE
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // EL RENDER DE LA ESCENA, SE RENDERIZA LA ESCENA CON CAMARA
    renderer.render(scene, camera);
}