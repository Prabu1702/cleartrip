describe('test sum',()=>{


    it('add two numbers',()=>{


        var sum =0
        cy.get('tr td :nth-child(4) strong').each(($element)=>{

            const initial=$element.text()
            const splitted=initial.split('')
            const result=splitted[1].trim()
            sum=parseInt(sum)+parseInt(result)
        
            
    }).then(()=>{
        cy.log(sum)
    })

    const totalvalue=tot.text


})
})