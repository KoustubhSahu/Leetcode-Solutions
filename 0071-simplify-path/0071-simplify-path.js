/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    complexPath = path.split("/").filter(Boolean)
    simplePath = [];
    complexPath.forEach((p,i) => {
        if (p == ".") return

        else if (p == "..") simplePath.pop();

        else simplePath.push(p)

    });

    return "/"+simplePath.join("/");
}
