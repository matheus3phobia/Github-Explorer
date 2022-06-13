interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function ReposityItem(props: RepositoryItemProps) {
   return (
    <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.html_url} target="blank">
      Access Repository</a>
  </li>
  )
}