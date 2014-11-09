# Door-Guard

Door-Guard is my first attempt at a public node module. This module was created to scratch a personal itch because I was not having any luck finding recent invite-only access modules for creating users. By creating Door-Guard I hope to be able to supply a module that takes care of the following:

  - Create invitiations using an email and inviter
  - Generate a hash that will be used to find whether an invitation to join is valid
  - Other things as I think them up...

Please note that this is both very new and sould be considered a pre-pre-pre alpha version as well as that this is my first node module and could definitely use some experienced eyes to look over it and give me some feedback.


### Version
>0.0.1

Initial version. Supplies two functions. One to create an invitation and another to find an invition using a hash given on creation. Simple stuff.

### Tech

Door guard utilises the following modules and software to work. Please check out below:

* We use bcrypt for creating hashes
* We also use redis for storing invitations, so make sure you have a redis server up!

### Installation



```sh
$ npm install door-guard
```

###Example Code

```sh
var guard = require('door-guard');

//Create an invitation

guard.createInvitation('email@doe.com', 'inviterusername', function (err, hash) {
    if (err) {console.log(err)} else {
        //This is the hash that is used to return the invitation
        console.log(hash);
    }
});

//Find an invitiation

guard.findInvitation('Put hash here', function (err, invitation) {
    if (err) {console.log(err)} else {
        console.log(invitation);
    }
});
```

### Todo's

 - Write Tests
 - Write better documentation
 - Write better bloody module


License
----

MIT


**Free Software, Hell Yeah!**
