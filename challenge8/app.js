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

class Street extends Towns {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    };

    classifyStreet() {
        const classfication = new Map();
        classfication.set(1, 'tiny');
        classfication.set(2, 'small');
        classfication.set(3, 'normal');
        classfication.set(4, 'big');
        classfication.set(5, 'huge');

        console.log(`${this.name} was built in ${this.buildYear} 
        is ${classfication.get(this.size)} street.`);
    }
};

const allParks = [
    new Park('Jells Park', 1990, 0.2, 756),
    new Park('Boolean Park', 1991, 2.2, 2494),
    new Park('Lucky Park', 1992, 3.4, 543)
];

const allStreets = [
    new Street('Beswick Street', 2301, 9.4, 3),
    new Street('Bertha Street', 1987, 9.4, 4),
    new Street('Durham Place', 1934, 8.6, 2),
    new Street('Loller Street', 1075, 6.4, 5),
];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
};

function reportParks(p) {
    console.log('------Parks Report------');

    // Tree Density
    p.forEach(el => el.calcTreeDensity());

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`All ${p.length} parks have an average of ${avgAge} years.`)

    // Parks that have more than 100 trees
    const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`)
};

function reportStreets(s) {
    console.log('------Streets Report------');
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`All ${s.length} streets have total length of ${totalLength} km
        with average of ${avgLength} km.`);

    s.forEach(el => el.classifyStreet());
};

reportParks(allParks);
reportStreets(allStreets);