const education = require('./education.json');
const experience = require('./experience.json');
const devSkills = require('./devSkills');
const portfolio = require('./portfolio.json');
const contact = require('./contact.json');

const resume = {
    "Education": education,
    "Experience": experience,
    "Dev Skills": devSkills,
    "Portfolio": portfolio,
    "Contact": contact
}

module.exports = resume;