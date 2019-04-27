import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        // replaceWith simplemente hace que cada vez que vayamos al /, vaya a '/podcast'
        this.replaceWith('podcasts');
    }
});