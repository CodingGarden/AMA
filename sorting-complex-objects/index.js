const data = {
  age: {
    classification: 'negative',
    weight: 1900,
  },
  industry_risk: {
    classification: 'positive',
    weight: 2010,
  },
  address: {
    classification: 'neutral',
    weight: 3700,
  },
  change_in_management: {
    classification: 'neutral',
    weight: 3600,
  },
  change_in_employees: {
    classification: 'positive',
    weight: 2500,
  },
  names: {
    classification: 'negative',
    weight: 1450,
  },
  intangible_assets: {
    classification: 'negative',
    weight: 1950,
  },
  type_of_auditor_assistance: {
    classification: 'neutral',
    weight: 1255,
  },
};

const valueMap = {
  negative: 0,
  positive: 1,
  neutral: 2,
};

const sortedData = Object.entries(data).sort(([aKey, aValue], [bKey, bValue]) => {
  if (aValue.classification === bValue.classification) {
    if (aKey !== bKey) {
      return bValue.weight - aValue.weight;
    }
    // sort by key instead...
  }
  return valueMap[aValue.classification] - valueMap[bValue.classification];
  // if (aValue.classification === 'negative'
  //   && bValue.classification !== 'negative') {
  //   return -1;
  // }
  // if (aValue.classification === 'positive'
  //   && bValue.classification === 'neutral') {
  //   return -1;
  // }
  // if (bValue.classification === 'positive'
  //   && aValue.classification === 'neutral') {
  //   return 1;
  // }

  // return 0;
  // if a should come after b in sorted order
    // return 1
  // if a should come before b in sorted order
    // return -1
  // if a and b are the same
    // return 0
});

console.log(Object.fromEntries(sortedData));