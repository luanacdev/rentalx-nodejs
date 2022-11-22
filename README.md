Cadastro de Carro
Requisitos Funcionais

Deve ser possível cadastrar um novo carro.
Regras de Negócio

Não deve ser possível cadastar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, como disponível.
O usuário responsável pelo cadastro deve ser um usuário administrador.
Listagem de Carros
Requisitos Funcionais

Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome da carro.
Regras de Negócio

O usuário não precisa estar logado no sistema.
Cadastro de Especifição no Carro
Requisitos Funcionais

Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.
Regras de Negócio

Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.
Cadastro de Imagens do Carro
Requisitos Funcionais

Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.
Requisitos Não Funcionais

Utilizar o multer para upload dos arquivos (em ambiente de desenvolvimento).
Regras de Negócio

O usuário deve poder cadastrar mais de uma imagem para o carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.
Aluguel de Carro
Requisitos Funcionais

Deve ser cadastrar um aluguel.
Regras de Negócio

O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deverá estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.
Devolução de carro
Requisitos Funcionais

Deve ser possível realizar a devolução de um carro
Regras de Negócio

Se o carro for devolvido com menos de 24 horas, deve ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário da devolução seja superior ao horário previsto de entrega, deverá ser cobrada multa proporcional ao(s) dia(s) de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deverá estar logado na aplicação.
Listagem de Aluguéis para usuário
Requisitos Funcionais

Deve ser possível realizar a busca de todos os aluguéis para o usuário.
Regras de Negócio

O usuário deverá estar logado na aplicação.
Recuperar Senha
Requisitos Funcionais

Deve ser possível o usuário recuperar a senha usando o email.
O usuário deve receber um email com o passo a passo para a recuperação de senha.
O usuário deve conseguir inserir uma nova senha.
Regras de Negócio

O usuário precisa informar uma nova senha.
O link enviado para a recuperação deve expirar em 3 horas.
