(function() {

    return {
        events: {
            'app.activated': 'initFunc',
            "user.alias.changed" : "aliasChange",
            "user.avatarUrl.changed" : "avatarUrlChange",
            "user.details.changed" : "detailsChange",
            "user.email.changed" : "emailChange",
            "user.locales.changed" : "localeChange",
            "user.groups.changed" : "groupsChange",
            "user.name.changed" : "nameChange",
            "user.notes.changed" : "notesChange",
            "user.role.changed" : "roleChange",
            "user.signature.changed" : "signatureChange",
            "user.tags.changed" : "tagsChange",
            "user.timeZone.changed" : "timeZoneChange",
            "user.organizations.changed" : "organizationsChange"//,
            //"user.text.changed" : "fieldChange",
            //'*.changed': 'detectedChange'
        },
        detectedChange : function(event){
            var property,
                newvalue;
            if (event.type == 'click') {
                property = null;
                newvalue = null;
            } else {
                property = event.propertyName;
                newvalue = event.newValue;
            }
            console.log(property);
            console.log(newvalue);
        },
        aliasChange : function(){
            //console.log(this.user().locale());
            //console.log(this.user().tags(['a','b','c']));
            console.log("alias:" + this.user().alias());

        },
        avatarUrlChange : function(){
            console.log("avatarUrl:" + this.user().avatarUrl());
        },
        detailsChange : function(){
            console.log("details:" + this.user().details());
        },
        emailChange : function(){
            console.log("email:" + this.user().email());
        },
        localeChange : function(){
            console.log("locale:" + this.user().locale());
        },
        groupsChange : function(){
            console.log("groups:");
            var groups = this.user().groups();
            for(var i=0;i<groups.length;i++)
            {
                console.log(groups[i].name());
            }
        },
        nameChange : function(){
            console.log("name:" + this.user().name());
        },
        notesChange : function(){
            console.log("notes:" + this.user().notes());
        },
        roleChange : function(){
            console.log("role:" + this.user().role());
        },
        signatureChange : function(){
            console.log("signature:" + this.user().signature());
        },
        tagsChange : function(){
            console.log("tags:" + this.user().tags());
        },
        timeZoneChange : function(){
            console.log("timeZone:" + this.user().timeZone().name());
        },
        organizationsChange : function(){
            var groups = this.user().organizations();
            for(var i=0;i<groups.length;i++)
            {
                console.log(groups[i].name());
            }
            //console.log("organizations:" + this.user().organizations());
        },
        fieldChange : function(){
            var field = this.user().customField('text');
            console.log(field);
            //services.notify("Frank Richelieu was successfully updated", 'notice');
        },
        initFunc: function() {
            alert("onload profile");
            var currentUser = this.currentUser().name();
            this.switchTo('start', {
                username: currentUser
            });
            console.log(this.currentUser());
        }

    };

}());


