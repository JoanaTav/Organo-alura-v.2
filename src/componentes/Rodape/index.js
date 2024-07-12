import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
            <li>
                    <a href="https://www.linkedin.com/in/joana-tavares-dev/" target="_blank">
                        <img src="/imagens/linkedin.png" alt="logo do linkedin" />
                    </a>
                </li>
            <li>
                    <a href="https://github.com/JoanaTav" target="_blank">
                        <img src="/imagens/github.png" alt="logo do github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR" target="_blank">
                        <img src="/imagens/facebook.png" alt="logo do facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/aluraonline" target="_blank">
                        <img src="/imagens/twitter.png" alt="logo do twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aluraonline/" target="_blank">
                        <img src="/imagens/instagram.png" alt="logo do instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura - Joana Tavares 2024
            </p>
        </section>
    </footer>)
}

export default Rodape