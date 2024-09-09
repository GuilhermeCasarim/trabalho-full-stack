document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const cpf = document.getElementById('cpf').value
    const telefone = document.getElementById('telefone').value

    const personData = {
        nome,
        cpf,
        telefone
    }

    try{
        const response = await fetch('https://localhost:3000/pessoas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(personData)
        })

        const result = await response.json();
        if(response.ok){
            document.getElementById('message').innerText = 'Pessoa criada com sucesso!'
            document.getElementById('formPessoa').requestFullscreen()
        } else{
            document.getElementById('message').innerText = `Erro: ${result.message}`
        }
    } catch(error){
        document.getElementById('message').innerText = 'Erro na comunicação do servidor.'
    }
})