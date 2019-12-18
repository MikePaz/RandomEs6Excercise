class Element{
    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear,area , numberOfTrees){
        super(name, buildYear)
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity(){
        const density = this.numberOfTrees/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per SQ/KM` );
    }
}

class Street extends Element{
    constructor(name, buildYear,streetLength ,size = 3){
        super(name, buildYear)
        this.streetLength = streetLength;
        this.size = size;
    }

classifyStreet() {
        const  classification = new Map();
        classification.set(1,'tiny')
        classification.set(2,'small')
        classification.set(3,'normal')
        classification.set(4,'big')
        classification.set(5,'huge')
        console.log(`${this.name}, which was build ${this.buildYear} is a ${classification.get(this.size)} street`);
    }
}



const allParks = [ new Park('Pausilipo',1900,8.2,215),
new Park('Athlitiko',1910,8.3,515),
new Park('XiliaDentra',1927,10.2,1500) ]

const allStreets = [new Street('Iezekil' , 1980 , 1 , 1),
new Street('Menandrou' , 1970 , 2 , 4),
new Street('Thivwn' , 1960 , 3 , 5),
new Street('Anapafseos',1990 ,4)]


function calculation(inputArray){
    const sum = inputArray.reduce((prev,current,index) => prev + current ,0);

    return [ sum , sum / inputArray.length]
}


function reportParks(parks){

    console.log('Parks Report')

    //Density
    parks.forEach(element => element.treeDensity() )

    //Avg Age
    const ages = parks.map(element => 2019 - element.buildYear)
    const[totalAge, averageAge] = calculation(ages)
    console.log(`Our ${parks.length} parks have an average of ${averageAge} years `)

    //Park with >1000 trees

    const i =allParks.map(element => element.numberOfTrees).findIndex(element => element >=1000);
    console.log(`${parks[i].name} has more than 1000 trees`)

 }
 
function reportStreets(streets){


    const [totalLength,averageLength] =
    calculation(streets.map(element => element.streetLength));
    console.log(`${streets.length} have a total length of ${totalLength} km with an average of ${averageLength} km`)

    streets.forEach(element => element.classifyStreet())

}

reportParks(allParks)
reportStreets(allStreets)

