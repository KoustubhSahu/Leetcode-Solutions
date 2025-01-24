/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let visited = new Set()
    prerequisites.forEach((prerequisite) => {
        map[prerequisite[0]] = map[prerequisite[0]] || [];
        map[prerequisite[0]].push(prerequisite[1]);
    });
    
    function dfs(curr) {
        if (visited.has(curr)) return false;
        if (!(map[curr])) return true;

        visited.add(curr);
        for (let j=0; j<map[curr].length; j++) {
            if (!dfs(map[curr][j])) return false;
        }
        visited.delete(curr);
        delete map[curr];
        return true;
    }

    for (let i=0; i<prerequisites.length; i++) {
        if (!dfs(prerequisites[i][0])) return false;
    }

    return true;

};

