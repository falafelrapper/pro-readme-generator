
function renderLicenseBadge(license) {
  return `![Static Badge] https://img.shields.io/badge/${license}-8A2BE2`;
}


function renderLicenseLink(license) {

}

function renderLicenseSection(license) {

}


function generateMarkdown(data) {
  return `# ${data.title}
  licensebadge ${renderLicenseBadge(data.license)}


  ## Table of Contents
  
  * Description
  * Installation Instructions
  * Usage Information
  * Test Instructions
  * Credits
  
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
