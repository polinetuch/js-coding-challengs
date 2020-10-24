// in charge of two towns elements:
// 1. Parks
// 2. Streets

// Small towns with three parks and 4 streets
// All parks and streets have a name and build year

// Final report:
// 1. Tree density of each park in town (formula: number of trees/park area)
// 2. Average of each park town's park (formula: sum of all age/number of parks)
// 3. Name of park that has more than 1000 trees
// 4. Total and average length of town's street
// 5. Size classification of all streets:
    // tiny / small / normal / big / huge
    // if size is unknown, default normal

// All report data should be printed to console

// Hints: use ES6 features: classes, subclasses, template string,
// default parameters, maps, arrow function, destructuring, etc

class Towns {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends Towns {
    constructor(name, buildYear, area, numOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.numOfTrees = numOfTrees;
    };

    calcTreeDensity() {
       const treeDensity = this.numOfTrees / this.area;
       console.log(`${this.name} had tree density of ${treeDensity}`);
    };
};