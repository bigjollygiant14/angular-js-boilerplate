'use strict';

module.exports = /*  @ngInject */
  function userService($http, $q) {

    var model = {
      currentUser: {},
    };

    var service = {
      model: model,
      getUsers: getUsers
    };

    return service;

    /**
     * @name getUsers
     * @desc get data for all users or one user
     * @params {String} id - id of a user [Optional]
     * @returns {Array or Object} - Array of all users or object of one user
     * @memberOf app.common.services
     */
    function getUsers(id) {
      /* var usersPromise = $q.defer(),
          url = id ? apiHelperService.request('/api/users/' + id) : apiHelperService.request('/api/users/');

      // only fire request once. otherwise, use model
      if (!service.model) {
        $http.get(url, {
          headers: {}
        })
        .then(getUsersSuccess)
        .catch(getUsersFail);
      } else {
        usersPromise.resolve(service.model);
      }

      function getUsersSuccess(response) {
        usersPromise.resolve(response.data);
      }

      function getUsersFail(error) {
        usersPromise.reject(error);
      }

      return usersPromise.promise; */
    }

  };
