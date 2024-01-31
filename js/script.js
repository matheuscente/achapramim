//oculta e mostra formulario quando necessario
function toggleForm(btnClick) {
    if (btnClick == btnUsar[0]) {
        isChecked()
        conteinerClicked = resultConteiner[0]
        conteinerContent[1].classList.toggle('hide')
        busca[0].classList.toggle('hide')
        conteinerContent[0].classList.toggle('hide')
    } else if (btnClick == btnUsar[1]) {
        conteinerClicked = resultConteiner[1]
        conteinerContent[0].classList.toggle('hide')
        busca[1].classList.toggle('hide')
        conteinerContent[1].classList.toggle('hide')
    } else if (btnClick == btnHeader[0]) {
        conteinerClicked = resultConteiner[0]
        sobre.classList.add('hide')
        if (busca[0].classList.contains('hide')) {
            busca[0].classList.remove('hide')
            conteinerContent[0].classList.add('hide')
            conteinerContent[1].classList.add('hide')
            busca[1].classList.add('hide')
        }
    } else if (btnClick == btnHeader[1]) {
        sobre.classList.add('hide')
        busca[1].classList.remove('hide')
        busca[0].classList.add('hide')
        conteinerContent[0].classList.add('hide')
        conteinerContent[1].classList.add('hide')
    } else if (btnClick == btnHeader[2]) {
        busca.forEach((item) => {
            item.classList.add('hide')
        })
        conteinerContent[0].classList.add('hide')
        conteinerContent[1].classList.add('hide')
        if (sobre.classList.contains('hide')) {
            sobre.classList.remove('hide')
        }
    }
}

//recebe a função returnResult com os dados e retorna eles no DOM
function createElementCEP(conteiner, vetor) {
    vetor.forEach((item) => {
        const cidade = document.createElement('span'),
            div = document.createElement('div'),
            logradouro = document.createElement('span'),
            bairro = document.createElement('span'),
            cepSpan = document.createElement('span'),
            ddd = document.createElement('span'),
            estadoSpan = document.createElement('span'),
            result = [logradouro, bairro, cidade, estadoSpan, cepSpan, ddd]
        resultText = ['Logradouro: ', 'Bairro:', 'Cidade: ', 'estado: ', 'Cep: ', 'DDD: ']
        div.classList.add('resultado')
        cidade.innerText = item.cidade
        if (item.lograouro == false) {
            logradouro.innerText = 'CEP geral'
        } else {
            logradouro.innerText = item.logradouro
        }
        bairro.innerText = item.bairro
        cepSpan.innerText = item.cep
        ddd.innerText = item.ddd
        estadoSpan.innerText = item.estado
        result.forEach((item, i) => {
            div.appendChild(item)
            item.classList.add('spanResult', 'font-paragrafo')
            item.innerText = resultText[i] + item.innerText
        })
        conteiner.appendChild(div)
    })


}

function resultados(item) {
    this.cidade = item.localidade
    this.logradouro = item.logradouro
    this.cep = item.cep
    this.bairro = item.bairro
    this.ddd = item.ddd
    this.estado = item.uf

}


//recebe o GET da API e os retorna em vetor
function returnResult(data) {
    if (!Array.isArray(data)) {
        vetor[0] = new resultados(data)
    } else {
        data.forEach((item) => {
            vetor.push(new resultados(item))
        })
    }
    return vetor
}


//remove resultados do DOM
function removeResult() {
    form.forEach((item) => {
        const trueAtributte = item.classList.contains('hide')
        if (trueAtributte) {
            const resultado = document.querySelectorAll('.resultado')
            resultado.forEach((item) => {
                if (item.parentNode) {
                    item.parentNode.removeChild(item)
                }
            })
        }
    })

    if (vetor.length >= 1) {
        vetor.forEach((item) => {
            vetor.splice(item)
        })
    }




}

