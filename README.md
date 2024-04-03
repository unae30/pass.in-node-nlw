#pass in

O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

##Requisitos

###Requisitos funcionais

- [X] O organizador deve poder visualizar dados de um evento;
- [X] O organizador deve poser visualizar a lista de participantes;
- [X] O participante deve poder se inscrever em um evento;
- [X] O participante deve poder visualizar seu crachá de inscrição;
- [X] O participante deve poder realizar check-in no evento;
- [X] O organizador deve poder cadastrar um novo evento;

###Regras de negócio

- [X] O participante só pode se inscrever em um evento uma única vez;
- [X] O participante só pode se inscrever em eventos com vagas disponíveis;
- [X] O participante só pode realizar check-in em um evento uma única vez;

###Requisitos não-funcionais

- [X] O check-in no evento será realizado através de um QRCode;

##Anotações

Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS,... 

Corpo da requisição (Request body)
Parametros de busca (Search params / Query params) 'http://localhost:3333/users?search=Diego'
Parâmetros de rota (Route params) -> identificaçãoo de rescuros 'DELETE http://localhost:3333/users/5'
Cabeçalhos (Headers) -> Contexto / Informações adicionais sobre a requisição (autenticação, idioma, etc.

Driver nativo / Query builder / ORM (Object Relational Mapping)

JSON - JavaScript Object Notation

Status code
 20X - Sucesso
30X - Redirecionamento
40X - Erro do cliente (erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
50X - Erro do servidor (um erro que está acontecendo INDEPENDENTE do que que esta sendo enviado para o servidor)