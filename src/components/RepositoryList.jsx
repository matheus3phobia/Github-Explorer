import { useState, useEffect} from 'react'
import { ReposityItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = 'unform';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => <ReposityItem repository={repository.name} description={repository.description} html_url={repository.html_url}/>
        )}
      </ul>
      </section>
  )
}