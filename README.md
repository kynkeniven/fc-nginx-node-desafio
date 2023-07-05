DUVIDA

Não consegui de forma alguma reproduzir o erro de tabela people not found 

Pergunta, vc está executando o docker-compose dentro do diretorio fc-node-mysql-desafio?

dentro desse diretorio tem uma basta chamada bd-scripts, ali tem o script de criação do BD

No docker-compose tem a seguinte linha para criação do BD

- "./bd-scripts/schema.sql:/docker-entrypoint-initdb.d/1.sql"

Como que não vai criar a tabela?

Me de uma dica do que eu posso fazer, pois eu deletei tudo relacioado ao docker aqui e ainda assim está funcionando