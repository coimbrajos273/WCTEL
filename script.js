// Estado da aplicação
const state = {
    temas: [],
    questoes: [],
    calculadoras: [],
    respostas: {},
    progresso: {},
    progressoChart: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarProgresso();
    carregarDados();
    inicializarNavegacao();
    inicializarQuestoes();
    inicializarBusca();
    atualizarProgresso();
});

// Carregar dados do arquivo data.js
function carregarDados() {
    if (typeof dados !== 'undefined') {
        state.temas = dados.temas || [];
        state.questoes = dados.questoes || [];
        state.calculadoras = dados.calculadoras || [];
        renderizarTemas();
        renderizarCalculadoras();
        renderizarQuestoes();
        popularFiltroTemas();
    }
}

// Navegação entre abas
function inicializarNavegacao() {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Atualizar tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Atualizar sections
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');

            // Atualizar progresso se necessário
            if (targetTab === 'progresso') {
                atualizarProgresso();
                atualizarGraficoProgresso();
            }
        });
    });
}

// Inicializar busca
function inicializarBusca() {
    const buscaInput = document.getElementById('buscaTemas');
    if (buscaInput) {
        buscaInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            filtrarTemas(termo);
        });
    }
}

// Filtrar temas por busca
function filtrarTemas(termo) {
    const temasGrid = document.getElementById('temasGrid');
    if (!temasGrid) return;

    const cards = temasGrid.querySelectorAll('.tema-card');
    cards.forEach(card => {
        const texto = card.textContent.toLowerCase();
        card.style.display = texto.includes(termo) ? 'block' : 'none';
    });
}

// Renderizar temas
function renderizarTemas() {
    const temasGrid = document.getElementById('temasGrid');
    if (!temasGrid) return;

    temasGrid.innerHTML = '';

    state.temas.forEach((tema, index) => {
        const temaCard = document.createElement('div');
        temaCard.className = 'tema-card';
        temaCard.innerHTML = `
            <h3>${tema.titulo}</h3>
            <p>${tema.descricao || 'Clique para ver mais detalhes sobre este tema.'}</p>
            <span class="tema-badge">${tema.categoria || 'Geral'}</span>
        `;
        temaCard.addEventListener('click', () => abrirModalTema(tema));
        temasGrid.appendChild(temaCard);
    });
}

// Renderizar calculadoras
function renderizarCalculadoras() {
    const calculadorasGrid = document.getElementById('calculadorasGrid');
    if (!calculadorasGrid) return;

    calculadorasGrid.innerHTML = '';

    state.calculadoras.forEach((calc) => {
        const calcCard = document.createElement('div');
        calcCard.className = 'calculadora-card';
        
        let inputsHTML = calc.inputs.map(input => {
            const valor = input.valor ? `value="${input.valor}"` : '';
            const step = input.step ? `step="${input.step}"` : '';
            return `
                <div class="calculadora-input-group">
                    <label for="${calc.id}-${input.id}">${input.label}</label>
                    <input 
                        type="${input.tipo}" 
                        id="${calc.id}-${input.id}" 
                        ${valor} 
                        ${step}
                        placeholder="Digite o valor"
                    >
                </div>
            `;
        }).join('');

        calcCard.innerHTML = `
            <h3>${calc.titulo}</h3>
            <p style="color: var(--texto-medio); margin-bottom: 1rem;">${calc.descricao}</p>
            <div class="formula">${calc.formula}</div>
            ${inputsHTML}
            <button class="calculadora-btn" onclick="calcular('${calc.id}')">Calcular</button>
            <div class="calculadora-resultado" id="${calc.id}-resultado">
                <div class="resultado-label">Resultado:</div>
                <div class="resultado-valor" id="${calc.id}-valor"></div>
                <div class="resultado-label" id="${calc.id}-interpretacao"></div>
            </div>
            <div class="calculadora-explicacao">${calc.explicacao}</div>
        `;

        calculadorasGrid.appendChild(calcCard);
    });
}

// Função global para calcular (chamada pelos botões)
window.calcular = function(calcId) {
    const calculadora = state.calculadoras.find(c => c.id === calcId);
    if (!calculadora) return;

    const valores = {};
    calculadora.inputs.forEach(input => {
        const elemento = document.getElementById(`${calcId}-${input.id}`);
        if (elemento) {
            valores[input.id] = parseFloat(elemento.value) || elemento.value;
        }
    });

    const resultado = calculadora.calcular(valores);
    if (resultado) {
        const resultadoDiv = document.getElementById(`${calcId}-resultado`);
        const valorDiv = document.getElementById(`${calcId}-valor`);
        const interpretacaoDiv = document.getElementById(`${calcId}-interpretacao`);

        if (resultadoDiv && valorDiv && interpretacaoDiv) {
            valorDiv.textContent = `${resultado.valor} ${resultado.unidade}`;
            interpretacaoDiv.textContent = resultado.interpretacao;
            resultadoDiv.classList.add('show');
        }
    }
};

