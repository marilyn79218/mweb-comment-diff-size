const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `new-sizes` input defined in action metadata file
  const newSizes = core.getInput('new-sizes');
  console.log(`Hello ${newSizes}`);
} catch (error) {
  core.setFailed(error.message);
}
