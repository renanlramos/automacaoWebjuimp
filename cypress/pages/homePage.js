class HomePage {

    go(){
        cy.visit('/')
    }

    selectFirstButtonGroup(btn1, btn2, btn3){

        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn1 +']').click()
        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn2 +']').click()
        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn3 +']').click()

    }

    selectSecondButtonGroup(btn1, btn2, btn3){

        cy.iframe('iframe[src="buttons.html"]').as('iframe')
        cy.get('@iframe').find('#btn_'+ btn1).click()
        cy.get('@iframe').find('#btn_'+ btn2).click()
        cy.get('@iframe').find('#btn_'+ btn3).click()

    }

    clickedButtonsFirstDisplayNone(btn1, btn2, btn3){

        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn1 +']').should('have.css', 'display', 'none')
        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn2 +']').should('have.css', 'display', 'none')
        cy.get('div[id=panel_body_one] p button[id=btn_'+ btn3 +']').should('have.css', 'display', 'none')
    
    }

    clickedButtonsSecondDisplayNone(btn1, btn2, btn3){

        cy.iframe('iframe[src="buttons.html"]').as('iframe')
        cy.get('@iframe').find('#btn_'+ btn1).should('have.css', 'display', 'none')
        cy.get('@iframe').find('#btn_'+ btn2).should('have.css', 'display', 'none')
        cy.get('@iframe').find('#btn_'+ btn3).should('have.css', 'display', 'none')
    
    }

    iframeFirstName(name){

        cy.iframe('iframe[src="fields.html"]').as('iframe')
        cy.get('@iframe').find('input[id="first_name"]').type(name)

    }

}

export default new HomePage;