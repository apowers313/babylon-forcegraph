import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

interface GraphOpts {
    canvasElementId?: string;
    canvasElement?: HTMLCanvasElement;
}

export class Graph {
    canvas: HTMLCanvasElement;

    constructor(opts: GraphOpts = {}) {
        console.log("I made a graph!");
        if (!opts.canvasElement && !opts.canvasElementId) {
            throw new TypeError("Graph constructor requires either `canvasElement` or `canvasElementId`");
        }

        if (opts.canvasElementId) {
            let c = document.getElementById(opts.canvasElementId);
            if (!(c instanceof HTMLCanvasElement)) {
                throw new TypeError(`Specified DOM element '${opts.canvasElementId}' is not a HTMLCanvasElement`);
            }
            this.canvas = c;
        } else {
            this.canvas = opts.canvasElement;
        }
    }

    async init() {
        const engine = new Engine(this.canvas, true); // Generate the BABYLON 3D engine

        const scene = new Scene(engine);

        const b1 = MeshBuilder.CreateBox("box", {});
        b1.position.x += 2;

        const b2 = MeshBuilder.CreateBox("box", {});
        b2.position.x -= 2;

        const options = {
            points: [
                new Vector3(-2, 0, 0),
                new Vector3(2, 0, 0),
            ],
            updatable: true,
        };
        let ln = MeshBuilder.CreateLines("lines", options);
        // ln.x1 = 0;
        // ln.y1 = -2;
        // ln.x2 = 0;
        // ln.y2 = 2;

        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0));
        camera.attachControl(this.canvas, true);
        new HemisphericLight("light", new Vector3(1, 1, 0));

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            // mesh.position.x += 0.1
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    }
}