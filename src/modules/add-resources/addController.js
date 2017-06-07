'use strict';

module.exports = /*  @ngInject */
  function addController(userService) {

    // Initial variables
    const vm = this;

    const addTemplate = {
      name: '',
      type: '',
      edit: false
    }

    vm.addModel = {
      name: '',
      type: '',
      edit: false
    }

    // no need to bind user service since we're not using it in the view
    // vm.userService = userService;

    vm.addResource = addResource;

    init();

    // Public
    function addResource() {
      // this should be in the .then of a promise, so the model can accurately reflect the db

      // add to the model
      userService.model.resources.push(vm.addModel);

      // reset the template
      vm.addModel = angular.copy(addTemplate);

      console.log('[Add Controller: userService.model.resources]', userService.model.resources);
      // console.log('[Add Controller: vm.addModel]', vm.addModel);
    }

    // Private
    function init() {}

  };
