import { useState } from "react"
import ExpandableText from "./components/ExpandableText"

function App() {
  return (
    <div>
      <ExpandableText maxChars={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui
        sequi tenetur ratione impedit natus quod necessitatibus laboriosam
        aspernatur nam alias vitae autem officiis officia, aliquam sed sit ea
        ducimus molestiae, vel, iusto sapiente? Neque mollitia dolorem ea iusto.
        Aperiam incidunt aut necessitatibus accusantium illum reprehenderit
        perspiciatis temporibus labore mollitia pariatur autem, maiores rem?
        Alias, sit nemo. Sunt blanditiis harum autem aspernatur tempora
        obcaecati magnam error ab ut, ex iusto exercitationem sint aliquam
        corporis nisi quae commodi vel dolorem repudiandae? Facilis cum sint
        necessitatibus vel inventore sapiente tenetur blanditiis nihil debitis
        expedita, veniam, aliquam sequi architecto iste deleniti. Sint, quasi.
      </ExpandableText>
    </div>
  )
}

export default App
