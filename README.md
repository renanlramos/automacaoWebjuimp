Automação WEBJUMP!
    Referente a avaliação para analista de QA.

🚀Instalando o GIT e clonando o projeto em sua máquina
    Baixar o Git em https://git-scm.com/download/ e seguir o passos de acordo com seu sistema operacional
    Navegue até a pasta que deseja salvar localmente seu projeto e digite o seguinte comando no terminal:
        git clone https://github.com/renanlramos/automacaoWebjump.git

⚙Instalações e configurações necessárias:
    Baixar o Visual Studio Code (VSCODE)
        https://code.visualstudio.com/
    Recomendo a instalação da extensão "Material Icon Theme"
        https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme

    Baixar a última versão LTS(long-term support) do Node.js em https://nodejs.org/en/
        Através do terminal, navegar até o diretorio do projeto clonado e digitar os seguintes comandos no terminal:
            npm init
        Preencher os campos da seguinte forma:
            package name: automacao-webjump
            version: (pressione enter)
            description: projeto automacao webjump
            entry point: (pressione enter)
            test command: npx cypress open
            git repository: (deve mostrar o repositorio clonado anteriormente)
            keywords: (pressione enter)
            author: (seu nome)
            license: (fornecida pela Infra)
        Será exibido um resumo da criação do arquivo JSON, confirme os dados e pressione ENTER(yes).

    Instalar o Cypress
        No mesmo diretorio do passo anterior digite o seguinte comando no terminal:
            npm i cypress install --save-dev
        Ao finalizar a instalação digite:
            cat package.json
        No fim do arquivo será exibido a versão do Cypress instalado na aba "devDependencies"

    Abrindo e usando o Cypress
        Ainda no mesmo diretorio, executar o seguinte comando para iniciar o Cypress(demora um pouco na primeira vez que é executado):
            npx cypress open
        Então, com o Cypress aberto, clique em E2E Testing para a criação dos arquivos base do Cypress, depois em "Continue" na tela de Configuration Files e então selecione o navegador desejado para utilização(recomendamos o Chrome).

        Abra o VSCode, clique em "File > Open Folder" e selecione o mesmo diretorio onde foi clonado o projeto.
        Então será exibido a estrutura do projeto e dos arquivos do Cypress;

        OBS.: Caso a instalação do Cypress crie o arquivo exemple.json na pasta fixtures, pode deletar.
    
    Instalando o npm Cypress Iframe
        Ainda no mesmo diretorio, digite o seguinte comando no terminal:
            npm install -D cypress-iframe
        Na no arquivo "../support/e2e.js" incluir a seguinte linha:
            import 'cypress-iframe'
        Esse pacote auxilia em testes com iframes.

✒️ Autor
    Renan Lucas Ramos
        
        







