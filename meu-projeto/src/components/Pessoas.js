import styles from './Pessoas.module.css'

function Pessoas (props){
   return (
      <div >
         <p>Nome: {props.nome}</p>
         <p>Idade: {props.idade}</p>
         <p>Sexo: {props.sexo}</p>
         <p>Salario: {props.salario}</p>
         <p>Foto: <img src={props.img} alt={props.nome} /> </p>
      </div>
   )
}
export default Pessoas