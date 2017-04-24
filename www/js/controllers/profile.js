'use strict';

app.controller('ProfileCtrl', function(profile, $ionicPopup, $firebaseArray) {
    var prof = this;
    var ref = firebase.database().ref();

    prof.currentUser = profile;

    prof.removePic = function(uid) {
    console.log('Test');
    return ref.child('profiles').child(uid).child('images').child('1').remove();
        },

    prof.logout = function() {
	$ionicPopup.confirm({
	title: 'Se déconnecter',
	template: 'Voulez vous vraiment vous déconnecter ?'
	})
	.then(function(res) {
	if (res) {
			Auth.logout();
	}	
	});

	};
});