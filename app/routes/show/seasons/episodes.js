import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('episode', { season_id: params.season_id });
  }
});