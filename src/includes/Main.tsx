import React from 'react'
import { Picture } from '../components/Picture'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

export const Main = (): React.JSX.Element => {
  return (
    <section className="container flex flex-col items-center justify-center bg-white dark:bg-black min-h-[500px] xl:min-h-[600px]">
      <Picture src="img/pictures/logo.svg" className="block mb-10" loading="eager" />
      <Title as="h1" className="mb-5 md:mb-10">
        Main block
      </Title>
      <Button as="a" color="primary" effect="glow" className="w-full max-w-[200px] mx-auto" href="#block">
        Show more
      </Button>
    </section>
  )
}
