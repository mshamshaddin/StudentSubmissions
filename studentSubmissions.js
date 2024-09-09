// 1. Declare a variable named submissions that is initialized to an array with the following objects
const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },

  {
    name: "Joe",
    score: 77,
    passed: true,
  },

  {
    name: "Jack",
    score: 59,
    passed: false,
  },

  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

// 2. Declare a function named addSubmission
function addSubmission(array, newName, newScore) {
  const newSubmission = {
    name: newName,
    score: newScore,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
}

function deleteSubmissionByIndex(array, index) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }
}

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submission) => submission.name === name);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.log("Warning - Requested name is MIA!");
  }
}

function editSubmission(array, index, score) {
  if (index >= 0 && index < array.length) {
    array[index].score = score;
  }
  array[index].passed = score >= 60 ? true : false;
}

// function findSubmissionByName(array, name) {
//     return array.find(submission => submission.name === name);
// }

const findSubmissionByName = (array, name) =>
  array.find((submission) => submission.name === name);

const findLowestScore = (array) => {
  return array.reduce(
    (lowest, current) => (current.score < lowest.score ? current : lowest),
    array[0]
  );
};

function findAvgScore(array) {
  let totalScore = 0;

  for (i = 1; i < array.length; i++) {
    totalScore = array[i].score + totalScore;
    console.log("total score is: " + totalScore);
  }

  const avgQuizScore = totalScore / array.length;

  return avgQuizScore;
}

const filterPassing = (array) => {
  return array.filter((submission) => submission.passed);
};

const filter90AndAbove = (array) => {
  return array.filter((array) => array.score >= 90);
};

// call to all functions

addSubmission(submissions, "Mike", 23);
addSubmission(submissions, "Mikey", 97);
addSubmission(submissions, "Howardson", 50);
addSubmission(submissions, "Micard", 94);
addSubmission(submissions, "Carl", 70);

const avgScore = findAvgScore(submissions);
console.log("Average score is " + avgScore);

console.log(submissions);
deleteSubmissionByIndex(submissions, 1);
deleteSubmissionByName(submissions, "Mikee");
console.log(submissions);
const result = findSubmissionByName(submissions, "Jack");
console.log(result);

const lowScoreResult = findLowestScore(submissions);
console.log(
  `${lowScoreResult.name} with a score of ${lowScoreResult.score} is the lowest score.`
);

const passingSubmissions = filterPassing(submissions);

passingSubmissions.forEach((submission) => {
  console.log(
    `Passing Submissions: Name: ${submission.name}, Score: ${submission.score}`
  );
});

const kevinsFavorites = filter90AndAbove(submissions);
console.log("Kevin and Ryan's Favorite top scorers are:");
kevinsFavorites.forEach((submission) => {
  console.log(`   Name: ${submission.name}, Score: ${submission.score}`);
});
