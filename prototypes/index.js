const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {

  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    let carArr = [];
    kitties.map(cat => {
        if (cat.color === 'orange') {
          carArr.push(cat.name)
        }
    })
    return carArr
  },

  sortByAge() {
    // Sort the kitties by their age
    return kitties.sort((a, b) => {
      return b.age - a.age;
    })
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    return kitties.map(cat => {
      return {
        name: cat.name,
        age: (cat.age + 2),
        color: cat.color
      }
    }).sort((a, b) => {
      return b.age - a.age;
    })
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {

  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
let memArr = clubs.reduce((acc, member) => {
  acc = acc.concat(member.members)
 return acc
}, [])
let objClub = memArr.reduce((acc, name) => {
    let clubArr = [];
    clubs.forEach(club => {
      if (club.members.includes(name)) {
        clubArr.push(club.club)
      }
    })
  if (!acc[name]) {
    acc[name] = clubArr;
  }
  return acc
}, {})
return objClub;
}

};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
 
    return mods.map(mod => {
        return {
            mod: mod.mod,
            studentsPerInstructor: (mod.students / mod.instructors)
        }
    })

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    return cakes.map(cake => {
        return {
            flavor: cake.cakeFlavor,
            inStock: cake.inStock
        }
    })

  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
 let instockCake = cakes.filter(cake => {
    if (cake.inStock > 0) {
        return cake;
    }
 })
 return instockCake;
  },
  
  totalInventory() {
    let totalCake = cakes.reduce((acc, stock) => {
        acc += stock.inStock
        return acc
    }, 0)
    return totalCake;
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.

  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // let foodList = cakes.reduce((acc, cake) => {
    //     cake.toppings.map(val => { //iterates through second array
    //     if (!acc.includes(val)) { //check is acc/arr1 includes arr2 item
    //     acc = acc.concat(val)
    //       }
    //     })
    //     return acc
    // }, [])
    // let fullList = cakes.reduce((acc, stock) => {
    //   acc = acc.concat(stock.toppings)
    //   return acc
    // }, [])
    // return foodList.reduce((acc, cake) => {
    //   let stockList = [];
    //   let map1 = fullList.map(food => {
    //     if (food === cake) {
    //       stockList.push(cake)
    //     }
    //   })
    //   acc[cake] = stockList.length
    // return acc
    // }, {})
  }


};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------





// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    let feProgram = classrooms.filter(room => {
        if (room.program === 'FE') {
            return room
        }
    })
  return feProgram
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    return classrooms.reduce((acc, room) => {
      if (room.program === 'FE') {
        acc.feCapacity += room.capacity;
      } else {
        acc.beCapacity += room.capacity
      }
      return acc
    }, {feCapacity: 0, beCapacity: 0})

  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity 
    return classrooms.sort((a, b) => a.capacity - b.capacity)    
  }

};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {

  getBreweryBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    return breweries.map(brew => {
      return {
        name: brew.name,
        beerCount: brew.beers.length
      }
    })

  },

  // getBreweryBeerCount() {
  //   // Return an array of objects where each object has the name of a brewery
  //   // and the count of the beers that brewery has e.g.
  //   return breweries.map(brewski => {
  //     return {
  //       name: brewski.name,
  //       beerCount: brewski.beers.length
  //     }
  //   })

  // }

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.

    //the first thing: put all the beers in one array

    //once I have that, I'm going to sort it 

    //once it's sorted, then I'm going to return the highest abv
    return breweries.reduce((acc, brew) => {
      acc = acc.concat(brew.beers)
      return acc
    }, []).sort((a, b) => b.abv - a.abv)[0]

console.log(x)

    //I am going to make a variable that's always that highest abv beer

    //I am going to iterate through each brewery and find their beers
    //got each brewery -> but my beer is less than instead of equal to

    // for each beer, if it is higher than the current beer, reassign the variable
}

}






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    let y 
    let x = instructors.map(instructor => {
      let modCount = cohorts.filter(cohort => {
        if (cohort.module === instructor.module) {
          y = cohort.studentCount
        }
      })
      return {
        name: instructor.name,
        studentCount: y
      }

    })
return x

  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    return cohorts.reduce((acc, cohort) => {
      let findMod = instructors.filter(element => element.module === cohort.module) 
      if (!acc[cohort.cohort]) {
        acc[`cohort${cohort.cohort}`] = (cohort.studentCount / findMod.length)
      }
      return acc
    }, {})

  },

  modulesPerTeacher() {
  return instructors.reduce((acc, instructor) => {
      let mods = []
      instructor.teaches.forEach(lesson => {
        cohorts.filter(cohort => {
            if(cohort.curriculum.includes(lesson) && !mods.includes(cohort.module)) {
            mods.push(cohort.module)
          }
        })
      })
      acc[instructor.name] = mods.sort()
      return acc;
    }, {})
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    let endGame = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.map(tech => {
      let newArr = []
        instructors.filter(instructor => {
          if (instructor.teaches.includes(tech)) {
            newArr.push(instructor.name)
          }
        })
      if (!acc[tech]) {
        acc[tech] = []
      }
      acc[tech] = newArr
      })
      return acc
    }, {})
    return endGame
  }

};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
  bossLoyalty() {
    let bossNames = Object.keys(bosses)
    let bossYo = bossNames.map(boss => {
      let sidekickArr = []
      let sideKicksHq = sidekicks.filter(sidekick => sidekick.boss === bosses[boss].name).reduce((acc, loyalty) => {
        acc += loyalty.loyaltyToBoss
        return acc
      }, 0)
      return {
        bossName: bosses[boss].name,
        sidekickLoyalty: sideKicksHq
      }
    })
    return bossYo
  }

};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.

    return stars.filter(star => star.constellation === 'Orion')

  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {

  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    return characters.reduce((acc, character) => {
      acc = acc.concat(character.weapons)
      return acc
    }, []).reduce((acc, name) => {
      acc += weapons[name].damage
      return acc
    }, 0)

  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    return characters.map(character => {
      return {
        [character.name]: (character.weapons.reduce((acc, weapon) => {
          acc.damage += weapons[weapon].damage
          acc.range += weapons[weapon].range
        return acc
      }, {damage: 0, range: 0}))
     }
    })
  },



};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    
    return movies.reduce((acc, movie) => {
      acc[movie.title] = (movie.dinos.length - 2)
      return acc
    }, {})

  },

  averageAgePerMovie() {
     // Return an object where each key is a movie director's name and each value is
     //    an object whose key is a movie's title and whose value is the average age
     //    of the cast on the release year of that movie.
     //  e.g.:
     let x = movies.reduce((acc, movie) => {
      if (!acc[movie.name]) {
        acc[movie.name] = (movie.cast.reduce((acc, cast) => {

        }));
      }
     }, {})

console.log(x)

  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};