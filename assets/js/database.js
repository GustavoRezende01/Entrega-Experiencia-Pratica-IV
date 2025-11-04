// assets/js/database.js
// Exporta a variável para ser usada em outros módulos.

export const projectsDB = [
    {
        id: 1,
        title: "Inclusão Digital para a Terceira Idade",
        image: "assets/imagens/pexels-marcus-aurelius-6787956.jpg", 
        description: "Capacitamos idosos a usar smartphones e computadores para se conectarem com a família e acessarem serviços essenciais online.",
        goal: 5000,
        raised: 3750,
        volunteersNeeded: 5,
        category: "Educação",
        tags: ["Idosos", "Tecnologia", "Inclusão Social"]
    },
    {
        id: 2,
        title: "Programação para Jovens",
        image: "assets/imagens/pexels-cottonbro-4709285.jpg",
        description: "Oferecemos cursos de lógica de programação e desenvolvimento web para jovens de comunidades carentes, preparando-os para o mercado de trabalho.",
        goal: 12000,
        raised: 8200,
        volunteersNeeded: 3,
        category: "Empregabilidade",
        tags: ["Jovens", "Educação", "Carreira"]
    },
    {
        id: 3,
        title: "Horta Comunitária Sustentável",
        image: "assets/imagens/pexels-kampus-7658794.jpg",
        description: "Criamos e mantemos hortas em espaços urbanos, promovendo segurança alimentar e educação ambiental para a comunidade local.",
        goal: 3500,
        raised: 3500,
        volunteersNeeded: 10,
        category: "Meio Ambiente",
        tags: ["Sustentabilidade", "Comunidade"]
    }
];