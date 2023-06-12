// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-pink.svg)`;
  } else{
   return ` `;
  }
}

// TODO: Create a function that returns the license link
// If license is not none, return link to license
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `- [License](#license)`
  }else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If license is not none, return license header
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `## License \n
    ${license}`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
// this generates the markdown file with the users input
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
------
  ${data.description}
  
  ## Table of Contents
------
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [How to Contribute](#contributing)
- [How to Test](#testing)
- [Questions](#questions)
${renderLicenseLink(data.license)}
  
## Installation
------
${data.installation}
  
## Usage
------
${data.usage}
  
## Credits
------
${data.credits}
  
## Contributing
------
${data.contributing}
  
## Testing
------
${data.test}
  
## Questions
------
If you have any questions you can email me at ${data.email}. If you want to see more of my work, please visit my [github](http://github.com/${data.github}).
  
${renderLicenseSection(data.license)}

`;
}

//allows generateMarkdown to be used in other files in the app
module.exports = generateMarkdown;
