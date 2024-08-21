// Array para armazenar os usuários
let usuarios = [];

// Função para adicionar novos usuários
function adicionarUsuario(nome, email) {
    // Validação dos dados
    if (!nome || !email) {
        console.log('Nome e email são obrigatórios.');
        return;
    }

    // Verifica se o email já está cadastrado
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        console.log('Este email já está cadastrado.');
        return;
    }

    // Adiciona o novo usuário ao array
    const novoUsuario = { nome: nome, email: email };
    usuarios.push(novoUsuario);
    console.log('Usuário cadastrado com sucesso!');
}

// Função para listar todos os usuários cadastrados
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    console.log('Usuários cadastrados:');
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Email: ${usuario.email}`);
    });
}

// Exemplo de uso
adicionarUsuario('Felipe Farias', 'felipe.farias@example.com');
adicionarUsuario('Joana Machado', 'joana.machado@example.com');
adicionarUsuario('Joana Machado', 'felipe.farias@example.com'); // Tentativa de adicionar email duplicado

listarUsuarios();