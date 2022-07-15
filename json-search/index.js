const jobPostings = require('./data.json');

// search actual properties...
function getJobPostingsWithRequirementMatch(...matches) {
  // Find all jobs that match...
  // return jobPostings.filter((jobPosting) => {
  //   const employmentRequirements = jobPosting.details.find((detail) => {
  //     return detail.section === 'Employment requirements';
  //   });
  //   const matchedDetails = employmentRequirements.details.filter((detail) => {
  //     return detail.match(new RegExp(match, 'gi'));
  //   });
  //   return matchedDetails.length > 0;
  // });
  return [...jobPostings.reduce((allExamples, jobPosting) => {
    // ALTERNATE SOLUTION: stringify each object and regex it
    // JSON.stringify(jobPosting).match(someRegexp)
    const employmentRequirements = jobPosting.details.find((detail) => {
      return detail.section === 'Employment requirements';
    });
    const allDetails = employmentRequirements.details.join(' ');
    const isMatch = matches.every((match) => allDetails.match(new RegExp(match, 'gi')));
    if (isMatch) {
      const examples = jobPosting.details.find((detail) => {
        return detail.section === 'Illustrative example(s)';
      });
      examples.details.forEach((example) => allExamples.add(example));
    }
    return allExamples;
  }, new Set())];
}

const matchedPostings = getJobPostingsWithRequirementMatch('degree', 'computer science');
console.log(matchedPostings);