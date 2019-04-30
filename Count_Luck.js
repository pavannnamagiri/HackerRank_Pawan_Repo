function dfs( start, nodes ) {
    var listToExplore = [ start ];

    nodes[ start ].visited = true;

    while ( listToExplore.length > 0 ) {
        var nodeIndex = listToExplore.shift();
        nodes[ nodeIndex ].links.forEach( function( childIndex ) {
            if ( !nodes[ childIndex ].visited ) {
                nodes[ childIndex ].visited = true;
                nodes[ childIndex ].path = nodes[ nodeIndex ].path.concat( [ nodeIndex ] );
                listToExplore.push( childIndex );
            }
        } );
    }
};


function buildGraph( matrix, H, W ){
    var graph = {
        nodes: [],
        start: null,
        exit: null
    };
    for( var y = 0; y < H; y++ ){
        for( var x = 0; x < W; x++ ){
            var node = {
                links: [],
                visited: false,
                path: []
            };
            
            if( matrix[ y - 1] && matrix[ y - 1 ][ x ] !== "X" ) node.links.push( ( y - 1 ) * W + x )
            if( matrix[ y ][ x - 1] && matrix[ y ][ x - 1] !== "X" ) node.links.push( y * W + x - 1 )
            if( matrix[ y + 1] && matrix[ y + 1 ][ x ] !== "X" ) node.links.push( ( y + 1 ) * W + x )
            if( matrix[ y ][ x + 1] && matrix[ y ][ x + 1] !== "X" ) node.links.push( y * W + x + 1 )
            
            var index = graph.nodes.push( node ) - 1;
            
            if( matrix[ y ][ x ] === "M" ) graph.start = index;
            if( matrix[ y ][ x ] === "*" ) graph.exit = index;
        }
    }
    return graph;
}



function handleCase( H, W, matrix, K  ){
    var graph = buildGraph( matrix, H, W );
    dfs( graph.start, graph.nodes );
    var result = graph.nodes[ graph.exit ].path.filter( function( i ){
        return i !== graph.start && graph.nodes[ i ].links.length > 2;
    }).length;
    if( graph.nodes[ graph.start ].links.length > 1 ) result += 1;
    return result === K ? "Impressed" : "Oops!";
}



function processData(input) {
   input = input.split( '\n' );
    var n = input.shift(),
        out = [];
    
    for( var i = 0; i < n; i++ ){
        var size = input.shift().split(' '),
            H = size[ 0 ],
            W = size[ 1 ],
            matrix = [];
        for( var h = 0; h < H; h++ ) matrix.push( input.shift().split('') );
        var K = parseInt( input.shift() );
        out.push( handleCase( H, W, matrix, K ) );
    }
    
    console.log( out.join('\n') );
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
