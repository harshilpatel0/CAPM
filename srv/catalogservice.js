// Used to get cds.service
const cds = require('@sap/cds')

// Using cds.service we access base class for all service defined in LinkedModel(here catalogservice.cds).
// impl is dummy wrapper for service implementation funtion.
module.exports = cds.service.impl(function() {
    
    //product is reference of extracted linkedDefinition from service. this(cds.Service) and entities point that we get all entities from the service.
    const { Products } = this.entities()

    // Definition of .after is like (event(cds.types.event), entity(cds.types.target),handler(cds.resultHandler)), here handler is function for event handling.
    this.after('each', Products, row => {
        console.log(`Read Product: ${row.ID}`)
    })

    this.after(['CREATE', 'UPDATE', 'DELETE'], [Products], async (Product, req) => {
        const header = req.data
        req.on('succeeded', () => {
            global.it || console.log(`< emitting: product_Changed ${Product.ID}`)
            this.emit('prod_Change', header)
        })
    })
})