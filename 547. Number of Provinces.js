/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    /*
    ds: graphs

    n x n matrix
    if isConnected[i][j] = 1 (true)
        they are connnected (provinces)


    1.) Build the graph
            get num of nodes
            init a map
                key: node
                value: arr of nodes neighbors (nodes it connected to)
        
        iter thru matrix
            if isConnected[i][j] = 1 (true) (if provences)
                graph.get(i).push(j)
                graph.get(j).push(i)


    2.) Track visited nodes
            seen = arr of unseen nodes


    3.) Find # of providences
        iter thru each node
            if node wasnt seen
            count++
                mark as true
                and check out its neighbors (using DFS)

    4.) Create the DFS
            iter thru nodes in graph
                if node hasent been seen
                    mark as true
                    run dfs on its neighbots

    return count++
    */

    //Create DFS to mark nodes neighbors
    let dfs = node => {
        for (const neighbors of graph.get(node)) { // getting neghbors of currNode
            if (!seen[neighbors]) {
                seen[neighbors] = true
                dfs(neighbors)
            }
        }
    }


    //Buidling Graph
    let totalNodes = isConnected.length
    let graph = new Map()
    for (let i = 0; i < totalNodes; i++) {
        graph.set(i, [])
    }

    // Populating the graph w/ nodes and its neighbors
    for (let i = 0; i < totalNodes; i++) {
        for (let j = i + 1; j < totalNodes; j++) {
            if (isConnected[i][j] === 1) {
                graph.get(i).push(j)
                graph.get(j).push(i)
            }
        }
    }

    let seen = new Array(totalNodes).fill(false)
    let count = 0

    //Find # of Provinces
    for (let i = 0; i < totalNodes; i++) {
        if (!seen[i]) {
            count++
            seen[i] = true //mark curr node as visited
            dfs(i) //run dfs to make its neighbors too
        }
    }

    return count

    /*
    time comp: O(n^2)
    space comp: O(n)
    */
}