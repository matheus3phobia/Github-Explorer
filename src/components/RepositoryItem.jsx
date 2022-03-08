export function ReposityItem(props) {
   return (
    <li>
    <strong>{props.repository}</strong>
    <p>{props.description}</p>

    <a href={props.html_url}>
      Acessar repositório</a>
  </li>
  )
}