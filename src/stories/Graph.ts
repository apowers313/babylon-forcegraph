import {Graph} from "../../index.ts";

export interface GraphProps {
    // nodeColor?: string;
    jsonData?: string;
    onGraphSettled?: () => void;
    onNodeAddBefore?: () => void;
    onEdgeAddBefore?: () => void;
  }

export const createGraph = ({
    // nodeColor = "grey",
    jsonData = "./examples/data/miserables.json",
    onGraphSettled,
    onNodeAddBefore,
    onEdgeAddBefore,
}: GraphProps) => {
    console.log("creating new graph", jsonData);
    const e = document.createElement("div");

    // body styling
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // container styling
    e.style.width = "100%";
    e.style.height = "100%";
    e.style.touchAction = "none";

    const g = new Graph(e);

    if (onNodeAddBefore) {
        g.addListener("node-add-before", onNodeAddBefore);
    }

    if (onEdgeAddBefore) {
        g.addListener("edge-add-before", onEdgeAddBefore);
    }

    if (onGraphSettled) {
        g.addListener("graph-settled", onGraphSettled);
    }

    g.addNode(0);
    g.addNode(1);
    g.addNode(2);
    g.addNode(3);
    g.addNode(4);
    g.addNode(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(2, 3);
    g.addEdge(3, 0);
    g.addEdge(3, 4);
    g.addEdge(3, 5);

    // await g.loadJsonData(jsonData, {
    //     // nodeListProp: "nodes",
    //     edgeListProp: "links",
    //     // nodeIdProp: "id",
    //     edgeSrcIdProp: "source",
    //     edgeDstIdProp: "target",
    // });

    g.init()
        .then(() => {
            console.log("Success");
            g.engine.resize(true);
        })
        .catch((e) => {
            console.log("ERROR:", e);
        });

    return e;
};
