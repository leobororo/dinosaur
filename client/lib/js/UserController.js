(function() {
  angular.module('users').controller('UserController', ['userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log', UserController]);

  function UserController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.share = share;

    userService
      .loadAllUsers()
      .then(function(users) {
        self.users = [].concat(users);
        self.selected = users[0];
      });

    //mostrar ou esconder o sidenav
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    //selecionar o usuário
    function selectUser (user) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      console.log(user.name);
    }

    //show bottom sheet
    function share($event) {
      var user = self.selected;
    }
  };
})();
