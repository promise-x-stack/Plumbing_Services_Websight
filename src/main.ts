import './style.css'
//import { setupCounter } from './components/counter.ts'
import { NavBar } from './components/navbar.ts'

const tittle:string = "Plumbing"

document.querySelector<HTMLTitleElement>('#appTittle')!.innerText = `${tittle}`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const NameTwo:string = "promise"
NavBar({user:NameTwo})
