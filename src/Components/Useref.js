import {useRef} from "react"

// ref={} se připojí k čemukoli co je na stránce a spojí se s funkcí tlačítka nebo submit, potom se v consol.log napíše změna která se po odeslání projeví

const Useref = () => {
    // zápis spojení refNěco = useRef(null)
    const refInput = useRef(null)
    const refHeading = useRef(null)
    const refGoogle = useRef(null)

    const formSubmit = (e) => {
        // event.preventDefault používám vždy u formuláře, zastaví refresh
        // consol.log(spouští ve funkci formSubmit příkazy ref, může také onClick)
      e.preventDefault()
      
    //   console.log(refInput.current.value); vypsalo hodnotu pole input
    //   console.log(refInput.current.style.backgroundColor = "red"); po submitu změnilo barvu inputu
    //   console.log(refInput.current.style.color = "blue");
    //   console.log(refHeading.current.style.color = "orange") mění h1 heading
// console.log(refHeading.current.textContent = "nový text"); mění obsah h1 heading

// console.log(refGoogle.current.textContent = "vyhledávač"); změní název

// console.log(refGoogle.current.href) vypíše href adresu, může také src atd.
console.log(refGoogle.current.textContent = "SEZNAM.CZ")
console.log(refGoogle.current.href = "https://www.seznam.cz")
      }
  return (
    <div>
         
      <h1 ref={refHeading}>Formulař</h1>
      <form onSubmit={formSubmit}>
      <input type="text" ref={refInput}/><br />
      <input type="submit" />
      </form>
      
        
        <a href="https://www.google.com" ref={refGoogle}>GOOGLE</a>
    </div>
  )
}

export default Useref


