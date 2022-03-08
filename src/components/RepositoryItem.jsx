export function ReposityItem(props) {
   return (
    <li>
    <strong>{props.repository}</strong>
    <p>{props.description}</p>

    <a href={props.html_url} target="blank">
      Acessar repositório</a>
  </li>
  )
}