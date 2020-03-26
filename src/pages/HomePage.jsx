import React from 'react'
import Description from '../components/Description'

const HomePage = () => {
  return (
    <main class="mainPage">
      <h1>WELCOME TO MUSIC MADNESS!</h1>
      <h2>Here are my top three heavy bands!</h2>
      <Description
        name="Code Orange"
        bandDescription="The band formed under the name Code Orange Kids in 2008 in Pittsburgh,
        Pennsylvania. They started out playing really straightforward punk,
        but would eventually take their music in a heavier direction with the
        introduction of new member, Bob Rizzo, who met members of the band at a
        local show."
      />
      <Description
        name="Black Sabbath"
        bandDescription="Black Sabbath were an English rock band formed in Birmingham 
        in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and
         vocalist Ozzy Osbourne. They are often cited as pioneers of heavy metal music.
         The band helped define the genre with releases such as Black Sabbath (1970), 
         Paranoid (1970), and Master of Reality (1971). The band had multiple line-up changes 
         following Osbourne's departure in 1979, with Iommi being the only constant member 
         throughout its history."
      />
      <Description
        name="The Chariot"
        bandDescription="The Chariot was an American metalcore band from Douglasville, 
        Georgia, that existed from 2003 to 2013.The band played an abrasive style of 
        metalcore that did not adhere to typical stylings popular among their contemporaries 
        such as melodic/abrasive dynamics and harmonic vocals. They built a reputation 
        around their powerful live performances, with Scogin's lyrics covering topics 
        like materialism, personal struggle, current events, politics, and Christian themes."
      />
    </main>
  )
}

export default HomePage
