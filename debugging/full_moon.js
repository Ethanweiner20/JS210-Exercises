// Full Moon

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

/*
The problem relates to the scope of `newSpecies`. Because `newSpecies` is
declared using `var`, and is not nested inside any function, its scope is
global. Therefore `newSpecies` is not redeclared on each loop iteration:
the declaration is redundant. `newSpecies` retains its same value from the
previous iteration. Therefore, regardless of whether it is reassigned on line
18, the output on line 22 will occur because `newSpecies` will evaluate as 
`true` in the line 21 conditional expression once it's received its first value.

We can solve this problem using `let`, which declares variables with block
scope. Another more nieve option would be to keep the `var` declaration but
reset `newSpecies` to `undefined`.
*/