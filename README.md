# Site de Preparação PREVUNICAMP - Medicina Preventiva

Site interativo e educativo para aprendizado dos temas de Medicina Preventiva, focado na preparação para a prova PREVUNICAMP.

## 🎨 Características

- **Design Moderno**: Paleta de cores azul escuro e preto com letras claras
- **Totalmente Interativo**: Questões com feedback imediato e explicações
- **Sistema de Progresso**: Acompanhamento de desempenho por tema
- **Educativo e Direto**: Focado no aprendizado efetivo
- **Sem Login**: Acesso aberto ao público

## 📁 Estrutura de Arquivos

```
prevsite/
├── index.html          # Estrutura principal do site
├── styles.css          # Estilos e design
├── script.js           # Lógica e interatividade
├── data.js             # Dados (temas e questões) - PREENCHER AQUI
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Preencher os Dados**: Abra o arquivo `data.js` e preencha com o conteúdo dos PDFs:
   - **Temas**: Use o conteúdo do "Guia Essencial Prova Medicina Preventiva.pdf"
   - **Questões**: Use o conteúdo do "PREVUNICAMP.pdf"

2. **Abrir o Site**: Abra o arquivo `index.html` em um navegador moderno

3. **Navegação**:
   - **Temas Essenciais**: Clique nos cards para ver explicações detalhadas
   - **Questões Práticas**: Responda as questões e veja feedback imediato
   - **Meu Progresso**: Acompanhe seu desempenho e estatísticas

## 📝 Formato dos Dados

### Temas (array `temas`)

```javascript
{
    titulo: "Nome do Tema",
    categoria: "Categoria (ex: Epidemiologia)",
    descricao: "Descrição breve",
    conteudo: "Conteúdo detalhado em HTML",
    pontosChave: [
        "Ponto chave 1",
        "Ponto chave 2"
    ]
}
```

### Questões (array `questoes`)

```javascript
{
    tema: "Nome do Tema (deve corresponder a um tema existente)",
    enunciado: "Texto da questão",
    alternativas: [
        "Alternativa A",
        "Alternativa B",
        "Alternativa C",
        "Alternativa D",
        "Alternativa E"
    ],
    respostaCorreta: 0, // Índice da alternativa correta (0=A, 1=B, 2=C, 3=D, 4=E)
    explicacao: "Explicação detalhada da resposta correta"
}
```

## 💾 Funcionalidades

- ✅ Sistema de progresso salvo no navegador (localStorage)
- ✅ Filtro de questões por tema
- ✅ Feedback visual imediato (verde para acerto, vermelho para erro)
- ✅ Explicações detalhadas após responder
- ✅ Estatísticas de desempenho
- ✅ Progresso por tema
- ✅ Design responsivo (funciona em mobile)

## 🎯 Próximos Passos

1. Extrair o conteúdo dos PDFs
2. Preencher o arquivo `data.js` com todos os temas e questões
3. Testar todas as funcionalidades
4. Personalizar se necessário

## 📧 MedTask

O site inclui um botão de call-to-action no final direcionando para o MedTask, incentivando os alunos a conhecerem mais sobre o cursinho completo.

---

**Desenvolvido para aprendizado efetivo e preparação completa!** 🎓

