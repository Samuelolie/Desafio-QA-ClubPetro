const util = require('../support/util')
describe('Interações Básicas do Usuario', () => {
  before(() => {

    cy.visit('https://www.clubpetro.com')

  })
  it('Click navBar', () => {

    cy.get('#w-dropdown-toggle-0 > :nth-child(2)').click()

    cy.get('#w-dropdown-list-0 > [href="/sobre"]').should('be.visible')
    cy.get('#w-dropdown-list-0 > [href="/jobs"]').should('be.visible')
  })

  it('Redirecionar Quem Somos', () => {

    cy.get('#w-dropdown-toggle-0 > :nth-child(2)').click()

    cy.get('#w-dropdown-list-0 > [href="/sobre"]').click()

    cy.url().should('be.equal', 'https://www.clubpetro.com/sobre')
  })

  it('Texto revendedor', () => {

    cy.visit('https://www.clubpetro.com/sobre')

    cy.contains('Feito de revendedor para revendedor').should('be.visible')
  })

  it('Imagem CEO', () => {

    cy.visit('https://www.clubpetro.com/sobre')

    cy.get('.image-28').should('exist')
  })

  it('Video O que é o ClubPetro', () => {

    cy.visit('https://www.clubpetro.com/sobre')

    cy.get('.embedly-embed').scrollIntoView().should('exist')
  })

  it('Texto Copyright', () => {

    cy.visit('https://www.clubpetro.com/sobre')

    cy.get('.button-2').scrollIntoView()

    cy.contains('© 2022 ClubPetro. Todos os direitos reservados. Política de Pivacidade').should('be.visible')
  })
  it('Redirecionamneto Pagina Contatos', () => {

    cy.get('.navbar-scroll > .container-54 > .nav-menu-2 > [href="https://postos.clubpetro.com/"][style="max-width: 940px;"]').invoke('removeAttr', 'target').click({ force: true })

    cy.url().should('be.equal', 'https://postos.clubpetro.com/')
  })

  it('Preencher campos e enviar formulário', () => {

    cy.visit('https://postos.clubpetro.com')

    cy.get('#cnpj').type(util.gerarCnpj())
    cy.get('#nome_completo').type(util.gerarNome())
    cy.get('#email').type(util.gerarEmail())
    cy.get('#telefone_com_ddd').type(util.dddValidos() + '9' + util.gerarSequenciaNumero(8))
    cy.get('#qual_a_sua_relação_com_postos').select('Dono(a) ou Diretor(a)')
    cy.get('#lp-pom-button-214').click()
    cy.get('.iframeWrapper__yCVOH2 > iframe').should('be.visible')
  })
})