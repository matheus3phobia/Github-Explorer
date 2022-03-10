import { useState, useEffect} from 'react'
import { ReposityItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = 'unform';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => <ReposityItem repository={repository}/>)}
      </ul> 
      </section>
  )
}