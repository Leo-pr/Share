'use strict';

app.factory('Like', function($firebaseArray) {

    var ref = firebase.database().ref();

    var Like = {

        allLikesByUser: function(uid) {
            return $firebaseArray(ref.child('likes').child(uid));
        },

        allNotes: function(uid) {
            var k = 0;
            var i = 0;
            var ntes = $firebaseArray(ref.child('likes').child(uid));
            while (i < 2)
            {
                k = k + ntes[i];
                i = i + 1;
                console.log(ntes[i]);
            }
        },

        addLike: function(uid1, uid2) {
            return ref.child('likes').child(uid1).child(uid2).set(true);
        },

        addDeux: function(uid1, uid2) {
            return ref.child('notes').child(uid2).child(uid1).set(2);
        },

        addTrois: function(uid1, uid2) {
            return ref.child('notes').child(uid2).child(uid1).set(3);
        },

        addQuatre: function(uid1, uid2) {
            return ref.child('notes').child(uid2).child(uid1).set(4);
        },

        addUn: function(uid1, uid2) {
            return ref.child('notes').child(uid2).child(uid1).set(1);
        },

        addZero: function(uid1, uid2) {
            return ref.child('notes').child(uid2).child(uid1).set(0);
        },

        removeLike: function(uid1, uid2) {
            return ref.child('likes').child(uid1).child(uid2).remove();
        },

        removePic: function(uid) {
            return ref.child('profiles').child(uid).child('images').child('5').remove();
        }
    };

    return Like;

});