const moment = require('moment');
const getRoundedYears = (years, months) => {
    if (months < 6) {
        return years + .5;
    } else {
        return ++years;
    }
}
const getDiff = (from) => {
    const yearDiff = moment().diff(from, 'years');
    const monthDiff = moment().diff(from, 'month') - (yearDiff * 12);
    const roundedYears = getRoundedYears(yearDiff, monthDiff);

    const diff = `${roundedYears} year${roundedYears <= 1 ? '' : 's'}`;

    return diff;
};
const devSkills = [
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
                "experience": getDiff('2018-04-04'),
                "sub-stack": [
                    {
                        "name": "React Native",
                        "experience": getDiff('2018-10-12')
                    },
                    {
                        "name": "Gatsby",
                        "experience": getDiff('2019-04-16')
                    }
                ]
            },
            {
                "name": "AngularJS",
                "experience": getDiff('2018-02-11')
            },
            {
                "name": "Handlebars",
                "experience": getDiff('2018-12-05')
            },
            {
                "name": "Testing",
                "sub-stack": [
                    {
                        "name": "Mocha",
                        "experience": getDiff('2018-12-10')
                    },
                    {
                        "name": "Jest",
                        "experience": getDiff('2019-01-05')
                    },
                    {
                        "name": "Enzyme",
                        "experience": getDiff('2019-04-05')
                    }
                ]
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
    },
    {
        "name": "Databases and Query Languages",
        "sub-stack": [
            {
                "name": "MySQL",
                "experience": getDiff('2017-02-20')
            },
            {
                "name": "MongoDB",
                "experience": getDiff('2018-11-25')
            },
            {
                "name": "Firebase",
                "experience": getDiff('2019-04-05')
            },
            {
                "name": "GraphQL",
                "experience": getDiff('2019-04-16')
            }
        ]
    },
    {
        "name": "Tools, Services, etc.",
        "sub-stack": [
            {
                "name": "Git",
                "experience": getDiff('2017-06-03')
            },
            {
                "name": "Webpack",
                "experience": getDiff('2019-04-01')
            },
            {
                "name": "Redux",
                "experience": getDiff('2019-04-03')
            },
            {
                "name": "Heroku",
                "experience": getDiff('2018-11-25')
            },
            {
                "name": "Google (Ads, Analytics, Search Console)",
                "experience": getDiff('2017-03-20')
            }
        ]
    }
];

module.exports = devSkills;