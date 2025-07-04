# Lumen Website

Um site moderno e responsivo para a empresa Lumen, especializada em desenvolvimento de software e soluções tecnológicas.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional inspirada nos melhores sites do setor
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Modo Escuro**: Toggle entre modo claro e escuro
- **Multilíngue**: Suporte para 24 idiomas diferentes
- **Animações Suaves**: Transições e animações para melhor experiência do usuário
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas

## 🎨 Design

O site utiliza uma paleta de cores azul e amarelo, mantendo a identidade visual da empresa:

- **Azul Primário**: #0066cc
- **Azul Escuro**: #004499  
- **Amarelo Primário**: #ffcc00
- **Amarelo Escuro**: #e6b800

## 📱 Páginas

### Home
- **Hero Section**: Apresentação impactante da empresa
- **Serviços**: 6 principais serviços oferecidos
- **Setores**: Especialização em diferentes indústrias
- **Sobre**: Informações da empresa e estatísticas

### Outras Páginas
- **Nossos Serviços**: Detalhamento completo dos serviços
- **Seja Nosso Parceiro**: Informações para parcerias
- **Sobre Nós**: História e valores da empresa
- **Junte-se a Nós**: Oportunidades de carreira
- **Contatos**: Informações de contato

## 🛠️ Tecnologias

- **React 18**: Framework principal
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **React Router**: Navegação entre páginas
- **Lucide React**: Ícones modernos
- **CSS Custom Properties**: Sistema de design consistente

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Build para produção**:
   ```bash
   npm run build
   ```

4. **Preview do build**:
   ```bash
   npm run preview
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas do site
│   ├── Home.tsx        # Página inicial
│   ├── OurServices.tsx # Serviços
│   ├── AboutUs.tsx     # Sobre nós
│   ├── JoinUs.tsx      # Carreiras
│   ├── PartnerWithUs.tsx # Parcerias
│   └── Contacts.tsx    # Contatos
├── i18n/               # Internacionalização
│   └── translations.ts # Traduções
├── assets/             # Recursos estáticos
│   └── images/         # Imagens
├── App.tsx             # Componente principal
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

## 🌍 Idiomas Suportados

- Português (Brasil)
- Inglês
- Espanhol
- Alemão
- Francês
- Italiano
- Japonês
- Coreano
- Chinês
- E mais 15 idiomas...

## 🎯 Funcionalidades Principais

### Navegação
- Header fixo com scroll automático
- Links de navegação responsivos
- Indicador de página ativa

### Modo Escuro
- Toggle automático
- Persistência de preferência
- Transições suaves

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Navegação adaptativa

### Performance
- Lazy loading de componentes
- Otimização de imagens
- CSS otimizado

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_APP_TITLE=Lumen Website
VITE_APP_DESCRIPTION=Software Development Solutions
```

### Personalização
- Cores: Edite as variáveis CSS em `src/index.css`
- Conteúdo: Modifique as traduções em `src/i18n/translations.ts`
- Imagens: Substitua as imagens em `src/assets/images/`

## 📈 Próximos Passos

- [ ] Menu mobile hamburguer
- [ ] Blog/Notícias
- [ ] Portfólio de projetos
- [ ] Formulário de contato funcional
- [ ] Integração com CMS
- [ ] Analytics e tracking
- [ ] PWA (Progressive Web App)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: contato@lumen.com
- **Website**: https://lumen.com
- **LinkedIn**: [Lumen](https://linkedin.com/company/lumen)

---

Desenvolvido com ❤️ pela equipe Lumen

