import { useState, useEffect} from 'react'
import { ReposityItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = 'unform';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/matheus3phobia/repos').then(response => response.json()).then(data => setRepositories(data))
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map(repository => <ReposityItem repository={repository}/>)}
      </ul> 
      </section>
  )
}