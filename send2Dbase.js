

// Função para enviar dados de input para um banco de dados
async function enviarDadosParaBancoDeDados( dados ) {
  // 1. Configurar a conexão com o banco de dados
   const 
      url = "https://seu-banco-de-dados.com/api/inserir-dados" // Substitua por URL real
      ,
      options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify( dados ), // Dados a serem inseridos
      }
   ;

   // 2. Enviar a requisição para o banco de dados
   try {
      const 
         response = await fetch( url, options )
         ,
         responseData = await response.json()
      ;

      if( response.ok ) {
         console.log( "Dados enviados com sucesso!" );
         console.log( responseData );
      } else {
         console.error( "Erro ao enviar dados:", response.status, responseData );
      }
   } catch( error ) {
      console.error( "Erro:", error );
   }
}

// Exemplo de uso
const dados = {
   nome: "João Silva",
   email: "joaosilva@email.com",
   telefone: "(11) 9999-9999",
};

enviarDadosParaBancoDeDados( dados );
