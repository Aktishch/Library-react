import React from 'react'
import { grid } from '../data/grid'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { Movement } from '../components/Movement'

export const GridBox = (): React.JSX.Element => {
  return (
    <section className="container flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
      <Movement variant="blend" className="mb-3">
        <Title>GridBox</Title>
      </Movement>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Columns and rows</Subtitle>
      </Movement>
      <div className="grid w-full grid-flow-row-dense grid-cols-2 gap-3 lg:grid-cols-3 md:gap-5 lg:gap-8">
        {grid.map((item) => (
          <Movement className={item.row} key={item.id}>
            <Pack size="box" className="h-full shadow-md bg-grey dark:bg-dark rounded-3">
              <Loader />
              <Picture
                webp="img/pictures/town.webp"
                src="img/pictures/town.jpg"
                className="image image-rise"
                loading="lazy"
              />
            </Pack>
          </Movement>
        ))}
      </div>
    </section>
  )
}
