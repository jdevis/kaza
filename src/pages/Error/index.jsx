import './error.scss'

const Error = () => {
    return (
        <>
            <main className="error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </main>
        </>
    )
}

export default Error
