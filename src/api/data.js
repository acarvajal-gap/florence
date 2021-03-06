// This can be hard-coded and served by Redux

function data () {
  return {
    mattresses: {
      classic: {
        name: 'Saatva Classic',
        price: 999,
        reviewRating: 4.9,
        imageFileName: 'classic-carousel.jpg'
      },
      loom: {
        name: 'Loom & Leaf',
        price: 1299,
        reviewRating: 4.7,
        imageFileName: 'loom-carousel.jpg'
      },
      zen: {
        name: 'Zenhaven',
        price: 1599,
        reviewRating: 4.8,
        imageFileName: 'zen-carousel.jpg'
      }
    }
  }
}

export default data
