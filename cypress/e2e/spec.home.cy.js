import home from '../pages/homePage'

describe('CT001', function() {

  before(function(){
    home.go()
  })

  it('clicar nos botões "One", "Two, "Four" e verificiar ausência dos mesmos', function()  {

    home.selectFirstButtonGroup('one', 'two', 'link')
    home.clickedButtonsFirstDisplayNone('one', 'two', 'link')

  })
  
  it('clique nos botões "One", "Two" e "Four" que encontram-se dentro do painel "IFRAME BUTTONS" e valide a não-presença dos mesmos', function(){

      home.selectSecondButtonGroup('one', 'two', 'link')
      home.clickedButtonsSecondDisplayNone('one', 'two', 'link')

  })

})

describe('CT002', function(){

  before(function(){
    home.go()
  })

  it('preencher o campo "YourFirstName"', function(){

    home.iframeFirstName('Renan')

  })

  it('Clique no botão "One"',function(){

    cy.get('div[id=panel_body_one] p button[id=btn_one]').click()

  })

  it('cheque a opção "OptionThree"',function(){

    cy.get('#opt_three').click();

  })

  it('selecione a opção "ExampleTwo" dentro da select box',function(){

    cy.get('#select_box').select('option_two')

  })

  it('validar imagem do logo do "Selenium Webdriver"',function(){

    cy.get('img[alt=selenium]').should('have.attr', 'src').and('equal', 'https://i.imgur.com/1vsaEJB.jpg')

  })

})