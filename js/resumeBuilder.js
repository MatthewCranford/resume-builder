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
        }
    }
 }