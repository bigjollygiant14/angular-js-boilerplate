'use strict';

module.exports = /*  @ngInject */
  function viewController($scope, userService) {

    // Initial variables / state
    var vm = this;

    // Bind Services
    vm.userService = userService;

    // Bind Public Methods
    vm.deleteResource = deleteResource;
    vm.toggleEdit = toggleEdit;

    // Run Init
    init();

    // Public
    function deleteResource(i) {
      // this should be in the .then of a promise, so the model can accurately reflect the db
      userService.model.resources.splice(i, 1);
    }

    function toggleEdit(i) {
      userService.model.resources[i].edit = !userService.model.resources[i].edit;
    }

    // Private
    function init() {}

  };
