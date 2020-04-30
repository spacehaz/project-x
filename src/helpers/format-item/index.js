/* global process */

export default ({
  itemId,
  title,
  categories,
  image = {},
  itemWebUrl,
  itemLocation,
  seller = {
    feedbackPercentage: 0
  },
  price = {},
  buyingOptions
}) => {
  return {
    id: itemId,
    title,
    category: categories,
    image: process.env.NODE_ENV === 'development' ? (image.imageUrl || '').replace('https://','http://') : (image.imageUrl || ''),
    url: itemWebUrl,
    sellerRanking: seller.feedbackPercentage || 0,
    location: itemLocation,
    price,
    buyingOptions
  }
}