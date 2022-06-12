// Space Design

// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

// Assigns these values to keys that are objects coerced to strings
team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`);
console.log(`Scrum master: ${company.team.scrumMaster}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

/*
The problem lies in the fact that Lines 22-24 actually all reassign the key:
'[object Object]'. Bracket notation evaluates the given expression and coerces
it to a string. Because `ceo`, `scrumMaster`, and `developer` all reference
objects, each of them is coerced to the string '[object Object]'. Therefore,
the key '[object Object]' is reassigned each time, with the final reassignment
being to `undefined`. On lines 33 and 34, the same key is accessed through
bracket notation, whose value is `undefined`.

To fix this, we should not use the objects to index into `team`. Instead,
we can simply use string keys. Dot notation will fix this.
*/