//retorna a url do fetch 
function urlReturn(estado, cidade, rua, cep) {
    if (cep) {
        url = `https://viacep.com.br/ws/${cep}/json/`
    } else {
        url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`
    }
    return url
}

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    
    nav.classList.toggle('show')
}

//fetch na url
async function getResult(url, btn) {

    try {
        const response = await fetch(url),
            data = await response.json()
        createElementCEP(conteinerClicked, returnResult(data))
        if (data.erro == true) {
            if (btn.target == enviar) {
                alert(' cep invalido ou nao existente')


            } else if (btn.target == buscaEndereco) {
                alert(' endereço invalido ou nao existente')
            }
            removeResult()
        }
    } catch (err) {
        if (btn.target == enviar) {
            console.log(btn)
            alert(' cep invalido ou nao existente')

        } else if (btn.target == buscaEndereco) {
            alert(' endereço invalido ou nao existente')
        }
        removeResult()
    }
}

//previne o carregamento da pagina ao clicar no botao e solicita os resultados
function searchResults(botao) {
    removeResult()
    botao.preventDefault()
    getResult(urlReturn(estado.value, cidade.value, rua.value, cep.value), botao)
}

//remove o valor digitado no input
function removeInput() {
    cep.value = null
    cidade.value = null
    estado.value = null
    rua.value = null
}

//verifica a checkbox ativa e retorna o formulario correspondente
function isChecked() {
    radio.forEach((btn, i) => {
        if (btn.checked) {
            if (i == 0) {
                form[0].classList.remove('hide')
                form[1].classList.add('hide')
            } else if (i == 1) {
                form[1].classList.remove('hide')
                form[0].classList.add('hide')
            }
        }
    })
}



//VARIAVEIS GLOBAIS
const cep = document.getElementById('cep'),
    vetor = []

let conteinerClicked = null,
    url = null,
    indice = null
const enviar = document.getElementById('enviar-cep'),
    noResult = document.querySelector('.none'),
    resultConteiner = document.querySelectorAll('.result'),
    btnUsar = document.querySelectorAll('.btn-usar'),
    busca = document.querySelectorAll('.busca'),
    conteinerContent = document.querySelectorAll('.home-content'),
    btnVoltar = document.querySelectorAll('.voltar'),
    btnHeader = document.querySelectorAll('.btn-header'),
    cidade = document.querySelector('.cidade'),
    rua = document.querySelector('.rua'),
    estado = document.querySelector('.estado'),
    buscaEndereco = document.getElementById('pesquisar-endereco'),
    radio = document.querySelectorAll('.radio-escolha'),
    form = document.querySelectorAll('.formulario'),
    btnMobile = document.getElementById('btn-mobile'),
    sobre = document.querySelector('.sobre-mim'),
    logoBtn = document.querySelector('.botao-logo'),
    btnDDD = document.getElementById('enviar-DDD'),
    nav = document.querySelector('.nav-header')

    btnDDD.addEventListener('click', (btn) => {
        btn.preventDefault()
        alert("Este serviço não está disponível!")
    })

    btnDDD.addEventListener('touchstart', (btn) => {
        btn.preventDefault()
        alert("Este serviço não está disponível!")
    })

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

logoBtn.addEventListener('click', () => {
    sobre.classList.add('hide')
        removeResult()
        removeInput()
        conteinerContent.forEach((item) => {
            item.classList.remove('hide')
        })
        busca.forEach((item) => {
            item.classList.add('hide')
        })
})

logoBtn.addEventListener('touchstart', () => {
    event.preventDefault()
    sobre.classList.add('hide')
        removeResult()
        removeInput()
        conteinerContent.forEach((item) => {
            item.classList.remove('hide')
        })
        busca.forEach((item) => {
            item.classList.add('hide')
        })
})



buscaEndereco.addEventListener('click', (btn) => {
    searchResults(btn)
})
buscaEndereco.addEventListener('touchstart', (btn) => {
    event.preventDefault()
    searchResults(btn)
})

enviar.addEventListener('click', (btn) => {
    searchResults(btn)
})

enviar.addEventListener('touchstart', (btn) => {
    event.preventDefault()
    searchResults(btn)
})

btnVoltar.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        btn.preventDefault()
        sobre.classList.add('hide')
        removeResult()
        removeInput()
        conteinerContent.forEach((item) => {
            item.classList.remove('hide')
        })
        busca.forEach((item) => {
            item.classList.add('hide')
        })
    })

    btn.addEventListener('touchstart', (btn) => {
        event.preventDefault()
        btn.preventDefault()
        sobre.classList.add('hide')
        removeResult()
        removeInput()
        conteinerContent.forEach((item) => {
            item.classList.remove('hide')
        })
        busca.forEach((item) => {
            item.classList.add('hide')
        })
    })

})

btnUsar.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        if (i == 0) {
            radio[0].checked = true
        }
        toggleForm(botao)
    })
    botao.addEventListener('touchstart', () => {
        event.preventDefault()
        if (i == 0) {
            radio[0].checked = true
        }
        toggleForm(botao)
    })
})

btnHeader.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        console.log('clicou')
        if(window.innerWidth <= 900) {
           nav.classList.toggle('show')
        }
        if (!radio[0].checked && !radio[1].checked) {
            radio[0].checked = true
        }
        isChecked()
        toggleForm(botao)
        if (i !== indice) {
            removeInput()
            removeResult()
            indice = i
        }
        indice = i

    })
    botao.addEventListener('touchstart', () => {
        if(window.innerWidth <= 900) {
            nav.classList.toggle('show')
        }
        event.preventDefault()
        if (!radio[0].checked && !radio[1].checked) {
            radio[0].checked = true
        }
        isChecked()
        toggleForm(botao)
        if (i !== indice) {
            removeInput()
            removeResult()
            indice = i
        }
        indice = i

    })
})
radio.forEach((botao) => {
    botao.addEventListener('click', () => {
        isChecked()
        removeResult()
        removeInput()
    })
    botao.addEventListener('touchstart', () => {
        event.preventDefault()
        isChecked()
        removeResult()
        removeInput()
    })
})