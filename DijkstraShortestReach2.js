
function Graph() {
    var nodes = [];
    return {
        addNode(n) {
            if (!nodes.find((x) => x.name == n)) {
                nodes.push({
                    name: n,
                    edges: []
                });

            }

        },
        addEdge(source, dest, weight) {
            var s = nodes.find((x) => x.name == source);
            var d = nodes.find((x) => x.name == dest);

            s.edges.push({
                dest: d,
                weight
            });
        },
        getNode(name) {
            return nodes.find((x) => x.name == name);
        },
        getNodes() {
            return nodes;
        }
    }
}

function shortestPath(graph, startNode) {
    var nodeMap = new Map();
    var nodesToCheck = [{ currNode: startNode, sum: 0 }];
    for (var i = 0; i < nodesToCheck.length; i++) {
        var currNode = nodesToCheck[i].currNode;
        var sum = nodesToCheck[i].sum;

        for (edge of currNode.edges) {
            var w = edge.weight + sum;
            if (!nodeMap[edge.dest.name]) {
                nodeMap[edge.dest.name] = w;
                nodesToCheck.push({ currNode: edge.dest, sum: w });
            } else if (w < nodeMap[edge.dest.name]) {
                nodeMap[edge.dest.name] = w;
                nodesToCheck.push({ currNode: edge.dest, sum: w });
            }

        }
    }
    var result = '';
    for (n of graph.getNodes().filter((x) => x.name != startNode.name)) {
        if (!nodeMap[n.name]) {
            result += '-1 ';
        } else {
            result += nodeMap[n.name] + ' ';
        }
    }
    console.log(result.trim());
}

function processData(input) {
    var lines = input.split('\n');
    var graphsNum = parseInt(lines[0]);
    var index = 1;

    for (var i = 0; i < graphsNum; i++) {
        var graph = new Graph();
        var nodesNum = parseInt(lines[index].split(' ')[0]);
        var edgesNum = parseInt(lines[index].split(' ')[1]);

        for (var j = 1; j <= nodesNum; j++) {
            graph.addNode(j);
        }

        index++;
        var upTo = index + edgesNum;
        while (index < upTo) {
            var source = parseInt(lines[index].split(' ')[0]);
            var dest = parseInt(lines[index].split(' ')[1]);
            var weight = parseInt(lines[index].split(' ')[2]);
            graph.addEdge(source, dest, weight);
            graph.addEdge(dest, source, weight);
            index++;
        }
        var startNode = graph.getNode(parseInt(lines[index]));
        shortestPath(graph, startNode);
        index++;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
