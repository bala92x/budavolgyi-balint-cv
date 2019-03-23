const moment = require('moment');

const getDiff = (from) => {
    const yearDiff = moment().diff(from, 'years');
    const monthDiff = moment().diff(from, 'month') - (yearDiff * 12);
    let diff = '';

    if (yearDiff) {
        diff += `${yearDiff} year${yearDiff == 1 ? '' : 's'} `;
    }

    if (monthDiff) {
        diff += `${monthDiff} month${monthDiff == 1 ? '' : 's'}`;
    }

    return diff;
};
const resume = {
    "Education": [
        {
            "name": "Web development and online marketing certifications",
            "url": "https://github.com/bala92x/certs"
        },
        {
            "name": "English language exam",
            "level": "Intermediate",
            "institute": "BME",
            "date": "2013"
        },
        {
            "name": "Recreation Management and Health Promotion",
            "level": "BSc",
            "institute": "Nyugat Magyarországi Egyetem",
            "date":"2010 - 2013"
        },
        {
            "name": "Graduation",
            "institute": "Dr. Mező Ferenc Gimnázium",
            "date": "2006 - 2010"
        }
    ],
    "Experience": [
        {
            "company": "AZ Ügynökség/Kaméleonline",
            "role": "Web Developer",
            "since": "Since 2017 August",
            "url": "https://kameleonline.hu"
        },
        {
            "company": "Own side projects",
            "since": "Since 2017 January",
            "url": "https://github.com/bala92x/"
        }
    ],
    "Tech Stack": [
        {
            "name": "Javascript",
            "sub-stack": [
                {
                    "name": "Vanilla JS",
                    "experience": getDiff('2017-01-10')
                },
                {
                    "name": "Node.js",
                    "experience": getDiff('2018-11-10'),
                    "sub-stack": [
                        {
                            "name": "Express",
                            "experience": getDiff('2018-11-12')
                        },
                        {
                            "name": "Meteor",
                            "experience": getDiff('2019-01-06')
                        }
                    ]
                },
                {
                    "name": "jQuery",
                    "experience": getDiff('2017-01-30')
                },
                {
                    "name": "React",
                    "experience": getDiff('2018-04-04')
                },
                {
                    "name": "React Native",
                    "experience": getDiff('2018-10-12')
                },
                {
                    "name": "AngularJS",
                    "experience": getDiff('2018-02-11')
                },
                {
                    "name": "Handlebars",
                    "experience": getDiff('2018-12-05')
                }
            ]
        },
        {
            "name": "PHP",
            "experience": getDiff('2017-01-10'),
            "sub-stack": [
                {
                    "name": "Laravel",
                    "experience": getDiff('2017-03-15')
                },
                {
                    "name": "WordPress",
                    "experience": getDiff('2017-07-25')
                }
            ]
        },
        {
            "name": "Database",
            "sub-stack": [
                {
                    "name": "MySQL",
                    "experience": getDiff('2017-02-20')
                },
                {
                    "name": "MongoDB",
                    "experience": getDiff('2018-11-25')
                }
            ]
        },
        {
            "name": "HTML5",
            "experience": getDiff('2016-11-26')
        },
        {
            "name": "CSS3",
            "experience": getDiff('2016-12-10'),
            "sub-stack": [
                {
                    "name": "Bootstrap",
                    "experience": getDiff('2016-12-20')
                },
                {
                    "name": "SCSS",
                    "experience": getDiff('2018-10-10')
                }
            ]
        }
    ],
    "Contact": {
        "name": "Budavölgyi Bálint",
        "email": "budavolgyi.balint@gmail.com",
        "mobile": "+30 20 398 1231",
        "github": "https://github.com/bala92x/",
        "former CV (hungarian)": "http://cv.balavel.hu/"
    }
}

module.exports = resume;