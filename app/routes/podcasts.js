import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            id: 'ep-0',
            title: 'Episodio 0',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            category: 'Estate',
            bedrooms: 15,
            image: '../assets/images/pod-logo.png',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }, {
            id: 'urban-living',
            title: 'Urban Living',
            owner: 'Mike TV',
            city: 'Seattle',
            category: 'Condo',
            bedrooms: 1,
            image: '../assets/images/pod-logo.png',
            description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }, {
            id: 'downtown-charm',
            title: 'Downtown Charm',
            owner: 'Violet Beauregarde',
            city: 'Portland',
            category: 'Apartment',
            bedrooms: 3,
            image: '../assets/images/pod-logo.png',
            description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }];
    }
});