<template>
    <div>
        <div itemscope itemtype="https://schema.org/SoftwareApplication">
        <span itemprop="name">Angry Birds</span> - REQUIRES
        <span itemprop="operatingSystem">ANDROID</span><br />
        <link
          itemprop="applicationCategory"
          href="https://schema.org/GameApplication" />
      
        <div
          itemprop="aggregateRating"
          itemscope
          itemtype="https://schema.org/AggregateRating">
          RATING:
          <span itemprop="ratingValue">4.6</span> (
          <span itemprop="ratingCount">8864</span> ratings )
        </div>
      
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          Price: $<span itemprop="price">1.00</span>
          <meta itemprop="priceCurrency" content="USD" />
        </div>
      </div>

      <div itemscope itemtype="https://schema.org/Parks">
            <span itemprop="name">Shinjuku Gyoen</span>
            <span itemprop="address">11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan</span>
            <a href="https://www.env.go.jp/garden/shinjukugyoen/index.html" itemprop="url">Official Website of Shinjuku Gyoen</a>
      </div>
    </div>
</template>