/*
This is empty on purpose! Your code to build the resume will go here.
 */

 const model = {

    init: function() {

        this.bio = {
            name: 'Matt',
            role: 'Coder',
            contacts: {
                mobile: '555-555-5555',
                email: 'place@holder.com',
                github: 'matt@github',
                twitter: 'matt@twitter',
                location: 'placeholder st'
            },
            welcomeMessage: 'Well met!',
            skills: ['coding', 'lifting', 'jiu-jitsu'],
            biopic: 'placeholder.png',
            display: function()  {
                console.log('display');
            }
        },

        this.education = {
            schools: [
                {                  
                    name: 'string',
                    location: 'string',
                    degree: 'string',
                    majors: ['array of strings'],
                    dates: 'string (works with a hyphen between them)',
                    url: 'string (optional)'
                },
                {                  
                    name: 'string',
                    location: 'string',
                    degree: 'string',
                    majors: ['array of strings'],
                    dates: 'string (works with a hyphen between them)',
                    url: 'string (optional)'
                }
            ],
            onlineCourses: [
                {
                    title: 'string',
                    school: 'string',
                    dates: 'string (works with a hyphen between them)',
                    url: 'string'
                },
                {
                    title: 'string',
                    school: 'string',
                    dates: 'string (works with a hyphen between them)',
                    url: 'string'
                }
            ],
            display: function() {
                console.log('display');        
            }
        },

        this.work = {
            jobs: [
                {
                    employer: 'string', 
                    title: 'string', 
                    location: 'string', 
                    dates: "string (Can be 'in progress')",
                    description: 'string',
                    display: function() {
                        console.log('display');
                    }
                },
                {
                    employer: 'string', 
                    title: 'string', 
                    location: 'string', 
                    dates: "string (Can be 'in progress')",
                    description: 'string',
                    display: function() {
                        console.log('display');
                    }
                }
            ]
           
        },

        this.projects = {
            projects:  [
                {
                    title: 'string', 
                    dates: 'string (works with a hyphen between them)',
                    description: 'string',
                    images: ['array with string urls'],
                    display: function () {
                        console.log('display');
                    }
                },
                {
                    title: 'string', 
                    dates: 'string (works with a hyphen between them)',
                    description: 'string',
                    images: ['array with string urls'],
                    display: function () {
                        console.log('display');
                    }
                }
            ]   
        }
        this.render();

    },

    render: function() {
        const bio = this.bio
        const header= document.getElementById('header');

        header.insertAdjacentHTML('beforeend',HTMLheaderName.replace('%data%', bio.name)); 
        header.insertAdjacentHTML('beforeend',HTMLheaderRole.replace('%data%', bio.role)); 
    }
 }
 model.init();