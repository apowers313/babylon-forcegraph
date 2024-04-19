import {
    EngineInstrumentation,
    PerfCounter,
    SceneInstrumentation,
} from "@babylonjs/core";
import {Edge} from "./Edge";
import type {Graph} from "./Graph";
import {Node} from "./Node";

export class Stats {
    graph: Graph;
    sceneInstrumentation: SceneInstrumentation;
    babylonInstrumentation: EngineInstrumentation;
    graphStep = new PerfCounter();
    nodeUpdate = new PerfCounter();
    edgeUpdate = new PerfCounter();
    arrowCapUpdate = new PerfCounter();
    intersectCalc = new PerfCounter();
    loadTime = new PerfCounter();
    totalUpdates = 0;

    constructor(g: Graph) {
        this.graph = g;

        this.sceneInstrumentation = new SceneInstrumentation(g.scene);
        this.sceneInstrumentation.captureFrameTime = true;
        this.sceneInstrumentation.captureRenderTime = true;
        this.sceneInstrumentation.captureInterFrameTime = true;
        this.sceneInstrumentation.captureCameraRenderTime = true;
        this.sceneInstrumentation.captureActiveMeshesEvaluationTime = true;
        this.sceneInstrumentation.captureRenderTargetsRenderTime = true;

        this.babylonInstrumentation = new EngineInstrumentation(g.engine);
        this.babylonInstrumentation.captureGPUFrameTime = true;
        this.babylonInstrumentation.captureShaderCompilationTime = true;
    }

    toString(): string {
        let statsStr = "";
        function appendStat(name: string, stat: string | number, units: string = "") {
            statsStr += `${name}: ${stat}${units}\n`;
        }

        function statsSection(name: string) {
            statsStr += `\n${name}\n`;
            for (let i = 0; i < name.length; i++) {
                statsStr += "-";
            }
            statsStr += "\n";
        }

        function appendPerf(name: string, stat: PerfCounter, multiplier = 1) {
            statsStr += `${name} (min/avg/last sec/max [total]): `;
            statsStr += `${(stat.min * multiplier).toFixed(2)} / `;
            statsStr += `${(stat.average * multiplier).toFixed(2)} / `;
            statsStr += `${(stat.lastSecAverage * multiplier).toFixed(2)} / `;
            statsStr += `${(stat.max * multiplier).toFixed(2)} `;
            statsStr += `[${(stat.total * multiplier).toFixed(2)}] ms\n`;
        }

        statsSection("Graph");
        appendStat("Num Nodes", this.numNodes);
        appendStat("Num Edges", this.numEdges);
        appendStat("Total Updates", this.totalUpdates);
        appendStat("Mesh Cache Hits", this.meshCacheHits);
        appendStat("Mesh Cache Misses", this.meshCacheMisses);
        appendStat("Number of Node Updates", this.nodeUpdate.count);
        appendStat("Number of Edge Updates", this.edgeUpdate.count);
        appendStat("Number of ArrowCap Updates", this.arrowCapUpdate.count);

        statsSection("Graph Engine Performance");
        appendPerf("JSON Load Time", this.loadTime);
        appendPerf("Graph Physics Engine Time", this.graphStep);
        appendPerf("Node Update Time", this.nodeUpdate);
        appendPerf("Edge Update Time", this.edgeUpdate);
        appendPerf("Arrow Cap Update Time", this.arrowCapUpdate);
        appendPerf("Ray Intersect Calculation Time", this.intersectCalc);

        statsSection("BabylonJS Performance");
        appendStat("Draw Calls", this.sceneInstrumentation.drawCallsCounter.count);
        appendPerf("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter, 0.000001);
        appendPerf("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter);
        appendPerf("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter);
        appendPerf("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter);
        appendPerf("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter);
        appendPerf("Frame Time", this.sceneInstrumentation.frameTimeCounter);
        appendPerf("Render Time", this.sceneInstrumentation.renderTimeCounter);
        appendPerf("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter);
        appendPerf("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter);

        return statsStr;
    }

    step() {
        this.totalUpdates++;
        // console.log(`Iteration: ${this.totalUpdates}`);
        // console.log(this.toString());
    }

    reset() {
        this.totalUpdates = 0;
    }

    get numNodes(): number {
        return Node.list.size;
    }

    get numEdges(): number {
        return Edge.list.size;
    }

    get meshCacheHits(): number {
        return this.graph.meshCache.hits;
    }

    get meshCacheMisses(): number {
        return this.graph.meshCache.misses;
    }
}
