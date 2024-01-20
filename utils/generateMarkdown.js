
function renderLicenseBadge(license) {
  return `![Static Badge] https://img.shields.io/badge/${license}-8A2BE2`;
}


function renderLicenseLink(license) {

}

function renderLicenseSection(license) {

}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage Information](#usage-information)
  * [Test Instructions](#test-instructions)
  * [Credits](#credits)
  
  ## Description
  
  ${data.description}
  
  ## Installation Instructions
  
  ${data.install}
  
  ## Usage Information
  
  ${data.usage}
  
  ## Test Instructions
  
  ${data.test}
  
  ## Credits
  
  ${data.credits}

`;
}

module.exports = generateMarkdown;
