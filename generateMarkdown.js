// Function to generate a license badge
function renderLicenseBadge(license) {
  if (!license) {
    return ''; 
  }

  // Map license names to their corresponding badge URLs
  const licenseBadgeUrls = {
    'MIT': 'https://img.shields.io/badge/License-MIT-brightgreen.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD-3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    
  };

  // Check if the provided license name has a corresponding badge URL
  if (licenseBadgeUrls.hasOwnProperty(license)) {
    const badgeUrl = licenseBadgeUrls[license];
    return `![License](${badgeUrl})`;
  } else {
    return ''; 
  }
}

// Function to generate a license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Map license names to their corresponding license URLs
  const licenseUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    
  };

  // Check if the provided license name has a corresponding URL
  if (licenseUrls.hasOwnProperty(license)) {
    const licenseUrl = licenseUrls[license];
    return `For more details, see the [${license} License](${licenseUrl}).`;
  } else {
    return ''; 
  }
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (!badge && !link) {
    return ''; 
  }

  return `
## License

${badge}

${link}
`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description

${data.description}

// Add other sections and content as needed
`;
}

module.exports = generateMarkdown;

