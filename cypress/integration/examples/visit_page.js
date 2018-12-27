describe('My First Test', function () {
    it('Visits the Kitchen Sink', function () {
        cy.visit('https://www.homedepot.com/p/Quickie-Jumbo-Debris-Dust-Pan-495-10/202523588');
        cy.visit('https://www.homedepot.com/p/Quickie-Stand-and-Store-Lobby-Broom-and-Dustpan-487-1/206392304');
    })
})