// Abrir modal com explicação do tema
function abrirModalTema(tema) {
    const modal = document.getElementById('modalExplicacao');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>${tema.titulo}</h3>
        ${tema.conteudo ? `<div class="tema-conteudo">${tema.conteudo}</div>` : ''}
        ${tema.pontosChave ? `
            <h4 style="margin-top: 1.5rem; color: var(--destaque);">Pontos Chave:</h4>
            <ul style="margin-left: 1.5rem; color: var(--texto-medio);">
                ${tema.pontosChave.map(ponto => `<li>${ponto}</li>`).join('')}
            </ul>
        ` : ''}
    `;

    modal.classList.add('show');
}

// Fechar modal
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modalExplicacao');
    if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('show');
    }
});

// Popular filtro de temas
function popularFiltroTemas() {
    const filtro = document.getElementById('filtroTema');
    if (!filtro) return;

    const temasUnicos = [...new Set(state.questoes.map(q => q.tema))];
    temasUnicos.forEach(tema => {
        const option = document.createElement('option');
        option.value = tema;
        option.textContent = tema;
        filtro.appendChild(option);
    });

    filtro.addEventListener('change', () => {
        renderizarQuestoes();
    });
}

// Renderizar questões
function renderizarQuestoes() {
    const container = document.getElementById('questoesContainer');
    const filtro = document.getElementById('filtroTema');
    if (!container) return;

    const temaFiltro = filtro ? filtro.value : 'todos';
    const questoesFiltradas = temaFiltro === 'todos' 
        ? state.questoes.map((q, idx) => ({ questao: q, indexOriginal: idx }))
        : state.questoes
            .map((q, idx) => ({ questao: q, indexOriginal: idx }))
            .filter(item => item.questao.tema === temaFiltro);

    container.innerHTML = '';
    atualizarEstatisticasQuestoes(questoesFiltradas.length);

    questoesFiltradas.forEach((item, index) => {
        const questaoCard = criarCardQuestao(item.questao, item.indexOriginal, index);
        container.appendChild(questaoCard);
    });
}

// Criar card de questão
function criarCardQuestao(questao, indexOriginal, indexExibicao) {
    const card = document.createElement('div');
    const questaoId = `questao-${indexOriginal}`;
    const respondida = state.respostas[questaoId] !== undefined;
    const acertou = respondida && state.respostas[questaoId] === questao.respostaCorreta;

    card.className = `questao-card ${respondida ? (acertou ? 'acertou' : 'errou') : ''}`;
    card.id = questaoId;

    card.innerHTML = `
        <div class="questao-header">
            <span class="questao-numero">Questão ${indexExibicao + 1}</span>
            <span class="questao-tema">${questao.tema}</span>
        </div>
        <div class="questao-enunciado">${questao.enunciado}</div>
        <div class="alternativas">
            ${questao.alternativas.map((alt, altIndex) => {
                const altId = `${questaoId}-alt-${altIndex}`;
                const letra = String.fromCharCode(65 + altIndex); // A, B, C, D, E
                const marcada = state.respostas[questaoId] === altIndex;
                let classeAlt = '';
                
                if (respondida) {
                    if (altIndex === questao.respostaCorreta) {
                        classeAlt = 'correta';
                    } else if (marcada && altIndex !== questao.respostaCorreta) {
                        classeAlt = 'incorreta';
                    }
                }

                return `
                    <label class="alternativa ${classeAlt}" for="${altId}">
                        <input 
                            type="radio" 
                            name="${questaoId}" 
                            id="${altId}"
                            value="${altIndex}"
                            ${marcada ? 'checked' : ''}
                            ${respondida ? 'disabled' : ''}
                        >
                        <span><strong>${letra})</strong> ${alt}</span>
                    </label>
                `;
            }).join('')}
        </div>
        ${respondida ? criarFeedback(questao, acertou) : ''}
    `;

    // Adicionar evento de resposta
    if (!respondida) {
        const radios = card.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                responderQuestao(questaoId, parseInt(radio.value), questao);
            });
        });
    }

    return card;
}

// Criar feedback da questão
function criarFeedback(questao, acertou) {
    return `
        <div class="questao-feedback show ${acertou ? 'acertou' : 'errou'}">
            <h4>${acertou ? '✓ Resposta Correta!' : '✗ Resposta Incorreta'}</h4>
            ${questao.explicacao ? `
                <div class="questao-explicacao">
                    <strong>Explicação:</strong> ${questao.explicacao}
                </div>
            ` : ''}
        </div>
    `;
}

// Responder questão
function responderQuestao(questaoId, resposta, questao) {
    state.respostas[questaoId] = resposta;
    const acertou = resposta === questao.respostaCorreta;

    // Atualizar progresso do tema
    if (!state.progresso[questao.tema]) {
        state.progresso[questao.tema] = { total: 0, acertos: 0 };
    }
    state.progresso[questao.tema].total++;
    if (acertou) {
        state.progresso[questao.tema].acertos++;
    }

    // Salvar no localStorage
    salvarProgresso();

    // Re-renderizar a questão
    const card = document.getElementById(questaoId);
    const container = card.parentElement;
    const indexExibicao = Array.from(container.children).indexOf(card);
    const indexOriginal = parseInt(questaoId.split('-')[1]);
    const questaoOriginal = state.questoes[indexOriginal];
    const novoCard = criarCardQuestao(questaoOriginal, indexOriginal, indexExibicao);
    container.replaceChild(novoCard, card);

    // Atualizar estatísticas
    atualizarProgresso();
}

// Atualizar estatísticas das questões
function atualizarEstatisticasQuestoes(total) {
    const totalEl = document.getElementById('questoesTotal');
    const acertadasEl = document.getElementById('questoesAcertadas');
    
    if (totalEl) totalEl.textContent = `Total: ${total}`;
    
    // Contar acertos baseado nos IDs salvos
    let acertadas = 0;
    Object.keys(state.respostas).forEach(questaoId => {
        const indexOriginal = parseInt(questaoId.split('-')[1]);
        const questao = state.questoes[indexOriginal];
        if (questao && state.respostas[questaoId] === questao.respostaCorreta) {
            acertadas++;
        }
    });
    
    if (acertadasEl) acertadasEl.textContent = `Acertadas: ${acertadas}`;
}

// Atualizar progresso
function atualizarProgresso() {
    const total = Object.keys(state.respostas).length;
    let acertos = 0;
    Object.keys(state.respostas).forEach(questaoId => {
        const indexOriginal = parseInt(questaoId.split('-')[1]);
        const questao = state.questoes[indexOriginal];
        if (questao && state.respostas[questaoId] === questao.respostaCorreta) {
            acertos++;
        }
    });
    const erros = total - acertos;
    const percentual = total > 0 ? Math.round((acertos / total) * 100) : 0;

    // Atualizar estatísticas gerais
    const statTotal = document.getElementById('statTotal');
    const statAcertos = document.getElementById('statAcertos');
    const statErros = document.getElementById('statErros');
    const statPercentual = document.getElementById('statPercentual');

    if (statTotal) statTotal.textContent = total;
    if (statAcertos) statAcertos.textContent = acertos;
    if (statErros) statErros.textContent = erros;
    if (statPercentual) statPercentual.textContent = `${percentual}%`;

    // Atualizar progresso por tema
    renderizarProgressoTemas();
    
    // Atualizar gráfico se estiver na aba de progresso
    const progressoSection = document.getElementById('progresso');
    if (progressoSection && progressoSection.classList.contains('active')) {
        atualizarGraficoProgresso();
    }
}

// Renderizar progresso por tema
function renderizarProgressoTemas() {
    const container = document.getElementById('temasProgresso');
    if (!container) return;

    container.innerHTML = '';

    Object.keys(state.progresso).forEach(tema => {
        const progresso = state.progresso[tema];
        const percentual = progresso.total > 0 
            ? Math.round((progresso.acertos / progresso.total) * 100) 
            : 0;

        const item = document.createElement('div');
        item.className = 'tema-progresso-item';
        item.innerHTML = `
            <div class="tema-progresso-header">
                <span>${tema}</span>
                <span>${progresso.acertos}/${progresso.total} (${percentual}%)</span>
            </div>
            <div class="progresso-bar">
                <div class="progresso-bar-fill" style="width: ${percentual}%"></div>
            </div>
        `;
        container.appendChild(item);
    });
}

// Atualizar gráfico de progresso
function atualizarGraficoProgresso() {
    const canvas = document.getElementById('progressoChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Destruir gráfico anterior se existir
    if (state.progressoChart) {
        state.progressoChart.destroy();
    }

    const total = Object.keys(state.respostas).length;
    let acertos = 0;
    Object.keys(state.respostas).forEach(questaoId => {
        const indexOriginal = parseInt(questaoId.split('-')[1]);
        const questao = state.questoes[indexOriginal];
        if (questao && state.respostas[questaoId] === questao.respostaCorreta) {
            acertos++;
        }
    });
    const erros = total - acertos;

    state.progressoChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [acertos, erros],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(244, 67, 54, 0.8)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(244, 67, 54, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e8f4f8',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percent = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${label}: ${value} (${percent}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Salvar progresso no localStorage
function salvarProgresso() {
    try {
        localStorage.setItem('prevunicamp_progresso', JSON.stringify({
            respostas: state.respostas,
            progresso: state.progresso
        }));
    } catch (e) {
        console.error('Erro ao salvar progresso:', e);
    }
}

// Carregar progresso do localStorage
function carregarProgresso() {
    try {
        const salvo = localStorage.getItem('prevunicamp_progresso');
        if (salvo) {
            const dados = JSON.parse(salvo);
            state.respostas = dados.respostas || {};
            state.progresso = dados.progresso || {};
        }
    } catch (e) {
        console.error('Erro ao carregar progresso:', e);
    }
}


