function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'ISC':
      return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    default:
      return ``;
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC':
      return `https://opensource.org/licenses/ISC`;
    default:
      return ``;
  }
}

function renderLicenseSection(license, creator) {
  switch (license) {
    case 'MIT':
      return `MIT License: ${renderLicenseLink(license)}

      Copyright (c) 2023 ${creator}
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`;

    case 'ISC':
      return `ISC License: ${renderLicenseLink(license)}
      
      Copyright 2023 ${creator}

      Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
      provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED “AS IS” 
      AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
      IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, 
      DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS 
      SOFTWARE.`;

    default:
      return ``;
  }
}

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents
  * [Description](#desctiption)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badge](#badge)
  * [Questions](#questions)

  ## Description <a name="description"></a>
  ${data.description}
  
  ## Installation <a name="installation"></a>
  ${data.installation}

  ## Usage <a name="usage"></a>
  ${data.usage}

  ## Credits <a name="credits"></a>
  ${data.credit}
  
  ## License <a name="license"></a>
  ${renderLicenseSection(data.license, data.username)}
  
  ## Badge <a name="badge"></a>
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  ## Questions <a name="questions"></a>
  You can email me at <${data.email}> for more questions.
  The link to my profile is https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;