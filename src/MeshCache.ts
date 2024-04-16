import {InstancedMesh, Mesh} from "@babylonjs/core";

const meshCacheMap: Map<string, Mesh> = new Map();

type MeshCreatorFn = () => Mesh;

export class MeshCache {
    hits = 0;
    misses = 0;

    get(name: string, creator: MeshCreatorFn): InstancedMesh {
        let mesh = meshCacheMap.get(name);
        if (mesh) {
            this.hits++;
            return mesh.createInstance(name);
        }

        this.misses++;
        mesh = creator();
        mesh.isVisible = false;
        meshCacheMap.set(name, mesh);
        return mesh.createInstance(name);
    }

    reset(): void {
        this.hits = 0;
        this.misses = 0;
    }
}
