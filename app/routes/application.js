import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },

  actions: {
    accessDenied() {
      this.transitionTo('/');
    }
  }
});
