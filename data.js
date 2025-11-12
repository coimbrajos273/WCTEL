// Arquivo de dados completo - Conteúdo do Guia Essencial expandido
// Inclui temas detalhados, calculadoras, tabelas, fórmulas e gráficos

const dados = {
    // Temas Essenciais - Conteúdo detalhado do Guia Essencial
    temas: [
        {
            titulo: "Epidemiologia e Indicadores de Saúde",
            categoria: "Epidemiologia",
            descricao: "Conceitos fundamentais de epidemiologia, indicadores de saúde e vigilância epidemiológica com fórmulas e exemplos práticos.",
            conteudo: `
                <div class="destaque-box">
                    <p><strong>A epidemiologia</strong> é a ciência que estuda a distribuição e os determinantes dos estados ou eventos relacionados à saúde em populações específicas, e a aplicação desses estudos no controle dos problemas de saúde.</p>
                </div>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Indicadores Epidemiológicos Fundamentais</h4>

                <div class="formula-box">
                    <div class="formula-title">Taxa de Incidência</div>
                    <div class="formula">Incidência = (Novos casos no período / População em risco) × 10ⁿ</div>
                    <p style="margin-top: 0.8rem; color: var(--texto-medio);">Mede o número de novos casos de uma doença em uma população durante um período específico. Expressa o risco de adoecimento.</p>
                </div>

                <div class="formula-box">
                    <div class="formula-title">Taxa de Prevalência</div>
                    <div class="formula">Prevalência = (Casos existentes / População total) × 10ⁿ</div>
                    <p style="margin-top: 0.8rem; color: var(--texto-medio);">Mede o número total de casos (novos + antigos) em um momento específico. Útil para doenças crônicas.</p>
                </div>

                <div class="comparacao-grid">
                    <div class="comparacao-item">
                        <h5>Incidência</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Novos casos</li>
                            <li>Mede risco</li>
                            <li>Período específico</li>
                            <li>Para doenças agudas</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>Prevalência</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Casos existentes</li>
                            <li>Mede carga</li>
                            <li>Momento específico</li>
                            <li>Para doenças crônicas</li>
                        </ul>
                    </div>
                </div>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Taxa de Mortalidade</h4>
                <div class="formula-box">
                    <div class="formula-title">Taxa de Mortalidade Geral</div>
                    <div class="formula">TMG = (Óbitos no período / População média) × 10ⁿ</div>
                </div>

                <div class="formula-box">
                    <div class="formula-title">Taxa de Mortalidade Específica</div>
                    <div class="formula">TME = (Óbitos por causa X / População em risco) × 10ⁿ</div>
                </div>

                <div class="exemplo-box">
                    <div class="exemplo-title">Exemplo Prático</div>
                    <p style="color: var(--texto-medio);">Em uma cidade com 100.000 habitantes, ocorreram 50 novos casos de dengue em 2023. A taxa de incidência de dengue foi:</p>
                    <div class="formula" style="margin: 1rem 0;">Incidência = (50 / 100.000) × 100.000 = 50 casos por 100.000 habitantes</div>
                </div>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Indicador</th>
                            <th>Fórmula</th>
                            <th>Uso Principal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Incidência</strong></td>
                            <td>Novos casos / Pop. em risco × 10ⁿ</td>
                            <td>Medir risco de adoecimento</td>
                        </tr>
                        <tr>
                            <td><strong>Prevalência</strong></td>
                            <td>Casos existentes / Pop. total × 10ⁿ</td>
                            <td>Medir carga da doença</td>
                        </tr>
                        <tr>
                            <td><strong>Mortalidade</strong></td>
                            <td>Óbitos / Pop. média × 10ⁿ</td>
                            <td>Avaliar letalidade</td>
                        </tr>
                        <tr>
                            <td><strong>Letalidade</strong></td>
                            <td>Óbitos / Casos × 100</td>
                            <td>Gravidade da doença</td>
                        </tr>
                    </tbody>
                </table>

                <div class="pontos-chave">
                    <h4>Pontos Chave para Memorizar</h4>
                    <ul>
                        <li>Incidência mede NOVOS casos (risco de adoecer)</li>
                        <li>Prevalência mede TODOS os casos (carga da doença)</li>
                        <li>Prevalência = Incidência × Duração (para doenças estáveis)</li>
                        <li>Taxa de mortalidade infantil: óbitos < 1 ano / nascidos vivos × 1000</li>
                        <li>Taxa de mortalidade materna: óbitos maternos / nascidos vivos × 100.000</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "Incidência = novos casos (mede risco)",
                "Prevalência = todos os casos (mede carga)",
                "Mortalidade = óbitos / população",
                "Letalidade = óbitos / casos da doença"
            ]
        },
        {
            titulo: "Imunização e Calendário Vacinal",
            categoria: "Prevenção",
            descricao: "Calendário vacinal completo, tipos de vacinas, contraindicações e estratégias de imunização.",
            conteudo: `
                <div class="destaque-box">
                    <p><strong>A vacinação</strong> é uma das medidas mais eficazes de saúde pública, responsável pela erradicação da varíola e controle de diversas doenças.</p>
                </div>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Tipos de Vacinas</h4>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Características</th>
                            <th>Exemplos</th>
                            <th>Contraindicações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Vivas Atenuadas</strong></td>
                            <td>Vírus/bactérias enfraquecidos</td>
                            <td>BCG, Tríplice viral, Varicela</td>
                            <td>Gestantes, imunodeprimidos</td>
                        </tr>
                        <tr>
                            <td><strong>Inativadas</strong></td>
                            <td>Vírus/bactérias mortos</td>
                            <td>Influenza, Poliomielite (Salk)</td>
                            <td>Alergia grave a componentes</td>
                        </tr>
                        <tr>
                            <td><strong>Subunitárias</strong></td>
                            <td>Partes do agente</td>
                            <td>Hepatite B, HPV</td>
                            <td>Alergia grave</td>
                        </tr>
                        <tr>
                            <td><strong>Toxoides</strong></td>
                            <td>Toxinas inativadas</td>
                            <td>Difteria, Tétano</td>
                            <td>Alergia grave</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Calendário Nacional de Vacinação - Principais Vacinas</h4>

                <div class="comparacao-grid">
                    <div class="comparacao-item">
                        <h5>Recém-nascidos</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>BCG (única dose)</li>
                            <li>Hepatite B (1ª dose)</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>2 meses</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Pentavalente (1ª)</li>
                            <li>Poliomielite (1ª)</li>
                            <li>Pneumocócica (1ª)</li>
                            <li>Rotavírus (1ª)</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>3 meses</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Meningocócica C (1ª)</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>4 meses</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Pentavalente (2ª)</li>
                            <li>Poliomielite (2ª)</li>
                            <li>Pneumocócica (2ª)</li>
                            <li>Rotavírus (2ª)</li>
                        </ul>
                    </div>
                </div>

                <div class="formula-box">
                    <div class="formula-title">Cobertura Vacinal</div>
                    <div class="formula">Cobertura = (Nº vacinados / População alvo) × 100</div>
                    <p style="margin-top: 0.8rem; color: var(--texto-medio);">Meta: ≥ 95% para eliminar doenças imunopreveníveis</p>
                </div>

                <div class="exemplo-box">
                    <div class="exemplo-title">Contraindicações Importantes</div>
                    <ul style="color: var(--texto-medio); line-height: 1.8;">
                        <li><strong>Vacinas vivas:</strong> gestantes, imunodeprimidos graves, alergia grave prévia</li>
                        <li><strong>Todas as vacinas:</strong> alergia anafilática a componentes, doença aguda grave</li>
                        <li><strong>Não contraindica:</strong> doença leve, amamentação, prematuridade, desnutrição leve</li>
                    </ul>
                </div>

                <div class="pontos-chave">
                    <h4>Pontos Chave</h4>
                    <ul>
                        <li>BCG: única dose ao nascer, cicatriz característica</li>
                        <li>Tríplice viral: 1ª dose aos 12 meses, 2ª aos 15 meses</li>
                        <li>HPV: meninas 9-14 anos (2 doses), meninos 11-14 anos</li>
                        <li>Cadeia de frio: 2-8°C (exceto BCG e febre amarela: -15°C)</li>
                        <li>Intervalo mínimo entre doses: respeitar calendário</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "BCG: única dose ao nascer",
                "Tríplice viral: 12 e 15 meses",
                "Cadeia de frio: 2-8°C",
                "Cobertura ideal: ≥ 95%"
            ]
        },
        {
            titulo: "Doenças Transmissíveis e Notificação",
            categoria: "Vigilância",
            descricao: "Prevenção, controle, notificação compulsória e medidas de isolamento.",
            conteudo: `
                <div class="destaque-box">
                    <p><strong>Doenças transmissíveis</strong> são aquelas causadas por agentes infecciosos que podem ser transmitidos de uma pessoa para outra ou de animais para pessoas.</p>
                </div>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Mecanismos de Transmissão</h4>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Via de Transmissão</th>
                            <th>Exemplos de Doenças</th>
                            <th>Medidas de Prevenção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Aérea/Respiratória</strong></td>
                            <td>Tuberculose, COVID-19, Influenza, Sarampo</td>
                            <td>Isolamento respiratório, máscaras, ventilação</td>
                        </tr>
                        <tr>
                            <td><strong>Fecal-Oral</strong></td>
                            <td>Hepatite A, Cólera, Rotavírus</td>
                            <td>Higiene, saneamento, água tratada</td>
                        </tr>
                        <tr>
                            <td><strong>Contato Direto</strong></td>
                            <td>Impetigo, Sarna, Herpes</td>
                            <td>Higiene pessoal, evitar contato</td>
                        </tr>
                        <tr>
                            <td><strong>Sexual</strong></td>
                            <td>HIV, Sífilis, HPV, Hepatite B</td>
                            <td>Preservativo, vacinação</td>
                        </tr>
                        <tr>
                            <td><strong>Parenteral</strong></td>
                            <td>Hepatite B, C, HIV</td>
                            <td>Material descartável, triagem</td>
                        </tr>
                        <tr>
                            <td><strong>Vetorial</strong></td>
                            <td>Dengue, Malária, Febre Amarela</td>
                            <td>Controle de vetores, vacinação</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Notificação Compulsória</h4>

                <div class="formula-box">
                    <div class="formula-title">Doenças de Notificação Imediata (24h)</div>
                    <p style="color: var(--texto-medio); margin-top: 0.5rem;">Sarampo, Rubéola, Poliomielite, Febre Amarela, Raiva humana, Botulismo, Cólera, Peste, Meningite, COVID-19</p>
                </div>

                <div class="exemplo-box">
                    <div class="exemplo-title">Período de Isolamento - Exemplos</div>
                    <ul style="color: var(--texto-medio); line-height: 1.8;">
                        <li><strong>Tuberculose:</strong> até 2 culturas negativas (mínimo 15 dias de tratamento)</li>
                        <li><strong>Sarampo:</strong> 5 dias após início do exantema</li>
                        <li><strong>Varicela:</strong> até todas as lesões secarem (5-7 dias)</li>
                        <li><strong>COVID-19:</strong> 10 dias após início dos sintomas (ou teste negativo)</li>
                    </ul>
                </div>

                <div class="pontos-chave">
                    <h4>Pontos Chave</h4>
                    <ul>
                        <li>Notificação imediata: doenças de eliminação/erradicação</li>
                        <li>Isolamento respiratório: doenças transmitidas por gotículas/aerossóis</li>
                        <li>Isolamento de contato: doenças de pele, diarreia</li>
                        <li>Quimioprofilaxia: para contatos de meningite, tuberculose, coqueluche</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "Notificação imediata: sarampo, pólio, febre amarela",
                "Isolamento respiratório: TB, COVID-19, influenza",
                "Quimioprofilaxia para contatos"
            ]
        },
        {
            titulo: "Saúde da Mulher - Atenção Integral",
            categoria: "Atenção Primária",
            descricao: "Pré-natal, prevenção de câncer, planejamento familiar e saúde reprodutiva.",
            conteudo: `
                <h4 style="color: var(--destaque);">Pré-Natal</h4>

                <div class="formula-box">
                    <div class="formula-title">Número Mínimo de Consultas</div>
                    <div class="formula">6 consultas (1 no 1º trimestre, 2 no 2º, 3 no 3º)</div>
                    <p style="margin-top: 0.8rem; color: var(--texto-medio);">Ideal: consulta mensal até 28 semanas, quinzenal até 36 semanas, semanal até o parto</p>
                </div>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Exame</th>
                            <th>Quando Realizar</th>
                            <th>Objetivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Hemograma</strong></td>
                            <td>1º trimestre e 28-30 semanas</td>
                            <td>Detectar anemia</td>
                        </tr>
                        <tr>
                            <td><strong>Glicemia de jejum</strong></td>
                            <td>1º trimestre e 24-28 semanas</td>
                            <td>Rastrear diabetes gestacional</td>
                        </tr>
                        <tr>
                            <td><strong>Sorologia (HIV, Sífilis, Hepatite B)</strong></td>
                            <td>1º trimestre e 3º trimestre</td>
                            <td>Prevenir transmissão vertical</td>
                        </tr>
                        <tr>
                            <td><strong>Ultrassom</strong></td>
                            <td>11-14 semanas e 20-24 semanas</td>
                            <td>Idade gestacional e malformações</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Prevenção de Câncer</h4>

                <div class="comparacao-grid">
                    <div class="comparacao-item">
                        <h5>Câncer de Colo de Útero</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Papanicolau: 25-64 anos</li>
                            <li>Início: 25 anos ou início sexual</li>
                            <li>Intervalo: anual (2 negativos) → trienal</li>
                            <li>Vacina HPV: 9-14 anos</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>Câncer de Mama</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Autoexame: mensal</li>
                            <li>Exame clínico: anual (40+ anos)</li>
                            <li>Mamografia: 50-69 anos (bienal)</li>
                            <li>Risco alto: início mais precoce</li>
                        </ul>
                    </div>
                </div>

                <div class="pontos-chave">
                    <h4>Pontos Chave</h4>
                    <ul>
                        <li>Pré-natal: mínimo 6 consultas, ideal mensal</li>
                        <li>Ácido fólico: 400mcg/dia (pré-concepção até 12 semanas)</li>
                        <li>Ferro: 40-60mg/dia a partir do 2º trimestre</li>
                        <li>Papanicolau: início aos 25 anos, trienal após 2 negativos</li>
                        <li>Mamografia: rastreamento 50-69 anos, bienal</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "Pré-natal: mínimo 6 consultas",
                "Papanicolau: 25-64 anos",
                "Mamografia: 50-69 anos (bienal)"
            ]
        },
        {
            titulo: "Saúde da Criança - Crescimento e Desenvolvimento",
            categoria: "Atenção Primária",
            descricao: "Acompanhamento do crescimento, desenvolvimento neuropsicomotor, aleitamento e imunização infantil.",
            conteudo: `
                <h4 style="color: var(--destaque);">Acompanhamento do Crescimento</h4>

                <div class="formula-box">
                    <div class="formula-title">Avaliação do Crescimento</div>
                    <p style="color: var(--texto-medio); margin-top: 0.5rem;">Utilizar curvas de crescimento da OMS (peso, altura, IMC por idade) e perímetro cefálico</p>
                </div>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Idade</th>
                            <th>Avaliação</th>
                            <th>Marcos Importantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Recém-nascido</strong></td>
                            <td>Peso, altura, PC, Teste do Pezinho</td>
                            <td>Reflexos primitivos, triagem auditiva</td>
                        </tr>
                        <tr>
                            <td><strong>1 mês</strong></td>
                            <td>Peso, altura, PC</td>
                            <td>Sustenta cabeça, fixa olhar</td>
                        </tr>
                        <tr>
                            <td><strong>3 meses</strong></td>
                            <td>Peso, altura, PC</td>
                            <td>Rola, sorri, emite sons</td>
                        </tr>
                        <tr>
                            <td><strong>6 meses</strong></td>
                            <td>Peso, altura, PC</td>
                            <td>Senta sem apoio, pega objetos</td>
                        </tr>
                        <tr>
                            <td><strong>12 meses</strong></td>
                            <td>Peso, altura, PC</td>
                            <td>Fica em pé, primeiras palavras</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Aleitamento Materno</h4>

                <div class="destaque-box">
                    <p><strong>Recomendações da OMS:</strong> Aleitamento materno exclusivo até 6 meses, complementado até 2 anos ou mais.</p>
                </div>

                <div class="comparacao-grid">
                    <div class="comparacao-item">
                        <h5>Benefícios para o Bebê</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Proteção imunológica</li>
                            <li>Reduz infecções</li>
                            <li>Melhor desenvolvimento</li>
                            <li>Reduz alergias</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>Benefícios para a Mãe</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Reduz câncer de mama</li>
                            <li>Ajuda no pós-parto</li>
                            <li>Vínculo afetivo</li>
                            <li>Econômico</li>
                        </ul>
                    </div>
                </div>

                <div class="pontos-chave">
                    <h4>Pontos Chave</h4>
                    <ul>
                        <li>Aleitamento exclusivo: 0-6 meses</li>
                        <li>Introdução alimentar: 6 meses (sinais de prontidão)</li>
                        <li>Teste do pezinho: 3-5 dias de vida</li>
                        <li>Triagem auditiva: até 1 mês</li>
                        <li>Curvas de crescimento: avaliar em cada consulta</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "Aleitamento exclusivo: 0-6 meses",
                "Teste do pezinho: 3-5 dias",
                "Acompanhamento mensal no 1º ano"
            ]
        },
        {
            titulo: "Saúde do Idoso - Atenção Geriátrica",
            categoria: "Atenção Primária",
            descricao: "Prevenção de quedas, polifarmácia, doenças crônicas e promoção do envelhecimento saudável.",
            conteudo: `
                <h4 style="color: var(--destaque);">Prevenção de Quedas</h4>

                <div class="formula-box">
                    <div class="formula-title">Fatores de Risco para Quedas</div>
                    <p style="color: var(--texto-medio); margin-top: 0.5rem;">Intrínsecos (do idoso) + Extrínsecos (ambientais)</p>
                </div>

                <table class="tabela-interativa">
                    <thead>
                        <tr>
                            <th>Fatores Intrínsecos</th>
                            <th>Fatores Extrínsecos</th>
                            <th>Medidas de Prevenção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alterações visuais, auditivas</td>
                            <td>Iluminação inadequada</td>
                            <td>Melhorar iluminação</td>
                        </tr>
                        <tr>
                            <td>Fraqueza muscular</td>
                            <td>Tapetes soltos</td>
                            <td>Remover obstáculos</td>
                        </tr>
                        <tr>
                            <td>Medicações (hipotensores, sedativos)</td>
                            <td>Pisos escorregadios</td>
                            <td>Barras de apoio</td>
                        </tr>
                        <tr>
                            <td>Doenças neurológicas</td>
                            <td>Móveis instáveis</td>
                            <td>Exercícios de equilíbrio</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Polifarmácia</h4>

                <div class="destaque-box">
                    <p><strong>Polifarmácia:</strong> uso de 5 ou mais medicamentos simultaneamente. Aumenta risco de interações, efeitos adversos e quedas.</p>
                </div>

                <div class="exemplo-box">
                    <div class="exemplo-title">Estratégias de Prevenção</div>
                    <ul style="color: var(--texto-medio); line-height: 1.8;">
                        <li>Revisão periódica da farmacoterapia</li>
                        <li>Desprescrever quando possível</li>
                        <li>Simplificar esquemas</li>
                        <li>Educação sobre uso correto</li>
                        <li>Monitorar interações medicamentosas</li>
                    </ul>
                </div>

                <h4 style="color: var(--destaque); margin-top: 2rem;">Rastreamento em Idosos</h4>

                <div class="comparacao-grid">
                    <div class="comparacao-item">
                        <h5>Exames Anuais</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Pressão arterial</li>
                            <li>Glicemia</li>
                            <li>Colesterol</li>
                            <li>Função renal</li>
                        </ul>
                    </div>
                    <div class="comparacao-item">
                        <h5>Vacinação</h5>
                        <ul style="color: var(--texto-medio); line-height: 1.8;">
                            <li>Influenza: anual</li>
                            <li>Pneumocócica: 60+ anos</li>
                            <li>COVID-19: conforme calendário</li>
                            <li>dT: a cada 10 anos</li>
                        </ul>
                    </div>
                </div>

                <div class="pontos-chave">
                    <h4>Pontos Chave</h4>
                    <ul>
                        <li>Quedas: principal causa de morbimortalidade</li>
                        <li>Polifarmácia: ≥ 5 medicamentos</li>
                        <li>Rastreamento: pressão, glicemia, colesterol anuais</li>
                        <li>Vacinação: influenza anual, pneumocócica 60+</li>
                    </ul>
                </div>
            `,
            pontosChave: [
                "Quedas: principal causa de lesões",
                "Polifarmácia: ≥ 5 medicamentos",
                "Rastreamento anual de doenças crônicas"
            ]
        }
    ],

    // Calculadoras Interativas
    calculadoras: [
        {
            id: "incidencia",
            titulo: "Taxa de Incidência",
            descricao: "Calcule a taxa de incidência de uma doença",
            formula: "Incidência = (Novos casos / População em risco) × 10ⁿ",
            inputs: [
                { id: "novosCasos", label: "Novos casos no período", tipo: "number" },
                { id: "populacao", label: "População em risco", tipo: "number" },
                { id: "expoente", label: "Expoente (ex: 1000, 10000, 100000)", tipo: "number", valor: 100000 }
            ],
            calcular: function(vals) {
                if (!vals.novosCasos || !vals.populacao) return null;
                const resultado = (vals.novosCasos / vals.populacao) * (vals.expoente || 100000);
                return {
                    valor: resultado.toFixed(2),
                    unidade: `casos por ${vals.expoente || 100000} habitantes`,
                    interpretacao: `A taxa de incidência é de ${resultado.toFixed(2)} casos por ${vals.expoente || 100000} habitantes no período analisado.`
                };
            },
            explicacao: "A incidência mede o número de novos casos de uma doença em uma população durante um período específico. É útil para medir o risco de adoecimento."
        },
        {
            id: "prevalencia",
            titulo: "Taxa de Prevalência",
            descricao: "Calcule a taxa de prevalência de uma doença",
            formula: "Prevalência = (Casos existentes / População total) × 10ⁿ",
            inputs: [
                { id: "casosExistentes", label: "Casos existentes", tipo: "number" },
                { id: "populacao", label: "População total", tipo: "number" },
                { id: "expoente", label: "Expoente (ex: 1000, 10000, 100000)", tipo: "number", valor: 100000 }
            ],
            calcular: function(vals) {
                if (!vals.casosExistentes || !vals.populacao) return null;
                const resultado = (vals.casosExistentes / vals.populacao) * (vals.expoente || 100000);
                return {
                    valor: resultado.toFixed(2),
                    unidade: `casos por ${vals.expoente || 100000} habitantes`,
                    interpretacao: `A taxa de prevalência é de ${resultado.toFixed(2)} casos por ${vals.expoente || 100000} habitantes.`
                };
            },
            explicacao: "A prevalência mede o número total de casos (novos + antigos) em um momento específico. É útil para medir a carga da doença."
        },
        {
            id: "mortalidade",
            titulo: "Taxa de Mortalidade",
            descricao: "Calcule a taxa de mortalidade",
            formula: "Mortalidade = (Óbitos / População média) × 10ⁿ",
            inputs: [
                { id: "obitos", label: "Número de óbitos", tipo: "number" },
                { id: "populacao", label: "População média", tipo: "number" },
                { id: "expoente", label: "Expoente (ex: 1000, 10000, 100000)", tipo: "number", valor: 100000 }
            ],
            calcular: function(vals) {
                if (!vals.obitos || !vals.populacao) return null;
                const resultado = (vals.obitos / vals.populacao) * (vals.expoente || 100000);
                return {
                    valor: resultado.toFixed(2),
                    unidade: `óbitos por ${vals.expoente || 100000} habitantes`,
                    interpretacao: `A taxa de mortalidade é de ${resultado.toFixed(2)} óbitos por ${vals.expoente || 100000} habitantes.`
                };
            },
            explicacao: "A taxa de mortalidade mede o número de óbitos em relação à população. Pode ser geral ou específica por causa."
        },
        {
            id: "letalidade",
            titulo: "Taxa de Letalidade",
            descricao: "Calcule a taxa de letalidade de uma doença",
            formula: "Letalidade = (Óbitos / Casos da doença) × 100",
            inputs: [
                { id: "obitos", label: "Número de óbitos", tipo: "number" },
                { id: "casos", label: "Número de casos da doença", tipo: "number" }
            ],
            calcular: function(vals) {
                if (!vals.obitos || !vals.casos || vals.casos === 0) return null;
                const resultado = (vals.obitos / vals.casos) * 100;
                return {
                    valor: resultado.toFixed(2),
                    unidade: "%",
                    interpretacao: `A taxa de letalidade é de ${resultado.toFixed(2)}%, ou seja, ${resultado.toFixed(2)}% dos casos resultam em óbito.`
                };
            },
            explicacao: "A letalidade mede a proporção de casos de uma doença que resultam em óbito. Indica a gravidade da doença."
        },
        {
            id: "cobertura",
            titulo: "Cobertura Vacinal",
            descricao: "Calcule a cobertura vacinal",
            formula: "Cobertura = (Vacinados / População alvo) × 100",
            inputs: [
                { id: "vacinados", label: "Número de vacinados", tipo: "number" },
                { id: "populacao", label: "População alvo", tipo: "number" }
            ],
            calcular: function(vals) {
                if (!vals.vacinados || !vals.populacao) return null;
                const resultado = (vals.vacinados / vals.populacao) * 100;
                return {
                    valor: resultado.toFixed(2),
                    unidade: "%",
                    interpretacao: `A cobertura vacinal é de ${resultado.toFixed(2)}%. Meta recomendada: ≥ 95% para eliminar doenças.`
                };
            },
            explicacao: "A cobertura vacinal mede a proporção da população alvo que foi vacinada. Meta: ≥ 95% para eliminar doenças imunopreveníveis."
        },
        {
            id: "imc",
            titulo: "Índice de Massa Corporal (IMC)",
            descricao: "Calcule o IMC",
            formula: "IMC = Peso (kg) / Altura (m)²",
            inputs: [
                { id: "peso", label: "Peso (kg)", tipo: "number", step: "0.1" },
                { id: "altura", label: "Altura (m)", tipo: "number", step: "0.01" }
            ],
            calcular: function(vals) {
                if (!vals.peso || !vals.altura || vals.altura === 0) return null;
                const imc = vals.peso / (vals.altura * vals.altura);
                let classificacao = "";
                if (imc < 18.5) classificacao = "Abaixo do peso";
                else if (imc < 25) classificacao = "Peso normal";
                else if (imc < 30) classificacao = "Sobrepeso";
                else if (imc < 35) classificacao = "Obesidade grau I";
                else if (imc < 40) classificacao = "Obesidade grau II";
                else classificacao = "Obesidade grau III";
                
                return {
                    valor: imc.toFixed(2),
                    unidade: "kg/m²",
                    interpretacao: `IMC: ${imc.toFixed(2)} kg/m² - Classificação: ${classificacao}`
                };
            },
            explicacao: "O IMC é uma medida de relação entre peso e altura. Valores normais: 18,5-24,9 kg/m²."
        }
    ],

    // Questões - Preencha com o conteúdo do PREVUNICAMP
    questoes: [
        {
            tema: "Epidemiologia e Indicadores de Saúde",
            enunciado: "A incidência de uma doença refere-se a:",
            alternativas: [
                "Número total de casos existentes em um momento",
                "Número de novos casos em um período determinado",
                "Taxa de mortalidade por uma doença",
                "Número de casos curados",
                "Prevalência pontual da doença"
            ],
            respostaCorreta: 1,
            explicacao: "A incidência mede o número de novos casos de uma doença em uma população durante um período específico, sendo fundamental para avaliar o risco de adoecimento."
        },
        {
            tema: "Imunização e Calendário Vacinal",
            enunciado: "Qual das seguintes vacinas é contraindicada em gestantes?",
            alternativas: [
                "Hepatite B",
                "Influenza",
                "dT (difteria e tétano)",
                "Tríplice viral (sarampo, caxumba, rubéola)",
                "Pneumocócica"
            ],
            respostaCorreta: 3,
            explicacao: "A vacina tríplice viral contém vírus vivos atenuados e é contraindicada na gestação devido ao risco teórico de infecção fetal. As outras vacinas listadas são seguras durante a gestação."
        },
        {
            tema: "Doenças Transmissíveis e Notificação",
            enunciado: "A transmissão da tuberculose ocorre principalmente por:",
            alternativas: [
                "Via fecal-oral",
                "Via respiratória (gotículas)",
                "Contato direto com lesões",
                "Transfusão sanguínea",
                "Via sexual"
            ],
            respostaCorreta: 1,
            explicacao: "A tuberculose é transmitida principalmente por via aérea, através de gotículas respiratórias eliminadas por pacientes com tuberculose pulmonar ativa durante a tosse, espirro ou fala."
        },
        {
            tema: "Saúde da Mulher - Atenção Integral",
            enunciado: "O exame de Papanicolau deve ser realizado em mulheres:",
            alternativas: [
                "Apenas após os 50 anos",
                "A partir dos 25 anos ou início da vida sexual",
                "Apenas quando há sintomas",
                "Uma vez na vida",
                "Apenas durante a gestação"
            ],
            respostaCorreta: 1,
            explicacao: "O rastreamento do câncer de colo de útero deve iniciar aos 25 anos ou com o início da vida sexual, conforme as diretrizes do Ministério da Saúde, com periodicidade adequada."
        },
        {
            tema: "Saúde da Criança - Crescimento e Desenvolvimento",
            enunciado: "O aleitamento materno exclusivo deve ser mantido até:",
            alternativas: [
                "3 meses",
                "6 meses",
                "9 meses",
                "12 meses",
                "18 meses"
            ],
            respostaCorreta: 1,
            explicacao: "A Organização Mundial da Saúde recomenda aleitamento materno exclusivo até os 6 meses de idade, quando então devem ser introduzidos alimentos complementares, mantendo o leite materno até 2 anos ou mais."
        },
        {
            tema: "Saúde do Idoso - Atenção Geriátrica",
            enunciado: "A principal causa de quedas em idosos está relacionada a:",
            alternativas: [
                "Apenas fatores ambientais",
                "Fatores intrínsecos (do próprio idoso) e extrínsecos (ambientais)",
                "Apenas doenças neurológicas",
                "Falta de exercícios físicos",
                "Uso exclusivo de medicamentos"
            ],
            respostaCorreta: 1,
            explicacao: "As quedas em idosos resultam da interação entre fatores intrínsecos (alterações fisiológicas do envelhecimento, doenças, medicações) e extrínsecos (barreiras arquitetônicas, iluminação inadequada, calçados inadequados)."
        }
    ]
};
