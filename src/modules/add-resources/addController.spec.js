/* Sample unit test for how I would approach testing this */
describe('Add Controller', () => {
  describe('Init', () => {
    it('Should initialize correctly', () => {
      // Check init conditions, eg. controller vars exist, services are exposed that are supposed to be etc.
    });
  });

  describe('Methods', () => {
    descibe('addResource', () => {
      // Before All to scaffold for each test

      it('Should update userService.model', () => {
        // Scaffold && Assert Init Conditions
        expect(userService.model.resources.length).toEqual(1);

        // Run
        addController.addResource();

        // Assert
        expect(userService.model.resources.length).toEqual(2);
      });

      it('Should reset addController.addModel', () => {
        // Assert Init Conditions
        expect(addController.addModel).toDeepEqual({
          name: '',
          type: '',
          edit: false
        });

        // Scaffold
        addController.addModel = {
          name: 'Pluralsight',
          type: 'Website',
          edit: false
        };

        // Run
        addController.addResource();

        // Assert
        expect(addController.addModel).toDeepEqual({
          name: '',
          type: '',
          edit: false
        });

      });
    });
  });
});