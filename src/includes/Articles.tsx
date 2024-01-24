import React from 'react'
import { articles } from '../data/articles'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { ArticleCard } from '../components/ArticleCard'
import { ArticleInvertedCard } from '../components/ArticleInvertedCard'
import { Movement } from '../components/Movement'

export const Articles = (): React.JSX.Element => {
  return (
    <section
      className="container container-xs container-distance flex flex-col items-center justify-center bg-grey dark:bg-dark"
      id="block"
    >
      <Movement variant="blend" className="mb-3">
        <Title>Cards</Title>
      </Movement>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Construction and effect</Subtitle>
      </Movement>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 w-full mb-5 md:md-10">
        {articles.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 w-full">
        {articles.map((item, index) => (
          <ArticleInvertedCard item={item} key={index} />
        ))}
      </div>
    </section>
  )
}
